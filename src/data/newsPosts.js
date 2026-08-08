// Shared data source for the News page. Posts are static here for now —
// once an admin screen exists, this array becomes the initial/fallback
// data and the real list will come from Firestore instead, with the same
// shape (id, date, category, title, excerpt, image, source, url,
// hasVideo, likes, views, comments) so the components below don't need
// to change.
//
// These are real published articles about WRJA-affiliated athletes.
// excerpt is a paraphrase, not a quote — url links out to the original
// article on the publisher's own site, since that's their reporting,
// not ours to host in full. 

import News1 from "../assets/images/News/IsabellaandGabriell_27891-780x470.jpg";
import News2 from "../assets/images/News/e4250762-9ab5-4f48-_13759-e1784891412747.jpg";
import News3 from "../assets/images/News/DaneVanHeerdenPJOke_14250-e1784284806997.jpg";
import News4 from "../assets/images/News/KG6A5728-topaz-denoise-sharpen-faceai-2048x1365.jpg";

const newsPosts = [
  {
    id: 1,
    date: "4 August 2026",
    category: "Competition",
    title: "National success for Golden Score judokas",
    excerpt:
      "Golden Score athletes returned from the National Schools and SA Open Judo Championships in Gqeberha with four gold, six silver, and four bronze medals across multiple age divisions.",
    image: News1,
    source: "Randfontein Herald",
    url: "https://www.citizen.co.za/randfontein-herald/sports-news/local-sports/2026/08/04/national-success-for-golden-score-judokas/",
    hasVideo: false,
    likes: 0,
    views: 0,
    comments: 0,
  },
  {
    id: 2,
    date: "24 July 2026",
    category: "Competition",
    title: "4 KJK Judo athletes claim medals at African Cup",
    excerpt:
      "Four KJK Judo athletes brought home medals from the African Cup Tournament in Brixton — Tia Sheppard, Shasa-Mercedez Erasmus, Adriaan Jansen van Vuuren, and Nico Sheppard combined for several gold, silver, and bronze results across the kumite and kata divisions.",
    image: News2,
    source: "Krugersdorp News",
    url: "https://www.citizen.co.za/krugersdorp-news/sports-news/local-sports/2026/07/24/4-kjk-judo-athletes-claim-medals-at-african-cup/",
    hasVideo: false,
    likes: 0,
    views: 0,
    comments: 0,
  },
  {
    id: 3,
    date: "18 July 2026",
    category: "Competition",
    title: "Golden Score judokas stand tall among Africa's best",
    excerpt:
      "Golden Score Judo Club athletes competed at the African Championships in Johannesburg, with Dane van Heerden taking gold in the Cadet Boys under-50kg division and Madison Lombaard earning silver against opposition from across Africa and beyond.",
    image: News3,
    source: "Randfontein Herald",
    url: "https://www.citizen.co.za/randfontein-herald/sports-news/local-sports/2026/07/18/golden-score-judokas-stand-tall-among-africas-best/",
    hasVideo: false,
    likes: 0,
    views: 0,
    comments: 0,
  },
  {
    id: 4,
    date: " 9 July 2026",
    category: "Club news",
    title: "Suid-Afrikaanse Judokampioenskappe lok land se beste judokas na Gqeberha",
    excerpt:
      "The South African Judo Championships brought the country's top judokas together in Gqeberha, part of a strong month for West Rand–affiliated athletes on the national stage.",
    image: News4,
    source: "Nuusflits",
    url: "https://nuusflits.com/suid-afrikaanse-judokampioenskappe-lok-land-se-beste-judokas-na-gqeberha/",
    hasVideo: false,
    likes: 0,
    views: 0,
    comments: 0,
  },
];

export default newsPosts;