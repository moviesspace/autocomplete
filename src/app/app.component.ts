import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  myControl = new FormControl();
 // options: string[] = ['One', 'Two', 'Three'];
  options=[
    {
       "id":"4fede17c312f912796000034",
       "cover_url":null,
       "description":null,
       "rating":6.3,
       "title":"L'affaire Gordji, histoire d'une cohabitation"
    },
    {
       "id":"4fede17f312f912796000035",
       "cover_url":null,
       "description":"Documentary telling the true story of the sinking of the liner Laconia by a German U-boat in 1942 through the eyes of six survivors.",
       "rating":6.8,
       "title":"Le naufrage du Laconia - partie 1"
    },
    {
       "id":"4fede181312f912796000036",
       "cover_url":null,
       "description":"Documentary telling the true story of the sinking of the liner Laconia by a German U-boat in 1942 through the eyes of six survivors.",
       "rating":6.8,
       "title":"Le naufrage du Laconia - partie 2"
    },
    {
       "id":"4fede184312f912796000037",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAyMTg0MjgwOV5BMl5BanBnXkFtZTcwNTEzODY4Mw@@._V1._SX94_SY140_.jpg",
       "description":"The extraordinary story of three Rwandan kids who walk 3000 miles to the Soccer World Cup in South Africa...",
       "rating":6.2,
       "title":"Africa United"
    },
    {
       "id":"4fede186312f912796000038",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAyNDcxNTk3NV5BMl5BanBnXkFtZTcwMjk4MDU2NA@@._V1._SX94_SY140_.jpg",
       "description":"A young man is rocked by two announcements from his elderly father: that he has terminal cancer, and that he has a young male lover.",
       "rating":7.2,
       "title":"Beginners"
    },
    {
       "id":"4fede18a312f912796000039",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIzMjY4MTk2M15BMl5BanBnXkFtZTcwNzQ3ODg3NQ@@._V1._SX94_SY140_.jpg",
       "description":"A kid from the Midwest moves out to Hollywood in order to follow in his parents footsteps -- and become a porn star.",
       "rating":3.0,
       "title":"Bucky Larson : Born to Be a Star"
    },
    {
       "id":"4fede18d312f91279600003a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU1ODkyNDkwOV5BMl5BanBnXkFtZTcwNzI2MTcyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of what happens after a master thief achieves his last big score, when the FBI agent who promised he'd capture him is about to do just that.",
       "rating":6.2,
       "title":"Coup d'\u00e9clat"
    },
    {
       "id":"4fede190312f91279600003b",
       "cover_url":null,
       "description":"D'un film \u00e0 l'autre (From One Film to Another) is an anthology documentary produced by Les Films 13...",
       "rating":6.4,
       "title":"D'un film \u00e0 l'autre"
    },
    {
       "id":"4fede193312f91279600003c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjI2NTk5NjkzOV5BMl5BanBnXkFtZTcwODgwODg0NA@@._V1._SX94_SY140_.jpg",
       "description":"This is not the way it was supposed to happen. Like every other morning, Christian Echeveria, huissier...",
       "rating":5.8,
       "title":"Dernier \u00e9tage, gauche, gauche"
    },
    {
       "id":"4fede198312f91279600003d",
       "cover_url":null,
       "description":"An investigation on the management of 2009 L'Aquila earthquake by Berlusconi government and his staff.",
       "rating":7.7,
       "title":"Draquila : l'Italie qui tremble"
    },
    {
       "id":"4fede19c312f91279600003e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEzODQ0MzEwMl5BMl5BanBnXkFtZTcwNzI4MTgwNg@@._V1._SX94_SY140_.jpg",
       "description":"An exiled detective is recruited to solve a series of mysterious deaths that threaten to delay the inauguration of Empress Wu.",
       "rating":6.6,
       "title":"D\u00e9tective Dee : le myst\u00e8re de la flamme fant\u00f4me"
    },
    {
       "id":"4fede19e312f91279600003f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIxMDUzNjU5NF5BMl5BanBnXkFtZTcwMDY1MTQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A complete imbecile struggles to make it through life on his own, until a strange invention makes him unbelievably wealthy.",
       "rating":7.0,
       "title":"Easy Money"
    },
    {
       "id":"4fede1a1312f912796000040",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1._SX94_SY140_.jpg",
       "description":"A look at the early years of boxer \"Irish\" Micky Ward and his brother who helped train him before going pro in the mid 1980s.",
       "rating":7.9,
       "title":"Fighter"
    },
    {
       "id":"4fede1a5312f912796000041",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BOTUxNTAzNDE1NF5BMl5BanBnXkFtZTcwMTE1NzYwNA@@._V1._SX94_SY140_.jpg",
       "description":"The story of Giancarlo Siani, a journalist killed by the Neapolitan Mafia in 1985.",
       "rating":7.1,
       "title":"Fortap\u00e0sc"
    },
    {
       "id":"4fede1a9312f912796000042",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY3ODU5NDQ4OV5BMl5BanBnXkFtZTcwOTMxMjg0Nw@@._V1._SX94_SY140_.jpg",
       "description":"Gianni is a retiree who has become invisible to most everyone around him. In response, he tries his best to generate some kind of extracurricular love life.",
       "rating":5.9,
       "title":"Gianni et les femmes"
    },
    {
       "id":"4fede1ab312f912796000043",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIwNTM4Njg2NF5BMl5BanBnXkFtZTcwNDQwMTAwNA@@._V1._SX94_SY140_.jpg",
       "description":"A vengeful father escapes from hell and chases after the men who killed his daughter and kidnapped his granddaughter.",
       "rating":5.5,
       "title":"Hell Driver"
    },
    {
       "id":"4fede1af312f912796000044",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY1NjE1NTE0MV5BMl5BanBnXkFtZTcwOTYzNjUzNA@@._V1._SX94_SY140_.jpg",
       "description":"When his pregnant fiancee becomes the latest victim of a serial killer, a secret agent blurs the line between good and evil in his pursuit of revenge.",
       "rating":7.8,
       "title":"J'ai rencontr\u00e9 le diable"
    },
    {
       "id":"4fede1b1312f912796000045",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMzNjE4NDU1NF5BMl5BanBnXkFtZTcwMTAwNzQ0Mw@@._V1._SX94_SY140_.jpg",
       "description":"In Brooklyn, a youth from an Orthodox Jewish community is lured into becoming an Ecstasy dealer by his pal who has ties to an Israeli drug cartel.",
       "rating":5.7,
       "title":"Jewish Connection"
    },
    {
       "id":"4fede1b4312f912796000046",
       "cover_url":null,
       "description":null,
       "rating":5.6,
       "title":"Jimmy Rivi\u00e8re"
    },
    {
       "id":"4fede1ba312f912796000048",
       "cover_url":null,
       "description":"A hot young Wall Street trader finds a formula based on climatology to play the market and win big... but at what cost?",
       "rating":4.3,
       "title":"Krach"
    },
    {
       "id":"4fede1b7312f912796000047",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5ODk2NDI3Nl5BMl5BanBnXkFtZTcwMTYxMjI0Mw@@._V1._SX94_SY140_.jpg",
       "description":"A true-story account of a German businessman who saved  than 200,000 Chinese during the Nanjing massacre in 1937-38.",
       "rating":7.1,
       "title":"John Rabe"
    },
    {
       "id":"4fede1bc312f912796000049",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjI4NTYzNzQwNl5BMl5BanBnXkFtZTcwOTk1MzA4NQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":4.6,
       "title":"L'\u00e9l\u00e8ve Ducobu"
    },
    {
       "id":"4fede1c0312f91279600004a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODQ3NTM0Nzg3OV5BMl5BanBnXkFtZTcwMTE3MDMxNw@@._V1._SX94_SY140_.jpg",
       "description":"Toru recalls his life in the 1960s, when his friend Kizuki killed himself and he grew close to Naoko, Kizuki's girlfriend, and another woman, the outgoing, lively Midori.",
       "rating":6.4,
       "title":"La ballade de l'impossible"
    },
    {
       "id":"4fede1c2312f91279600004b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY5ODMyMDY4NF5BMl5BanBnXkFtZTcwNDgwMDEyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's a lesbian.",
       "rating":7.4,
       "title":"La conqu\u00eate"
    },
    {
       "id":"4fede1c5312f91279600004c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1._SX94_SY140_.jpg",
       "description":"A poor and passionate young man falls in love with a rich young woman and gives her a sense of freedom. They soon are separated by their social differences.",
       "rating":7.9,
       "title":"La nostra vita"
    },
    {
       "id":"4fede1c8312f91279600004d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQxNTcwMDc1OV5BMl5BanBnXkFtZTcwMDYyMzMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Set in 1898, this movie is based on the true story of two lions in Africa that killed 130 people over a nine month period...",
       "rating":6.7,
       "title":"La proie"
    },
    {
       "id":"4fede1cb312f91279600004e",
       "cover_url":null,
       "description":"Madrid, in the seventeenth century. Abandoned at the doorstep of a monastery, Ambrosio has been brought up by the Capucin Friars...",
       "rating":5.9,
       "title":"Le moine"
    },
    {
       "id":"4fede1ce312f91279600004f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUwNTExMTg3NF5BMl5BanBnXkFtZTcwNDYyMTM2MQ@@._V1._SX94_SY140_.jpg",
       "description":"A discovery made by a kung fu obsessed American teen sends him on an adventure to China, where he joins up with a band of martial arts warriors in order to free the imprisoned Monkey King.",
       "rating":6.6,
       "title":"Le royaume interdit"
    },
    {
       "id":"4fede1d2312f912796000050",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM1NzM0OTcxOF5BMl5BanBnXkFtZTcwODU0MjQ2NA@@._V1._SX94_SY140_.jpg",
       "description":"Seven years after the apparent death of Chen Zhen, who was shot after discovering who was responsible...",
       "rating":6.2,
       "title":"Legend of the Fist : The Return of Chen Zhen"
    },
    {
       "id":"4fede1d5312f912796000051",
       "cover_url":null,
       "description":null,
       "rating":5.2,
       "title":"L\u00e9gitime d\u00e9fense"
    },
    {
       "id":"4fede1d8312f912796000052",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1._SX94_SY140_.jpg",
       "description":"Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
       "rating":6.9,
       "title":"Mes meilleures amies"
    },
    {
       "id":"4fede1da312f912796000053",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0MzA0MzY2OV5BMl5BanBnXkFtZTcwNDk1Nzk1NQ@@._V1._SX94_SY140_.jpg",
       "description":"Marius, 12, has not n his father for years and he misses him badly. Marie, his mother, a workaholic firm manager...",
       "rating":5.3,
       "title":"Monsieur Papa"
    },
    {
       "id":"4fede1de312f912796000054",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU2MjYwODk0Ml5BMl5BanBnXkFtZTYwMjAxMTQ5._V1._SX94_SY140_.jpg",
       "description":"A lost and alone kitten joins a gang of dogs engaged in petty larceny in New York.",
       "rating":6.5,
       "title":"Oliver et Compagnie"
    },
    {
       "id":"4fede1e1312f912796000055",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzQyOTcwMDQ3NV5BMl5BanBnXkFtZTYwNjIyMDg5._V1._SX94_SY140_.jpg",
       "description":"Politics and sexual passions threaten to corrupt a young, newly-ordained priest in a small Mexican town.",
       "rating":6.8,
       "title":"Pater"
    },
    {
       "id":"4fede1e4312f912796000056",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEzOTU0NjMxNF5BMl5BanBnXkFtZTcwNzc5MDUxNA@@._V1._SX94_SY140_.jpg",
       "description":"Life for a happy couple is turned upside down after their young son dies in an accident. Based on a play by David Lindsay-Abaire.",
       "rating":7.1,
       "title":"Rabbit Hole"
    },
    {
       "id":"4fede1e7312f912796000057",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM4MjY1NTEyNV5BMl5BanBnXkFtZTcwMTc3MjcxNA@@._V1._SX94_SY140_.jpg",
       "description":"An underwater cave diving team experiences a life-threatening crisis during an expedition to the unexplored and least accessible cave system in the world.",
       "rating":5.7,
       "title":"Sanctum"
    },
    {
       "id":"4fede1ea312f912796000058",
       "cover_url":null,
       "description":"1992, A 12 years old child calls out to the whole planet. 18 years later, The Earth is still in the same state and Severn speaks again...",
       "rating":6.4,
       "title":"Severn, la voix de nos enfants"
    },
    {
       "id":"4fede1ed312f912796000059",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNTgyNTQzMDEwNV5BMl5BanBnXkFtZTcwMTQxNjI4NA@@._V1._SX94_SY140_.jpg",
       "description":"A family with three boys in the 1950s. The eldest son witnesses the loss of innocence.",
       "rating":6.9,
       "title":"The Tree of Life"
    },
    {
       "id":"4fede1f0312f91279600005a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjY1MjY4NTgyN15BMl5BanBnXkFtZTcwNDEzMzU2Nw@@._V1._SX94_SY140_.jpg",
       "description":"A chronicle of the romance between Camille and Sullivan, which begins during their adolescence and picks up after Sullivan's 8-year absence from exploring the world.",
       "rating":6.2,
       "title":"Un amour de jeunesse"
    },
    {
       "id":"4fede1f2312f91279600005b",
       "cover_url":null,
       "description":null,
       "rating":5.4,
       "title":"Voir la mer"
    },
    {
       "id":"4fede1f6312f91279600005c",
       "cover_url":null,
       "description":null,
       "rating":5.9,
       "title":"Voyez comme ils dansent"
    },
    {
       "id":"4fede1f8312f91279600005d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE0MjgyMTA2OV5BMl5BanBnXkFtZTcwOTE4MjgyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A comedy revolving around a group of teenage friends, their mishaps, and their coming of age, set in 1970s Wisconsin.",
       "rating":8.2,
       "title":"Waste Land"
    },
    {
       "id":"4fede1fa312f91279600005e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzMjY5NDIyOV5BMl5BanBnXkFtZTcwNjk5MTAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Littlefoot has been on many adventures before, but in this new edition to the Land Before Time series, the next adventure may change his life...forever.",
       "rating":5.8,
       "title":"Le cercle - Em 15/06"
    },
    {
       "id":"4fede200312f91279600005f",
       "cover_url":null,
       "description":"Karen Stouffer was tired of her stressful job and the demands of running a multi-million dollar corporation. So she and her husband Gordon decided to give it all up for a simple life in the suburbs. Unfortunately for Karen, she would soon discover life on Wisteria Lane was anything but simple.",
       "rating":7.6,
       "title":"Desperate Housewives - Saison 8 - Ep 23"
    },
    {
       "id":"4fede201312f912796000060",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzg2NTQwODAxM15BMl5BanBnXkFtZTcwNDc3MTc1NQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":7.4,
       "title":"Heartland - Ep 18"
    },
    {
       "id":"4fede204312f912796000061",
       "cover_url":null,
       "description":null,
       "rating":0.0,
       "title":"[MI-5] - Ep 6"
    },
    {
       "id":"4fede207312f912796000062",
       "cover_url":null,
       "description":null,
       "rating":0.0,
       "title":"Nurse Jackie - Saison 3 - Ep 12"
    },
    {
       "id":"4fede209312f912796000063",
       "cover_url":null,
       "description":null,
       "rating":0.0,
       "title":"Strike Back - Saison 1 - Ep 3"
    },
    {
       "id":"4fede20b312f912796000064",
       "cover_url":null,
       "description":"This is what happens when you combine Lady Gaga's 'Telephone' with 'The Office' and whatever drugs the crazy Double Rainbow guy was on.",
       "rating":0.0,
       "title":"The Office - Saison 7 - Ep 26"
    },
    {
       "id":"4fede2cd312f9127960001ae",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg4ODcyMjY4NV5BMl5BanBnXkFtZTcwOTAyMDYxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Honest Edward Maynard finds himself serving as ship's surgeon under the infamous pirate Blackbeard.",
       "rating":5.9,
       "title":"Barbe-Noire le pirate"
    },
    {
       "id":"4fede2d1312f9127960001af",
       "cover_url":null,
       "description":"As usual with most of the RKO films from this era \"presented\" by RKO-owner Howard Hughes, the PCA number...",
       "rating":5.4,
       "title":"Belle mais dangereuse"
    },
    {
       "id":"4fede2d3312f9127960001b0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY2NDYzNzQ5NF5BMl5BanBnXkFtZTcwOTI4NDIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Three women set out to find eligible millionaires to marry, but find true love in the process.",
       "rating":6.9,
       "title":"Comment \u00e9pouser un millionnaire"
    },
    {
       "id":"4fede2d5312f9127960001b1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY5MTgxOTM5Nl5BMl5BanBnXkFtZTcwNzk4MDMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Three college students chose a class project on Gossip and how fast it spreads, which spirals out of control.",
       "rating":5.6,
       "title":"Comm\u00e9rages"
    },
    {
       "id":"4fede2d8312f9127960001b2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjI3NjIzMDA4NV5BMl5BanBnXkFtZTcwMzg4NTczNA@@._V1._SX94_SY140_.jpg",
       "description":"Elmer Gantry is a fast talking, hard drinking traveling salesman who always has a risqu\u00e9 story and a...",
       "rating":7.8,
       "title":"Elmer Gantry"
    },
    {
       "id":"4fede2db312f9127960001b3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk1NDM3Njg3M15BMl5BanBnXkFtZTYwODU5NTU2._V1._SX94_SY140_.jpg",
       "description":"Alcoholic newspaperman Lew Marsh hits bottom, loses his job and is rehabilitated by Charley Dolan. After...",
       "rating":6.9,
       "title":"Feu sur le gang"
    },
    {
       "id":"4fede2df312f9127960001b4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAwNjAyNTQ5MV5BMl5BanBnXkFtZTcwMzU4MzEyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Jim Deakins is a frontiersman and Indian trader who is making a perilous journey with a group of other...",
       "rating":7.1,
       "title":"La Captive aux yeux clairs"
    },
    {
       "id":"4fede2e2312f9127960001b5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ1MDk1MDg2OF5BMl5BanBnXkFtZTcwMjExNjgwNA@@._V1._SX94_SY140_.jpg",
       "description":"Chronicles the life of queen Elizabeth I, before she became the queen of England. Apart from taking part in the court intrigues...",
       "rating":6.6,
       "title":"La Reine Vierge"
    },
    {
       "id":"4fede2e4312f9127960001b6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIyMTM3ODU5NF5BMl5BanBnXkFtZTcwOTQ4MjI0NA@@._V1._SX94_SY140_.jpg",
       "description":"A scout leading a wagon train through hostile Indian country unwittingly gets involved with a Sioux chief's daughter.",
       "rating":6.4,
       "title":"La Rivi\u00e8re de nos amours"
    },
    {
       "id":"4fede2e7312f9127960001b7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI0Mjc2MTA1MF5BMl5BanBnXkFtZTcwNTI5MTI1MQ@@._V1._SX94_SY140_.jpg",
       "description":"Matt Calder, who lives on a remote farm with his young son Mark, helps two unexpected visitors who lose control of their raft on the nearby river...",
       "rating":6.6,
       "title":"La rivi\u00e8re sans retour"
    },
    {
       "id":"4fede2e9312f9127960001b8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI5NzU0ODI2M15BMl5BanBnXkFtZTcwNzIwMDQ3Mg@@._V1._SX94_SY140_.jpg",
       "description":"Sir William Hamilton, a widower of mature years, is British ambassador to the Court of Naples. Emma...",
       "rating":7.1,
       "title":"Lady Hamilton"
    },
    {
       "id":"4fede2eb312f9127960001b9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIwNjQwNDE5M15BMl5BanBnXkFtZTcwNTI2MTgxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Portrays in warm-hearted detail the life and loves of one extraordinary man. We meet the imposingly rotund General Clive Wynne-Candy...",
       "rating":8.1,
       "title":"Le Colonel Blimp"
    },
    {
       "id":"4fede2ef312f9127960001ba",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkzNjAwNDY5Ml5BMl5BanBnXkFtZTcwNjMxOTIxMw@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.7,
       "title":"Le Courrier de l'or"
    },
    {
       "id":"4fede2f2312f9127960001bb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg0NDgyMzU5OF5BMl5BanBnXkFtZTcwMDM1NTQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Two high-spirited young students at St. Francis Academy For Girls keep things hopping for the challenged Mother Superior and her staff of bewildered Sisters.",
       "rating":7.0,
       "title":"Le Dortoir des anges"
    },
    {
       "id":"4fede2f5312f9127960001bc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ5MTA4MDA5Ml5BMl5BanBnXkFtZTYwMTgwMjE5._V1._SX94_SY140_.jpg",
       "description":"Dorothy Gale is swept away to a magical land in a tornado and embarks on a quest to  the Wizard who can help her return home.",
       "rating":8.2,
       "title":"Le Magicien d'Oz"
    },
    {
       "id":"4fede2f8312f9127960001bd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNjg2NTkzMjg5Nl5BMl5BanBnXkFtZTcwNzQzMzU0Mw@@._V1._SX94_SY140_.jpg",
       "description":"After opening a convent in the Himalayas, five nuns encounter conflict and tension - both with the natives and also within their own group - as they attempt to adapt to their remote, exotic surroundings.",
       "rating":8.0,
       "title":"Le Narcisse noir"
    },
    {
       "id":"4fede2fb312f9127960001be",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNDc4Njc0MjYzOV5BMl5BanBnXkFtZTYwNTg5NTk5._V1._SX94_SY140_.jpg",
       "description":"The neighbors of a frontier family turn on them when it is suspected that their adopted daughter was stolen from the local Kiawa tribe.",
       "rating":6.8,
       "title":"Le Vent de la plaine"
    },
    {
       "id":"4fede2ff312f9127960001bf",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMzMjg3MjYwM15BMl5BanBnXkFtZTcwNTYwMzUzMg@@._V1._SX94_SY140_.jpg",
       "description":"Showman Jerry Travers is working for producer Horace Hardwick in London. Jerry demonstrates his new dance steps late one night in Horace's hotel...",
       "rating":7.8,
       "title":"Le danseur du dessus"
    },
    {
       "id":"4fede302312f9127960001c0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcyNTM5Mjc4Ml5BMl5BanBnXkFtZTcwNjYyNTIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"When Grandduke Charles, the prince-regent of Carpathia, a fictitious Balkan country which could start a European war by switching alliances...",
       "rating":6.5,
       "title":"Le prince et la danseuse"
    },
    {
       "id":"4fede306312f9127960001c1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUzODk5OTgxMl5BMl5BanBnXkFtZTcwMjEwNzkzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Two British agents are murdered by a mysterious Neonazi organization in West Berlin. The British Secret Service sends agent Quiller to investigate...",
       "rating":6.5,
       "title":"Le secret du rapport Quiller"
    },
    {
       "id":"4fede30a312f9127960001c2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEyOTU5NTUwMF5BMl5BanBnXkFtZTYwMzQ1NTM2._V1._SX94_SY140_.jpg",
       "description":"Two singers, best friends Lorelei Lee and Dorothy Shaw travel to Paris pursued by a private detective hired by Lorelei's fianc\u00e9's disapproving father to keep an eye on her, a rich, enamoured old man and many other doting admirers.",
       "rating":7.1,
       "title":"Les Hommes pr\u00e9f\u00e8rent les blondes"
    },
    {
       "id":"4fede30b312f9127960001c3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg4MTQ0NTA3MF5BMl5BanBnXkFtZTcwMDcwODYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"After being discredited as a coward, a 19th century seaman (Peter O'Toole) lives for only one purpose: to redeem himself. Based on Joseph Conrad's novel written in 1900.",
       "rating":6.8,
       "title":"Lord Jim"
    },
    {
       "id":"4fede30d312f9127960001c4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5NjM4Mjg4OF5BMl5BanBnXkFtZTcwNTIwNzkzMQ@@._V1._SX94_SY140_.jpg",
       "description":"As two couples are visiting Niagara Falls, tensions between one wife and her husband reach the level of murder.",
       "rating":7.0,
       "title":"Niagara"
    },
    {
       "id":"4fede30f312f9127960001c5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM3Mjg2OTQ2OV5BMl5BanBnXkFtZTcwOTMwODIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"During the Vietnam War, a soldier finds himself the outsider of his own squad when they unnecessarily kidnap a female villager.",
       "rating":7.0,
       "title":"Outrages"
    },
    {
       "id":"4fede311312f9127960001c6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcxMTYwNzkzN15BMl5BanBnXkFtZTcwNTA0ODgyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Peggy Sue faints at a Highschool reunion. When she wakes up she finds herself in her own past, just before she finished school.",
       "rating":6.3,
       "title":"Peggy Sue s'est mari\u00e9e"
    },
    {
       "id":"4fede314312f9127960001c7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5ODcwNTU3MV5BMl5BanBnXkFtZTYwMDI2NzA5._V1._SX94_SY140_.jpg",
       "description":"A major heist goes off as planned, until bad luck and double crosses cause everything to unravel.",
       "rating":7.9,
       "title":"Quand la ville dort"
    },
    {
       "id":"4fede317312f9127960001c8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNTY2NDY2NTkwNV5BMl5BanBnXkFtZTcwNTI3OTkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Dr. John Holden ventures to London to attend a paranormal psychology symposium with the intention to expose devil cult leader...",
       "rating":7.6,
       "title":"Rendez-vous avec la peur"
    },
    {
       "id":"4fede31c312f9127960001c9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA2MDUxNjQ0MzZeQTJeQWpwZ15BbWU3MDc5MzQ2MjE@._V1._SX94_SY140_.jpg",
       "description":"",
       "rating":6.8,
       "title":"Retour avant la nuit"
    },
    {
       "id":"4fede31e312f9127960001ca",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjI4NjA4ODUwM15BMl5BanBnXkFtZTcwNTU1MzQ3Mg@@._V1._SX94_SY140_.jpg",
       "description":"Tough cop Dave Bannion takes on a politically powerful crime syndicate.",
       "rating":8.0,
       "title":"R\u00e8glement de comptes"
    },
    {
       "id":"4fede321312f9127960001cb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgzNzIyNjU4MF5BMl5BanBnXkFtZTcwODEyODgxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Biopic of 1930's Chinese actress Ruan Ling Yu.",
       "rating":7.5,
       "title":"The Actress"
    },
    {
       "id":"4fede323312f9127960001cc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY4MDQyNjM2OF5BMl5BanBnXkFtZTcwMjQxOTAzMw@@._V1._SX94_SY140_.jpg",
       "description":"The story of how the novel \"Mrs. Dalloway\" affects three generations of women, all of whom, in one way or another, have had to deal with suicide in their lives.",
       "rating":7.5,
       "title":"The Hours"
    },
    {
       "id":"4fede327312f9127960001cd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg1NzQ3NjQzMl5BMl5BanBnXkFtZTcwOTc0NjAwMQ@@._V1._SX94_SY140_.jpg",
       "description":"In Los Angeles, after a violent drug rip-off, the Los Angeles Police Department detectives find the identity of the trio - the sadistic I.Q...",
       "rating":7.1,
       "title":"Un faux mouvement"
    },
    {
       "id":"4fede32a312f9127960001ce",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIwMTU4MDM0Ml5BMl5BanBnXkFtZTcwNjMyMzExNQ@@._V1._SX94_SY140_.jpg",
       "description":"A policeman and his prisoner survive the crash of the plane in the mountains in which they were traveling...",
       "rating":5.6,
       "title":"Une balle vous attend"
    },
    {
       "id":"4fede32c312f9127960001cf",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjExODgzMDA4M15BMl5BanBnXkFtZTcwNzY0NTkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"An army lieutenant accused of robbery pursues the real thief on a frantic chase through Mexico aided by the thief's fiancee.",
       "rating":7.1,
       "title":"\u00c7a commence \u00e0 Vera-Cruz"
    },
    {
       "id":"4fede330312f9127960001d0",
       "cover_url":null,
       "description":"Moles threaten to foil a team of secret agents' plan.",
       "rating":5.5,
       "title":"Agents secrets"
    },
    {
       "id":"4fede334312f9127960001d1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUyNTYxNzEzNF5BMl5BanBnXkFtZTcwODY4NTgyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of a sergeant and the inner core members of his unit as they try to serve in and survive World War II.",
       "rating":7.3,
       "title":"Au-del\u00e0 de la gloire"
    },
    {
       "id":"4fede336312f9127960001d2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzQyOTQ0ODk2NF5BMl5BanBnXkFtZTcwNTkwOTI3MQ@@._V1._SX94_SY140_.jpg",
       "description":"When a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.",
       "rating":8.2,
       "title":"Ben-Hur"
    },
    {
       "id":"4fede33a312f9127960001d3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUwOTkzMjg0Nl5BMl5BanBnXkFtZTcwMzUxMjAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"This action movie unfolds with the story of Bei, a salesman at a workout equipment store, who harbors dreams of adventures...",
       "rating":5.6,
       "title":"Espion amateur"
    },
    {
       "id":"4fede33c312f9127960001d4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1._SX94_SY140_.jpg",
       "description":"A team of mercenaries is given the assignment to take out a corrupt military leader and a rogue CIA operative on a Latin American island.",
       "rating":6.5,
       "title":"Expendables : unit\u00e9 sp\u00e9ciale"
    },
    {
       "id":"4fede33e312f9127960001d5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY1MDYxNDg3MF5BMl5BanBnXkFtZTcwMDg0MDk4Mg@@._V1._SX94_SY140_.jpg",
       "description":"A television program about a special tactical team that rescues hostages, busts gangs, defuses bombs, and takes on other tough cases.",
       "rating":7.3,
       "title":"Flash Point"
    },
    {
       "id":"4fede33f312f9127960001d6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzODI3NzYwOV5BMl5BanBnXkFtZTcwNzYxMDAyMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":5.7,
       "title":"Le Toubib"
    },
    {
       "id":"4fede343312f9127960001d7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTExNjg2MDk0MzdeQTJeQWpwZ15BbWU3MDUwNDc2MTE@._V1._SX94_SY140_.jpg",
       "description":"King Arthur establishes the greatest reign England has ever n, and along for the ride are his indispensable Knights of the Round Table...",
       "rating":6.2,
       "title":"Les chevaliers de la Table ronde"
    },
    {
       "id":"4fede345312f9127960001d8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwMTU2OTMxNV5BMl5BanBnXkFtZTcwMzg3MTYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A disgraced former fireman takes on a group of terrorists holding the Vice President and others hostage during the seventh game of the NHL Stanley Cup finals.",
       "rating":5.4,
       "title":"Mort subite"
    },
    {
       "id":"4fede347312f9127960001d9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcxNDYzMjU1Ml5BMl5BanBnXkFtZTcwMTYzOTM3Mg@@._V1._SX94_SY140_.jpg",
       "description":"A young ninja turns his back on the orphanage that raised him, leading to a confrontation with a fellow ninja from the clan.",
       "rating":6.3,
       "title":"Ninja assassin"
    },
    {
       "id":"4fede34a312f9127960001da",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg3NzAxNTcyNl5BMl5BanBnXkFtZTcwMzM2ODAyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Action star Jean Claude Van Damme plays a fashion designer who must join forces with a C.I.A. agent to combat terrorism.",
       "rating":4.3,
       "title":"Pi\u00e8ge \u00e0 Hongkong"
    },
    {
       "id":"4fede34d312f9127960001db",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzAzOTk1OTIyM15BMl5BanBnXkFtZTcwNDIzNTQzMQ@@._V1._SX94_SY140_.jpg",
       "description":"#1 NASCAR driver Ricky Bobby stays atop the heap thanks to a pact with his best friend and teammate, Cal Naughton, Jr. But when a French Formula One driver, makes his way up the ladder, Ricky Bobby's talent and devotion are put to the test.",
       "rating":6.4,
       "title":"Ricky Bobby : roi du circuit"
    },
    {
       "id":"4fede351312f9127960001dc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI0MjE2MzUwOV5BMl5BanBnXkFtZTYwMTk5NjU3._V1._SX94_SY140_.jpg",
       "description":"Jackie Chan plays a Chinese man who travels to the Wild West to rescue a kidnapped princess. After teaming up with a train robber, the unlikely duo takes on a Chinese traitor and his corrupt boss.",
       "rating":6.5,
       "title":"Shanghai Kid"
    },
    {
       "id":"4fede354312f9127960001dd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIwNTE0Njc0Nl5BMl5BanBnXkFtZTcwMTE5MTAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Two Russian and German snipers play a game of cat-and-mouse during the Battle of Stalingrad.",
       "rating":7.5,
       "title":"Stalingrad"
    },
    {
       "id":"4fede357312f9127960001de",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE2ODY0NDMyOV5BMl5BanBnXkFtZTcwNDQ4NDAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Col. Guile and various other martial arts heroes fight against the tyranny of Dictator M. Bison and his cohorts.",
       "rating":3.4,
       "title":"Street fighter"
    },
    {
       "id":"4fede35c312f9127960001df",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk0Mjg4MjgwMl5BMl5BanBnXkFtZTcwODU1NjAyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A rape victim is exacting revenge on her agressors in a small town outside San Francisco. Dirty Harry, on suspension for angering his superiors (again), is assigned to the case.",
       "rating":6.5,
       "title":"Sudden Impact : le retour de l'inspecteur Harry"
    },
    {
       "id":"4fede360312f9127960001e0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjY5NTMwMzQ4NF5BMl5BanBnXkFtZTYwMDMxMjI5._V1._SX94_SY140_.jpg",
       "description":"The cop test pilot for an experimental police helicopter learns the sinister implications of the new vehicle.",
       "rating":6.1,
       "title":"Tonnerre de feu"
    },
    {
       "id":"4fede364312f9127960001e1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAwNTk4NzYxNl5BMl5BanBnXkFtZTcwNDQ0ODUxMQ@@._V1._SX94_SY140_.jpg",
       "description":"The \"universal soldiers\" must fight the whole army. When the military's supercomputer S.E.T.H gets out of control",
       "rating":3.6,
       "title":"Universal Soldier, le combat absolu"
    },
    {
       "id":"4fede367312f9127960001e2",
       "cover_url":null,
       "description":"Boots Malone is jockey's agent and a bit of a wheeler-dealer who went from living at the Ritz to living...",
       "rating":6.5,
       "title":"Vocation secr\u00e8te"
    },
    {
       "id":"4fede36a312f9127960001e3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI1Mzk4MTYwNF5BMl5BanBnXkFtZTcwOTU0MTAwMQ@@._V1._SX94_SY140_.jpg",
       "description":"The Griswold family's cross-country drive to the Walley World theme park proves to be much  arduous than they ever anticipated.",
       "rating":7.3,
       "title":"Bonjour les vacances"
    },
    {
       "id":"4fede36d312f9127960001e4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg1MDA1Njg1MV5BMl5BanBnXkFtZTcwMzU2ODk0Ng@@._V1._SX94_SY140_.jpg",
       "description":"An idealistic staffer for a new presidential candidate gets a crash course on dirty politics during his stint on the campaign trail.",
       "rating":7.3,
       "title":"Far North"
    },
    {
       "id":"4fede370312f9127960001e5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg3ODc2Nzc3M15BMl5BanBnXkFtZTYwMDMzNzc5._V1._SX94_SY140_.jpg",
       "description":"Daniel accompanies his mentor to Okinawa who is off to  his dying father and confront his old rival, while Daniel inadvertently makes an enemy of his own.",
       "rating":5.5,
       "title":"Karate Kid 2"
    },
    {
       "id":"4fede374312f9127960001e6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyNjE3MjM2MV5BMl5BanBnXkFtZTYwMzY5ODk4._V1._SX94_SY140_.jpg",
       "description":"A handyman/martial arts master agrees to teach a bullied boy karate and shows him that there is  to the martial art than fighting.",
       "rating":7.0,
       "title":"Karate Kid 3 -  Karate Kid 3"
    },
    {
       "id":"4fede378312f9127960001e7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyNjE3MjM2MV5BMl5BanBnXkFtZTYwMzY5ODk4._V1._SX94_SY140_.jpg",
       "description":"A handyman/martial arts master agrees to teach a bullied boy karate and shows him that there is  to the martial art than fighting.",
       "rating":7.0,
       "title":"Karat\u00e9 Kid, le moment de v\u00e9rit\u00e9"
    },
    {
       "id":"4fede37a312f9127960001e8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY2MTAwNTE0MV5BMl5BanBnXkFtZTcwMDMyMjAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Lancelot falls in love with Guinevere, who is due to be married to King Arthur. Meanwhile, a violent warlord tries to seize power from Arthur and his Knights of the Round Table.",
       "rating":5.7,
       "title":"Lancelot"
    },
    {
       "id":"4fede37e312f9127960001e9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNjI3NzI2MjY2MF5BMl5BanBnXkFtZTYwMDM5ODU5._V1._SX94_SY140_.jpg",
       "description":"The elder Zorro trains his replacement to fight the enemy Montero.",
       "rating":6.7,
       "title":"Le Masque De Zorro"
    },
    {
       "id":"4fede382312f9127960001ea",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1._SX94_SY140_.jpg",
       "description":"In 13th century England, Robin and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.",
       "rating":6.7,
       "title":"Robin des bois"
    },
    {
       "id":"4fede385312f9127960001eb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIxOTgyNzY1NV5BMl5BanBnXkFtZTYwODgyOTk5._V1._SX94_SY140_.jpg",
       "description":"Andre-Louis au is a nobleman's bastard in the days of the French revolution. Noel, the Marquis de Mayne...",
       "rating":7.7,
       "title":"Scaramouche"
    },
    {
       "id":"4fede388312f9127960001ec",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMwMTk3NDU4NV5BMl5BanBnXkFtZTcwMzA5NjIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The American artist couple Port and Kit sby travel aimlessly through Africa, searching for new experiences that could give sense to their relationship. But the flight to distant regions only leads both deeper into despair.",
       "rating":6.6,
       "title":"Un th\u00e9 au Sahara"
    },
    {
       "id":"4fede38c312f9127960001ed",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcxOTM5NzYyOF5BMl5BanBnXkFtZTcwNDQ5NzYxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Cowboy Ross McEwen arrives in town. He asks the banker for a loan of $2000. When the banker asks about securing a loan that large...",
       "rating":6.8,
       "title":"Four Faces West"
    },
    {
       "id":"4fede38f312f9127960001ee",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0MzQzMjUxM15BMl5BanBnXkFtZTcwNzgyNjg0NA@@._V1._SX94_SY140_.jpg",
       "description":"Settlers traveling through the Oregon desert in 1845 find themselves stranded in harsh conditions.",
       "rating":6.6,
       "title":"La derni\u00e8re piste"
    },
    {
       "id":"4fede392312f9127960001ef",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE1ODkyMDAxNF5BMl5BanBnXkFtZTcwODk2OTcxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Sheriff Sean Kilpatrick is a pacifist. Frank Brand is the leader of a band of killers. When their paths...",
       "rating":5.6,
       "title":"Le sh\u00e9rif ne pardonne pas"
    },
    {
       "id":"4fede396312f9127960001f0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIxOTQ3MDY5MV5BMl5BanBnXkFtZTcwNjQ4Nzk0MQ@@._V1._SX94_SY140_.jpg",
       "description":"When the government agency fails to deliver even the meager supplies due by treaty to the proud Cheyenne tribe in their barren desert reserve...",
       "rating":6.9,
       "title":"Les Cheyennes"
    },
    {
       "id":"4fede39a312f9127960001f1",
       "cover_url":null,
       "description":"Follows four friends in their quest to form a punk band. As workers protests sweep across the country...",
       "rating":6.9,
       "title":"All That I Love"
    },
    {
       "id":"4fede39d312f9127960001f2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ0NjAzMzMxM15BMl5BanBnXkFtZTcwMzEzNzQ0Mg@@._V1._SX94_SY140_.jpg",
       "description":"Since 1978, Anvil has become one of heavy metal's most influential yet commercially unsuccessful acts. In 2006, after a fledging European tour Anvil sets out to record their thirteenth album and continue to follow their dreams.",
       "rating":8.0,
       "title":"Anvil"
    },
    {
       "id":"4fede3a0312f9127960001f3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE2MjMxNzg1NF5BMl5BanBnXkFtZTcwNjUxMjAwMQ@@._V1._SX94_SY140_.jpg",
       "description":"Based on a true story. Naive teenagers plot to murder one of their own, who has been too much of a bully to them.",
       "rating":7.0,
       "title":"Bully"
    },
    {
       "id":"4fede3a2312f9127960001f4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg4NDgxMjM5NF5BMl5BanBnXkFtZTcwNzM0OTAzMg@@._V1._SX94_SY140_.jpg",
       "description":"A 17th century Hungarian countess embarks on a murderous undertaking, with the belief that bathing in the blood of virgins will preserve her beauty.",
       "rating":6.2,
       "title":"La comtesse"
    },
    {
       "id":"4fede3a5312f9127960001f5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE3NjY2MDg0MF5BMl5BanBnXkFtZTcwMDIwMjg4NA@@._V1._SX94_SY140_.jpg",
       "description":"An old shepherd lives his last days in a quiet medieval village perched high on the hills of Calabria...",
       "rating":7.2,
       "title":"Le quattro volte"
    },
    {
       "id":"4fede3a8312f9127960001f6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1._SX94_SY140_.jpg",
       "description":"Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes k the heart for their own agenda as well.",
       "rating":7.2,
       "title":"Le secret"
    },
    {
       "id":"4fede3ad312f9127960001f7",
       "cover_url":null,
       "description":"March 22, 2067. At dawn of life, Milana remembers her life, when she was a young Chechen immigrant in Paris, struggling for a better life along with her school friends.",
       "rating":6.1,
       "title":"Les mains en l'air"
    },
    {
       "id":"4fede3b2312f9127960001f8",
       "cover_url":null,
       "description":"Antoine Rives, a young independent journalist, is shooting news about the return of Westerners fleeing human slaughters in Rwanda...",
       "rating":5.5,
       "title":"Lignes de front"
    },
    {
       "id":"4fede3b4312f9127960001f9",
       "cover_url":null,
       "description":null,
       "rating":8.2,
       "title":"Medianeras"
    },
    {
       "id":"4fede3b6312f9127960001fa",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE4ODczNzk0Ml5BMl5BanBnXkFtZTcwMTQ5NDIxMw@@._V1._SX94_SY140_.jpg",
       "description":"A mother desperately searches for the killer that framed her son for their horrific murder.",
       "rating":7.9,
       "title":"Mother"
    },
    {
       "id":"4fede3b7312f9127960001fb",
       "cover_url":null,
       "description":null,
       "rating":7.0,
       "title":"T\u00e9l\u00e9phone public"
    },
    {
       "id":"4fede3b9312f9127960001fc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgxMDUzOTg3MF5BMl5BanBnXkFtZTcwOTM1NDkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho whom he met that evening at a coffee shop.",
       "rating":7.6,
       "title":"After Hours"
    },
    {
       "id":"4fede3bb312f9127960001fd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAwNDgwNzg4M15BMl5BanBnXkFtZTYwNzUxMjg5._V1._SX94_SY140_.jpg",
       "description":"In 1941 an American journalist in Greece is given a secret list of collaborators. He is helped by the...",
       "rating":5.8,
       "title":"Ath\u00e8nes"
    },
    {
       "id":"4fede3be312f9127960001fe",
       "cover_url":null,
       "description":"How to become a killing machine in Algeria when, at the start, you are a Pacifist Breton. Let Lieutenant...",
       "rating":7.2,
       "title":"Avoir 20 ans dans les Aur\u00e8s"
    },
    {
       "id":"4fede3c1312f9127960001ff",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTAwMTc3NzA0NzleQTJeQWpwZ15BbWU3MDAxMTUxMzE@._V1._SX94_SY140_.jpg",
       "description":"A frigid young housewife decides to spend her midweek afternoons as a prostitute.",
       "rating":7.8,
       "title":"Belle de jour"
    },
    {
       "id":"4fede3c4312f912796000200",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg2OTI1MTAyMF5BMl5BanBnXkFtZTYwMjgzODg4._V1._SX94_SY140_.jpg",
       "description":"When Lucy Honeychurch and chaperone Charlotte Bartlett find themselves in Florence with rooms without views...",
       "rating":7.4,
       "title":"Chambre avec vue"
    },
    {
       "id":"4fede3c8312f912796000201",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE3OTQwODkwNF5BMl5BanBnXkFtZTcwNTM5MTIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"On the 100th anniversary of the founding of a watchmaking company in Geneva, Charles D\u00e9 the founder's...",
       "rating":7.0,
       "title":"Charles, mort ou vif"
    },
    {
       "id":"4fede3ca312f912796000202",
       "cover_url":null,
       "description":null,
       "rating":5.1,
       "title":"Cocagne"
    },
    {
       "id":"4fede3cc312f912796000203",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyOTcwNTYxNl5BMl5BanBnXkFtZTYwNTUyMjg5._V1._SX94_SY140_.jpg",
       "description":"A wounded criminal and his dying partner take refuge at a beachfront castle. The owners of the castle...",
       "rating":7.2,
       "title":"Cul-de-sac"
    },
    {
       "id":"4fede3ce312f912796000204",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc4MzEyODI0Ml5BMl5BanBnXkFtZTcwNjIyNDQ4Mw@@._V1._SX94_SY140_.jpg",
       "description":"A small-town girl ventures to Los Angeles and finds her place in a neo-burlesque club run by a former dancer.",
       "rating":6.1,
       "title":"Diva"
    },
    {
       "id":"4fede3d2312f912796000205",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA2NTQyMDc1M15BMl5BanBnXkFtZTcwOTU4MzYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"In 18th Century in Japan, the paper merchant Jihei (Kichiemon Nakamura) falls in love for the courtesan Koharu (Shima Iwashita)...",
       "rating":7.6,
       "title":"Double suicide \u00e0 Amijima"
    },
    {
       "id":"4fede3d4312f912796000206",
       "cover_url":null,
       "description":null,
       "rating":6.0,
       "title":"Ignace"
    },
    {
       "id":"4fede3da312f912796000207",
       "cover_url":null,
       "description":null,
       "rating":5.0,
       "title":"J'avais sept filles"
    },
    {
       "id":"4fede3dd312f912796000208",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwMzMzMzUwMl5BMl5BanBnXkFtZTcwMjI1ODAwMQ@@._V1._SX94_SY140_.jpg",
       "description":"A gambler and a prostitute become business partners in a remote Old West mining town, and their enterprise thrives until a large corporation arrives on the scene.",
       "rating":7.7,
       "title":"MC CABE & MRS MILLER"
    },
    {
       "id":"4fede3e1312f912796000209",
       "cover_url":null,
       "description":null,
       "rating":7.4,
       "title":"L'argent de la vieille"
    },
    {
       "id":"4fede3e4312f91279600020a",
       "cover_url":null,
       "description":"Inspector Wens moves into a Paris boarding house to catch a serial killer.",
       "rating":7.7,
       "title":"L'assassin habite au 21"
    },
    {
       "id":"4fede3e7312f91279600020b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI4Mjk2MTU4MF5BMl5BanBnXkFtZTcwODgzMzU0Mw@@._V1._SX94_SY140_.jpg",
       "description":"Hakuchu no Torima\" is the portrayal of a violent rapist as n through the recollections of his wife and one of his victims...",
       "rating":7.0,
       "title":"L'obs\u00e9d\u00e9 en plein jour"
    },
    {
       "id":"4fede3eb312f91279600020c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU3NTQ1OTA4NF5BMl5BanBnXkFtZTcwNTM4NjczNA@@._V1._SX94_SY140_.jpg",
       "description":"A band of medieval mercenaries take revenge on a noble lord who decides not to pay them by kidnapping the betrothed of the noble's son...",
       "rating":6.6,
       "title":"La chair et le sang"
    },
    {
       "id":"4fede3ed312f91279600020d",
       "cover_url":null,
       "description":"Mario (Tognazzi), a rich and eccentric war hero befriends Marco (Dewaere), a loner with a sailboat and...",
       "rating":6.2,
       "title":"La chambre de l'\u00e9v\u00eaque"
    },
    {
       "id":"4fede3f0312f91279600020e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA1NDE2MTMzMV5BMl5BanBnXkFtZTYwNjgzNTM2._V1._SX94_SY140_.jpg",
       "description":"Discovering her boyfriend is married, a young lady attempts to take her life, pausing only to phone a Help Line...",
       "rating":6.1,
       "title":"La femme du pr\u00eatre"
    },
    {
       "id":"4fede3f3312f91279600020f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzY0MzE3MjkxNF5BMl5BanBnXkFtZTcwOTIwNTQ4Mg@@._V1._SX94_SY140_.jpg",
       "description":"Based on a true incident, this tells the story of a troubled young man who kills his sister's reactionary...",
       "rating":6.7,
       "title":"La grande bourgeoise"
    },
    {
       "id":"4fede3f6312f912796000210",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwMjQyODU5Nl5BMl5BanBnXkFtZTcwMjk2NDU4MQ@@._V1._SX94_SY140_.jpg",
       "description":"Spring 1936, a young unemployed communist, David, leaves his hometown Liverpool to join the fight against fascism in Spain...",
       "rating":7.4,
       "title":"Land and Freedom"
    },
    {
       "id":"4fede3f9312f912796000211",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0OTQyNDM4OF5BMl5BanBnXkFtZTcwNDcxNDU3MQ@@._V1._SX94_SY140_.jpg",
       "description":"A modest taylor the women found irresistible inherit a Maison de couture in financial difficulty. Decided to save it he prepare a great collection...",
       "rating":5.9,
       "title":"Le couturier de ces dames"
    },
    {
       "id":"4fede3fc312f912796000212",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyNTgyNTQ3N15BMl5BanBnXkFtZTcwMzgyMDYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Dictator Adenoid Hynkel has a doppelganger, a poor but kind Jewish barber living in the slums, who one day is mistaken for Hynkel.",
       "rating":8.5,
       "title":"Le dictateur"
    },
    {
       "id":"4fede400312f912796000213",
       "cover_url":null,
       "description":"A play writer entertains the actors of his next play, including his ex-wife and her new lover. Everyone is finding his new place.",
       "rating":5.6,
       "title":"Le mariage \u00e0 trois"
    },
    {
       "id":"4fede403312f912796000214",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY1NTM2MjgxMV5BMl5BanBnXkFtZTcwNjA3OTkyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Greece 1939 - 1952 Fascist, Nazi, Communist conflict as n through a family of travelling provincial players",
       "rating":7.8,
       "title":"Le voyage des com\u00e9diens"
    },
    {
       "id":"4fede405312f912796000215",
       "cover_url":null,
       "description":null,
       "rating":5.1,
       "title":"Les loups dans l'ab\u00eeme"
    },
    {
       "id":"4fede408312f912796000216",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY3NjAxNjYxM15BMl5BanBnXkFtZTcwMzk2NjYxNA@@._V1._SX94_SY140_.jpg",
       "description":"The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
       "rating":8.5,
       "title":"Les temps modernes"
    },
    {
       "id":"4fede40b312f912796000217",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI4Mjc2Mjg1Nl5BMl5BanBnXkFtZTYwMzA3ODk5._V1._SX94_SY140_.jpg",
       "description":"While going to the town of Ashby Wake, the drifter Cassie is hit by a car driven by Marion Kirkman and loses her memory...",
       "rating":5.7,
       "title":"Les t\u00e9moins"
    },
    {
       "id":"4fede40e312f912796000218",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg2OTE1MzMxM15BMl5BanBnXkFtZTcwNzEyMzcyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A Canadian archaeological team in Sicily accidentally unleashes vengeful ghosts of five demonic nuns whom were murdered 500 years earlier and the ghosts now set out to kill the group and townspeople alike.",
       "rating":4.2,
       "title":"Liza"
    },
    {
       "id":"4fede411312f912796000219",
       "cover_url":null,
       "description":null,
       "rating":7.8,
       "title":"Monsieur Personne"
    },
    {
       "id":"4fede414312f91279600021a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQxMjU5MDMzNV5BMl5BanBnXkFtZTcwMzY4MDUyMQ@@._V1._SX94_SY140_.jpg",
       "description":"In this adaptation of the Thomas Mann novel, avant-garde composer Gustave Aschenbach (loosely based...",
       "rating":7.5,
       "title":"Mort \u00e0 Venise"
    },
    {
       "id":"4fede416312f91279600021b",
       "cover_url":null,
       "description":null,
       "rating":3.3,
       "title":"Pr\u00e9sum\u00e9 dangereux"
    },
    {
       "id":"4fede41a312f91279600021c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUyOTI0NzExMV5BMl5BanBnXkFtZTcwMzE5Nzg5Mg@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":5.8,
       "title":"Quand passent les faisans"
    },
    {
       "id":"4fede41d312f91279600021d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI1NDM2NzEzOV5BMl5BanBnXkFtZTYwMTE2Mzc5._V1._SX94_SY140_.jpg",
       "description":"Director/choreographer Bob Fosse tells his own life story as he details the sordid life of Joe Gideon (Roy Scheider), a womanizing, drug-using dancer.",
       "rating":7.6,
       "title":"Que le spectacle commence"
    },
    {
       "id":"4fede420312f91279600021e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkzNDk3Mzg5MV5BMl5BanBnXkFtZTcwNjA5MTM1Mg@@._V1._SX94_SY140_.jpg",
       "description":"Left alone when her sister goes on vacation, a young beauty finds herself besieged on all sides by the demons of her past.",
       "rating":7.8,
       "title":"R\u00e9pulsion"
    },
    {
       "id":"4fede423312f91279600021f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQxNjk5NzM2Nl5BMl5BanBnXkFtZTcwMTg2ODQwNw@@._V1._SX94_SY140_.jpg",
       "description":"A sexually repressed woman's husband is having an affair with her sister. The arrival of a visitor with a rather unusual fetish changes everything.",
       "rating":7.1,
       "title":"Sexe, mensonges et vid\u00e9o"
    },
    {
       "id":"4fede425312f912796000220",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEzMzQwNzQwOV5BMl5BanBnXkFtZTcwNDMzNDAyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A debauched Hollywood movie actor tries to piece together one wild night in Miami years earlier which remains a drug-induced blur, and soon finds out that some questions about his past are best left unanswered.",
       "rating":5.0,
       "title":"The Blackout"
    },
    {
       "id":"4fede429312f912796000221",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY0NzE3ODc4NV5BMl5BanBnXkFtZTcwOTA4MzIzMQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of a farmer in China: a story of humility and bravery. His father gives Wang Lung a freed slave as wife...",
       "rating":7.7,
       "title":"Visages d'Orient"
    },
    {
       "id":"4fede42b312f912796000222",
       "cover_url":null,
       "description":"An old communist returns to Greece after 32 years in the Soviet Union. However, things aren't the way he had hoped for.",
       "rating":7.6,
       "title":"Voyage \u00e0 Cyth\u00e8re"
    },
    {
       "id":"4fede42c312f912796000223",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQxMTc3MDIzNl5BMl5BanBnXkFtZTcwODkyMjA0Mg@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":7.1,
       "title":"99 francs"
    },
    {
       "id":"4fede431312f912796000224",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE0NjExMDM1N15BMl5BanBnXkFtZTcwNDAzMzkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Yan is a successful artist. One day he is waiting for his date Florence to turn up at his apartment...",
       "rating":6.2,
       "title":"A gauche en sortant de l'ascenseur"
    },
    {
       "id":"4fede433312f912796000225",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg0MjY3MTMzMl5BMl5BanBnXkFtZTcwNjc0NzgyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A sarcastic father (Mac) has plenty to say about his daughter wanting to marry a white boy (Kutcher).",
       "rating":5.7,
       "title":"Black/White"
    },
    {
       "id":"4fede436312f912796000226",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE2NzE5MDI4NV5BMl5BanBnXkFtZTcwODYxOTYzMQ@@._V1._SX94_SY140_.jpg",
       "description":"An update of the 1977 comedy, Dick and Jane are living the good life. That is until Dick (Jim Carrey) loses his job shortly after getting a promotion that convinced his wife Jane (T\u00e9a Leoni) to quit her job. The money is gone, and the house ends up in foreclosure. Dick decides to turn to a hilarious life of crime to pay the bills with his lovely wife by his side. Then together they decide it's time to steal back what Former CEO Jack McCallister (Alec Baldwin) had stolen from them.",
       "rating":6.0,
       "title":"Braqueurs amateurs"
    },
    {
       "id":"4fede439312f912796000227",
       "cover_url":null,
       "description":null,
       "rating":4.0,
       "title":"B\u00eate, mais disciplin\u00e9"
    },
    {
       "id":"4fede43c312f912796000228",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIyMTg1MzMzNl5BMl5BanBnXkFtZTYwMDU0NTk5._V1._SX94_SY140_.jpg",
       "description":"Murderesses Velma Kelly (a chanteuse and tease who killed her husband and sister after finding them in bed together) and Roxie Hart (who killed her boyfriend when she discovered he wasn't going to make her a star) find themselves on death row together and fight for the fame that will keep them from the gallows in 1920s Chicago.",
       "rating":7.1,
       "title":"Chicago"
    },
    {
       "id":"4fede440312f912796000229",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjExMjIwNzE4OV5BMl5BanBnXkFtZTYwNTY0MDI5._V1._SX94_SY140_.jpg",
       "description":"A look at the top-secret, high-tech espionage war going on between cats and dogs, which their human owners are blissfully unaware of.",
       "rating":5.1,
       "title":"Comme chiens et chats"
    },
    {
       "id":"4fede442312f91279600022a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk2MDg5MjA2OV5BMl5BanBnXkFtZTcwMTM1MzMzMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.1,
       "title":"Cuisine am\u00e9ricaine"
    },
    {
       "id":"4fede445312f91279600022b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU2NjEwMTcyNl5BMl5BanBnXkFtZTcwNTU5Mjc3MQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":4.2,
       "title":"Doggy Bag"
    },
    {
       "id":"4fede447312f91279600022c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI1NTE5MjcxOV5BMl5BanBnXkFtZTcwNzQ5MDg5MQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.2,
       "title":"Enferm\u00e9s dehors"
    },
    {
       "id":"4fede44a312f91279600022d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAyOTQ0ODgxN15BMl5BanBnXkFtZTcwNTEwNTE5Mg@@._V1._SX94_SY140_.jpg",
       "description":"A chronicle of the lives of several teenagers who attend a New York high school for students gifted in the performing arts.",
       "rating":6.4,
       "title":"Fame"
    },
    {
       "id":"4fede44c312f91279600022e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMxNzcwOTY5OF5BMl5BanBnXkFtZTcwODczMzkzMg@@._V1._SX94_SY140_.jpg",
       "description":"Cultural critic David Kepesh finds his life -- which he indicates is a state of \"emancipated manhood\" -- thrown into tragic disarray by Consuela Castillo, a well-mannered student who awakens a sense of sexual possessiveness in her teacher.",
       "rating":6.8,
       "title":"Fatal"
    },
    {
       "id":"4fede450312f91279600022f",
       "cover_url":null,
       "description":null,
       "rating":5.4,
       "title":"J'veux pas que tu t'en ailles"
    },
    {
       "id":"4fede453312f912796000230",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY0NjA1NzYxNl5BMl5BanBnXkFtZTcwNzQ2MTMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Jimmy Grimble is a shy Manchester school boy. At school he is constantly being bullied by the other kids...",
       "rating":6.5,
       "title":"Jimmy Grimble"
    },
    {
       "id":"4fede455312f912796000231",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI0ODc1OTM0MF5BMl5BanBnXkFtZTYwOTQxNTQ2._V1._SX94_SY140_.jpg",
       "description":"In Africa during WW1, a gin-swilling riverboat owner/captain is persuaded by a strait-laced missionary to use his boat to attack an enemy warship.",
       "rating":8.0,
       "title":"L'Africain"
    },
    {
       "id":"4fede459312f912796000232",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTczNzE4NzI0MV5BMl5BanBnXkFtZTcwMzMwNzEzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Steve Martin comedy about brain transplantation.",
       "rating":6.2,
       "title":"L'homme aux deux cerveaux"
    },
    {
       "id":"4fede45c312f912796000233",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM4MjY0NDg1MV5BMl5BanBnXkFtZTcwMTg4ODE3MQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":4.3,
       "title":"La Vengeance Du Serpent A Plumes"
    },
    {
       "id":"4fede45f312f912796000234",
       "cover_url":null,
       "description":null,
       "rating":4.2,
       "title":"La beuze"
    },
    {
       "id":"4fede462312f912796000235",
       "cover_url":null,
       "description":null,
       "rating":5.3,
       "title":"La campagne de Ciceron"
    },
    {
       "id":"4fede465312f912796000236",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI5MDI0MTM1MV5BMl5BanBnXkFtZTcwODc3NTI5MQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":5.7,
       "title":"La femme de mon pote"
    },
    {
       "id":"4fede467312f912796000237",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyMDczMDYwNl5BMl5BanBnXkFtZTcwMjY3NTI5MQ@@._V1._SX94_SY140_.jpg",
       "description":"On a mission to loosen up, a miser's sets about buying a house in the country for his family.",
       "rating":5.2,
       "title":"La maison du bonheur"
    },
    {
       "id":"4fede46a312f912796000238",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzgwMDcwNzk1NV5BMl5BanBnXkFtZTYwNzY2OTY5._V1._SX94_SY140_.jpg",
       "description":"Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
       "rating":5.5,
       "title":"Le raid"
    },
    {
       "id":"4fede46d312f912796000239",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkzMzc5MDY0Ml5BMl5BanBnXkFtZTcwMTc3MTU2Mw@@._V1._SX94_SY140_.jpg",
       "description":"Two women plot revenge against the woman marrying their friend's ex-boyfriend.",
       "rating":5.7,
       "title":"Le tombeur de ces demoiselles"
    },
    {
       "id":"4fede470312f91279600023a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc5MjAyMjEyMF5BMl5BanBnXkFtZTcwOTYyOTI0MQ@@._V1._SX94_SY140_.jpg",
       "description":"In the 70s, there was Merckx and there were the others. Ghislain Lambert was one of the others. This is his story, a quite simple one. The story of a modest Belgian bike racer. His greatest ambition in life? To become a champion. His greatest tragedy? Not having the legs his heart deserves.",
       "rating":6.6,
       "title":"Le v\u00e9lo de Ghislain Lambert"
    },
    {
       "id":"4fede474312f91279600023b",
       "cover_url":null,
       "description":null,
       "rating":4.5,
       "title":"Les 11 commandements"
    },
    {
       "id":"4fede478312f91279600023c",
       "cover_url":null,
       "description":"Four friends from Paris are living misadventures of all sorts in Spain when their group of travelers is forced to split due to a travel scam.",
       "rating":3.8,
       "title":"Les Charlots font l'Espagne"
    },
    {
       "id":"4fede47a312f91279600023d",
       "cover_url":null,
       "description":null,
       "rating":5.6,
       "title":"Les culottes rouges"
    },
    {
       "id":"4fede47d312f91279600023e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTYwNzEwNTI3MV5BMl5BanBnXkFtZTcwODUyODczMQ@@._V1._SX94_SY140_.jpg",
       "description":"The lives of two lovelorn spouses from separate marriages, a registered sex offender, and a disgraced ex-police officer intersect as they struggle to resist their vulnerabilities and temptations.",
       "rating":7.7,
       "title":"Les enfants"
    },
    {
       "id":"4fede481312f91279600023f",
       "cover_url":null,
       "description":null,
       "rating":5.1,
       "title":"Les meilleurs amis du monde"
    },
    {
       "id":"4fede484312f912796000240",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIyOTQwNTI5OF5BMl5BanBnXkFtZTcwMTM4Mjc3Mw@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":3.7,
       "title":"Mes copines"
    },
    {
       "id":"4fede487312f912796000241",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg0MzIyNjQ1NF5BMl5BanBnXkFtZTcwODU2MjYxMQ@@._V1._SX94_SY140_.jpg",
       "description":"A middle-aged couple suspects foul play when their neighbor's wife suddenly drops dead.",
       "rating":7.3,
       "title":"Meurtre myst\u00e9rieux \u00e0 Manhattan"
    },
    {
       "id":"4fede48a312f912796000242",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzNjgzNTI3OV5BMl5BanBnXkFtZTcwMTkyMzUxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Veronique, living with her divorced mother, is going on holiday to Mauritius with her father. To impress a local boy...",
       "rating":6.1,
       "title":"Mon p\u00e8re, ce h\u00e9ros"
    },
    {
       "id":"4fede48d312f912796000243",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwMDE5NDcwNl5BMl5BanBnXkFtZTcwMjg1MzUyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Jimmy the Tulip's (Willis) quiet new life is shaken up by his old pal Oz (Perry), whose wife (Henstridge) has been kidnapped by a Hungarian mob. The Tulip and his wife Jill (Peet) spring into action.",
       "rating":5.2,
       "title":"Mon voisin le tueur 2"
    },
    {
       "id":"4fede490312f912796000244",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNDE0NTQwODM5M15BMl5BanBnXkFtZTYwNzQ2Nzk5._V1._SX94_SY140_.jpg",
       "description":"An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the others life for one freaky Friday.",
       "rating":6.2,
       "title":"Mookie"
    },
    {
       "id":"4fede492312f912796000245",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyMjI5MjM5NF5BMl5BanBnXkFtZTcwNDIxODMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Revolving around Truvy's Beauty Parlor in a small parish in modern-day Louisiana, STEEL MAGNOLIAS is...",
       "rating":6.9,
       "title":"Potins de femmes"
    },
    {
       "id":"4fede496312f912796000246",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcxNDU2NTE4Nl5BMl5BanBnXkFtZTcwNzQ1MTEzMw@@._V1._SX94_SY140_.jpg",
       "description":"A tight-knit group of New York City street dancers,find themselves pitted against the world's best hip hop dancers in a high-stakes showdown.",
       "rating":5.6,
       "title":"Sexy Dance 3 : The Battle"
    },
    {
       "id":"4fede499312f912796000247",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIzNDU4NTIxNV5BMl5BanBnXkFtZTcwMjAxMTM2Mw@@._V1._SX94_SY140_.jpg",
       "description":"In Hamburg, German-Greek chef Zinos unknowingly disturbs the peace in his locals-only restaurant by hiring a  talented chef.",
       "rating":7.2,
       "title":"Soul Kitchen"
    },
    {
       "id":"4fede49c312f912796000248",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM2MjMxMTUzMl5BMl5BanBnXkFtZTcwMzQ4MjcxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Coming-of-age story about a 15-year-old boy, Oscar, who falls in love with his stepmother, Eve.",
       "rating":6.2,
       "title":"S\u00e9duction en mode mineur"
    },
    {
       "id":"4fede4a0312f912796000249",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkzODEzMjU1Nl5BMl5BanBnXkFtZTcwNDQ0MzAwMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.1,
       "title":"Une affaire qui roule"
    },
    {
       "id":"4fede4a3312f91279600024a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM1NzQ1OTM3NF5BMl5BanBnXkFtZTcwMDAwMjUyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Two sisters join the first female professional baseball league and struggle to help it succeed amidst their own growing rivalry.",
       "rating":7.0,
       "title":"Une \u00e9quipe hors du commun"
    },
    {
       "id":"4fede4a5312f91279600024b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMzNDA1MzIyNl5BMl5BanBnXkFtZTcwOTQxMTAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"A girl finds she is forced to educate herself on the etiquette of wooing the opposite sex when she finally meets Mr. Right.",
       "rating":4.8,
       "title":"Allumeuses !"
    },
    {
       "id":"4fede4a7312f91279600024c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1._SX94_SY140_.jpg",
       "description":"Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the very next day.",
       "rating":6.8,
       "title":"Amour et amn\u00e9sie"
    },
    {
       "id":"4fede4a9312f91279600024d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNjI3ODI5NDEwMl5BMl5BanBnXkFtZTYwNDYyMjU3._V1._SX94_SY140_.jpg",
       "description":"A young boy attempts to make the world a better place after his teacher gives him that chance.",
       "rating":6.9,
       "title":"Au suivant !"
    },
    {
       "id":"4fede4ad312f91279600024e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTczODg2ODI2M15BMl5BanBnXkFtZTYwODIxMDg5._V1._SX94_SY140_.jpg",
       "description":"A senatorial candidate falls for a hotel maid, thinking she is a socialite when he s her trying on a wealthy woman's dress.",
       "rating":4.7,
       "title":"Coup de foudre \u00e0 Manhattan"
    },
    {
       "id":"4fede4b0312f91279600024f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU0MzkzNzg0Nl5BMl5BanBnXkFtZTcwNzUwNzQ2Mg@@._V1._SX94_SY140_.jpg",
       "description":"A romantic drama about a Chicago librarian with a gene that causes him to involuntarily time travel, and the complications it creates for his marriage.",
       "rating":7.0,
       "title":"Hors du temps"
    },
    {
       "id":"4fede4b3312f912796000250",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODU1MzU0OTUwOF5BMl5BanBnXkFtZTYwNjA5NTA5._V1._SX94_SY140_.jpg",
       "description":"Kate and her actor brother live in N.Y. in the 21st Century. Her ex-boyfriend, Stuart, lives above her apartment...",
       "rating":6.2,
       "title":"Kate & Leopold"
    },
    {
       "id":"4fede4b6312f912796000251",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcyNTIyNTU2NF5BMl5BanBnXkFtZTcwNjk2ODUxNw@@._V1._SX94_SY140_.jpg",
       "description":"Michel dreams of a perfect meeting with the woman of his dreams, entirely due to chance, as his parents and grandparents experienced...",
       "rating":5.6,
       "title":"L'amour c'est mieux \u00e0 deux"
    },
    {
       "id":"4fede4ba312f912796000252",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzNDM0MTAzNV5BMl5BanBnXkFtZTcwNDE3MDMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A recently-widowed man's son calls a radio talk show in an attempt to find his father a partner.",
       "rating":6.7,
       "title":"Nuits blanches \u00e0 Seattle"
    },
    {
       "id":"4fede4bc312f912796000253",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY0ODA0Nzk0NF5BMl5BanBnXkFtZTYwMzU4NTQ5._V1._SX94_SY140_.jpg",
       "description":"Based on Nick Hornby's best-selling novel, About A Boy is the story of a cynical, immature young man who is taught how to act like a grown-up by a little boy",
       "rating":7.2,
       "title":"Pour un gar\u00e7on"
    },
    {
       "id":"4fede4bf312f912796000254",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk0MjY5MTE2OF5BMl5BanBnXkFtZTcwNjk4NjUyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Two con artists' plan to steal enough for a house are twisted when a pretty girl enters the picture.",
       "rating":6.5,
       "title":"Shooting Fish"
    },
    {
       "id":"4fede4c0312f912796000255",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgwODU4MTg5M15BMl5BanBnXkFtZTcwNjM2NjkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"A lazy law school grad adopts a kid to impress his girlfriend, but everything doesn't go as planned and he becomes the unlikely foster father.",
       "rating":6.2,
       "title":"B\u00e9b\u00e9(s)"
    },
    {
       "id":"4fede4c2312f912796000256",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk1MjE3MjQ0OF5BMl5BanBnXkFtZTcwMTcyMTcyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Chicken Run is a comedy escape drama with a touch of passion set on a sinister Yorks chicken farm in 1950's England",
       "rating":7.1,
       "title":"Chicken Run"
    },
    {
       "id":"4fede4c6312f912796000257",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzMwMjc5NzUyNF5BMl5BanBnXkFtZTcwNjA5MDcyNA@@._V1._SX94_SY140_.jpg",
       "description":"A government agent trains Cody Banks in the ways of covert operations that require younger participants.",
       "rating":5.0,
       "title":"Cody Banks : Agent secret"
    },
    {
       "id":"4fede4c9312f912796000258",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzNjc5ODEzNl5BMl5BanBnXkFtZTcwOTc1MzEyMQ@@._V1._SX94_SY140_.jpg",
       "description":"It's the world of cats and Danny is the ambitious one coming to Hollywood to become film star where he is immediately cast in musical epic movie.",
       "rating":6.7,
       "title":"Danny le chat superstar"
    },
    {
       "id":"4fede4cb312f912796000259",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1._SX94_SY140_.jpg",
       "description":"A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be  to the creatures than he assumed.",
       "rating":8.2,
       "title":"Dragons"
    },
    {
       "id":"4fede4ce312f91279600025a",
       "cover_url":null,
       "description":"Il maresciallo Topponi si presenta una mattina nel grande negozio di tessuti del cavalier Pezzella, per un accertamento fiscale...",
       "rating":6.8,
       "title":"Fripouillard et cie"
    },
    {
       "id":"4fede4d0312f91279600025b",
       "cover_url":null,
       "description":"Johnny sets out to rid the land of an evil giant but the giant uses a machine to reduce Johnny to the size of a bee...",
       "rating":5.4,
       "title":"Jeannot l'intr\u00e9pide"
    },
    {
       "id":"4fede4d2312f91279600025c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxMjg5OV5BMl5BanBnXkFtZTcwNDE1NzYzMw@@._V1._SX94_SY140_.jpg",
       "description":"A lonely boy discovers a mysterious egg that hatches a sea creature of Scottish legend.",
       "rating":6.5,
       "title":"La l\u00e9gende des 1000 dragons"
    },
    {
       "id":"4fede4d7312f91279600025d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc1MjU5MDM3N15BMl5BanBnXkFtZTcwMjIzMjkyMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.8,
       "title":"La mouette et le chat"
    },
    {
       "id":"4fede4db312f91279600025e",
       "cover_url":null,
       "description":null,
       "rating":4.8,
       "title":"Le bonheur de Pierre"
    },
    {
       "id":"4fede4de312f91279600025f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzMDA3NjY5M15BMl5BanBnXkFtZTYwMDAzNzk5._V1._SX94_SY140_.jpg",
       "description":"A rebellious teenage monkey refuses to believe what he has been told and sets out to find the truth.",
       "rating":5.2,
       "title":"Le ch\u00e2teau des singes"
    },
    {
       "id":"4fede4e1312f912796000260",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI3ODg0NjAyMF5BMl5BanBnXkFtZTcwNTM1NTYyMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.8,
       "title":"Les contes de Beatrix Potter"
    },
    {
       "id":"4fede4e4312f912796000261",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQwOTg2MjU0OV5BMl5BanBnXkFtZTcwMzIzNTQzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Boog, a domesticated 900lb. Grizzly bear finds himself stranded in the woods 3 days before Open Season. Forced to rely on Elliot, a fast-talking mule deer, the two form an unlikely friendship and must quickly rally other forest animals if they are to form a rag-tag army against the hunters.",
       "rating":6.1,
       "title":"Les rebelles de la for\u00eat"
    },
    {
       "id":"4fede4e7312f912796000262",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQxNzgyODQwOF5BMl5BanBnXkFtZTcwNDUwMzE2MQ@@._V1._SX94_SY140_.jpg",
       "description":"A magic nanny comes to work for a cold banker's unhappy family.",
       "rating":7.7,
       "title":"Mary Poppins"
    },
    {
       "id":"4fede4eb312f912796000263",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI5NDUxNDU4OF5BMl5BanBnXkFtZTcwNDk1NjM1Mw@@._V1._SX94_SY140_.jpg",
       "description":"Nanny McPhee arrives to help a harried young mother who is trying to run the family farm while her husband is away at war, though she uses her magic to teach the woman's children and their two spoiled cousins five new lessons.",
       "rating":6.0,
       "title":"Nanny McPhee et le big bang"
    },
    {
       "id":"4fede4ee312f912796000264",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyMDczNjYwMl5BMl5BanBnXkFtZTcwNzcxNzI0MQ@@._V1._SX94_SY140_.jpg",
       "description":"Rexxx, Hollywood's top canine star, gets lost and is adopted into a shabby firehouse. He teams up with a young kid (Hutcherson) to get the station back on its feet.",
       "rating":5.0,
       "title":"Rex, chien pompier"
    },
    {
       "id":"4fede4f0312f912796000265",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ1NzM2ODQxNF5BMl5BanBnXkFtZTcwMDczMDU1MQ@@._V1._SX94_SY140_.jpg",
       "description":"When two brothers organize the robbery of their parents' jewelry store the job goes horribly wrong, triggering a series of events that sends them, their father and one brother's wife hurtling towards a shattering climax.",
       "rating":7.3,
       "title":"7h58, ce samedi-l\u00e0"
    },
    {
       "id":"4fede4f3312f912796000266",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BOTA4ODMyNjUwNV5BMl5BanBnXkFtZTcwODUxMTAyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A pilot is sent into the Soviet Union on a mission to steal a prototype jet fighter that can be partially controlled by a neuralink",
       "rating":5.7,
       "title":"Firefox, l'arme absolue"
    },
    {
       "id":"4fede4f5312f912796000267",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUzMTcyOTI5NV5BMl5BanBnXkFtZTcwMjkxMjQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Muraki, a hardboiled Yakuza gangster, has just been released from prison after serving a sentence for murder...",
       "rating":7.6,
       "title":"Fleur p\u00e2le"
    },
    {
       "id":"4fede4f7312f912796000268",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU0MDQwNzEwNV5BMl5BanBnXkFtZTcwNTQ3MzIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Set decades after Captain James T. Kirk's 5-year mission, a new generation of Starfleet officers in a new Enterprise set off on their own mission to go where no one has gone before.",
       "rating":8.6,
       "title":"G. A. L."
    },
    {
       "id":"4fede4fa312f912796000269",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY1NjYzNDA5Ml5BMl5BanBnXkFtZTcwODM1MTQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Chronicles the rise and fall of a prominent, and particularly ruthless English gangster.",
       "rating":6.7,
       "title":"Gangster n\u00b01"
    },
    {
       "id":"4fede4fc312f91279600026a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzU4MzMwODkzOV5BMl5BanBnXkFtZTcwNjIxMjYxMQ@@._V1._SX94_SY140_.jpg",
       "description":"An investigator on the Moscow police force relentlessly pursues the solution to a triple homicide which occurred in Moscow's Gorky Park...",
       "rating":6.6,
       "title":"Gorky Park"
    },
    {
       "id":"4fede4ff312f91279600026b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQwNzg2NDgyMV5BMl5BanBnXkFtZTcwNDIxODIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A San Francisco cop with little regard for rules (but who always gets results) tries to track down a serial killer who snipes at random victims.",
       "rating":7.8,
       "title":"L'inspecteur Harry"
    },
    {
       "id":"4fede501312f91279600026c",
       "cover_url":null,
       "description":null,
       "rating":6.1,
       "title":"Le battant"
    },
    {
       "id":"4fede503312f91279600026d",
       "cover_url":null,
       "description":"Nounours is the nickname of a \"cousin\" an informer with a special arrangement with the police: he gets 10% of the drugs seized thanks to his help...",
       "rating":6.5,
       "title":"Le cousin"
    },
    {
       "id":"4fede506312f91279600026e",
       "cover_url":null,
       "description":"From smalltime hoodlums in the tough Belleville neighborhood to headline-grabbing robbers of the swankiest banks in Paris...",
       "rating":6.2,
       "title":"Le dernier gang"
    },
    {
       "id":"4fede508312f91279600026f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ5MDIxMTkwNV5BMl5BanBnXkFtZTcwNDgyMTM4NA@@._V1._SX94_SY140_.jpg",
       "description":"Major Charles Rane comes back from the war and is given a number of gifts from his hometown because he is a war hero...",
       "rating":6.9,
       "title":"L\u00e9gitime violence"
    },
    {
       "id":"4fede50a312f912796000270",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg0MzY3NTg2OF5BMl5BanBnXkFtZTcwMDUwODgxMQ@@._V1._SX94_SY140_.jpg",
       "description":"Dirty Harry is on the trail of vigilante cops who are not above going beyond the law to kill the city's undesirables.",
       "rating":7.1,
       "title":"Magnum Force"
    },
    {
       "id":"4fede50e312f912796000271",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzkzMDM1Mjg5Ml5BMl5BanBnXkFtZTcwNDkyODUxMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":5.6,
       "title":"Parole De Flic"
    },
    {
       "id":"4fede510312f912796000272",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA3MTgzMDc5MjdeQTJeQWpwZ15BbWU3MDk0NjU1MjE@._V1._SX94_SY140_.jpg",
       "description":"A corrupt police sergeant who supplies tips on the locations of safeguarded witnesses to the Mob bites...",
       "rating":6.4,
       "title":"Romeo Is Bleeding"
    },
    {
       "id":"4fede513312f912796000273",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM2NjQ0Mjg5MF5BMl5BanBnXkFtZTcwMjQ3ODEzMQ@@._V1._SX94_SY140_.jpg",
       "description":"An affair between the second in line to Britain's throne (Franco) and the princess of the feuding Irish (Myles) spells doom for the young lovers.",
       "rating":6.8,
       "title":"Tristan"
    },
    {
       "id":"4fede515312f912796000274",
       "cover_url":null,
       "description":"Ridden by guilt for not being able to have a child, wife decides to conceive by cloning. The daughter she gives birth to is therefor almost identical to her. The child starts to grow rapidly and slowly replaces mom in the household.",
       "rating":4.5,
       "title":"A ton image"
    },
    {
       "id":"4fede518312f912796000275",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY4OTUwMDY0Ml5BMl5BanBnXkFtZTcwMTg1NDcyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Robert Rath is a seasoned hitman who just wants out of the business with no back talk. But, as things go...",
       "rating":6.0,
       "title":"Assassin(s)"
    },
    {
       "id":"4fede51e312f912796000276",
       "cover_url":null,
       "description":"A mob hitman wants to retire, but his bosses don't think that's a good idea. Complications--and many bloody shootouts-ensue.",
       "rating":6.8,
       "title":"Big Guns : les grands fusils"
    },
    {
       "id":"4fede522312f912796000277",
       "cover_url":null,
       "description":"Two young women arrive at a curious penthouse apartment, led by one's crush on her tutor. However, her love interest doesn't live alone...",
       "rating":5.0,
       "title":"Code 77"
    },
    {
       "id":"4fede525312f912796000278",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyOTMxNjc5NF5BMl5BanBnXkFtZTYwMDk5OTg2._V1._SX94_SY140_.jpg",
       "description":"An adaptation of the cult memoir of game show impresario Chuck Barris, in which he purports to have been a CIA hitman.",
       "rating":7.1,
       "title":"Confessions d'un homme dangereux"
    },
    {
       "id":"4fede527312f912796000279",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1._SX94_SY140_.jpg",
       "description":"A murder inside the Louvre and clues in Da Vinci paintings lead to the discovery of a religious mystery protected by a secret society for two thousand years -- which could shake the foundations of Christianity.",
       "rating":6.4,
       "title":"Da Vinci Code"
    },
    {
       "id":"4fede52c312f91279600027a",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNDI0NTkzNDMxNV5BMl5BanBnXkFtZTYwODA1MDY5._V1._SX94_SY140_.jpg",
       "description":"An African American mafia hit man who models himself after the samurai of old finds himself targeted for death by the mob.",
       "rating":7.5,
       "title":"Ghost Dog : La voie du Samourai"
    },
    {
       "id":"4fede52f312f91279600027b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzMTA0NTM4NF5BMl5BanBnXkFtZTcwNjY3ODM0MQ@@._V1._SX94_SY140_.jpg",
       "description":"After the death of his parents during World War II, young Hannibal Lecter moves in with his beautiful aunt and begins plotting revenge on the barbarians responsible for his sister's death.",
       "rating":6.0,
       "title":"Hannibal Lecter : les origines du Mal"
    },
    {
       "id":"4fede531312f91279600027c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTE5OTU4MzkwNl5BMl5BanBnXkFtZTcwNzA4OTkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"When the drifter Harry Madox reaches a small town in Texas, he gets a job as used car salesman with...",
       "rating":6.3,
       "title":"Hot Spot"
    },
    {
       "id":"4fede533312f91279600027d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNzgxMzQ2NzQzMV5BMl5BanBnXkFtZTcwMzMyMjAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Medical students bring themselves near death; their experiment begins to go awry.",
       "rating":6.4,
       "title":"L'exp\u00e9rience interdite"
    },
    {
       "id":"4fede537312f91279600027e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzNTcxMzgxN15BMl5BanBnXkFtZTcwMjQwODc3MQ@@._V1._SX94_SY140_.jpg",
       "description":"Four mathematicians who do not know each other are invited by a mysterious host on the pretext of resolving a great enigma...",
       "rating":6.7,
       "title":"La cellule de Fermat"
    },
    {
       "id":"4fede539312f91279600027f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI3MTY2MTQxNV5BMl5BanBnXkFtZTcwNjk2NDYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"In the midst of the Gulf War, soldiers are kidnapped and brainwashed for sinister purposes.",
       "rating":6.6,
       "title":"Le candidat"
    },
    {
       "id":"4fede53c312f912796000280",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODk3ODkyNzU2MV5BMl5BanBnXkFtZTcwOTM2MTAyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A struggling actress tries to help a friend prove his innocence when he's accused of murdering the husband of a high society entertainer.",
       "rating":7.0,
       "title":"Le grand alibi"
    },
    {
       "id":"4fede53f312f912796000281",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY3MjUxNDUwNl5BMl5BanBnXkFtZTcwNzk1NDk1Mw@@._V1._SX94_SY140_.jpg",
       "description":"A movie spun out of equal parts folk tale, fable and real-life legend about the mysterious, 1930s Tennes hermit who famously threw his own rollicking funeral party... while he was still alive.",
       "rating":7.1,
       "title":"Le grand jour"
    },
    {
       "id":"4fede541312f912796000282",
       "cover_url":null,
       "description":"Fashion photographer Vincent Mandel, in the midst of a difficult divorce, is suddenly being accused of rape and extorted. What does his former classmate Joseph Plender want from him?",
       "rating":6.4,
       "title":"Le serpent"
    },
    {
       "id":"4fede544312f912796000283",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcxODgwNTM5MF5BMl5BanBnXkFtZTcwNTM0MjMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A housemaid falls in love with Dr. Jekyll and his darkly mysterious counterpart, Mr. Hyde.",
       "rating":5.6,
       "title":"Mary Reilly"
    },
    {
       "id":"4fede546312f912796000284",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNTQxMTA5Njk5Ml5BMl5BanBnXkFtZTcwOTEyODUyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A young woman develops a taste for human blood after undergoing experimental plastic surgery, and her victims turn into rabid, blood-thirsty zombies who proceed to infect others, which turns into a city-wide epidemic.",
       "rating":6.4,
       "title":"Rabia"
    },
    {
       "id":"4fede548312f912796000285",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEwMTQxNzA2M15BMl5BanBnXkFtZTcwMTU3MjcyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Young lovers Sailor and Lula run from the variety of weirdos that Lula's mom has hired to kill Sailor.",
       "rating":7.2,
       "title":"Sailor et Lula"
    },
    {
       "id":"4fede54a312f912796000286",
       "cover_url":null,
       "description":"The photographer and family man Matyas is married and has a happy life with his beloved wife Claire...",
       "rating":5.4,
       "title":"Trouble"
    },
    {
       "id":"4fede54d312f912796000287",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1._SX94_SY140_.jpg",
       "description":"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
       "rating":7.8,
       "title":"A la recherche du bonheur"
    },
    {
       "id":"4fede54f312f912796000288",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzOTczNTM1MF5BMl5BanBnXkFtZTcwMDM5MDMyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Grace Bichon, who is managing her father's riding-stable, discovers that her husband Eddie deceives her with another woman...",
       "rating":5.5,
       "title":"Amour et mensonges"
    },
    {
       "id":"4fede551312f912796000289",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIwNTQ2OTgxOV5BMl5BanBnXkFtZTcwODAwNDI0MQ@@._V1._SX94_SY140_.jpg",
       "description":"A beautiful woman helps an inept scam artist get his game together.",
       "rating":7.0,
       "title":"Angel-A"
    },
    {
       "id":"4fede553312f91279600028a",
       "cover_url":null,
       "description":null,
       "rating":5.7,
       "title":"Bien agit\u00e9s !"
    },
    {
       "id":"4fede555312f91279600028b",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNDM1NzkzMjQ4NF5BMl5BanBnXkFtZTcwMDE3Nzk3Mg@@._V1._SX94_SY140_.jpg",
       "description":"In Bodeen, Texas, an indie-rock loving misfit finds a way of dealing with her small-town misery after she discovers a roller derby league in nearby Austin.",
       "rating":6.9,
       "title":"Bliss"
    },
    {
       "id":"4fede557312f91279600028c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc5MDk4OTg4OF5BMl5BanBnXkFtZTcwMzg4MTkzMQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of how Bugsy Siegel started Las Vegas.",
       "rating":6.8,
       "title":"Bugsy"
    },
    {
       "id":"4fede55a312f91279600028d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUzNzQ1MTc4Ml5BMl5BanBnXkFtZTYwMTE1Njg5._V1._SX94_SY140_.jpg",
       "description":"Ruby falls in love with small-time con man Eddie. During a botched blackmail scheme, Eddie accidentally kills the man they were setting up. Eddie takes off and Ruby is sent to a reformatory for two years.",
       "rating":6.9,
       "title":"Dans tes bras"
    },
    {
       "id":"4fede55d312f91279600028e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU5ODg4MDMxOV5BMl5BanBnXkFtZTcwMjQ4NzEyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A not-so-nice man rescues passengers from a crashed airliner, only to  someone else take credit.",
       "rating":6.3,
       "title":"H\u00e9ros malgr\u00e9 lui"
    },
    {
       "id":"4fede55f312f91279600028f",
       "cover_url":null,
       "description":null,
       "rating":5.5,
       "title":"H\u00f4tel de France"
    },
    {
       "id":"4fede561312f912796000290",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk5MTk3NDM4Ml5BMl5BanBnXkFtZTYwMDEyMjk4._V1._SX94_SY140_.jpg",
       "description":"A father becomes worried when a local gangster befriends his son in the Bronx in the 1960s.",
       "rating":7.7,
       "title":"Il \u00e9tait une fois le Bronx"
    },
    {
       "id":"4fede564312f912796000291",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzMTIxOTg1NV5BMl5BanBnXkFtZTcwOTM0OTcxMQ@@._V1._SX94_SY140_.jpg",
       "description":"A vampire tells his epic life story: love, betrayal, loneliness, and hunger.",
       "rating":7.5,
       "title":"Intervista"
    },
    {
       "id":"4fede568312f912796000292",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI2MDg4MDQ4Ml5BMl5BanBnXkFtZTcwNTY4MjIzMQ@@._V1._SX94_SY140_.jpg",
       "description":"The fifty years old Jean-Claude has a boring life, working in a notary office of his own and as court official evicting tenants or seizing properties...",
       "rating":7.1,
       "title":"Je ne suis pas l\u00e0 pour \u00eatre aim\u00e9"
    },
    {
       "id":"4fede56a312f912796000293",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUzMzg4MTg2M15BMl5BanBnXkFtZTYwNDM4OTk4._V1._SX94_SY140_.jpg",
       "description":"An 8-year-old boy, who is accidentally left behind while his family flies to France for Christmas, has to defend his home against idiotic burglars.",
       "rating":7.2,
       "title":"L'avion"
    },
    {
       "id":"4fede56c312f912796000294",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA2NzU3OTE3MTBeQTJeQWpwZ15BbWU3MDc3Mjc2MjE@._V1._SX94_SY140_.jpg",
       "description":"Seventeen-year-old Beth is just finishing school, and lives in Paris with her bedridden mother and younger brother...",
       "rating":6.1,
       "title":"La d\u00e9senchant\u00e9e"
    },
    {
       "id":"4fede56e312f912796000295",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE3OTc2MjUwMF5BMl5BanBnXkFtZTcwNDg2MjE5Mw@@._V1._SX94_SY140_.jpg",
       "description":"13-year-old Gunther Strobbe grows up surrounded by alcohol, trash and his completely useless father and uncles. Slowly but surely, he's being prepared for the same hapless life. Can he defy his destiny?",
       "rating":7.3,
       "title":"La merditude des choses"
    },
    {
       "id":"4fede571312f912796000296",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjgyODIxMTMxMV5BMl5BanBnXkFtZTcwMzM3MzYwNA@@._V1._SX94_SY140_.jpg",
       "description":"A skewering of Italian Prime Minister Silvio Berlusconi.",
       "rating":6.7,
       "title":"Le Ca\u00efman"
    },
    {
       "id":"4fede575312f912796000297",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg2NTI2OTEwNV5BMl5BanBnXkFtZTcwOTU1ODQ2Mg@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":5.2,
       "title":"Le h\u00e9ros de la famille"
    },
    {
       "id":"4fede578312f912796000298",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA3NjMyNjIyMF5BMl5BanBnXkFtZTYwOTgzMDI3._V1._SX94_SY140_.jpg",
       "description":"A phobic con artist and his prot\u00e9g\u00e9 are on the verge of pulling off a lucrative swindle when the former's teenage daughter arrives unexpectedly.",
       "rating":7.3,
       "title":"Les associ\u00e9s"
    },
    {
       "id":"4fede57b312f912796000299",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg1NjM3NDIzOV5BMl5BanBnXkFtZTcwMjkyOTg1MQ@@._V1._SX94_SY140_.jpg",
       "description":"A musical interpretation of three lovers living in Paris.",
       "rating":7.0,
       "title":"Les chansons d'amour"
    },
    {
       "id":"4fede57d312f91279600029a",
       "cover_url":null,
       "description":"A scheduling mixup means two groups of old-timers have reserved the same bar for a party on the same night...",
       "rating":6.7,
       "title":"Les irr\u00e9ductibles"
    },
    {
       "id":"4fede581312f91279600029b",
       "cover_url":null,
       "description":null,
       "rating":4.8,
       "title":"Ma place au soleil"
    },
    {
       "id":"4fede583312f91279600029c",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0MDMwNzU1MV5BMl5BanBnXkFtZTcwMzE3NzczMQ@@._V1._SX94_SY140_.jpg",
       "description":"Laura Henderson buys an old London theater and opens it up as the Windmill, a performance hall which goes down in history for, among other things, its all-nude revues.",
       "rating":7.0,
       "title":"Madame Henderson pr\u00e9sente"
    },
    {
       "id":"4fede585312f91279600029d",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIxNjc3MzkxMl5BMl5BanBnXkFtZTYwNTEwMzg5._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.2,
       "title":"Mauvaise passe"
    },
    {
       "id":"4fede587312f91279600029e",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1._SX94_SY140_.jpg",
       "description":"Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
       "rating":7.7,
       "title":"Orgueil et pr\u00e9jug\u00e9s"
    },
    {
       "id":"4fede58a312f91279600029f",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIwMzY0MDI0OV5BMl5BanBnXkFtZTcwMjIxNTEyMQ@@._V1._SX94_SY140_.jpg",
       "description":null,
       "rating":6.7,
       "title":"Pas de scandale"
    },
    {
       "id":"4fede58d312f9127960002a0",
       "cover_url":null,
       "description":null,
       "rating":5.3,
       "title":"Pas si grave"
    },
    {
       "id":"4fede58f312f9127960002a1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc4NjY3MDAyM15BMl5BanBnXkFtZTYwNzEwOTg5._V1._SX94_SY140_.jpg",
       "description":"Realising a dishonest deal has been found out a diamond merchant commits suicide, leaving the gems in question for his wife...",
       "rating":6.2,
       "title":"Place Vend\u00f4me"
    },
    {
       "id":"4fede591312f9127960002a2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc5NTYwMDI2Ml5BMl5BanBnXkFtZTcwNTgxMTE3NA@@._V1._SX94_SY140_.jpg",
       "description":"A young drifter, named Nomi, arrives in Las Vegas to become a dancer and soon sets about clawing and pushing her way to become the top of the Vegas showgirls.",
       "rating":4.2,
       "title":"Showgirls"
    },
    {
       "id":"4fede593312f9127960002a3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAyOTIyMjI0Nl5BMl5BanBnXkFtZTcwMzcyODE3Mw@@._V1._SX94_SY140_.jpg",
       "description":"A young newspaper writer returns to her hometown in the English countryside, where her childhood home is being prepped for sale.",
       "rating":6.2,
       "title":"Tamara Drewe"
    },
    {
       "id":"4fede596312f9127960002a4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTM0OTEzMDc4OF5BMl5BanBnXkFtZTYwNDMwNTM5._V1._SX94_SY140_.jpg",
       "description":"In 1941, the inhabitants of a small Jewish village in Central Europe organize a fake deportation train so that they can escape the Nazis and flee to Palestine.",
       "rating":7.6,
       "title":"Train de vie"
    },
    {
       "id":"4fede599312f9127960002a5",
       "cover_url":null,
       "description":null,
       "rating":6.9,
       "title":"Travelling avant"
    },
    {
       "id":"4fede59b312f9127960002a6",
       "cover_url":null,
       "description":null,
       "rating":5.5,
       "title":"Une nouvelle \u00e8re glaciaire"
    },
    {
       "id":"4fede59e312f9127960002a7",
       "cover_url":null,
       "description":"Twenty four hours in the life of a prostitute and her encounters with people along the way.",
       "rating":5.1,
       "title":"24 mesures"
    },
    {
       "id":"4fede5a1312f9127960002a8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk5MjQ4MjcyOF5BMl5BanBnXkFtZTYwNTMzODg2._V1._SX94_SY140_.jpg",
       "description":"An afro-american teen writing prodigy finds a mentor in a reclusive author.",
       "rating":7.2,
       "title":"A la rencontre de Forrester"
    },
    {
       "id":"4fede5a3312f9127960002a9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA2MjIwMjE0MjZeQTJeQWpwZ15BbWU3MDU4ODIwODI@._V1._SX94_SY140_.jpg",
       "description":"A historical drama set in Roman Egypt, concerning a slave who turns to the rising tide of Christianity in the hopes of pursuing freedom while also falling in love with his master, the famous female philosophy and mathematics professor Hypatia of Alexandria.",
       "rating":7.1,
       "title":"Agora"
    },
    {
       "id":"4fede5a7312f9127960002aa",
       "cover_url":null,
       "description":null,
       "rating":6.6,
       "title":"Belleville Tour"
    },
    {
       "id":"4fede5a9312f9127960002ab",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkzNDYwOTg1OF5BMl5BanBnXkFtZTcwMTE1NzYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The troubled life and career of the jazz musician, Charlie \"Bird\" Parker.",
       "rating":7.1,
       "title":"Bird"
    },
    {
       "id":"4fede5ac312f9127960002ac",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMzMDMyMTg3NV5BMl5BanBnXkFtZTcwNjI0NzI1Mw@@._V1._SX94_SY140_.jpg",
       "description":"A little town in the north of France, 1941. Blanche has three children. She worries about her husband Victor...",
       "rating":5.6,
       "title":"Blanche et Marie"
    },
    {
       "id":"4fede5af312f9127960002ad",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTg0NjEwNDgxNF5BMl5BanBnXkFtZTcwMjkyOTM3Mg@@._V1._SX94_SY140_.jpg",
       "description":"The drama based on the three-year romance between 19th century poet John Keats and Fanny Brawne, which was cut short by Keats' untimely death at age 25.",
       "rating":6.9,
       "title":"Bright Star"
    },
    {
       "id":"4fede5b1312f9127960002ae",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyMTY5MTcxOV5BMl5BanBnXkFtZTcwMTI3MDE3Mg@@._V1._SX94_SY140_.jpg",
       "description":"A young man comforts his older brother's wife and children after he goes missing in Afghanistan.",
       "rating":7.2,
       "title":"Brothers"
    },
    {
       "id":"4fede5b4312f9127960002af",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIyNjUyODg1N15BMl5BanBnXkFtZTYwOTEzNTM3._V1._SX94_SY140_.jpg",
       "description":"A fictional story inspired by North America's most famous female boxing promoter, Jackie Kallen. Her struggle to survive and succeed in a male dominated sport.",
       "rating":5.1,
       "title":"Dans les cordes"
    },
    {
       "id":"4fede5b7312f9127960002b0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA2NjM1MzUwOF5BMl5BanBnXkFtZTYwMDIxMTU5._V1._SX94_SY140_.jpg",
       "description":"A film of the early years of the reign of Elizabeth I of England and her difficult task of learning what is necessary to be a monarch.",
       "rating":7.5,
       "title":"Elizabeth"
    },
    {
       "id":"4fede5b9312f9127960002b1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgzODIwNzcyMF5BMl5BanBnXkFtZTcwMTg0MTQ1MQ@@._V1._SX94_SY140_.jpg",
       "description":"A mature Queen Elizabeth endures multiple crises late in her reign including court intrigues, an assassination plot, the Spanish Armada, and romantic disappointments.",
       "rating":6.8,
       "title":"Elizabeth, l'\u00e2ge d'or"
    },
    {
       "id":"4fede5ba312f9127960002b2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEzODI2MjQxOV5BMl5BanBnXkFtZTcwMDIyMzkyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The petite waitress Johnny works and lives in a truck-stop, where she's lonely and longs for love. She...",
       "rating":6.3,
       "title":"Je t'aime, moi non plus"
    },
    {
       "id":"4fede5bc312f9127960002b3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTEwMjA1NjkzMDdeQTJeQWpwZ15BbWU3MDY0MDYxMjE@._V1._SX94_SY140_.jpg",
       "description":"In the midst of a searing Florida heat wave, a woman convinces her lover, a small-town lawyer, to murder her rich husband.",
       "rating":7.3,
       "title":"La fi\u00e8vre au corps"
    },
    {
       "id":"4fede5bf312f9127960002b4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTAwNzk4NTU3NDReQTJeQWpwZ15BbWU3MDg3OTEyODI@._V1._SX94_SY140_.jpg",
       "description":"A post-apocalyptic tale of a man and his son trying to survive by any means possible.",
       "rating":7.3,
       "title":"La route"
    },
    {
       "id":"4fede5c2312f9127960002b5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyNDE4MDk4MV5BMl5BanBnXkFtZTcwMjIyMjU1MQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of the final Emperor of China.",
       "rating":7.8,
       "title":"Le dernier empereur"
    },
    {
       "id":"4fede5c4312f9127960002b6",
       "cover_url":null,
       "description":null,
       "rating":6.6,
       "title":"Le d\u00e9samour"
    },
    {
       "id":"4fede5c6312f9127960002b7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzE0MDgwNjY4OF5BMl5BanBnXkFtZTcwNDMxMzQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Marcel Proust (1871-1922) is on his deathbed. Looking at photographs brings memories of his childhood...",
       "rating":6.7,
       "title":"Le temps retrouv\u00e9"
    },
    {
       "id":"4fede5c9312f9127960002b8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTA0NjgzMDIzNjVeQTJeQWpwZ15BbWU3MDE3ODk0NDE@._V1._SX94_SY140_.jpg",
       "description":"The story of Beatrix Potter, the author of the beloved and best-selling children's book, \"The Tale of Peter Rabbit\", and her struggle for love, happiness and success.",
       "rating":7.0,
       "title":"Miss Potter"
    },
    {
       "id":"4fede5cd312f9127960002b9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc0MjMzNjY4M15BMl5BanBnXkFtZTYwNTQ1NTk5._V1._SX94_SY140_.jpg",
       "description":"An ambitious Asian Briton and his white lover strive for success and hope, when they open up a glamorous laundromat.",
       "rating":6.9,
       "title":"My Beautiful Laundrette"
    },
    {
       "id":"4fede5cf312f9127960002ba",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODA5MzU3OTk5OV5BMl5BanBnXkFtZTcwMzY3NzAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Biography of Loretta Lynn, a country and western singer that came from poverty to fame.",
       "rating":7.3,
       "title":"Nashville Lady"
    },
    {
       "id":"4fede5d1312f9127960002bb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BNTAyNzk3NDcyNV5BMl5BanBnXkFtZTcwNzU0MzE2MQ@@._V1._SX94_SY140_.jpg",
       "description":"An estranged father returns with plans to open a bar with the son who still harbors resentment towards him.",
       "rating":6.2,
       "title":"Nos retrouvailles"
    },
    {
       "id":"4fede5d5312f9127960002bc",
       "cover_url":null,
       "description":null,
       "rating":6.9,
       "title":"Passe ton bac d'abord"
    },
    {
       "id":"4fede5d7312f9127960002bd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA3MTY4Mjg2OV5BMl5BanBnXkFtZTYwOTc3MjQ5._V1._SX94_SY140_.jpg",
       "description":"Mark runs a pirate radio station and causes an uproar when he speaks his mind and enthralls fellow teens.",
       "rating":6.9,
       "title":"Pump Up the Volume"
    },
    {
       "id":"4fede5db312f9127960002be",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA0NTY2NzQ1MF5BMl5BanBnXkFtZTcwNjU1NjAyMg@@._V1._SX94_SY140_.jpg",
       "description":"A young woman who has been in and out from rehab for the past 10 years returns home for the weekend for her sister's wedding.",
       "rating":6.8,
       "title":"Rachel se marie"
    },
    {
       "id":"4fede5dd312f9127960002bf",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTIzOTkzMzc3M15BMl5BanBnXkFtZTYwNjYyNDU5._V1._SX94_SY140_.jpg",
       "description":"A leukemia patient attempts to end a 20-year feud with her sister to get her bone marrow.",
       "rating":6.6,
       "title":"Simples secrets"
    },
    {
       "id":"4fede5e0312f9127960002c0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU5NDA4NDE2Ml5BMl5BanBnXkFtZTcwNDMxMDIzMw@@._V1._SX94_SY140_.jpg",
       "description":"After the death of his brother, An expert street dancer goes to Georgia to attend Truth University....",
       "rating":4.5,
       "title":"Steppin'"
    },
    {
       "id":"4fede5e1312f9127960002c1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk2Mjg2MTE3NV5BMl5BanBnXkFtZTcwNDA0MTAwMQ@@._V1._SX94_SY140_.jpg",
       "description":"A British mystery author visits her publisher's home in the South of France, where her interaction with his unusual daughter sets off some touchy dynamics.",
       "rating":6.7,
       "title":"Swimming Pool"
    },
    {
       "id":"4fede5e4312f9127960002c2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTI2NDc5NzM1NV5BMl5BanBnXkFtZTYwNzg4Mzg4._V1._SX94_SY140_.jpg",
       "description":"A young strong-willed peasant girl, becomes the affection of two men, in the end tragically falling into the arms of one.",
       "rating":7.2,
       "title":"Tess"
    },
    {
       "id":"4fede5e5312f9127960002c3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMwMzI0MjQxMV5BMl5BanBnXkFtZTcwNDQ0OTkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"The story of the famous and influential 1960's rock band and its lead singer and composer, Jim Morrison.",
       "rating":7.0,
       "title":"The Doors"
    },
    {
       "id":"4fede5e9312f9127960002c4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ2Njk1NDg0MV5BMl5BanBnXkFtZTcwMzQ2MTMzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Part drama, part documentary, The Road to Guant\u00e1namo focuses on the Tipton Three, a trio of British Muslims who were held in Guantanamo Bay for two years until they were released without charge.",
       "rating":7.5,
       "title":"The Road to Guantanamo"
    },
    {
       "id":"4fede5eb312f9127960002c5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQwMjExNzkzMV5BMl5BanBnXkFtZTcwMjczNjEzMQ@@._V1._SX94_SY140_.jpg",
       "description":"A pre-operative male-to-female transsexual takes an unexpected journey when she learns that she fathered a son, now a teenage runaway hustling on the streets of New York.",
       "rating":7.4,
       "title":"Transamerica"
    },
    {
       "id":"4fede5ee312f9127960002c6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTUzMDIxNTczNF5BMl5BanBnXkFtZTcwNDc2MzUwMw@@._V1._SX94_SY140_.jpg",
       "description":"Inspired by her childhood, French-Korean filmmaker Ounie Lecomte recounts the emotional journey of a little girl abandoned by her father in an orphanage.",
       "rating":7.3,
       "title":"Une vie toute neuve"
    },
    {
       "id":"4fede5f0312f9127960002c7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A shy woman, endowed with the speed, reflexes, and senses of a cat, walks a thin line between criminal and hero, even as a detective doggedly pursues her, fascinated by both of her personas.",
       "rating":3.2,
       "title":"Catwoman"
    },
    {
       "id":"4fede5f2312f9127960002c8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgyMjE1NDczN15BMl5BanBnXkFtZTYwNDIwNjg5._V1._SX94_SY140_.jpg",
       "description":"A enormous, radioactively mutated lizard runs rampant on the island of Manhattan.",
       "rating":5.0,
       "title":"Godzilla"
    },
    {
       "id":"4fede5f6312f9127960002c9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQ4OTM3NzkyN15BMl5BanBnXkFtZTcwMzIwMzgyMQ@@._V1._SX94_SY140_.jpg",
       "description":"In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
       "rating":8.1,
       "title":"L'arm\u00e9e des douze singes"
    },
    {
       "id":"4fede5f9312f9127960002ca",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTE5OTQ3MTI2M15BMl5BanBnXkFtZTYwMTM0Mjc3._V1._SX94_SY140_.jpg",
       "description":"Scientists discover how to make people invisible, but their test subject becomes an insane killer who stalks them.",
       "rating":5.6,
       "title":"L'homme sans ombre"
    },
    {
       "id":"4fede5fc312f9127960002cb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyNzY4MjcwOF5BMl5BanBnXkFtZTYwMTA3MjI3._V1._SX94_SY140_.jpg",
       "description":"Hoping to alter the events of the past, a 19th century inventor instead travels 800,000 years into the future, where he finds humankind divided into two warring races.",
       "rating":5.7,
       "title":"La machine \u00e0 explorer le temps"
    },
    {
       "id":"4fede600312f9127960002cc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk3MDQ0ODEyNl5BMl5BanBnXkFtZTcwMjM4OTIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Vampire in London is searching for the ideal woman to 'redempt' him.",
       "rating":6.1,
       "title":"La sagesse des crocodiles"
    },
    {
       "id":"4fede603312f9127960002cd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjEzNjg1NTg2NV5BMl5BanBnXkFtZTYwNjY3MzQ5._V1._SX94_SY140_.jpg",
       "description":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
       "rating":8.7,
       "title":"Matrix"
    },
    {
       "id":"4fede605312f9127960002ce",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1._SX94_SY140_.jpg",
       "description":"Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.",
       "rating":7.1,
       "title":"Matrix Reloaded"
    },
    {
       "id":"4fede608312f9127960002cf",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTkyNjc4NTQzOV5BMl5BanBnXkFtZTcwNDYzMTQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
       "rating":6.5,
       "title":"Matrix Revolutions"
    },
    {
       "id":"4fede60a312f9127960002d0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMzk3MTE5MDU5NV5BMl5BanBnXkFtZTYwMjY3NTY3._V1._SX94_SY140_.jpg",
       "description":"When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
       "rating":7.4,
       "title":"Spider-Man"
    },
    {
       "id":"4fede60d312f9127960002d1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODUwMDc5Mzc5M15BMl5BanBnXkFtZTcwNDgzOTY0MQ@@._V1._SX94_SY140_.jpg",
       "description":"A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
       "rating":6.3,
       "title":"Spider-Man 3"
    },
    {
       "id":"4fede60f312f9127960002d2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjE1ODcyODYxMl5BMl5BanBnXkFtZTcwNjA1NDE3MQ@@._V1._SX94_SY140_.jpg",
       "description":"Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius, who becomes Doctor Octopus (aka Doc Ock), after an accident causes him to bond psychically with mechanical tentacles that do his bidding.",
       "rating":7.5,
       "title":"Spider-man 2"
    },
    {
       "id":"4fede613312f9127960002d3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY0NjcyOTUxNV5BMl5BanBnXkFtZTYwNjMxNjc2._V1._SX94_SY140_.jpg",
       "description":"The notorious monster hunter is sent to Transylvania to stop Count Dracula who is using Dr. Frankenstein's research and a werewolf for some sinister purpose.",
       "rating":5.7,
       "title":"Van Helsing"
    },
    {
       "id":"4fede616312f9127960002d4",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA0NDQyMjE1MF5BMl5BanBnXkFtZTcwODE1NzY5MQ@@._V1._SX94_SY140_.jpg",
       "description":"A ski vacation turns horrific for a group of medical students, as they find themselves confronted by an unimaginable menace: Nazi zombies.",
       "rating":6.4,
       "title":"Dead snow"
    },
    {
       "id":"4fede618312f9127960002d5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc2MzAzODI4OF5BMl5BanBnXkFtZTcwNTgzNTkxMQ@@._V1._SX94_SY140_.jpg",
       "description":"After Carlos, a 12-year-old whose father has died in the Spanish Civil War, arrives at an ominous boy's orphanage he discovers the school is haunted and has many dark secrets that he must uncover.",
       "rating":7.5,
       "title":"L'\u00e9chine du diable"
    },
    {
       "id":"4fede61b312f9127960002d6",
       "cover_url":null,
       "description":null,
       "rating":3.3,
       "title":"Lady Blood"
    },
    {
       "id":"4fede61e312f9127960002d7",
       "cover_url":null,
       "description":null,
       "rating":4.1,
       "title":"Le baron vampire"
    },
    {
       "id":"4fede621312f9127960002d8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMwODg0NDgyNV5BMl5BanBnXkFtZTcwODE5OTMzMQ@@._V1._SX94_SY140_.jpg",
       "description":"On one last road trip before they're sent to serve in Vietnam, two brothers and their girlfriends get into an accident that calls their local sheriff to the scene. Thus begins a terrifying experience where the teens are taken to a secluded house of horrors, where a young, would-be killer is being nurtured.",
       "rating":5.8,
       "title":"Massacre \u00e0 la tron\u00e7onneuse, le retour"
    },
    {
       "id":"4fede623312f9127960002d9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1._SX94_SY140_.jpg",
       "description":"After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence.",
       "rating":6.5,
       "title":"Paranormal Activity"
    },
    {
       "id":"4fede625312f9127960002da",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1._SX94_SY140_.jpg",
       "description":"A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.",
       "rating":7.3,
       "title":"The Descent"
    },
    {
       "id":"4fede628312f9127960002db",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTQyODQ0OTY4M15BMl5BanBnXkFtZTcwMTk2ODYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"A sleazy cable-TV programmer begins to  his life and the future of media spin out of control in a very unusual fashion when he acquires a new kind of programming for his station.",
       "rating":7.3,
       "title":"Vid\u00e9odrome"
    },
    {
       "id":"4fede62a312f9127960002dc",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@._V1._SX94_SY140_.jpg",
       "description":"Agatha Christie tale of a man on trial for murder: a trial featuring surprise after surprise.",
       "rating":8.4,
       "title":"Cargo"
    },
    {
       "id":"4fede62c312f9127960002dd",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgzNTEyNjAyNV5BMl5BanBnXkFtZTcwODk0ODIzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Space Marines are sent to investigate strange events at a research facility on Mars but find themselves at the mercy of genetically enhanced killing machines.",
       "rating":5.1,
       "title":"Doom"
    },
    {
       "id":"4fede62e312f9127960002de",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc1MzQ5NTA3MV5BMl5BanBnXkFtZTcwMDUzNDIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"When Victor Frankenstein rejects the artificial man he just created, the monster escapes and later swears revenge.",
       "rating":6.3,
       "title":"Frankenstein"
    },
    {
       "id":"4fede631312f9127960002df",
       "cover_url":null,
       "description":"Moscow, 2004, and wealthy entrepreneur Kuptsov is drilling in the underground part of the city, trying to reach a huge diamond vein...",
       "rating":5.9,
       "title":"L'\u00e9clair noir"
    },
    {
       "id":"4fede634312f9127960002e0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTgwNTY1MjIzMF5BMl5BanBnXkFtZTcwMjE3NTUwMw@@._V1._SX94_SY140_.jpg",
       "description":"A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.",
       "rating":6.8,
       "title":"Le livre d'Eli"
    },
    {
       "id":"4fede637312f9127960002e1",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BOTI2ODA3MTc4MF5BMl5BanBnXkFtZTYwMzUwMjU5._V1._SX94_SY140_.jpg",
       "description":"A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.",
       "rating":7.5,
       "title":"Pi"
    },
    {
       "id":"4fede63b312f9127960002e2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1._SX94_SY140_.jpg",
       "description":"John Connor is now in his 20's, and a female terminator, called T-X or Terminatrix, is after him. Another T-101 is sent back through time to protect John once again on the verge of the rise of the machines.",
       "rating":6.5,
       "title":"Terminator 3 : le soul\u00e8vement des machines"
    },
    {
       "id":"4fede63e312f9127960002e3",
       "cover_url":null,
       "description":null,
       "rating":0.0,
       "title":"5000 PIEDS SOUS TERRE"
    },
    {
       "id":"4fede640312f9127960002e4",
       "cover_url":null,
       "description":"The Bocuse d'Or is one of the most prestigious cooking competitions in the world - it combines haute cuisine with political intrigue...",
       "rating":0.0,
       "title":"BOCUSE"
    },
    {
       "id":"4fede643312f9127960002e5",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5NzM5OTcxMF5BMl5BanBnXkFtZTcwMTExMjAzMQ@@._V1._SX94_SY140_.jpg",
       "description":"Should Tom (Duris) make like his thuggish father or pursue his dream of becoming a pianist?",
       "rating":7.3,
       "title":"DE BATTRE MON COEUR S'EST ARR\u00caT\u00c9"
    },
    {
       "id":"4fede645312f9127960002e6",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc5ODYxNDM5MV5BMl5BanBnXkFtZTcwMDQ5NzQzMQ@@._V1._SX94_SY140_.jpg",
       "description":"A martial arts movie star must fake his death to find the people who are trying to kill him.",
       "rating":5.7,
       "title":"GAME OF DEATH"
    },
    {
       "id":"4fede647312f9127960002e7",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjAxMjc5MzU4OV5BMl5BanBnXkFtZTcwNjAxMDYyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Laborie is a high-flying officer in the French special forces. Her mission is to escort Abedin Nexhep...",
       "rating":6.7,
       "title":"NID DE GU\u00caPES"
    },
    {
       "id":"4fede649312f9127960002e8",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODA3NjUzMzk3MF5BMl5BanBnXkFtZTcwNjczMTIyMQ@@._V1._SX94_SY140_.jpg",
       "description":"After assuming his dead cellmate's identity to get with his girlfriend, an ex-con finds himself the reluctant participant in a casino heist.",
       "rating":5.6,
       "title":"Pi\u00e8ge Fatal"
    },
    {
       "id":"4fede64c312f9127960002e9",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU5NjEzMTA3OF5BMl5BanBnXkFtZTcwNjU5MzA1NA@@._V1._SX94_SY140_.jpg",
       "description":"A hard core Interpol Agent is assigned to an Eastern European task force to target gun trafficking and dope running throughout the Balkans...",
       "rating":4.1,
       "title":"RENDEZ-VOUS EN ENFER"
    },
    {
       "id":"4fede64e312f9127960002ea",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1._SX94_SY140_.jpg",
       "description":"A spirited farm boy, Luke Skywalker, joins rebel forces to save the Princess from the evil Darth Vader, and the galaxy from the Empire's planet-destroying Death Star.",
       "rating":8.8,
       "title":"EPISODE 1"
    },
    {
       "id":"4fede651312f9127960002eb",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1._SX94_SY140_.jpg",
       "description":"Ten years later, Anakin Skywalker shares a forbidden romance with Padm\u00e9, while Obi-Wan investigates an assassination attempt on the Princess and discovers a secret clone army crafted for the Jedi.",
       "rating":6.7,
       "title":"EPISODE 2"
    },
    {
       "id":"4fede653312f9127960002ec",
       "cover_url":null,
       "description":null,
       "rating":6.7,
       "title":"L'AFFAIRE SALENGRO"
    },
    {
       "id":"4fede656312f9127960002ed",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1._SX94_SY140_.jpg",
       "description":"When a demon god steals the Hammer of Invincibility, Thor strikes a mighty blow to get it back.",
       "rating":2.0,
       "title":"ALMIGHTY THOR"
    },
    {
       "id":"4fede65c312f9127960002ee",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BODMwMzcyNjUxNF5BMl5BanBnXkFtZTcwMzI3ODk1Mw@@._V1._SX94_SY140_.jpg",
       "description":"Sinbad discovers an ivory scroll case in the desert camp of the evil sorcerer Al-Jibar, leading him to the golden head of the Colossus of Rhodes.",
       "rating":3.4,
       "title":"SINBAD ET LE MINOTAURE"
    },
    {
       "id":"4fede65e312f9127960002ef",
       "cover_url":null,
       "description":null,
       "rating":0.0,
       "title":"A FOX TALE"
    },
    {
       "id":"4fede661312f9127960002f0",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMjA5MTYyMjc5M15BMl5BanBnXkFtZTcwMjI1OTQyMQ@@._V1._SX94_SY140_.jpg",
       "description":"Based on a true story, Tod Lubitch is born with a deficient immune system (which is unlike being born with AIDS)...",
       "rating":5.6,
       "title":"BUBBLE TROUBLE"
    },
    {
       "id":"4fede663312f9127960002f1",
       "cover_url":null,
       "description":"New York City is invaded by 8-bit creatures.",
       "rating":7.8,
       "title":"PIXELS"
    },
    {
       "id":"4fede667312f9127960002f2",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTc0MjA4MTY1NV5BMl5BanBnXkFtZTcwMDI3NzEzMQ@@._V1._SX94_SY140_.jpg",
       "description":"In order to release his kidnapped sister, sports car mechanic Jackie Chan has to beat a super-criminal street racer.",
       "rating":6.1,
       "title":"JACKIE CHAN SOUS PRESSION"
    },
    {
       "id":"4fede66a312f9127960002f3",
       "cover_url":"http://ia.media-imdb.com/images/M/MV5BMTMwNTEyMTE1NV5BMl5BanBnXkFtZTcwNjI1NDA3NA@@._V1._SX94_SY140_.jpg",
       "description":"When a solar eclipse sends a colossal blast of super chilled air towards the earth, it then sets off a catastrophic chain of events that threatens to engulf the world in ice and begin a new Ice Age.",
       "rating":3.7,
       "title":"MENACE DE GLACE"
    }
 ]
  filteredOptions: Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    //return this.options.filter(option.title => option.title.toLowerCase().includes(filterValue));

    return this.options.filter(function (item) {
      if (item.title != undefined) {
          return item.title.toLowerCase().includes(filterValue.toLowerCase())
      }
    })
  }
}
