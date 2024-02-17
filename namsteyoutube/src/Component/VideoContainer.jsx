import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  youTube_API,
  youTube_API_Key,
  video_categories,
  youTube_API_for_search,
} from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const videoData = [
  {
    kind: "youtube#video",
    etag: "ZdLvvJsQiuLlOq5ZNmPJHiWpm6E",
    id: "ETv0bGDnaG8",
    snippet: {
      publishedAt: "2024-02-09T05:30:02Z",
      channelId: "UCSM54qcBP60U61HOMm_SUqA",
      title:
        "Saanware (Teaser) - Akhil Sachdeva | Abhishek Kumar | Mannara Chopra | Anshul Garg",
      description:
        "Anshul Garg presents Saanware featuring Abhishek Kumar & Mannara Chopra.\n\nAudio Credits :-\nSinger : Akhil Sachdeva \nLyrics : Akhil Sachdeva \nComposer : Akhil Sachdeva & Kartik Dev\nMusic production: Gaurav Dev & Kartik Dev\nMix n master : Shadaab Rayeen \nAssistant Engineer to Shadaab Rayeen : Pukhraj\n\nVideo Credits :-\nDirector : Rajan Bir \nDop : Shinda \nVFX : Animake Vfx \nEdit : The Ronin Vfx \nDI : Onkar \nProduction : Rs Films & Production \nChoreographer : John \nAd : Mickey & Rajat \nArt Director : Karma \nMake-up : Ishan \nDesigner : Victor \nHair : Salman \nStill & Bts : Akki\n\n\nPlayDMF Team :-\nProduced by : Anshul Garg  \nProject Head : Raghav Sharma\nLabel Manager : Sankalp Garg\nProject Manager : Gaurav Arora\nPlayDMF Team : Ashima Chauhan & Akshay Mahadik\nArtwork : Vicky Sandhu\nSpecial Thanks : Virgin Music Team\n\nhttps://www.ingrooves.com/\n\nVirgin Music Team :-\nHead : Amit Sharma \nTeam : Nagesh Jadhav, Kajal Israni, Amol Suryavanshi, Lavanya Das, Nishtha Sikroria\n\nTravel and Hospitality Partner : PRM Hospitality",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ETv0bGDnaG8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ETv0bGDnaG8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ETv0bGDnaG8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ETv0bGDnaG8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ETv0bGDnaG8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Play DMF",
      tags: [
        "Desi Music Factory",
        "bollywood",
        "rap",
        "Latest Hindi Songs'",
        "New Songs",
        "Viral Song",
        "Trending",
        "latest punjabi songs",
        "latest haryanvi song",
        "official video",
        "most watched",
        "New Hindi Song",
        "Abhishek Kumar",
        "Mannara Chopra",
        "BigBoss",
        "Latest hindi song",
        "Trending Teaser",
        "Teaser",
        "Trending Song",
        "Upcoming Hindi Song",
        "Saanware",
        "AbhishekXMannara",
        "Trending Song 2024",
        "New Song 2024",
        "Love Song",
        "Valentines Day Song",
        "Trending Love Song",
        "Love Song 2024",
        "Latest Abhishek Kumar Song",
        "Latest Love Song",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Saanware (Teaser) - Akhil Sachdeva | Abhishek Kumar | Mannara Chopra | Anshul Garg",
        description:
          "Anshul Garg presents Saanware featuring Abhishek Kumar & Mannara Chopra.\n\nAudio Credits :-\nSinger : Akhil Sachdeva \nLyrics : Akhil Sachdeva \nComposer : Akhil Sachdeva & Kartik Dev\nMusic production: Gaurav Dev & Kartik Dev\nMix n master : Shadaab Rayeen \nAssistant Engineer to Shadaab Rayeen : Pukhraj\n\nVideo Credits :-\nDirector : Rajan Bir \nDop : Shinda \nVFX : Animake Vfx \nEdit : The Ronin Vfx \nDI : Onkar \nProduction : Rs Films & Production \nChoreographer : John \nAd : Mickey & Rajat \nArt Director : Karma \nMake-up : Ishan \nDesigner : Victor \nHair : Salman \nStill & Bts : Akki\n\n\nPlayDMF Team :-\nProduced by : Anshul Garg  \nProject Head : Raghav Sharma\nLabel Manager : Sankalp Garg\nProject Manager : Gaurav Arora\nPlayDMF Team : Ashima Chauhan & Akshay Mahadik\nArtwork : Vicky Sandhu\nSpecial Thanks : Virgin Music Team\n\nhttps://www.ingrooves.com/\n\nVirgin Music Team :-\nHead : Amit Sharma \nTeam : Nagesh Jadhav, Kajal Israni, Amol Suryavanshi, Lavanya Das, Nishtha Sikroria\n\nTravel and Hospitality Partner : PRM Hospitality",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT33S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1790951",
      likeCount: "102858",
      favoriteCount: "0",
      commentCount: "10687",
    },
  },
  {
    kind: "youtube#video",
    etag: "KtTQ_doh5IFriiJFKwUdsPPoOy8",
    id: "BIZHsGjNfNg",
    snippet: {
      publishedAt: "2024-02-09T02:50:00Z",
      channelId: "UCJ5v_MCY6GNUBTO8-D3XoAg",
      title:
        "FULL SEGMENT — Rock, Reigns, Rhodes and Rollins highlight a bumpy Road to WrestleMania",
      description:
        'The Rock, Undisputed WWE Universal Roman Reigns, 2024 Royal Rumble winner Cody Rhodes and World Heavyweight Champion Seth "Freakin" Rollins find out their challengers at WrestleMania XL. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Delivered by youtube.com/@PizzaHut \nStream WWE on Peacock https://pck.tv/3ZTjVE7 in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nWatch WWE on Disney+ Hotstar in Indonesia: http://www.wwe.com/hotstar\r\nWatch WWE on Shahid: http://www.wwe.com/yt-shahid\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/BIZHsGjNfNg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/BIZHsGjNfNg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/BIZHsGjNfNg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/BIZHsGjNfNg/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/BIZHsGjNfNg/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "WWE",
      tags: [
        "Adam Pearce",
        "Cody Rhodes",
        "Nick Aldis",
        "Paul Heyman",
        "Roman Reigns",
        "Seth Freakin Rollins",
        "The Rock",
        "Triple H",
        "superstars",
        "world wrestling entertainment",
        "wrestle",
        "wrestler",
        "wrestling",
        "wwe",
        "wwe 2023",
        "مصارعه",
        "कुश्ती",
        "डब्लू डब्लू ई",
        "पहलवान",
        "मैच",
        "व्यावसायिक कुश्ती",
        "सुपरस्टार",
        "Wrestlemania 2024",
        "WrestleMania XL Philly",
        "WWE Wrestlemania 40",
        "WrestleMania XL",
        "WM 40",
        "WM XL",
        "Mania 40",
        "Mania XL",
        "WWE WrestleMania",
        "WrestleMania highlights",
        "WrestleMania match",
        "WrestleMania XL Kickoff",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title:
          "FULL SEGMENT — Rock, Reigns, Rhodes and Rollins highlight a bumpy Road to WrestleMania",
        description:
          'The Rock, Undisputed WWE Universal Roman Reigns, 2024 Royal Rumble winner Cody Rhodes and World Heavyweight Champion Seth "Freakin" Rollins find out their challengers at WrestleMania XL. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Delivered by youtube.com/@PizzaHut \nStream WWE on Peacock https://pck.tv/3ZTjVE7 in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nWatch WWE on Disney+ Hotstar in Indonesia: http://www.wwe.com/hotstar\r\nWatch WWE on Shahid: http://www.wwe.com/yt-shahid\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------',
      },
    },
    contentDetails: {
      duration: "PT22M13S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      regionRestriction: {
        blocked: ["RU"],
      },
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "4414655",
      likeCount: "189266",
      favoriteCount: "0",
      commentCount: "21723",
    },
  },
  {
    kind: "youtube#video",
    etag: "OdEh1qCgjiHsTV83HspL6PF821Q",
    id: "iVk7jjDqIeg",
    snippet: {
      publishedAt: "2024-02-09T16:45:43Z",
      channelId: "UC-CSyyi47VX1lD9zyeABW3w",
      title:
        "50% of Indians will get this Disease! | The Next Pandemic | Dhruv Rathee",
      description:
        "✏️ JOIN MY TIME MANAGEMENT COURSE: \nLearn how to manage time and maximize productivity in my specialised online course. \nJoin here: https://academy.dhruvrathee.com\nUse ‘EYE40’ for a 40% discount! Offer only valid for the first 400 people. \nBefore you buy, please note that language of the course is fully English.\n\nIn today's video, we delve into the escalating epidemic of myopia, a condition affecting vision clarity, that has seen a dramatic rise in rates from 4.5% to over 21% among individuals aged 5-15 years in India over the past two decades. We explore the common misconception that near-sightedness is solely due to genetics or growth factors, revealing the significant role our environment and lifestyle choices play in this widespread issue. With predictions suggesting that by 2050, half the world's population could be near-sighted, we investigate the true causes behind this surge, discuss preventative measures, and finally address the age-old warning from our parents about watching too much TV. Join us as we uncover the truth about myopia, its implications, and what we can do to combat this growing epidemic.\n\nLink to the mentioned video - \nHow to Lose Weight? | The Complete Scientific Guide | Dhruv Rathee - https://youtu.be/ygAC0yJp1KU?si=OgawY6ChOKY4Pk08\n----------------------------------------------------\n🤖 Master ChatGPT - Full Course : https://academy.dhruvrathee.com/chatgpt\nLearn to harness the power of ChatGPT effectively and transform your life! \nUse GET20 for a straight up 20% discount!\n\nLISTEN TO MY PODCAST: \n🎧 My Spotify exclusive podcast. Learn about how India works, only on Maha Bharat with Dhruv Rathee: https://spoti.fi/3IhBW51\n\nFOLLOW ME ON:\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n----------------------------------------------------",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/iVk7jjDqIeg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/iVk7jjDqIeg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/iVk7jjDqIeg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/iVk7jjDqIeg/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/iVk7jjDqIeg/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Dhruv Rathee",
      tags: [
        "Dhruv Rathee",
        "Dhruv",
        "Rathee",
        "Dhruv Rathee latest video",
        "indian youtuber",
        "khan sir",
        "khan sir patna",
        "myopia",
        "what is myopia",
        "myopia treatment",
        "myopia class 10",
        "myopia ophthalmology",
        "myopia and hypermetropia class 10 numericals",
        "myopia kya hota hai",
        "eyes",
        "disease",
        "myopia ko kaise theek karen",
        "myopia in hindi",
        "myopia is mental",
        "myopia hypermetropia and presbyopia",
        "high myopia",
        "myopia control",
        "myopia causes",
        "nearsightedness",
        "myopia vs hyperopia",
        "eyesight",
        "natural treatement",
      ],
      categoryId: "27",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "50% of Indians will get this Disease! | The Next Pandemic | Dhruv Rathee",
        description:
          "✏️ JOIN MY TIME MANAGEMENT COURSE: \nLearn how to manage time and maximize productivity in my specialised online course. \nJoin here: https://academy.dhruvrathee.com\nUse ‘EYE40’ for a 40% discount! Offer only valid for the first 400 people. \nBefore you buy, please note that language of the course is fully English.\n\nIn today's video, we delve into the escalating epidemic of myopia, a condition affecting vision clarity, that has seen a dramatic rise in rates from 4.5% to over 21% among individuals aged 5-15 years in India over the past two decades. We explore the common misconception that near-sightedness is solely due to genetics or growth factors, revealing the significant role our environment and lifestyle choices play in this widespread issue. With predictions suggesting that by 2050, half the world's population could be near-sighted, we investigate the true causes behind this surge, discuss preventative measures, and finally address the age-old warning from our parents about watching too much TV. Join us as we uncover the truth about myopia, its implications, and what we can do to combat this growing epidemic.\n\nLink to the mentioned video - \nHow to Lose Weight? | The Complete Scientific Guide | Dhruv Rathee - https://youtu.be/ygAC0yJp1KU?si=OgawY6ChOKY4Pk08\n----------------------------------------------------\n🤖 Master ChatGPT - Full Course : https://academy.dhruvrathee.com/chatgpt\nLearn to harness the power of ChatGPT effectively and transform your life! \nUse GET20 for a straight up 20% discount!\n\nLISTEN TO MY PODCAST: \n🎧 My Spotify exclusive podcast. Learn about how India works, only on Maha Bharat with Dhruv Rathee: https://spoti.fi/3IhBW51\n\nFOLLOW ME ON:\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n----------------------------------------------------",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT21M14S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "3651951",
      likeCount: "196484",
      favoriteCount: "0",
      commentCount: "11385",
    },
  },
  {
    kind: "youtube#video",
    etag: "eFCnq6QcYNPXL00kcrjeAhznX1c",
    id: "_1ibSiBoJy0",
    snippet: {
      publishedAt: "2024-02-09T11:28:49Z",
      channelId: "UClfll_TO6FpOPLUg4Aawhlw",
      title:
        "Car Stunt Gone Wrong | കാർ വെള്ളത്തിൽ പോയപ്പോൾ | കണ്ടാൽ നിങ്ങൾ ഞെട്ടും അപകടം വരുന്ന വഴി | M4  Tech |",
      description:
        "Download Duolingo For Free : https://app.adjust.net.in/195v6grc",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_1ibSiBoJy0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_1ibSiBoJy0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_1ibSiBoJy0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/_1ibSiBoJy0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/_1ibSiBoJy0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "M4 Tech",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Car Stunt Gone Wrong | കാർ വെള്ളത്തിൽ പോയപ്പോൾ | കണ്ടാൽ നിങ്ങൾ ഞെട്ടും അപകടം വരുന്ന വഴി | M4  Tech |",
        description:
          "Download Duolingo For Free : https://app.adjust.net.in/195v6grc",
      },
      defaultAudioLanguage: "en-GB",
    },
    contentDetails: {
      duration: "PT17M34S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "502768",
      likeCount: "28552",
      favoriteCount: "0",
      commentCount: "921",
    },
  },
  {
    kind: "youtube#video",
    etag: "qP58-IHaAByO_Mtd7nWxb41Cbig",
    id: "CkU7ZFGwo-0",
    snippet: {
      publishedAt: "2024-02-09T20:48:30Z",
      channelId: "UCOQNJjhXwvAScuELTT_i7cQ",
      title:
        "Afghanistan Tour Of Sri Lanka | 1st ODI | Highlights | 9th February 2024",
      description:
        "Click here to subscribe to Sony LIV Channel: https://www.youtube.com/user/sonyliv\n \nClick here to watch all highlights: https://bit.ly/3OVl9LM\n\nClick here to watch more: https://www.sonyliv.com/sports/cricket-afghanistan-tour-of-sri-lanka-1700001384\n\nClick here to subscribe now: https://bit.ly/3Q78rHU\n\nIt was a thriller of a match when Sri Lanka and Afghanistan faced each other in the first ODI. Sri Lanka posted a massive total of 381 runs on the board and Pathum Nissanka scored a brilliant double-century in the process. During the chase, Afghanistan lost five wickets in quick succession but a superb partnership between Azmatullah Omarzai and Mohammad Nabi took them near the target. In the end, it was Sri Lanka who sealed a victory after winning by 42 runs. \n\nClick here to subscribe: https://www.sonyliv.com/subscription\nFind Out: www.sonyliv.com or click on the below links to download the Sony LIV app:\nAndroid Play Store: https://play.google.com/store/apps/details?id=com.sonyliv \nApp Store: https://apps.apple.com/in/app/sonyliv-live-cricket-tv-movies/id587794258",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CkU7ZFGwo-0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/CkU7ZFGwo-0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/CkU7ZFGwo-0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/CkU7ZFGwo-0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/CkU7ZFGwo-0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sony LIV",
      tags: [
        "Afghanistan Tour Of Sri Lanka 2024",
        "Afghanistan Tour Of Sri Lanka series",
        "Afghanistan Tour Of Sri Lanka matches",
        "Afghanistan Tour Of Sri Lanka squad",
        "Afghanistan Tour Of Sri Lanka schedule",
        "Afghanistan Tour Of Sri Lanka on sony sports",
        "Afghanistan Tour Of Sri Lanka highlights",
        "afg vs sl",
        "sl vs afg live match today",
        "sl vs afg highlights",
        "cricket highlights",
        "sports highlights",
        "sl vs afg series",
        "sony liv highlights",
        "cricket",
        "Afghanistan vs Sri Lanka",
        "Afghanistan Tour Of Sri Lanka",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Afghanistan Tour Of Sri Lanka | 1st ODI | Highlights | 9th February 2024",
        description:
          "Click here to subscribe to Sony LIV Channel: https://www.youtube.com/user/sonyliv\n \nClick here to watch all highlights: https://bit.ly/3OVl9LM\n\nClick here to watch more: https://www.sonyliv.com/sports/cricket-afghanistan-tour-of-sri-lanka-1700001384\n\nClick here to subscribe now: https://bit.ly/3Q78rHU\n\nIt was a thriller of a match when Sri Lanka and Afghanistan faced each other in the first ODI. Sri Lanka posted a massive total of 381 runs on the board and Pathum Nissanka scored a brilliant double-century in the process. During the chase, Afghanistan lost five wickets in quick succession but a superb partnership between Azmatullah Omarzai and Mohammad Nabi took them near the target. In the end, it was Sri Lanka who sealed a victory after winning by 42 runs. \n\nClick here to subscribe: https://www.sonyliv.com/subscription\nFind Out: www.sonyliv.com or click on the below links to download the Sony LIV app:\nAndroid Play Store: https://play.google.com/store/apps/details?id=com.sonyliv \nApp Store: https://apps.apple.com/in/app/sonyliv-live-cricket-tv-movies/id587794258",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT17M13S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      regionRestriction: {
        blocked: ["BY", "CU", "IR", "KP", "LK", "SD", "SY", "UA", "US"],
      },
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "449229",
      likeCount: "12317",
      favoriteCount: "0",
      commentCount: "400",
    },
  },
  {
    kind: "youtube#video",
    etag: "FuQHOmwnLRN75apAR8Rxx2Jyt2o",
    id: "zoHp76MJ8IA",
    snippet: {
      publishedAt: "2024-02-07T10:50:07Z",
      channelId: "UC1_GAegUKlzJVskZKcwpZuA",
      title:
        '"എന്നെ പ്രേമിച്ച് Famous ആകാൻ വന്നതല്ല Aswin" | Diya & Aswin First Exclusive Interview l Part 1',
      description:
        "Subscribe - https://bwsurl.com/bices We will work harder to generate better content. Thank you for your support.\r\n\r\n#diyakrishna #aswinganesh #Diyaaswin\r\n\r\nBEHINDWOODS INFORMING TEN CRORE PEOPLE\r\nFor Advertisement Inquires - Whatsapp +91 8925421644 \r\nClick here to advertise: https://bwsurl.com/adv\r\n\r\nReviews & News, go to https://www.behindwoods.com/\r\n\r\nVideo contains promotional content, Behindwoods shall not be liable for any direct, indirect or consequential losses arising out of the contents of the ad. Therefore, use of information from the ad is at viewer's own risk.\r\n\r\nFollow us on WhatsApp: https://whatsapp.com/channel/0029Va59Bdz9Gv7UdIkyjh3J\r\n\r\nFor more videos, interviews ↷\r\nBehindwoods TV ▶ https://bwsurl.com/btv\r\nBehindwoods Air ▶ https://bwsurl.com/bair\r\nBehindwoods O2 ▶ https://bwsurl.com/bo2\r\nBehindwoods Ice ▶ https://bwsurl.com/bice\r\nBehindwoods Ash ▶ https://bwsurl.com/bash\r\nBehindwoods Gold ▶ https://bwsurl.com/bgold\r\nBehindwoods TV Max ▶ https://bwsurl.com/bmax\r\nBehindwoods Walt ▶ https://bwsurl.com/bwalt\r\nBehindwoods Ink ▶ https://bwsurl.com/bink\r\nBehindwoods Cold ▶ https://bwsurl.com/bcold\r\nBehindwoods Swag ▶ https://bwsurl.com/bswag",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zoHp76MJ8IA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zoHp76MJ8IA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zoHp76MJ8IA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/zoHp76MJ8IA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/zoHp76MJ8IA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Behindwoods Ice",
      tags: [
        "diya krishna",
        "diya krishna breakup",
        "diya krishna youtube channel",
        "diya krishna engagement",
        "diya krishna breakup with vaishnav",
        "diya krishna dance",
        "diya krishna ex boyfriend post",
        "diya krishnakumar",
        "diya krishna song",
        "diya krishna issue",
        "diya krishna kavala dance",
        "diya krishna vaishnav",
        "diya krishna and vaishnav",
        "diya krishna and ashwin ganesh",
        "diya krishna ashwin",
        "diya krishna and vaishnav breakup",
        "diya krishna about her breakup",
        "diya krishna and ashwin ganesh love story",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title:
          '"എന്നെ പ്രേമിച്ച് Famous ആകാൻ വന്നതല്ല Aswin" | Diya & Aswin First Exclusive Interview l Part 1',
        description:
          "Subscribe - https://bwsurl.com/bices We will work harder to generate better content. Thank you for your support.\r\n\r\n#diyakrishna #aswinganesh #Diyaaswin\r\n\r\nBEHINDWOODS INFORMING TEN CRORE PEOPLE\r\nFor Advertisement Inquires - Whatsapp +91 8925421644 \r\nClick here to advertise: https://bwsurl.com/adv\r\n\r\nReviews & News, go to https://www.behindwoods.com/\r\n\r\nVideo contains promotional content, Behindwoods shall not be liable for any direct, indirect or consequential losses arising out of the contents of the ad. Therefore, use of information from the ad is at viewer's own risk.\r\n\r\nFollow us on WhatsApp: https://whatsapp.com/channel/0029Va59Bdz9Gv7UdIkyjh3J\r\n\r\nFor more videos, interviews ↷\r\nBehindwoods TV ▶ https://bwsurl.com/btv\r\nBehindwoods Air ▶ https://bwsurl.com/bair\r\nBehindwoods O2 ▶ https://bwsurl.com/bo2\r\nBehindwoods Ice ▶ https://bwsurl.com/bice\r\nBehindwoods Ash ▶ https://bwsurl.com/bash\r\nBehindwoods Gold ▶ https://bwsurl.com/bgold\r\nBehindwoods TV Max ▶ https://bwsurl.com/bmax\r\nBehindwoods Walt ▶ https://bwsurl.com/bwalt\r\nBehindwoods Ink ▶ https://bwsurl.com/bink\r\nBehindwoods Cold ▶ https://bwsurl.com/bcold\r\nBehindwoods Swag ▶ https://bwsurl.com/bswag",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT29M19S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1397426",
      likeCount: "31394",
      favoriteCount: "0",
      commentCount: "1139",
    },
  },
  {
    kind: "youtube#video",
    etag: "Er8j_HWK1o5f9IkRV46sdK_FMgY",
    id: "gAUFbIvl6CA",
    snippet: {
      publishedAt: "2024-02-09T07:15:58Z",
      channelId: "UCf9FhkQ8SlbX29J_U75g9cA",
      title:
        "MYRA & SHAURYA SAT ON THE *Most Terrifying* ROLLERCOASTER RIDES!!!",
      description:
        'Join Shaurya and Myra on an exciting adventure as they explore the thrilling rides and attractions of the amusement park! From heart-stopping roller coasters to exciting games, watch as they experience all the fun and excitement firsthand.\n\nSubscribe to Hungry Birds for more exciting vlogs and hit the notification bell to stay updated on their latest adventures!"\n\nFor Latest Updates of Our Life Please Follow\nInstagram - https://www.instagram.com/the_hungry_birds_official/?igshid=ZDdkNTZiNTM%3D\nFacebook = https://www.facebook.com/hungrybirds4​ \n\nCast= Umesh, Priti, Sanket, Akshada',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/gAUFbIvl6CA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/gAUFbIvl6CA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/gAUFbIvl6CA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/gAUFbIvl6CA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/gAUFbIvl6CA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Hungry Birds Inside",
      tags: [
        "amusement park rides",
        "park rides",
        "rides",
        "roller coasters",
        "scariest amusement park rides",
        "scariest amusement parks",
        "scariest rides",
        "scariest roller coasters",
        "amusement park",
        "Scariest amusement park rides",
        "hungry birds inside",
        "hungry birds new video",
        "hungry birds vlog",
        "myra and shaurya",
        "roller coaster",
        "myra and shaurya hungry birds",
        "myra and shaurya amusement park",
        "myra",
        "shaurya",
        "myra and shaurya rollercoaster ride",
        "shaurya and myra most terrifying rollercoaster rides",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "MYRA & SHAURYA SAT ON THE *Most Terrifying* ROLLERCOASTER RIDES!!!",
        description:
          'Join Shaurya and Myra on an exciting adventure as they explore the thrilling rides and attractions of the amusement park! From heart-stopping roller coasters to exciting games, watch as they experience all the fun and excitement firsthand.\n\nSubscribe to Hungry Birds for more exciting vlogs and hit the notification bell to stay updated on their latest adventures!"\n\nFor Latest Updates of Our Life Please Follow\nInstagram - https://www.instagram.com/the_hungry_birds_official/?igshid=ZDdkNTZiNTM%3D\nFacebook = https://www.facebook.com/hungrybirds4​ \n\nCast= Umesh, Priti, Sanket, Akshada',
      },
    },
    contentDetails: {
      duration: "PT10M38S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "386324",
      likeCount: "5729",
      favoriteCount: "0",
      commentCount: "336",
    },
  },
  {
    kind: "youtube#video",
    etag: "TZYhKbvUBQ1ZjMhunv8i_aRhfjI",
    id: "sJvfvPu0tas",
    snippet: {
      publishedAt: "2024-02-09T13:30:24Z",
      channelId: "UCSfxFZFzcpYMbOB3A1rWHAg",
      title: "You SCREAM, You Lose (Air Stunts Edition) | SlayyPop",
      description:
        "@redbull does give you wings.\n\n\nWorlds best Paramotor athletes -\n\nBicho Carerra\nhttps://www.instagram.com/bichocarrera?igsh=Y3p6cXRsdDBqNGRm\n\nTom De Dorlodot\nhttps://www.instagram.com/tomdedorlodot?igsh=MTJ5ejFvbzZkYzRwMw==\n\n\nColas Feuillie\n https://www.instagram.com/cola_fpv?igsh=MXh2d3RyN3UzNTBnYw==\n\n\nInstagram -  @Abhyudaya_Mohan & @GautamiKawale\nhttps://www.instagram.com/abhyudaya_mohan/\nhttps://www.instagram.com/gautamikawale/\n\nSlayyPop videos edited by Kshitij",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/sJvfvPu0tas/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/sJvfvPu0tas/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/sJvfvPu0tas/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/sJvfvPu0tas/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/sJvfvPu0tas/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "SlayyPop",
      tags: [
        "slayypoint",
        "slayypop",
        "abhyudaya",
        "gautami",
        "stunts",
        "redbull",
      ],
      categoryId: "20",
      liveBroadcastContent: "none",
      localized: {
        title: "You SCREAM, You Lose (Air Stunts Edition) | SlayyPop",
        description:
          "@redbull does give you wings.\n\n\nWorlds best Paramotor athletes -\n\nBicho Carerra\nhttps://www.instagram.com/bichocarrera?igsh=Y3p6cXRsdDBqNGRm\n\nTom De Dorlodot\nhttps://www.instagram.com/tomdedorlodot?igsh=MTJ5ejFvbzZkYzRwMw==\n\n\nColas Feuillie\n https://www.instagram.com/cola_fpv?igsh=MXh2d3RyN3UzNTBnYw==\n\n\nInstagram -  @Abhyudaya_Mohan & @GautamiKawale\nhttps://www.instagram.com/abhyudaya_mohan/\nhttps://www.instagram.com/gautamikawale/\n\nSlayyPop videos edited by Kshitij",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT8M56S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "551352",
      likeCount: "46708",
      favoriteCount: "0",
      commentCount: "873",
    },
  },
  {
    kind: "youtube#video",
    etag: "pSOyNO8J-AVwhoqxolsnJFFkgaE",
    id: "lkRS2jHDdcU",
    snippet: {
      publishedAt: "2024-02-09T01:30:10Z",
      channelId: "UC0J8BQahplvTY6LjlnLf_NQ",
      title:
        "Power Star #PawanSingh | आरा बलिया छपरा | Anupma Yadav | Ritu Singh | New Bhojpuri Song",
      description:
        "रउवा लोगन जैसे पॉवरएक्सप्रेस पकड़ के आरा बलिया के सैर करत बानी, वैसे हम सबके PowerStar #PawanSingh के गाना के भी हर घर घर बजवाय दा |\n\nSubscribe to our channel for more Bhojpuri Songs:  @SaregamaHumBhojpuri \n\nCredits:\nTitle - Arrah Ballia Chhapra\nHindi “आरा बलिया छपरा”\nSinger :- Pawan Singh And Anupma Yadav\nHindi - पवन सिंह और अनुपमा यादव\nLyrics :- Vinay Bihari \nMusic :- Shubham Raj (SBR)\nFeat - Ritu Singh \nAdditional Vocal- Arohi Bharadwaj\nDirector & Choreographer:- Lakkie Vishwakarma\nDOP:- Yogesh Singh \nEditor:-  Rishu Singh \nAssistant Choreographer:- Suresh And Ashu\nDI:- Rohit Singh \nProduction:- Aakash Vishwakarma\nBTS - Suraj Vishwakarma \nMakeup And Hair - Manish Thakur\nStyled by - Partho Ghoshal  \nAssistant stylist - Shagun G28\n\nLyrics\nFemale\nभोजपुरिया मरद बड़ी देला दरद\nसुन ले हम बानी रहे हरदम बेपरद - २\nहम नाही मोलब अयसन ख़तरा -२ \nMale \nदिल वाला हवे सुन ला ऐ गोरिया\nआरा बलिया हो छपरा -२ \n\nMale\nप्यार करे वाला अयसन मरद ना पाइबु\nमान जैबु लोहा जहिया माँग भरबैबु -२\n\nFemale\nजाना तानी छोर देबा मस्ती उठा के\nदु चार दिन ला हमके दुलहिन बना के \nनाही चाही तोहरा जयसन भतरा -१ \n\nMale \nरंगीला हवे सुन ल ऐ गोरिया\nआरा बलिया हो छपरा -\nदिल वाला हवे सुन ला ऐ गोरिया आरा बलिया हो छपरा \n\nMale\nबहियाँ में आ के देखा जियरा जुड़ाई\nआरा बलिया छपरा वाला छोर दा लड़ाई -२\n\nFemale\nबतिया तनी के क़हत बाड़ा ऐ राजा\nजयसे मन करे हमरा जिया में समा जा\nगावा संघे पवन पिया पचरा -२ \nMale - \nमस्तिला हवे सुन ला ऐ गोरिया \nआरा बलिया हो छपरा\nदिल वाला हवे सुन ला ऐ गोरिया \nआरा बलिया हो छपरा\n\n\n#PawanSingh \n#AnupmaYadav \n#ArrahBalliaChhapra\n#SaregamaHumBhojpuri \n#pawansinghnewsong \n#pawansinghnewsong2024 \n#pawansinghsong \n#pawansinghbhojpurisong \n#pawansingh \n#bhojpurigana \n#bhojpurisong \n\n\n\nख़रीदिए कारवाँ मोबाइल- 1500 प्रीलोडिड गानों वाला कीपैड फ़ोन धमाकेदार साउंड के साथ \nhttp://sarega.ma/ycmbuy\n\nSubscribe to our channel for more Bhojpuri Songs:\nhttps://youtube.com/c/SaregamaHumBhojpuri\n\nFollow us on:\nFacebook: https://bit.ly/3FxwPgo \nInstagram: https://bit.ly/32rkJqM\nTwitter: @saregamaglobal \n\nLabel:: Saregama India Limited, A RPSG Group Company",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lkRS2jHDdcU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/lkRS2jHDdcU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/lkRS2jHDdcU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/lkRS2jHDdcU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/lkRS2jHDdcU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Saregama Hum Bhojpuri",
      tags: [
        "Arrah Ballia Chhapra",
        "Pawan Singh",
        "Anupma Yadav",
        "Pawan singh new bhojpuri song",
        "pawan singh new song",
        "pawan singh bhojpuri song",
        "bhojpuri latest song",
        "new bhojpuri song",
        "bhojpuri song new",
        "bhojpuri new song",
        "bhojpuri song",
        "pawan singh lal ghagra song",
        "lal ghagra",
        "dhnaiya ae jaan pawan singh",
        "ara baliya chhapra",
        "aara baliya chapra",
        "आरा बलिया छपरा",
        "ara baliya chapra pawan singh",
        "ara chhapra ballia",
        "ara baliya chhapra song",
        "ara chhapra ballia song",
        "pawan singh new song 2024",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Power Star #PawanSingh | आरा बलिया छपरा | Anupma Yadav | Ritu Singh | New Bhojpuri Song",
        description:
          "रउवा लोगन जैसे पॉवरएक्सप्रेस पकड़ के आरा बलिया के सैर करत बानी, वैसे हम सबके PowerStar #PawanSingh के गाना के भी हर घर घर बजवाय दा |\n\nSubscribe to our channel for more Bhojpuri Songs:  @SaregamaHumBhojpuri \n\nCredits:\nTitle - Arrah Ballia Chhapra\nHindi “आरा बलिया छपरा”\nSinger :- Pawan Singh And Anupma Yadav\nHindi - पवन सिंह और अनुपमा यादव\nLyrics :- Vinay Bihari \nMusic :- Shubham Raj (SBR)\nFeat - Ritu Singh \nAdditional Vocal- Arohi Bharadwaj\nDirector & Choreographer:- Lakkie Vishwakarma\nDOP:- Yogesh Singh \nEditor:-  Rishu Singh \nAssistant Choreographer:- Suresh And Ashu\nDI:- Rohit Singh \nProduction:- Aakash Vishwakarma\nBTS - Suraj Vishwakarma \nMakeup And Hair - Manish Thakur\nStyled by - Partho Ghoshal  \nAssistant stylist - Shagun G28\n\nLyrics\nFemale\nभोजपुरिया मरद बड़ी देला दरद\nसुन ले हम बानी रहे हरदम बेपरद - २\nहम नाही मोलब अयसन ख़तरा -२ \nMale \nदिल वाला हवे सुन ला ऐ गोरिया\nआरा बलिया हो छपरा -२ \n\nMale\nप्यार करे वाला अयसन मरद ना पाइबु\nमान जैबु लोहा जहिया माँग भरबैबु -२\n\nFemale\nजाना तानी छोर देबा मस्ती उठा के\nदु चार दिन ला हमके दुलहिन बना के \nनाही चाही तोहरा जयसन भतरा -१ \n\nMale \nरंगीला हवे सुन ल ऐ गोरिया\nआरा बलिया हो छपरा -\nदिल वाला हवे सुन ला ऐ गोरिया आरा बलिया हो छपरा \n\nMale\nबहियाँ में आ के देखा जियरा जुड़ाई\nआरा बलिया छपरा वाला छोर दा लड़ाई -२\n\nFemale\nबतिया तनी के क़हत बाड़ा ऐ राजा\nजयसे मन करे हमरा जिया में समा जा\nगावा संघे पवन पिया पचरा -२ \nMale - \nमस्तिला हवे सुन ला ऐ गोरिया \nआरा बलिया हो छपरा\nदिल वाला हवे सुन ला ऐ गोरिया \nआरा बलिया हो छपरा\n\n\n#PawanSingh \n#AnupmaYadav \n#ArrahBalliaChhapra\n#SaregamaHumBhojpuri \n#pawansinghnewsong \n#pawansinghnewsong2024 \n#pawansinghsong \n#pawansinghbhojpurisong \n#pawansingh \n#bhojpurigana \n#bhojpurisong \n\n\n\nख़रीदिए कारवाँ मोबाइल- 1500 प्रीलोडिड गानों वाला कीपैड फ़ोन धमाकेदार साउंड के साथ \nhttp://sarega.ma/ycmbuy\n\nSubscribe to our channel for more Bhojpuri Songs:\nhttps://youtube.com/c/SaregamaHumBhojpuri\n\nFollow us on:\nFacebook: https://bit.ly/3FxwPgo \nInstagram: https://bit.ly/32rkJqM\nTwitter: @saregamaglobal \n\nLabel:: Saregama India Limited, A RPSG Group Company",
      },
      defaultAudioLanguage: "bh",
    },
    contentDetails: {
      duration: "PT3M58S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "3854102",
      likeCount: "174916",
      favoriteCount: "0",
      commentCount: "20535",
    },
  },
  {
    kind: "youtube#video",
    etag: "WimmLJwx3m24PAJStg47185dPiA",
    id: "rYBlIzDSH4Q",
    snippet: {
      publishedAt: "2024-02-10T05:20:59Z",
      channelId: "UCVXCo0W9pk2dDkEBNLhTt7A",
      title:
        "🔴BREAKING: TEST TEAM ANNOUNCED VIRAT OUT OF ENG SERIES, JADEJA & KL RAHUL’s SUBJECT TO FITNESS",
      description:
        "#indvseng #indiavsengland #viratkohli #viratlatestnews #viratkohlilatestnews #viratkohlinews #indiavsenglandtestseries #indvseng2024 #teamannouncement #teamindia #teamindiapracticesession #rohitsharmapressconference #washingtonsundar #klrahulinjury #ravindrajadejainjury #jadejainjury #cricket #breakingnews #breaking #bigbreaking #vikrantgupta #vikrantguptalive #sportstak #sportsnews #sportstaklive \n\nBIG BREAKING: TEAM INDIA'S SQUAD FOR FINAL 3 TESTS ANNOUNCED, VIRAT IS OUT FROM THE ENTIRE TEST SERIES WHILE JADEJA AND RAHUL BOTH ARE SUBJECT TO FITNESS, AND SUNDAR IS BACK IN THE TEST SQUAD.\n\nTo know more about the Itel p55+  click the link\nhttps://www.amazon.in/b?node=94206274031&ref_=itel+P55Plus_LP_Publish8\n\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights, and specific statistics of players and teams. You can also catch pre and post-match interviews of players, and coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, सुनील गावस्कर, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial\n\nVikrant Gupta \nSports Tak\nAaj Tak\nAaj Taj Live\nSports Tak live\nSports Tak \nBCCI\nVikrant Gupta live\nVikrant Gupta analysis\nVikrant Gupta match analysis \nVikrant Gupta's post-match analysis\nVirat Kohli\nVirat Kohli Breaking\nVirat Kohli Breaking News\nVirat Latest News\nVirat Kohli's Latest News\nVirat Kohli Withdraw News\nVirat Kohli to miss entire India vs England Test Series\nVirat is to miss the entire India vs England Test Series\nVirat Kohli India vs England News\nVirat Ind vs Eng Test Series\nBreaking News\nBreaking\nSports Tak Breaking News\nIndia vs England Breaking News\nInd vs Eng Breaking News\nIndia vs England 3rd Test News\nIndia vs England Test Series Breaking News\nVirat's 2nd Child \nVirat Kohli Anushka Sharma\nTeam India\nInd vs Eng Test Series",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rYBlIzDSH4Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rYBlIzDSH4Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rYBlIzDSH4Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/rYBlIzDSH4Q/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/rYBlIzDSH4Q/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sports Tak",
      tags: [
        "Sports Tak News",
        "Sports Tak Breaking",
        "vikrant gupta",
        "vikrant gupta live",
        "Virat Kohli Breaking",
        "Virat Kohli Breaking News",
        "Virat Latest News",
        "Virat Kohli Withdraw News",
        "Virat Kohli to miss entire India vs England Test Series",
        "Virat Kohli India vs England News",
        "Virat Ind vs Eng Test Series",
        "Breaking News",
        "Breaking",
        "Sports Tak Breaking News",
        "India vs England Breaking News",
        "Ind vs Eng Breaking News",
        "India vs England 3rd Test News",
        "Virat's 2nd Child",
        "Virat Kohli Anushka Sharma",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title:
          "🔴BREAKING: TEST TEAM ANNOUNCED VIRAT OUT OF ENG SERIES, JADEJA & KL RAHUL’s SUBJECT TO FITNESS",
        description:
          "#indvseng #indiavsengland #viratkohli #viratlatestnews #viratkohlilatestnews #viratkohlinews #indiavsenglandtestseries #indvseng2024 #teamannouncement #teamindia #teamindiapracticesession #rohitsharmapressconference #washingtonsundar #klrahulinjury #ravindrajadejainjury #jadejainjury #cricket #breakingnews #breaking #bigbreaking #vikrantgupta #vikrantguptalive #sportstak #sportsnews #sportstaklive \n\nBIG BREAKING: TEAM INDIA'S SQUAD FOR FINAL 3 TESTS ANNOUNCED, VIRAT IS OUT FROM THE ENTIRE TEST SERIES WHILE JADEJA AND RAHUL BOTH ARE SUBJECT TO FITNESS, AND SUNDAR IS BACK IN THE TEST SQUAD.\n\nTo know more about the Itel p55+  click the link\nhttps://www.amazon.in/b?node=94206274031&ref_=itel+P55Plus_LP_Publish8\n\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights, and specific statistics of players and teams. You can also catch pre and post-match interviews of players, and coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, सुनील गावस्कर, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial\n\nVikrant Gupta \nSports Tak\nAaj Tak\nAaj Taj Live\nSports Tak live\nSports Tak \nBCCI\nVikrant Gupta live\nVikrant Gupta analysis\nVikrant Gupta match analysis \nVikrant Gupta's post-match analysis\nVirat Kohli\nVirat Kohli Breaking\nVirat Kohli Breaking News\nVirat Latest News\nVirat Kohli's Latest News\nVirat Kohli Withdraw News\nVirat Kohli to miss entire India vs England Test Series\nVirat is to miss the entire India vs England Test Series\nVirat Kohli India vs England News\nVirat Ind vs Eng Test Series\nBreaking News\nBreaking\nSports Tak Breaking News\nIndia vs England Breaking News\nInd vs Eng Breaking News\nIndia vs England 3rd Test News\nIndia vs England Test Series Breaking News\nVirat's 2nd Child \nVirat Kohli Anushka Sharma\nTeam India\nInd vs Eng Test Series",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT5M33S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "179212",
      likeCount: "7223",
      favoriteCount: "0",
      commentCount: "610",
    },
  },
];

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  let last = false;
let options = {
  root: document.querySelector(".video_container"),
  rootMargin: "0px",
  threshold: 1.0,
};
  const observer = useRef(null);

  const suggestBar = useSelector((state) => state.SuggestionSlice.show);

  const fetchingParameters = useSelector(
    (state) => state.VideoFetchParameters.parameters
  );

console.log("state = "+isIntersecting)

  //const observerlast = useCallback((node) => {
  //   console.log("use call back")
   
  //   if (node == null) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((itemToObserve) => {
  //     if (itemToObserve[0].isIntersecting) {
  //       console.log("yes it is intersecting");
  //   console.log("videoList length "+ videoList.length+"videoData length "+ videoData.length)
  //       setVideoList([...videoList , ...videoData]);
  //     }
  //   },options);

  //   observer.current.observe(node);
  // });

  let fetchVideoCategory = async () => {
    let res = await fetch(video_categories + youTube_API_Key);
    let data = await res.json();
    let arr = data.items.filter((item) => {
      return item.snippet.title == fetchingParameters.videoCategory;
    });

    return arr?.[0]?.id;
  };

  let fetchVideos = async () => {
    if (fetchingParameters.flag == "V") {
      let res = await fetch(youTube_API);

      let data = await res.json();

      if (fetchingParameters.videoCategory == "All") {
        setVideoList([...data?.items]);
      } else {
        let category = await fetchVideoCategory();

        let filteredData = data?.items.filter((item) => {
          return item?.snippet?.categoryId == category;
        });

        setVideoList([...filteredData]);
      }
    } else if (fetchingParameters.flag == "S") {
      let res = await fetch(
        youTube_API_for_search +
          fetchingParameters.serachKey +
          "&key=" +
          youTube_API_Key
      );

      let data = await res.json();

      setVideoList([...data?.items]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    //fetchVideos();
    // console.log("in use effect");
    // console.log(videoList)
    setVideoList([ ...videoData]);
    setIsLoading(false);
  }, [fetchingParameters, isIntersecting]);

  if (isloading) {
    return <></>;
  }

  return (
    <div className="">
      <div
        className={
          "video_container relative  drop-shadow-lg bg-slate-50 flex flex-wrap" +
          (suggestBar ? " -z-10" : "")
        }
      >
        {videoList.map((item, index) => {
          // last = index == videoList.length - 1 ? true : false;
          return (
            <Link key={item.id} to={"/watch?v3=" + item.id}>
              <VideoCard VideoDetails={item} />
            </Link>
          );
        })}
        {last ? <div >HIII </div> : <></>}
      </div>
    </div>
  );
};

export default VideoContainer;
