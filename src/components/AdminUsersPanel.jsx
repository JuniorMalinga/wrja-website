import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const emptyUser = { firstName: "", lastName: "", email: "", password: "", role: "athlete" };

export default function AdminUsersPanel() {
  const { users, createUser, updateUser, deleteUser } = useAuth();
  const [formState, setFormState] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const openAddForm = () => {
    setErrorMessage("");
    setFormState({ id: null, ...emptyUser });
  };

  const openEditForm = (user) => {
    setErrorMessage("");
    setFormState({ ...user });
  };

  const handleSave = (event) => {
    event.preventDefault();
    try {
      if (formState.id) {
        updateUser(formState.id, formState);
      } else {
        createUser(formState);
      }
      setFormState(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDelete = (user) => {
    if (window.confirm(`Delete ${user.firstName} ${user.lastName}?`)) {
      try {
        deleteUser(user.id);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Users</h2>
        <button className="btn btn-accent" onClick={openAddForm}>+ Add user</button>
      </div>

      {formState && (
        <form className="admin-form" onSubmit={handleSave}>
          <div className="admin-form-row-2">
            <label>First name<input value={formState.firstName} onChange={(event) => setFormState({ ...formState, firstName: event.target.value })} required /></label>
            <label>Last name<input value={formState.lastName} onChange={(event) => setFormState({ ...formState, lastName: event.target.value })} required /></label>
          </div>
          <div className="admin-form-row-2">
            <label>Email<input type="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} required /></label>
            <label>Password<input type="text" value={formState.password} onChange={(event) => setFormState({ ...formState, password: event.target.value })} required /></label>
          </div>
          <label>Role
            <select value={formState.role} onChange={(event) => setFormState({ ...formState, role: event.target.value })}>
              <option value="athlete">Athlete</option>
              <option value="guardian">Parent / Guardian</option>
              <option value="admin">Administrator</option>
            </select>
          </label>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <div className="admin-form-actions">
            <button type="submit" className="btn btn-accent">{formState.id ? "Save changes" : "Add user"}</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => setFormState(null)}>Cancel</button>
          </div>
        </form>
      )}

      {errorMessage && !formState && <p className="auth-error">{errorMessage}</p>}
      <table className="admin-table">
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th></th></tr></thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="admin-table-actions">
                <button onClick={() => openEditForm(user)}>Edit</button>
                <button onClick={() => handleDelete(user)} disabled={user.role === "admin"}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
