export const GAMES = [
  { id: 1, name: 'All', icon: '🎮' },
  { id: 2, name: 'BGMI', icon: '🔫' },
  { id: 3, name: 'Free Fire', icon: '🔥' },
  { id: 4, name: 'Valorant', icon: '⚔️' },
  { id: 5, name: 'Minecraft', icon: '⛏️' },
  { id: 6, name: 'GTA V', icon: '🚗' },
];

export const LIVE_STREAMS = [
  {
    id: 1,
    streamer: 'Mortal Gaming',
    avatar: 'https://picsum.photos/seed/mortal/50',
    thumbnail: 'https://picsum.photos/seed/bgmi/400/250',
    title: 'RUSH GAMEPLAY! 😱 CONQUEROR PUSH',
    game: 'BGMI',
    viewers: '25K',
    tags: ['Esports', 'Rank Push'],
  },
  {
    id: 2,
    streamer: 'Techno Gamerz',
    avatar: 'https://picsum.photos/seed/techno/50',
    thumbnail: 'https://picsum.photos/seed/gta/400/250',
    title: 'GTA V NEW MISSION UNLOCKED 🔥',
    game: 'GTA V',
    viewers: '142K',
    tags: ['Funny', 'Roleplay'],
  },
  {
    id: 3,
    streamer: 'Desi Gamers',
    avatar: 'https://picsum.photos/seed/desi/50',
    thumbnail: 'https://picsum.photos/seed/ff/400/250',
    title: 'Free Fire World Series Watch Party',
    game: 'Free Fire',
    viewers: '12K',
    tags: ['Tournament', 'Live'],
  },
];

export const CHAT_MESSAGES = [
  { id: 1, user: 'SniperKing', text: 'OP Gameplay! 🔥', color: 'text-orange-500' },
  { id: 2, user: 'NinjaGirl', text: 'Big fan sir! ❤️', color: 'text-purple-400' },
  { id: 3, user: 'ProGamer_007', text: 'Use the sniper now!', color: 'text-blue-400' },
  { id: 4, user: 'ToxicSlayer', text: 'LOL that aim 😂', color: 'text-green-400' },
  { id: 5, user: 'StreamLover', text: 'Sent 100 Diamonds 💎', color: 'text-yellow-400', isSystem: true },
  { id: 6, user: 'NightBot', text: 'Welcome to the stream everyone!', color: 'text-gray-400' },
  { id: 7, user: 'ViperX', text: 'Shoutout please!!', color: 'text-pink-500' },
  { id: 8, user: 'AceHunter', text: 'What sensitivity do you use?', color: 'text-orange-400' },
];

export const DAILY_TASKS = [
  { id: 1, title: 'Watch 10 mins stream', current: 50, total: 100, reward: 50 },
  { id: 2, title: 'Send 5 Messages', current: 1, total: 5, reward: 20 },
  { id: 3, title: 'Share a stream', current: 0, total: 1, reward: 100 },
];

export const PREDICTIONS = [
  {
    id: 1,
    teamA: 'Team Soul',
    teamB: 'GodLike',
    match: 'BMPS Finals Match 1',
    reward: '2x Coins',
    time: 'Starts in 10m',
  },
  {
    id: 2,
    teamA: 'Sentinels',
    teamB: 'Paper Rex',
    match: 'Valorant Champions',
    reward: '3x Coins',
    time: 'Starts in 1h',
  },
];

export const REWARDS = [
  { id: 1, name: '₹100 Google Play', cost: 1000, image: 'https://picsum.photos/seed/card1/100' },
  { id: 2, name: 'M416 Glacier Skin', cost: 5000, image: 'https://picsum.photos/seed/skin1/100' },
  { id: 3, name: 'Amazon ₹500', cost: 4500, image: 'https://picsum.photos/seed/card2/100' },
  { id: 4, name: '100 Diamonds', cost: 800, image: 'https://picsum.photos/seed/dia/100' },
];