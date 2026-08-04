// Shared data source for the News page. Posts are static here for now —
// once an admin screen exists, this array becomes the initial/fallback
// data and the real list will come from Firestore instead, with the same
// shape (id, date, category, title, excerpt, image, hasVideo, likes,
// views, comments) so the components below don't need to change.
const newsPosts = [
  {
    id: 1,
    date: "January 11, 2026",
    category: "Grading",
    title: "Placeholder headline about a recent grading",
    excerpt:
      "Placeholder excerpt text describing the outcome of a recent grading session and the athletes involved.",
    image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post+Placeholder+1",
    hasVideo: true,
    likes: 12,
    views: 340,
    comments: 2,
  },
  {
    id: 2,
    date: "December 7, 2025",
    category: "Competition",
    title: "Placeholder headline about a provincial result",
    excerpt:
      "Placeholder excerpt text summarizing how the club performed at a recent provincial competition.",
    image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post+Placeholder+2",
    hasVideo: false,
    likes: 8,
    views: 210,
    comments: 0,
  },
  {
    id: 3,
    date: "November 6, 2025",
    category: "Club news",
    title: "Placeholder headline about the club dojo",
    excerpt:
      "Placeholder excerpt text about improvements or updates to the club's training facility.",
    image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post+Placeholder+3",
    hasVideo: false,
    likes: 5,
    views: 174,
    comments: 0,
  },
  {
    id: 4,
    date: "October 10, 2025",
    category: "Member spotlight",
    title: "Placeholder headline about a member milestone",
    excerpt:
      "Placeholder excerpt text celebrating a member's achievement, such as reaching a new belt grade.",
    image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post+Placeholder+4",
    hasVideo: false,
    likes: 1,
    views: 72,
    comments: 0,
  },
  {
    id: 5,
    date: "June 2, 2025",
    category: "Training",
    title: "Placeholder headline about a training camp",
    excerpt:
      "Placeholder excerpt text about a recent or upcoming training camp for club members.",
    image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post+Placeholder+5",
    hasVideo: false,
    likes: 0,
    views: 71,
    comments: 0,
  },
];

export default newsPosts;