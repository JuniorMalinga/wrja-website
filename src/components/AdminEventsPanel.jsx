import { useState } from "react";
import seedEvents from "../data/events";


const emptyEvent = {
  name: "",
  type: "",
  date: "",
  location: "",
  description: "",
  applicationSheetUrl: "",
  qrCodeImage: "",
};

export default function AdminEventsPanel() {
  const [events, setEvents] = useState(() =>
    seedEvents.map((event) => ({ ...event }))
  );
  const [formState, setFormState] = useState(null);

  const openAddForm = () => setFormState({ id: null, ...emptyEvent });
  const openEditForm = (event) => setFormState({ ...event });
  const closeForm = () => setFormState(null);

  const handleFieldChange = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (formState.id) {
      setEvents((current) =>
        current.map((item) =>
          item.id === formState.id ? formState : item
        )
      );
    } else {
      setEvents((current) => [
        ...current,
        { ...formState, id: Date.now() },
      ]);
    }

    closeForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this event?")) {
      setEvents((current) => current.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Events</h2>
        <button className="btn btn-accent" onClick={openAddForm}>
          + Add event
        </button>
      </div>

      {formState && (
        <form className="admin-form" onSubmit={handleSave}>
          <div className="admin-form-row-2">
            <label>
              Event name
              <input
                type="text"
                value={formState.name}
                onChange={(event) =>
                  handleFieldChange("name", event.target.value)
                }
                required
              />
            </label>

            <label>
              Type
              <input
                type="text"
                value={formState.type}
                onChange={(event) =>
                  handleFieldChange("type", event.target.value)
                }
                placeholder="Grading, Competition, Training camp..."
                required
              />
            </label>
          </div>

          <div className="admin-form-row-2">
            <label>
              Date
              <input
                type="date"
                value={formState.date}
                onChange={(event) =>
                  handleFieldChange("date", event.target.value)
                }
                required
              />
            </label>

            <label>
              Location
              <input
                type="text"
                value={formState.location}
                onChange={(event) =>
                  handleFieldChange("location", event.target.value)
                }
                required
              />
            </label>
          </div>

          {/* event description field */}
          <label>
            Description
            <textarea
              rows="3"
              value={formState.description}
              onChange={(event) =>
                handleFieldChange("description", event.target.value)
              }
            />
          </label>

          {/* Google Sheets application link and QR code image URL fields */}
          <div className="admin-form-row-2">
            <label>
              Google Sheets application link
              <input
                type="url"
                value={formState.applicationSheetUrl}
                onChange={(event) =>
                  handleFieldChange(
                    "applicationSheetUrl",
                    event.target.value
                  )
                }
                placeholder="https://docs.google.com/spreadsheets/..."
              />
            </label>

            <label>
              QR code image URL
              <input
                type="url"
                value={formState.qrCodeImage}
                onChange={(event) =>
                  handleFieldChange("qrCodeImage", event.target.value)
                }
                placeholder="https://..."
              />
            </label>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-accent">
              {formState.id ? "Save changes" : "Add event"}
            </button>

            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={closeForm}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.type}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td className="admin-table-actions">
                <button onClick={() => openEditForm(event)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(event.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}