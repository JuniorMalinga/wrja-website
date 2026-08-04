export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.type}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
}
