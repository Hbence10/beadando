import { Injectable } from '@angular/core';
import { Anime } from './.models/anime.model';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
  // Az alap lista
  animeList : Anime[] = [
    new Anime("Bleach", "../../assets/img/coverImg/bleach.jpg", "For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. As Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow.<br> Now a Soul Reaper himself, Ichigo must take up Rukia's duties of exterminating Hollows and protecting spirits, both living and dead. Along with his friends Orihime Inoue and Yasutora Sado—who later discover spiritual abilities of their own—Ichigo soon learns that the consequences of becoming a Soul Reaper and dealing with the world of spirits are far greater than he ever imagined.",
      "https://myanimelist.net/anime/269/Bleach?q=bleach&cat=anime", "https://www.youtube.com/watch?v=l1JpE_tarso",
      "Tite Kubo", "Tite Kubo"),

      new Anime("Demon Slayer", "../../assets/img/coverImg/demonSlayer.jpg",
      "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.<br> When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.",
      "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon%20slayer&cat=anime", "https://www.youtube.com/watch?v=VQGCKyvzIM4",
      "Koyoharu Gotouge", "Koyoharu Gotouge"),


      new Anime("Dragon Ball", "../../assets/img/coverImg/dragonBall.jpg",
      "Bulma, a headstrong 16-year-old girl, is on a quest to find the mythical Dragon Balls—seven scattered magic orbs that grant the finder a single wish. She has but one desire in mind: a perfect boyfriend. On her journey, Bulma stumbles upon Gokuu Son, a powerful orphan who has only ever known one human besides her. Gokuu possesses one of the Dragon Balls, it being a memento from his late grandfather. In exchange for it, Bulma invites Gokuu to be a companion in her travels. <br> By Bulma's side, Gokuu discovers a world completely alien to him. Powerful enemies embark on their own pursuits of the Dragon Balls, pushing Gokuu beyond his limits in order to protect Bulma and their growing circle of allies. However, Gokuu has secrets unbeknownst to even himself; the incredible strength within him stems from a mysterious source, one that threatens the many people he grows to hold dear. <br> As his prowess in martial arts flourishes, Gokuu attracts stronger opponents whose villainous plans could collapse beneath his might. He undertakes the endless venture of combat training to defend his loved ones and the fate of the planet itself.",
      "https://myanimelist.net/anime/223/Dragon_Ball?q=dragon%20ball&cat=anime", "https://www.youtube.com/watch?v=ezbYAglQoxI",
      "Akira Toriyama", "Akira Toriyama"),

      new Anime("Dragon Ball Super", "../../assets/img/coverImg/dragonBallSuper.jpg",
      "Seven years after the defeat of Majin Buu, Earth is at peace, and its people live free from any dangers lurking in the universe. However, this peace is short-lived; a sleeping threat awakens in the dark reaches of the galaxy: Beerus, the ruthless God of Destruction. <br> Disturbed by a prophecy that he will be defeated by a Super Saiyan God Beerus and his angelic attendant Whis search the universe for this mysterious being. Before long, they reach Earth and encounter Gokuu Son, one of the planet's mightiest warriors, and his powerful friends. ",
      "", "",
      "Akira Toriyama", "Toyotarou"),

      new Anime("Naruto", "../../assets/img/coverImg/naruto.jpg",
      "Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br> In the present, Naruto is a hyperactive and knuckle-headed ninja growing up within Konohagakure. Shunned because of the demon inside him, Naruto struggles to find his place in the village. His one burning desire to become the Hokage and be acknowledged by the villagers who despite him. However, while his goal leads him to unbreakable bonds with lifelong friends, it also lands him in the crosshairs of many deadly foes.",
      "https://myanimelist.net/anime/20/Naruto", "https://www.youtube.com/watch?v=-G9BqkgZXRA",
      "Masashi Kishimoto", "Masashi Kishimoto"),

      new Anime("One Piece", "../../assets/img/coverImg/onePiece.jpg",
        "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it. <br> The late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.",
      "https://myanimelist.net/anime/21/One_Piece?q=one%20piece&cat=anime", "https://www.youtube.com/watch?v=ARMHk5g16AI",
      "Eichiro Oda", "Eichiro Oda"),
  ]

  // Top 10es lista:
  topList : Anime[] = [

  ]

  selectedAnime : Anime;                        // A kivalasztott lista


  constructor() { }
}