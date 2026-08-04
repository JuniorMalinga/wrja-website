// Shared data source for the programs listing and each program's detail
// page. Keeping it in one file means both pages always show the same
// content and adding a new program only means adding one entry here.
const programs = [
  {
    slug: "kids-judo",
    highlightWord: "Kids",
    restWord: "Judo",
    image: "https://placehold.co/900x700/222222/666666?text=Kids+Judo+Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum feugiat est, et ornare mauris finibus at. Pellentesque elit nisi, auctor et mi vel, placerat maximus enim.",
    bullets: ["Falling and balance basics", "Age-appropriate drills and games", "Focus on discipline and respect"],
  },
  {
    slug: "adult-judo",
    highlightWord: "Adult",
    restWord: "Judo",
    image: "https://placehold.co/900x700/222222/666666?text=Adult+Judo+Placeholder",
    description:
      "Nunc a porta felis. Proin tempor feugiat ipsum nec tristique. Integer vel elit luctus, tincidunt eros in, commodo sem. Aenean a sagittis leo, a laoreet nisi. Cras sagittis at arcu et rutrum.",
    bullets: ["Throws and groundwork technique", "Competition preparation", "All grades welcome"],
  },
  {
    slug: "womens-judo",
    highlightWord: "Women's",
    restWord: "Judo",
    image: "https://placehold.co/900x700/222222/666666?text=Women's+Judo+Placeholder",
    description:
      "Aliquam sit amet mollis nulla, in efficitur tellus. Donec sit amet sapien finibus velit tincidunt pulvinar ac eget urna. Praesent id turpis vehicula, hendrerit turpis a, malesuada nibh.",
    bullets: ["Supportive, welcoming training group", "Confidence and self-defense skills", "Flexible session times"],
  },
];

export default programs;