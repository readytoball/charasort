dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Trails in the Sky FC", key: "skyfc" },
      { name: "Trails in the Sky SC", tooltip: "01 - Reiiden", key: "HRtP" },

    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Sora no Kiseki",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: [ "skyfc" ],
      stage: ["st4"]
    }
  },
  {
    name: "Setting Off",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Provincial City of Rolent",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"}},
  {
    name: "Rock on the Road",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Sophisticated Fight",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: [ "skyfc"]}
  },
  {
    name: "Defeat",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Tetracyclic Tower",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"]}
  },
  {
    name: "Under the Moonlight",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "A Cat Relaxing in the Sun",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: [ "skyfc"],
    }
  },
  {
    name: "Secret Green Passage",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "In My Heart",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "The Way They Walk in Liberl",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Commercial City of Bose",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Border Patrol Isn't Easy",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Steel Floor Blocking the Way",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "We Are the Capua Family!",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "To Be Suggestive",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"]	}
  },
  {
    name: "Pinch",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Disappearing Star",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"]
    }
  },
  {
    name: "Seaport City of Ruan",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: [ "skyfc"],
    }
  },
  {
    name: "Don't Let Him Go!",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Pride of Liberl",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Creeping Crisis",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Wandering in the Darkness",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Factory City of Zeiss",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Peace Bestowed by Twilight",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Leiston Fortress",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Engaged People in Secret Maneuvers",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Royal Capital of Grancel",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Grand Arena",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Challenger Invited",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Royal Castle",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Recapture",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"}
  },
  {
    name: "Silver Will",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"}
  },
  {
    name: "Hollow Light of the Sealed Land",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
    }
  },
  {
    name: "Ancient Makes",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"]	}
  },
  {
    name: "Those Who Protect the Greatest Treasure",
    img: "rbFKdHE.jpg",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Go in Good Cheer",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Release from the Spell, and...",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Confession",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Decision to Leave",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Hoshi no Arika",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"]
    }
  },
  {
    name: "Feelings Soar with the Wind",
    img: "rbFKdHE.jpg?1",
    opts: { series: ["skyfc"] }
  },
  {
    name: "Welcome to Le-Locle",
    img: "3ekPRF1.jpg?1",
    opts: { series: ["skysc"] }
  },
  {
    name: "Strepitoso Fight",
    img: "3ekPRF1.jpg?1",
    opts: { series: ["skysc"] }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC" ],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Daiyousei",
    img: "NWlZud3.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st2", "ex"],
      nameless: true
    },
  },
  {
    name: "Cirno",
    img: "qdveFSy.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS" ],
      stage: ["st2"]
    }
  },
  {
    name: "Hong Meiling",
    img: "ptGp0x4.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "soku"],
      stage: ["st3"]
    }
  },
  {
    name: "Koakuma",
    img: "vBKdDm4.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st4"],
      nameless: true
    }
  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC" ],
      stage: ["st5", "st6"]
    }
  },
  
];
