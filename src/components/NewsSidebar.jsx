import { Link } from "react-router-dom";
import newsPosts from "../data/newsPosts";

const socialStats = [
  { label: "Fans", count: 34, className: "social-stat-facebook" },
  { label: "Followers", count: 45, className: "social-stat-twitter" },
  { label: "Subscribers", count: 23, className: "social-stat-youtube" },
];

const tags = ["Judo", "Judo club", "Champion", "Athlete", "Fitness", "Dojo", "Grading", "Training"];

export default function NewsSidebar() {
  const recentPosts = newsPosts.slice(0, 3);

  return (
    <aside className="news-sidebar">
      <div className="sidebar-block">
        <h3>Get in touch</h3>
        <div className="social-stats">
          {socialStats.map((stat) => (
            <div key={stat.label} className={`social-stat ${stat.className}`}>
              <span className="social-stat-count">{stat.count}</span>
              <span className="social-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-block">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter to stay updated. We promise not to spam.</p>
        {/* Non-functional for now — no submit handling wired up yet. */}
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit" aria-label="Subscribe">&#9993;</button>
        </form>
      </div>

      <div className="sidebar-block">
        <h3>Recent posts</h3>
        <ul className="recent-posts-list">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/news/${post.id}`} className="recent-post-link">
                <img src={post.image} alt="" />
                <div>
                  <p className="recent-post-title">{post.title}</p>
                  <p className="recent-post-date">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-block">
        <h3>Tags</h3>
        <div className="tag-cloud">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}