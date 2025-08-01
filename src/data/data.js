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
    title: 'NIGHT AT BLY',
    thumbnail: 'tqh1.png',
    description: 'You arrive at Bly Manor as the new governess, tasked with caring for two children. But something is wrong at Bly Manor. The children are not what they seem, and neither is the manor itself.',
    tags: ['Adventure', 'Horror', 'Psychological Horror', 'Single-player'],
    images: [
      './tqh1.png',
      './tqh2.png',
    ],
    itchioembed: "<iframe frameborder=\"0\" src=\"https://itch.io/embed/3481909?linkback=true&amp;bg_color=161616&amp;fg_color=edece3&amp;link_color=e53b44&amp;border_color=333333\" width=\"552\" height=\"167\"><a href=\"https://pyxl-chronicles.itch.io/night-at-bly\">NIGHT AT BLY by Pyxl Chronicles, Tawhid's Games</a></iframe>",
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