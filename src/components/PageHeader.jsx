import { Link } from "react-router-dom";

// Reusable page banner: dark background, title, and a Home / CurrentPage
// breadcrumb, matching the "Events" reference banner.
export default function PageHeader({ title }) {
  return (
    <section
      className="page-header"
      style={{
        backgroundImage:
          "url(https://placehold.co/1600x400/1a1a1a/555555?text=Page+Header+Placeholder)",
      }}
    >
      <div className="page-header-overlay" />
      <div className="page-header-content">
        <h1>{title}</h1>
        <p className="page-header-breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span className="current">{title}</span>
        </p>
      </div>
    </section>
  );
}