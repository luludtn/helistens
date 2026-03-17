const CLIENT_ID     = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET!;

let _token: string | null = null;
let _tokenExpiry = 0;

async function getToken(): Promise<string> {
  if (_token && Date.now() < _tokenExpiry) return _token;
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  _token = data.access_token;
  _tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return _token!;
}

// Fetch preview URLs for up to 50 track IDs at once
async function fetchPreviewBatch(ids: string[], token: string): Promise<Record<string, string>> {
  const res = await fetch(`https://api.spotify.com/v1/tracks?ids=${ids.join(',')}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  const out: Record<string, string> = {};
  (data.tracks as any[]).forEach((t, i) => {
    if (t?.preview_url) out[ids[i]] = t.preview_url;
  });
  return out;
}

// Extract Spotify track ID from a URL like
// https://open.spotify.com/intl-fr/track/TRACK_ID?si=...
export function trackIdFromUrl(url: string): string | null {
  const match = url.match(/\/track\/([A-Za-z0-9]+)/);
  return match ? match[1] : null;
}

// Returns a map of { spotifyUrl → previewUrl } for all tracks that have one
export async function fetchAllPreviews(urls: string[]): Promise<Record<string, string>> {
  const token = await getToken();
  const ids = urls.map(trackIdFromUrl).filter(Boolean) as string[];
  const urlById: Record<string, string> = {};
  urls.forEach(u => { const id = trackIdFromUrl(u); if (id) urlById[id] = u; });

  const previews: Record<string, string> = {};
  for (let i = 0; i < ids.length; i += 50) {
    const batch = await fetchPreviewBatch(ids.slice(i, i + 50), token);
    Object.entries(batch).forEach(([id, preview]) => {
      previews[urlById[id]] = preview;
    });
  }
  return previews;
}
