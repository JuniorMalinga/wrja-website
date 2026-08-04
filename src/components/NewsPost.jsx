export default function NewsPost({ post }) {
  return (
    <article className="news-post">
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p>{post.body}</p>
    </article>
  );
}
