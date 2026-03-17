export type Track = {
  artist: string;
  album: string;
  tag: string;
  flag: string;
  cover: string;
  url: string;
  deezer: string;
  apple: string;
  preview: string;
  year: string;
  streams: string;
  date: string;
  start: number;
  tier: 'honey' | 'bee' | 'sunflower' | 'joker';
};

const TRACKS: Track[] = [
  // ── HONEY ──────────────────────────────────────────────────────
  {
    artist: "Amédée Ô Suriam", album: "Tension Hot Shot", tag: "Afro-House", flag: "🇲🇶",
    cover: "https://res.cloudinary.com/dzhvoacrg/image/upload/v1773580505/amedee_o_suriam_npqirm.jpg",
    url: "https://open.spotify.com/intl-fr/track/2q5FzLFS2fDeoAjblNnZ4T",
    deezer: "https://www.deezer.com/track/1880576747", apple: "https://music.apple.com/album/1646566587?i=1646566596",
    preview: "https://p.scdn.co/mp3-preview/87c8385fdb08381066fd7b509b6e7e4a09088b3e",
    year: "2023", streams: "5,894", date: "15.03.26", start: 276,
    tier: "honey",
  },
  {
    artist: "Ol' Burger Beats & Kjartan Gaulfossen", album: "Tidagersvarselet", tag: "Instrumental Hip-Hop", flag: "🇳🇴",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a4942d2171fce1ddcc90a6cb",
    url: "https://open.spotify.com/intl-fr/track/6kBIiDyndZDFpfMxkLfEBz",
    deezer: "https://www.deezer.com/track/2350794785", apple: "https://music.apple.com/album/1678334564?i=1678334869",
    preview: "https://p.scdn.co/mp3-preview/8801ad5c39c07389a954d56f0282dd01c0fdfcd8",
    year: "2016", streams: "8,839", date: "15.03.26", start: 114,
    tier: "honey",
  },
  {
    artist: "Son of Sound", album: "Your Voodoo's Broken", tag: "House", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273b49036e82f310ed2562f2904",
    url: "https://open.spotify.com/intl-fr/track/3yF2FLkcwqGKWCBeFyvONw",
    deezer: "https://www.deezer.com/track/3042178631", apple: "https://music.apple.com/album/1773568703?i=1773568704",
    preview: "https://p.scdn.co/mp3-preview/79aa66969de56b92ba9dcbcd0944f115d2c11b83",
    year: "2025", streams: "7,503", date: "16.03.26", start: 198,
    tier: "honey",
  },
  {
    artist: "The Piranhas", album: "Tension", tag: "Ska-Punk", flag: "🇬🇧",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2737a355cfc718a3585a319de47",
    url: "https://open.spotify.com/intl-fr/track/7eqhUtsJwPZuw6zFRGQdI8",
    deezer: "https://www.deezer.com/track/1137521722", apple: "https://music.apple.com/album/1614429172?i=1614429758",
    preview: "https://p.scdn.co/mp3-preview/73d14c436ba57f5e055a522cac0040a2c65db8cb",
    year: "2025", streams: "9,180", date: "16.03.26", start: 66,
    tier: "honey",
  },
  {
    artist: "Bumcello", album: "Up", tag: "Trip-Hop", flag: "🇫🇷",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273ba3c246858000d24e315c028",
    url: "https://open.spotify.com/intl-fr/track/3dUzbL6rcZ9NqHOXr1uFvs",
    deezer: "https://www.deezer.com/track/2589357052", apple: "https://music.apple.com/album/1446927817?i=1446928162",
    preview: "https://p.scdn.co/mp3-preview/02266b5c74afd94e82be047f0a1fd62dfcb4399a",
    year: "2025", streams: "5,889", date: "16.03.26", start: 204,
    tier: "honey",
  },
  {
    artist: "Michael Smith", album: "Mi Feel It", tag: "Dub Poetry", flag: "🇯🇲",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b27330af1d8dda51b067ce7804a7",
    url: "https://open.spotify.com/intl-fr/track/0bZ9PxqgHt06Ww7Jiqopeg",
    deezer: "https://www.deezer.com/track/1939664037", apple: "https://music.apple.com/album/1647363925?i=1647363929",
    preview: "https://p.scdn.co/mp3-preview/c796a27bb6888858d28876c4e9667f2a8a2a98c1",
    year: "2025", streams: "4,503", date: "16.03.26", start: 89,
    tier: "honey",
  },

  // ── BEE ────────────────────────────────────────────────────────
  {
    artist: "Nic Clay", album: "Fly", tag: "R&B", flag: "🇺🇸",
    cover: "https://res.cloudinary.com/dzhvoacrg/image/upload/v1773577077/Nic_Clay_Fly_xgzqfw.jpg",
    url: "https://open.spotify.com/intl-fr/track/3j2VUykCoOeB8Q7YHySdk0",
    deezer: "https://www.deezer.com/track/798204852", apple: "https://music.apple.com/album/1486538960?i=1486538967",
    preview: "https://p.scdn.co/mp3-preview/06ce868a3b7295ed66dc8b2e43373ccc04fe71e4",
    year: "2022", streams: "74,993", date: "15.03.26", start: 97,
    tier: "bee",
  },
  {
    artist: "Shake", album: "That's What I Want - A Mix", tag: "House", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e2e6b02f198bc40bc42a03cc",
    url: "https://open.spotify.com/intl-fr/track/5mTou2Fq4ClMiNcUJdfYKE",
    deezer: "https://www.deezer.com/track/2500696561", apple: "https://music.apple.com/album/1737226527?i=1737226831",
    preview: "https://p.scdn.co/mp3-preview/908fd1d5b7a8fb28754b7d5dafc68ed7a91fc52e",
    year: "2015", streams: "22,220", date: "15.03.26", start: 191,
    tier: "bee",
  },
  {
    artist: "Sofia Kourtesis", album: "Ballumbrosio", tag: "House", flag: "🇵🇪",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273b7c84643f2083856676b28ff",
    url: "https://open.spotify.com/intl-fr/track/1MQ27ys86klrv1eLDJUxgM",
    deezer: "https://www.deezer.com/track/3368931581", apple: "https://music.apple.com/album/1810769843?i=1810769848",
    preview: "https://p.scdn.co/mp3-preview/995dd0bc1e70144aaea9611dd77b3f00ecc69dcc",
    year: "2022", streams: "99,709", date: "15.03.26", start: 171,
    tier: "bee",
  },
  {
    artist: "Wasnatch", album: "Get Nasty", tag: "Reggae", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028e0fb4cea1a80bd4bca89fe7",
    url: "https://open.spotify.com/intl-fr/track/0IFELCq2sa7OvKb1a9z9TO",
    deezer: "https://www.deezer.com/track/74948677", apple: "",
    preview: "https://p.scdn.co/mp3-preview/f2902af4ec69e98b852ade11b764c241c9efdfaa",
    year: "2013", streams: "50,216", date: "15.03.26", start: 146,
    tier: "bee",
  },
  {
    artist: "KenLou", album: "The Bounce", tag: "House", flag: "🇺🇸",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b09afa4708dc0c12c127bc2c",
    url: "https://open.spotify.com/intl-fr/track/30y6AIWDz0xop8Vtfn2EyM",
    deezer: "https://www.deezer.com/track/1277454702", apple: "https://music.apple.com/album/1558192313?i=1558192315",
    preview: "https://p.scdn.co/mp3-preview/2cf34b68668077aa277336d6731eecdc9126240a",
    year: "1996", streams: "192,183", date: "15.03.26", start: 234,
    tier: "bee",
  },
  {
    artist: "Goran Kajfes", album: "Mesqualero", tag: "Jazz", flag: "🇸🇪",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02149cbb103135acb2782a801e",
    url: "https://open.spotify.com/intl-fr/track/2Y8NlHfswvpGLh0g8We0O1",
    deezer: "https://www.deezer.com/track/3476579", apple: "https://music.apple.com/album/1021590355?i=1021590533",
    preview: "https://p.scdn.co/mp3-preview/daf1f5808b2fa9ed848672c919decfffef346dda",
    year: "2024", streams: "49,305", date: "15.03.26", start: 270,
    tier: "bee",
  },
  {
    artist: "Fred Eaglesmith", album: "The Highway Callin'", tag: "Alternative Country", flag: "🇨🇦",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fcbfd170b4d131ee14111a8e",
    url: "https://open.spotify.com/intl-fr/track/2lBpXBjFsqYD1G6X6sKUN5",
    deezer: "https://www.deezer.com/track/3257407801", apple: "https://music.apple.com/album/1799239159?i=1799239172",
    preview: "https://p.scdn.co/mp3-preview/86c69b36be6fca7f8a71ea0510723b14a80c0628",
    year: "2001", streams: "50,574", date: "15.03.26", start: 137,
    tier: "bee",
  },
  {
    artist: "DEELEE S & LV la prudence", album: "Casser la gueule", tag: "Hip-Hop", flag: "🇫🇷",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273fca3d664de4b07c2434f9bac",
    url: "https://open.spotify.com/intl-fr/track/14IWEt9EVdzYKTDpfGnrbS",
    deezer: "https://www.deezer.com/track/2076328407", apple: "",
    preview: "https://p.scdn.co/mp3-preview/a26db006f19adc6454e83dffc9831a2bf59ff197",
    year: "2025", streams: "75,149", date: "16.03.26", start: 58,
    tier: "bee",
  },

  // ── SUNFLOWER ──────────────────────────────────────────────────
  {
    artist: "Mc Solaar", album: "Qui sème le vent récolte le tempo", tag: "French Hip-Hop", flag: "🇹🇩/🇫🇷",
    cover: "https://res.cloudinary.com/dzhvoacrg/image/upload/v1773581826/Mc_Solaar_zwwbg9.jpg",
    url: "https://open.spotify.com/intl-fr/track/44IouzBSiqKJoJbP7gkCzI",
    deezer: "https://www.deezer.com/track/1421656762", apple: "https://music.apple.com/album/1572971729?i=1572971943",
    preview: "https://p.scdn.co/mp3-preview/afaee9ef545e7f898320ddda68b8137bab271eb1",
    year: "1991", streams: "250,805", date: "15.03.26", start: 113,
    tier: "sunflower",
  },
  {
    artist: "MMM & Tshetsha Boys", album: "Shangaan Shake", tag: "Shangaan Electro", flag: "🇿🇦",
    cover: "https://res.cloudinary.com/dzhvoacrg/image/upload/v1773582723/Shangaan_Shake_eknbmb.webp",
    url: "https://open.spotify.com/intl-fr/track/3cnDUZXt0mqpsHulp03aTC",
    deezer: "", apple: "https://music.apple.com/album/500090543?i=500090546",
    preview: "https://p.scdn.co/mp3-preview/c9d8f016e969475f9dfde47aee28f0012217a639",
    year: "2012", streams: "145,647", date: "15.03.26", start: 213,
    tier: "sunflower",
  },
  {
    artist: "The B-52's", album: "Deep Sleep", tag: "New Wave", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273d07adcb3c8a5170897f38742",
    url: "https://open.spotify.com/intl-fr/track/3eDelv5gOUohvtjh3CilJC",
    deezer: "https://www.deezer.com/track/99402572", apple: "https://music.apple.com/album/983126737?i=983126740",
    preview: "https://p.scdn.co/mp3-preview/1491d8b9192a81fc086b7ddaa6d7cc38c53b8ad5",
    year: "1982", streams: "220,301", date: "15.03.26", start: 104,
    tier: "sunflower",
  },
  {
    artist: "Dave Clarke", album: "Southside (2023 Remaster)", tag: "Techno", flag: "🇬🇧",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2734b26949796bb3c8c3b8cd653",
    url: "https://open.spotify.com/intl-fr/track/2Mhc2J3rtQvjIwlBfyK8pm",
    deezer: "https://www.deezer.com/track/3761251982", apple: "https://music.apple.com/album/1733063633?i=1733064171",
    preview: "https://p.scdn.co/mp3-preview/0268691b270a62c5f5964c4f6bef95ddafdc6797",
    year: "1994", streams: "270,101", date: "15.03.26", start: 136,
    tier: "sunflower",
  },
  {
    artist: "Sababa 5 & Shiran Tzfira", album: "Sei Yona", tag: "Psychedelic Funk", flag: "🇮🇱",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026e55e8a4ad81d1da2d7bfa19",
    url: "https://open.spotify.com/intl-fr/track/0hytuzek7EPtp156LPsDgl",
    deezer: "https://www.deezer.com/track/1712256057", apple: "https://music.apple.com/album/1618214969?i=1618214974",
    preview: "https://p.scdn.co/mp3-preview/0c2d8f7a9e36b7013cff35d2e939b85bd472e2ec",
    year: "2024", streams: "191,256", date: "15.03.26", start: 119,
    tier: "sunflower",
  },
  {
    artist: "Josh Caffe", album: "Lesson #1", tag: "House", flag: "🇬🇧",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e32747c0799b7b77884f0a39",
    url: "https://open.spotify.com/intl-fr/track/5EbMqkHe85GCamakRbpA7i",
    deezer: "https://www.deezer.com/track/881541832", apple: "https://music.apple.com/album/1499534509?i=1499534510",
    preview: "https://p.scdn.co/mp3-preview/6d3ff1076a10c237fa9e9c7f4af8e858c54c5d0a",
    year: "2024", streams: "270,807", date: "15.03.26", start: 178,
    tier: "sunflower",
  },
  {
    artist: "Chu Kosaka", album: "MUSIC", tag: "Japanese Pop", flag: "🇯🇵",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023b001055ee29d8957cd5762d",
    url: "https://open.spotify.com/intl-fr/track/7GOPlMISoD6Q05ScPNC3sU",
    deezer: "https://www.deezer.com/track/2520278641", apple: "https://music.apple.com/album/1329354133?i=1329354135",
    preview: "https://p.scdn.co/mp3-preview/a9fb127c0b55e5f413853217d6ef9a62ebb4e058",
    year: "1989", streams: "107,016", date: "15.03.26", start: 161,
    tier: "sunflower",
  },
  {
    artist: "Domenique Dumont", album: "La vie va", tag: "Electronic", flag: "🇱🇻",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d5a2345516de9f0ac2a7a26f",
    url: "https://open.spotify.com/intl-fr/track/0TucvrBpyEB5m9APtu1N4W",
    deezer: "https://www.deezer.com/track/3399393601", apple: "https://music.apple.com/album/1818596511?i=1818596522",
    preview: "https://p.scdn.co/mp3-preview/88d0fd0a9a41df52c683384e50c6446b186fb7fa",
    year: "2025", streams: "174,968", date: "15.03.26", start: 95,
    tier: "sunflower",
  },

  // ── JOKER ──────────────────────────────────────────────────────
  {
    artist: "Peter Cat Recording Co.", album: "Bismillah", tag: "UK Garage", flag: "🇬🇧",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273db88abf0fe30030cf30c3a87",
    url: "https://open.spotify.com/intl-fr/track/5AUk5VM0yWmYkt0fx1vJMG",
    deezer: "", apple: "",
    preview: "https://p.scdn.co/mp3-preview/9fe648806941512b82f73118cc29662756d1cd98",
    year: "", streams: "", date: "", start: 0,
    tier: "joker",
  },
  {
    artist: "Laid Back", album: "Fly Away / Walking in the Sunshine", tag: "Jazz-Funk", flag: "🇧🇷",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020c98dd7d3951d489df53b08e",
    url: "https://open.spotify.com/intl-fr/track/39HnpKxGPzP3EUlXvs4VBQ",
    deezer: "https://www.deezer.com/track/17099870", apple: "https://music.apple.com/album/693276843?i=693277507",
    preview: "https://p.scdn.co/mp3-preview/e92843f2984ee6beb32dcb3321c457d0cf524dfe",
    year: "", streams: "", date: "", start: 256,
    tier: "joker",
  },
  {
    artist: "DJ 3000", album: "Shqipë", tag: "Techno", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b27339c366e31cd1d3086c62ea43",
    url: "https://open.spotify.com/intl-fr/track/0PGiFTu8ZiGECQpoknlOcY",
    deezer: "https://www.deezer.com/track/2357267075", apple: "https://music.apple.com/album/158064535?i=158064763",
    preview: "https://p.scdn.co/mp3-preview/d56b7150f42a73256627fe96c149e2bdfc1c89d1",
    year: "2006", streams: "??? — too good to be counted", date: "", start: 153,
    tier: "joker",
  },
  {
    artist: "The Deslondes", album: "Hurry Home", tag: "Americana", flag: "🇺🇸",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273eeac039419b675be02377e70",
    url: "https://open.spotify.com/intl-fr/track/2XTd2loGYcpSwN3EApcDLe",
    deezer: "https://www.deezer.com/track/602606752", apple: "https://music.apple.com/album/1436938021?i=1436938074",
    preview: "https://p.scdn.co/mp3-preview/f1296425add050a6ceba56f9a09ed347f1edb4d3",
    year: "", streams: "", date: "", start: 98,
    tier: "joker",
  },
  {
    artist: "Sam Soulero & FUZZ", album: "Coração Music", tag: "House", flag: "🇦🇹",
    cover: "https://i.ytimg.com/vi/oHw6jtbWW5M/hqdefault.jpg",
    url: "https://open.spotify.com/intl-fr/track/5iGbGiTtpOHJerLQrQ0bGI",
    deezer: "", apple: "",
    preview: "https://p.scdn.co/mp3-preview/5a03e5f4b8c2a3a6e1e3b2c4d5e6f7a8b9c0d1e2",
    year: "", streams: "", date: "", start: 0,
    tier: "joker",
  },
];

export function shuffleTracks(): Track[] {
  const arr = [...TRACKS];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const TIER_LABELS: Record<Track['tier'], string> = {
  honey:     'Honey',
  bee:       'Bee',
  sunflower: 'Sunflower',
  joker:     'Joker',
};

export const TIER_RANGES: Record<Track['tier'], string> = {
  honey:     '0 – 10,000 streams',
  bee:       '10,000 – 100,000 streams',
  sunflower: '100,000 – 300,000 streams',
  joker:     'fuck streams',
};

export default TRACKS;
