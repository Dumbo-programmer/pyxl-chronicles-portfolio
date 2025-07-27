// src/data/data.js

const teamMembersData = [
  { id: 1, name: 'Ren', role: 'Lead Programmer', avatar: 'ren.jpg' },
  { id: 2, name: 'Therapist', role: 'Artist', avatar: 'therapist.jpg' },
  { id: 3, name: 'Skittol', role: 'Artist', avatar: 'skittols.jpg' },
];

const gamesData = [
  {
    id: 1,
    title: 'The Quiet Hours',
    thumbnail: 'tqh1.png',
    description: 'A retro 2D adventure game with challenging puzzles and charming pixel art. Explore a vast world, fight unique monsters, and uncover ancient secrets!',
    tags: ['Adventure', 'Horror', 'Psychological Horror', 'Single-player'],
    images: [
      './tqh1.png',
      './tqh2.png',
    ],
    videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'], // Example YouTube embed link
    downloads: {
      windows: 'tqh_builds/The Quiet Hours Windows Folder.zip',
      linux: 'tqh_builds/The Quiet Hours Linux Folder.zip',
      android: 'tqh_builds/tqa_android.apk',
    },
  },
  
];

const fanArtsData = [
  { id: 1, image: '/art1.jpg', title: 'Ms Grose & Flora', artist: 'Therapist' },
];

export { teamMembersData, gamesData, fanArtsData };