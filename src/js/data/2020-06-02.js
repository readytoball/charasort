dataSetVersion = "2020-06-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "series",
    tooltip: "Check this to restrict to certain games, or choose Battle Music alone to rank all of the battle themes.",
    checked: false,
    sub: [
      { name: "Trails in the Sky FC", key: "skyfc" },
      { name: "Trails in the Sky SC", key: "skysc" },
      { name: "Trails in the Sky the 3rd", key: "sky3rd" },
      { name: "Zero no Kiseki", key: "zero" },
      { name: "Ao no Kiseki", key: "ao" },
      { name: "Trails of Cold Steel", key: "cs1" },
      { name: "Trails of Cold Steel 2", key: "cs2" },
      { name: "Trails of Cold Steel 3", key: "cs3" },
      { name: "Trails of Cold Steel 4", key: "cs4" },
	  ,
    ]
  },
 

  {
    name: "Remove Arc en Ciel",
    key: "arc",
    tooltip: "Check this to remove all Arc en Ciel songs."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Sora no Kiseki",
    img: "rbFKdHE.jpg?1",
    opts: {
      series: ["skyfc"],
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
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
  },
  {
    name: "Kisume",
    img: "VgJgaEf.png",
    opts: { series: ["SA", "DS"], stage: ["st1"] }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Toramaru Shou",
    img: "8bMDDAo.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: { series: ["TD", "HM"], stage: ["st5"] }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: { series: ["DDC", "ISC"], stage: ["st1"] }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: { series: ["DDC", "ISC"], stage: ["st2"] }
  },
  {
    name: "Imaizumi Kagerou",
    img: "b5UMjD8.png",
    opts: { series: ["DDC", "ISC"], stage: ["st3"] }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: { series: ["DDC", "ISC"], stage: ["ex"] }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: { series: ["ULiL"], stage: ["st6"] }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: { series: ["LoLK"], stage: ["st1"] }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: { series: ["LoLK"], stage: ["st2"] }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: { series: ["LoLK"], stage: ["st3", "ex"] }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: { series: ["LoLK"], stage: ["st4"] }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: { series: ["LoLK"], stage: ["st5"] }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: { series: ["LoLK"], stage: ["st6", "ex"] }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: { series: ["LoLK"], stage: ["ex"] }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: { series: ["book"], stage: [] }
  },
  { name: "Tokiko", img: "Y4maOc8.png", opts: { series: ["book"], stage: [] } },
  {
    name: "Rei'sen (Manga)",
    img: "cWjCo2j.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: { series: ["book", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: { series: ["HRtP"], stage: ["st1"] }
  },
  {
    name: "Mima",
    img: "3ekPRF1.jpg",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: { series: ["SoEW"], stage: ["st1", "ex"] }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: { series: ["SoEW"], stage: ["st2"] }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: ["st4"], pc98: true }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: { series: ["PoDD"], stage: [] } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: { series: ["PoDD"], stage: ["st5"] }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: { series: ["PoDD"], stage: ["st6"] }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: { series: ["LLS"], stage: ["st1"] }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: { series: ["LLS"], stage: ["st2"] }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: { series: ["LLS"], stage: ["st3"] }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: { series: ["LLS", "MS"], stage: ["st5", "st6"], pc98: true }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: { series: ["MS"], stage: ["st1"] }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: { series: ["MS"], stage: ["st2", "st4"] }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: { series: ["MS"], stage: ["st3", "ex"], pc98: true }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: { series: ["MS"], stage: ["st4"] }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: { series: ["MS"], stage: ["st4"] } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: { series: ["MS"], stage: ["st5"] }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: { series: ["MS"], stage: ["st6"] }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: { series: ["PoDD"], stage: [], notgirl: true }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: [], notgirl: true }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: { series: ["HRtP"], stage: ["st1"], notgirl: true }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: { series: ["HRtP"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: { series: ["SoEW"], stage: ["ex"], notgirl: true }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: { series: ["Soku"], stage: ["st6"], notgirl: true }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: { series: ["book", "HM"], stage: [], notgirl: true }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: { series: ["book"], stage: [], notgirl: true }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: { series: ["Soku"], stage: [], notgirl: true }
  }
];
