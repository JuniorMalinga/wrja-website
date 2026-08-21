import { useState } from "react";
import seedBookings from "../data/bookings";

const bookingStatuses = ["Pending", "Confirmed", "Cancelled"];
const paymentStatuses = ["Unpaid", "Paid"];

export default function AdminBookingsPanel() {
  const [bookings, setBookings] = useState(() => seedBookings.map((booking) => ({ ...booking })));

  const updateField = (id, field, value) => {
    setBookings((current) =>
      current.map((booking) => (booking.id === id ? { ...booking, [field]: value } : booking))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this booking?")) {
      setBookings((current) => current.filter((booking) => booking.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Bookings &amp; Payments</h2>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Instructor</th>
            <th>Preferred</th>
            <th>Payment method</th>
            <th>Status</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>
                {booking.name}
                <div className="admin-table-subtext">{booking.email} &middot; {booking.phone}</div>
              </td>
              <td>{booking.program}</td>
              <td>{booking.instructor}</td>
              <td>{booking.preferredDate} {booking.preferredTime}</td>
              <td>{booking.paymentMethod}</td>
              <td>
                <select
                  value={booking.status}
                  onChange={(event) => updateField(booking.id, "status", event.target.value)}
                  className={`admin-status admin-status-${booking.status.toLowerCase()}`}
                >
                  {bookingStatuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  value={booking.paymentStatus}
                  onChange={(event) => updateField(booking.id, "paymentStatus", event.target.value)}
                  className={`admin-status admin-status-${booking.paymentStatus.toLowerCase()}`}
                >
                  {paymentStatuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </td>
              <td className="admin-table-actions">
                <button onClick={() => handleDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}