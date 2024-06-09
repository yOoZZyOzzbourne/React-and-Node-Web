const developers = [
  {
    id: 1,
    name: "Epic Games",
    icon: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/UEOXMN7HRRNKJNIDU5TRHDUKD4.jpg",
  },
  {
    id: 2,
    name: "CD Projekt Red",
    icon: "https://www.cdprojektred.com/build/images/cdpr-default-e45439ba.jpg",
  },
];

const games = [
  {
    name: "Fortnite",
    developer: 1,
    icon: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
    description:
      "Fortnite is a third-person shooter game where up to 100 players compete to be the last person or team standing. You can compete alone or join a team of up to four. You progress through the game by exploring the island, collecting weapons, building fortifications and engaging in combat with other players. You can make purchases for access to the full game or for bonus weapons. Players communicate with other players through online messaging or voice chat. Fortnite Battle Royale is a free version of the Fortnite game. ",
    pictures:
      "https://cdn.alza.cz/Foto/or/articles/36914/img/fortnite-the-brat-thumbnail.jpg,https://store-images.s-microsoft.com/image/apps.46465.14622094146520822.a52ce695-c134-47da-b426-526223188ae2.9b6e19cb-5693-41b3-876a-4cc901d9ed73?q=90&w=480&h=270,https://cdn.mos.cms.futurecdn.net/USGANK6FUwhQPSs6sG74PJ-1200-80.jpg",
    video: "https://www.youtube.com/watch?v=WJW-bzXZM8M",
  },
  {
    name: "Gwent",
    developer: 2,
    icon: "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/a43fe85bf7b94afac0be6d0740eed776355db9d7-1280x720.jpg",
    description:
      "Gwent (Polish: Gwint) is a fast-paced card game that can be played within The Witcher 3: Wild Hunt on every platform. The game is about the clash of two armies locked in mortal struggle on a battlefield where the players are the leaders and the cards their forces. With four different factions offering unique combat styles and endless paths to victory, Gwent is every adventurer's first choice when it comes to one-on-one card-based dueling. Take risks and think on your feet, strategize and deliver cunning combos, use potent magic and mighty hero cards and be the last one standing on the field of honor!",
    pictures:
      "https://static.cdprojektred.com/playgwent.com/news/big/playgwent.com_en_1553680699_5c9b493ba7f831.81225907.jpg,https://assets1.ignimgs.com/thumbs/userUploaded/2015/5/21/Gwent_1280-1432230829841.jpg",
    video:
      "https://www.youtube.com/watch?v=5yu7FVZOyAo&pp=ygUNZ3dlbnQgdHJhaWxlcg%3D%3D",
  },
  {
    name: "The Witcher 3",
    developer: 2,
    icon: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0814/9uU0gBq02jmXHtDsm82AV722.jpg",
    description:
      "The Witcher 3: Wild Hunt is an expansive, open-world RPG developed by CD Projekt Red, set in a richly detailed, medieval fantasy universe filled with moral ambiguity and complex narratives. Players assume the role of Geralt of Rivia, a battle-worn witcher, who uses his supernatural abilities to hunt deadly monsters. The game's story revolves around Geralt's quest to find his adopted daughter, Ciri, as they evade the otherworldly Wild Hunt. With a mix of swordplay, magic, and diplomacy, players explore diverse environments from bustling cities to treacherous wilderness, making choices that influence the game's world and its multiple endings. Enhanced by robust character development, intricate side quests, and a dynamic weather system, The Witcher 3 delivers a compelling blend of storytelling and gameplay, accompanied by a haunting soundtrack.",
    pictures:
      "https://images.kinguin.net/g/carousel-main-mobile/media/category/t/h/the-witcher-3-wild-hunt-debut-gameplay-trailer-1024x576.jpg,https://sm.ign.com/t/ign_za/review/t/the-witche/the-witcher-3-the-wild-hunt-review_wvw4.1200.jpg",
    video:
      "https://www.youtube.com/watch?v=c0i88t0Kacs&pp=ygURd2l0Y2hlcjMgIHRyYWlsZXI%3D",
  },
  {
    name: "Cyberpunk 2077",
    developer: 2,
    icon: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
    description:
      "Cyberpunk 2077 is an action RPG set in the sprawling, dystopian metropolis of Night City, developed by CD Projekt Red. The game immerses players in the role of V, a customizable protagonist navigating a world of corporate espionage, futuristic technology, and deep societal divisions. Gameplay combines first-person shooting with stealth, hacking, and branching dialogue options that influence the narrative outcome. The detailed cityscape is populated by diverse characters and factions, each with their own agendas, offering complex relationships and moral dilemmas. With advanced graphics and immersive sound design, Cyberpunk 2077 presents a gritty, neon-lit exploration of technology and human nature.",
    pictures:
      "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg,https://assetsio.gnwcdn.com/cyberpunk-2077-g.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp,https://cdn.mos.cms.futurecdn.net/S5xNSExgmaREvtRwYHQhB3-1200-80.jpg",
    video:
      "https://www.youtube.com/watch?v=8X2kIfS6fb8&pp=ygUUY3liZXJwdW5rNzcgIHRyYWlsZXI%3D",
  },
  {
    name: "Unreal Tournament",
    developer: 1,
    icon: "https://www.fakaheda.eu/images/product_medias/1177-unreal-tournament-3-black-edition-profile1547585477_1",
    description:
      "Unreal Tournament is a fast-paced first-person shooter developed by Epic Games, famous for its competitive multiplayer focus. Players engage in intense battles across a variety of futuristic arenas, utilizing an array of high-tech weaponry and tactics. The game is renowned for its high degree of precision and speed, requiring quick reflexes and strategic thinking. Unreal Tournament offers several game modes, including Deathmatch, Capture the Flag, and Assault, each demanding different skills and strategies. Its crisp graphics, responsive controls, and energetic soundtrack contribute to its status as a staple in the eSports scene, celebrated for its pure adrenaline-pumping action and community-driven enhancements.",
    pictures:
      "https://variety.com/wp-content/uploads/2018/12/unreal-tournament.jpg,https://i.ytimg.com/vi/zgFPM-hGgiA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0DP9eX-aN04s6ehLWTMuZPUI3mw,https://cdn2.unrealengine.com/Showcase/ut1-1280x720-67161210.jpg",
    video:
      "https://www.youtube.com/watch?v=POcdrHSJUY0&pp=ygUedW5yZWFsIHRvdXJuYW1lbnQgMjAyMyB0cmFpbGVy",
  },
];

export { games, developers };
