import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { shuffleTracks, TIER_LABELS, TIER_RANGES, Track } from './src/tracks';

const { width: SW, height: SH } = Dimensions.get('window');
const PREVIEW_DURATION = 30_000; // 30s in ms

const TIER_COLORS: Record<Track['tier'], string> = {
  honey:     '#e8a020',
  bee:       '#f5c842',
  sunflower: '#e06830',
  joker:     '#9b5de5',
};

// ── Spotify / Deezer / Apple SVG-like icons via unicode/emoji fallback ──────
function SpotifyIcon({ size = 18, color = '#1DB954' }) {
  return <Text style={{ fontSize: size, color, lineHeight: size + 2 }}>♫</Text>;
}
function DeezerIcon({ size = 18, color = '#A238FF' }) {
  return <Text style={{ fontSize: size, color, lineHeight: size + 2 }}>◈</Text>;
}
function AppleIcon({ size = 18, color = '#fc3c44' }) {
  return <Text style={{ fontSize: size, color, lineHeight: size + 2 }}>♪</Text>;
}

export default function App() {
  const [tracks] = useState<Track[]>(() => shuffleTracks());
  const [idx, setIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–1

  const soundRef = useRef<Audio.Sound | null>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const coverAnim = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const track = tracks[idx];
  const tierColor = TIER_COLORS[track.tier];

  // ── cleanup ──────────────────────────────────────────────────────────────
  const stopAndUnload = useCallback(async () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    if (soundRef.current) {
      try { await soundRef.current.stopAsync(); } catch {}
      try { await soundRef.current.unloadAsync(); } catch {}
      soundRef.current = null;
    }
    setIsPlaying(false);
    setProgress(0);
    progressAnim.setValue(0);
  }, [progressAnim]);

  // ── animate cover transition ─────────────────────────────────────────────
  const animateCover = useCallback(() => {
    coverAnim.setValue(0.85);
    Animated.spring(coverAnim, { toValue: 1, useNativeDriver: true, speed: 18, bounciness: 6 }).start();
  }, [coverAnim]);

  // ── load + play a track ──────────────────────────────────────────────────
  const playTrack = useCallback(async (t: Track) => {
    await stopAndUnload();
    animateCover();

    if (!t.preview) { setIsPlaying(false); return; }

    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync(
        { uri: t.preview },
        { shouldPlay: true, positionMillis: t.start * 1000 },
      );
      soundRef.current = sound;
      setIsPlaying(true);

      // progress ticker
      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (!status.isLoaded) return;
        const elapsed = Math.max(0, (status.positionMillis ?? 0) - t.start * 1000);
        const pct = Math.min(elapsed / PREVIEW_DURATION, 1);
        setProgress(pct);
        progressAnim.setValue(pct);
        if (status.didJustFinish) advance(1);
      });

      // hard 30-second cap
      timerRef.current = setTimeout(() => advance(1), PREVIEW_DURATION + 500);
    } catch (e) {
      console.warn('playback error', e);
      setIsPlaying(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopAndUnload, animateCover, progressAnim]);

  // ── navigation ───────────────────────────────────────────────────────────
  const goTo = useCallback((newIdx: number) => {
    setIdx(newIdx);
  }, []);

  function advance(dir: 1 | -1) {
    setIdx(prev => {
      const n = (prev + dir + tracks.length) % tracks.length;
      return n;
    });
  }

  // re-play when idx changes (if already playing) OR on first tap
  const prevIdxRef = useRef(-1);
  useEffect(() => {
    if (prevIdxRef.current === -1) { prevIdxRef.current = idx; return; } // first render, wait for user
    prevIdxRef.current = idx;
    if (isPlaying || soundRef.current) playTrack(tracks[idx]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // cleanup on unmount
  useEffect(() => () => { stopAndUnload(); }, [stopAndUnload]);

  // ── toggle play/pause ────────────────────────────────────────────────────
  async function togglePlay() {
    if (!soundRef.current) {
      await playTrack(track);
      return;
    }
    const status = await soundRef.current.getStatusAsync();
    if (!status.isLoaded) { await playTrack(track); return; }
    if (status.isPlaying) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
      if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    } else {
      await soundRef.current.playAsync();
      setIsPlaying(true);
      timerRef.current = setTimeout(() => advance(1), PREVIEW_DURATION + 500);
    }
  }

  // ── discover = random different track ────────────────────────────────────
  function discover() {
    const n = (idx + 1 + Math.floor(Math.random() * (tracks.length - 1))) % tracks.length;
    goTo(n);
  }

  // ── open platform link ───────────────────────────────────────────────────
  function openLink(u: string) { if (u) Linking.openURL(u); }

  // ── render ───────────────────────────────────────────────────────────────
  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      {/* COVER */}
      <Animated.View style={[styles.coverWrap, { transform: [{ scale: coverAnim }] }]}>
        <Image source={{ uri: track.cover }} style={styles.cover} resizeMode="cover" />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.92)']}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      {/* CONTENT */}
      <View style={styles.content}>

        {/* TIER BADGE */}
        <View style={[styles.tierBadge, { borderColor: tierColor }]}>
          <Text style={[styles.tierLabel, { color: tierColor }]}>
            {TIER_LABELS[track.tier].toUpperCase()}
          </Text>
          <Text style={styles.tierRange}>{TIER_RANGES[track.tier]}</Text>
        </View>

        {/* TRACK INFO */}
        <View style={styles.info}>
          <Text style={styles.flag}>{track.flag}</Text>
          <Text style={styles.artist} numberOfLines={2}>{track.artist}</Text>
          <Text style={styles.album} numberOfLines={1}>{track.album}</Text>
          <Text style={styles.tag}>{track.tag}</Text>
        </View>

        {/* PROGRESS BAR */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: tierColor }]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressTime}>0:00</Text>
          <Text style={styles.progressTime}>0:30</Text>
        </View>

        {/* CONTROLS */}
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => advance(-1)} style={styles.controlBtn} activeOpacity={0.7}>
            <Text style={styles.controlIcon}>⏮</Text>
          </TouchableOpacity>

          <Pressable onPress={togglePlay} style={[styles.playBtn, { borderColor: tierColor }]}>
            <LinearGradient
              colors={[tierColor, adjustColor(tierColor, -30)]}
              style={styles.playBtnInner}
            >
              <Text style={styles.playIcon}>{isPlaying ? '⏸' : '▶'}</Text>
            </LinearGradient>
          </Pressable>

          <TouchableOpacity onPress={() => advance(1)} style={styles.controlBtn} activeOpacity={0.7}>
            <Text style={styles.controlIcon}>⏭</Text>
          </TouchableOpacity>
        </View>

        {/* DISCOVER */}
        <TouchableOpacity onPress={discover} style={styles.discoverBtn} activeOpacity={0.7}>
          <Text style={[styles.discoverText, { color: tierColor }]}>✦ Discover</Text>
        </TouchableOpacity>

        {/* PLATFORM LINKS */}
        <View style={styles.platforms}>
          {track.url ? (
            <TouchableOpacity onPress={() => openLink(track.url)} style={styles.platBtn}>
              <Text style={[styles.platLabel, { color: '#1DB954' }]}>♫  Spotify</Text>
            </TouchableOpacity>
          ) : null}
          {track.deezer ? (
            <TouchableOpacity onPress={() => openLink(track.deezer)} style={styles.platBtn}>
              <Text style={[styles.platLabel, { color: '#A238FF' }]}>◈  Deezer</Text>
            </TouchableOpacity>
          ) : null}
          {track.apple ? (
            <TouchableOpacity onPress={() => openLink(track.apple)} style={styles.platBtn}>
              <Text style={[styles.platLabel, { color: '#fc3c44' }]}>♪  Apple</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {/* COUNTER */}
        <Text style={styles.counter}>{idx + 1} / {tracks.length}</Text>
      </View>
    </View>
  );
}

// darken a hex color by `amount`
function adjustColor(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  coverWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SH * 0.62,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 44,
    paddingHorizontal: 28,
  },
  tierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 18,
    gap: 8,
  },
  tierLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  tierRange: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: 0.5,
  },
  info: {
    marginBottom: 22,
  },
  flag: {
    fontSize: 22,
    marginBottom: 6,
  },
  artist: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: -0.3,
    lineHeight: 32,
    marginBottom: 4,
  },
  album: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.65)',
    marginBottom: 6,
  },
  tag: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  progressTime: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.3)',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    marginBottom: 20,
  },
  controlBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlIcon: {
    fontSize: 26,
    color: 'rgba(255,255,255,0.8)',
  },
  playBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    overflow: 'hidden',
  },
  playBtnInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 28,
    color: '#fff',
    marginLeft: 3, // optical center for ▶
  },
  discoverBtn: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  discoverText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  platforms: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 16,
  },
  platBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  platLabel: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  counter: {
    textAlign: 'center',
    fontSize: 11,
    color: 'rgba(255,255,255,0.2)',
    letterSpacing: 1,
  },
});
