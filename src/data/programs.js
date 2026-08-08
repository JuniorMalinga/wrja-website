// Shared data source for the programs listing and each program's detail
// page. Keeping it in one file means both pages always show the same
// content and adding a new program only means adding one entry here.

import kidsJudo from "../assets/images/Kids/image 91.jpg";
import adultJudo from "../assets/images/Adult/Buff Guy.jpg";
import womensJudo from "../assets/images/Women/image 1.jpg";

const programs = [
  {
    slug: "kids-judo",
    highlightWord: "Kids",
    restWord: "Judo",
    image: kidsJudo,
    description:
      "Our kids' program introduces judo through structured, age-appropriate coaching in a safe and supportive environment. Young athletes learn the fundamentals of balance, falling safely, and basic technique, while building discipline, respect, and confidence both on and off the mat.",
    bullets: ["Falling and balance basics", "Age-appropriate drills and games", "Focus on discipline and respect"],
  },
  {
    slug: "adult-judo",
    highlightWord: "Adult",
    restWord: "Judo",
    image: adultJudo,
    description:
      "Our adult program is built for athletes at every level, from complete beginners to competitive judoka. Training covers standing technique (tachi-waza), groundwork (ne-waza), and competition-focused conditioning under experienced, qualified coaches.",
    bullets: ["Throws and groundwork technique", "Competition preparation", "All grades welcome"],
  },
  {
    slug: "womens-judo",
    highlightWord: "Women's",
    restWord: "Judo",
    image: womensJudo,
    description:
      "Our women's program offers a dedicated, welcoming space to train, compete, and grow in the sport. Sessions focus on technical development and physical fitness alongside the confidence and self-defense skills judo is known for, all within a supportive club community.",
    bullets: ["Supportive, welcoming training group", "Confidence and self-defense skills", "Flexible session times"],
  },
];

export default programs;