import { Link } from "react-router-dom";
import Reveal from "./Reveal";

// One card in the News list. Like/view/comment counts are decorative
// placeholders for now — no backend wired up, so they don't actually
// increment. hasVideo shows a play button over the image; wire it up to
// a real video source once posts support video attachments.
export default function NewsPost({ post }) {
  return (
    <Reveal className="news-post-card">
      <div className="news-post-image-wrap">
        <img src={post.image} alt={post.title} className="news-post-image" />
        {post.hasVideo && (
          <button className="news-post-play-button" aria-label="Play video">&#9658;</button>
        )}
      </div>

      <div className="news-post-meta">
        <span className="news-post-date">{post.date}</span>
        <span className="news-post-category">{post.category}</span>
      </div>

      <Link to={`/news/${post.id}`} className="news-post-title-link">
        <h3>{post.title}</h3>
      </Link>

      <p>{post.excerpt}</p>

      <div className="news-post-footer">
        <div className="news-post-reactions">
          <span>&hearts; {post.likes}</span>
          <span>&#128065; {post.views}</span>
          <span>&#128172; {post.comments}</span>
        </div>

        {post.url && (
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="news-post-source-link">
            Read on {post.source} &rarr;
          </a>
        )}
      </div>
    </Reveal>
  );
}