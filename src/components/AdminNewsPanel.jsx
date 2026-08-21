import { useState } from "react";
import seedNewsPosts from "../data/newsPosts";

const emptyPost = {
  date: "",
  category: "",
  title: "",
  excerpt: "",
  image: "https://placehold.co/1200x700/1a1a1a/666666?text=News+Post",
  source: "",
  url: "",
  hasVideo: false,
  likes: 0,
  views: 0,
  comments: 0,
};

export default function AdminNewsPanel() {
  const [posts, setPosts] = useState(() => seedNewsPosts.map((post) => ({ ...post })));
  const [formState, setFormState] = useState(null);

  const openAddForm = () => setFormState({ id: null, ...emptyPost });
  const openEditForm = (post) => setFormState({ ...post });
  const closeForm = () => setFormState(null);

  const handleFieldChange = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (formState.id) {
      setPosts((current) => current.map((item) => (item.id === formState.id ? formState : item)));
    } else {
      setPosts((current) => [...current, { ...formState, id: Date.now() }]);
    }
    closeForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this news post?")) {
      setPosts((current) => current.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>News</h2>
        <button className="btn btn-accent" onClick={openAddForm}>+ Add post</button>
      </div>

      {formState && (
        <form className="admin-form" onSubmit={handleSave}>
          <label>
            Title
            <input
              type="text"
              value={formState.title}
              onChange={(event) => handleFieldChange("title", event.target.value)}
              required
            />
          </label>

          <div className="admin-form-row-2">
            <label>
              Date
              <input
                type="text"
                value={formState.date}
                onChange={(event) => handleFieldChange("date", event.target.value)}
                placeholder="e.g. August 20, 2026"
                required
              />
            </label>
            <label>
              Category
              <input
                type="text"
                value={formState.category}
                onChange={(event) => handleFieldChange("category", event.target.value)}
                required
              />
            </label>
          </div>

          <label>
            Excerpt
            <textarea
              rows="3"
              value={formState.excerpt}
              onChange={(event) => handleFieldChange("excerpt", event.target.value)}
              required
            />
          </label>

          <div className="admin-form-row-2">
            <label>
              Source (if reposting coverage)
              <input
                type="text"
                value={formState.source}
                onChange={(event) => handleFieldChange("source", event.target.value)}
              />
            </label>
            <label>
              Source URL
              <input
                type="url"
                value={formState.url}
                onChange={(event) => handleFieldChange("url", event.target.value)}
              />
            </label>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-accent">{formState.id ? "Save changes" : "Add post"}</button>
            <button type="button" className="btn btn-outline-dark" onClick={closeForm}>Cancel</button>
          </div>
        </form>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.date}</td>
              <td className="admin-table-actions">
                <button onClick={() => openEditForm(post)}>Edit</button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}