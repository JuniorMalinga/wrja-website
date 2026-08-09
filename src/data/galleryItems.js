// Real gallery photos
import adult1 from "../assets/images/gallery/Adult 1.jpg";
import adult2 from "../assets/images/gallery/Adult 2.jpg";

import competition1 from "../assets/images/gallery/Competition 1.jpg";
import competition2 from "../assets/images/gallery/Competition 2.jpg";
import competition3 from "../assets/images/gallery/Competition 3.jpg";
import competition4 from "../assets/images/gallery/Competition 4.jpg";

import kid1 from "../assets/images/gallery/Kid 1.jpg";
import kid2 from "../assets/images/gallery/Kid 2.jpg";
import kid3 from "../assets/images/gallery/Kid 3.jpg";

export const galleryCategories = [
  { slug: "all", label: "All" },
  { slug: "kids", label: "Kids Judo" },
  { slug: "adult", label: "Adult Judo" },
  { slug: "womens", label: "Women's Judo" },
  { slug: "competitions", label: "Competitions" },
  { slug: "training", label: "Training" },
];

// Gallery images

const galleryItems = [
  {
    id: 1,
    category: "adult",
    photoUrl: adult1,
    caption: "Adult Judo training",
  },
  {
    id: 2,
    category: "adult",
    photoUrl: adult2,
    caption: "Adult Judo training session",
  },
  {
    id: 3,
    category: "competitions",
    photoUrl: competition1,
    caption: "Judo competition",
  },
  {
    id: 4,
    category: "competitions",
    photoUrl: competition2,
    caption: "Competition action",
  },
  {
    id: 5,
    category: "competitions",
    photoUrl: competition3,
    caption: "Judo competition action",
  },
  {
    id: 6,
    category: "competitions",
    photoUrl: competition4,
    caption: "WRJA competition",
  },
  {
    id: 7,
    category: "kids",
    photoUrl: kid1,
    caption: "Kids Judo training",
  },
  {
    id: 8,
    category: "kids",
    photoUrl: kid2,
    caption: "Junior Judo training",
  },
  {
    id: 9,
    category: "kids",
    photoUrl: kid3,
    caption: "Kids Judo session",
  },
];

export default galleryItems;