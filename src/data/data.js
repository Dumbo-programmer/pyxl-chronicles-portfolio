// src/data/data.js

const teamMembersData = [
  { id: 1, name: 'Ren', role: 'Lead Programmer',
     avatar: 'ren.jpg',
    social: [
      { platform: "github", url: "https://github.com/Dumbo-Programmer" },
      { platform: "instagram", url: "https://instagram.com/renisudesu" }
    ]
  },
  { id: 2, name: 'Therapist', role: 'Artist',
     avatar: 'therapist.jpg',
      social: [
  { platform: "instagram", url: "https://www.instagram.com/therapist_on_crack/" }
]
     },
  { id: 3, name: 'Skittol', role: 'Artist',
     avatar: 'skittols.jpg',
    social: [
  { platform: "instagram", url: "https://instagram.com/skittol._" }
]
   },
];

const gamesData = [
  {
    id: 1,
    title: 'The Quiet Hours',
    thumbnail: 'tqh1.png',
    description: 'You arrive at Bly Manor as the new governess, tasked with caring for two children. But something is wrong at Bly Manor. The children are not what they seem, and neither is the manor itself.',
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