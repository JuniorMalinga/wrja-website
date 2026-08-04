import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import newsPosts from "../data/newsPosts";
import Reveal from "../components/Reveal";

export default function NewsDetailPage() {
  const { id } = useParams();
  const post = newsPosts.find((item) => String(item.id) === id);

  if (!post) {
    return (
      <div className="simple-page">
        <h1>Post not found</h1>
        <Link to="/news">Back to news</Link>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <PageHeader title={post.title} crumbs={[{ label: "News", to: "/news" }]} />

      <section className="news-detail">
        <Reveal className="news-detail-image-wrap">
          <img src={post.image} alt={post.title} />
        </Reveal>

        <Reveal delay={150} className="news-detail-content">
          <div className="news-post-meta">
            <span className="news-post-date">{post.date}</span>
            <span className="news-post-category">{post.category}</span>
          </div>
          <p>{post.excerpt}</p>
          <Link to="/news" className="btn btn-outline-dark">&larr; Back to all news</Link>
        </Reveal>
      </section>
    </div>
  );
}