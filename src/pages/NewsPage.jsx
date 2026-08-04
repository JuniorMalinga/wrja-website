import NewsPost from "../components/NewsPost";

const placeholderPosts = [
  { id: 1, title: "Placeholder headline about a recent grading", date: "January 11, 2026", body: "Placeholder body text." },
  { id: 2, title: "Placeholder headline about a provincial result", date: "December 7, 2025", body: "Placeholder body text." },
  { id: 3, title: "Placeholder headline about the club dojo", date: "November 6, 2025", body: "Placeholder body text." },
];

export default function NewsPage() {
  return (
    <div className="simple-page">
      <h1>News &amp; updates</h1>
      {placeholderPosts.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </div>
  );
}
