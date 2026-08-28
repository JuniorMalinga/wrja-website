import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import events from "../data/events";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((item) => String(item.id) === id);

  if (!event) {
    return (
      <div className="simple-page">
        <h1>Event not found</h1>
        <Link to="/events">Back to events</Link>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-ZA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="event-detail-page">
      <PageHeader title={event.name} crumbs={[{ label: "Events", to: "/events" }]} />

      <section className="event-detail">
        <Reveal className="event-detail-image-wrap">
          <img src={event.image} alt={event.name} />
        </Reveal>

        <Reveal delay={150} className="event-detail-content">
          <span className="event-detail-type">{event.type}</span>
          <p className="event-detail-meta">
            &#128197; {formattedDate} &nbsp;&middot;&nbsp; &#128205; {event.location}
          </p>
          <p>{event.description}</p>
          <Link to="/events" className="btn btn-outline-dark">&larr; Back to all events</Link>
        </Reveal>
      </section>

      <Reveal className="event-application-section">
        <h2>Apply for this event</h2>

        {event.applicationSheetUrl || event.qrCodeImage ? (
          <div className="event-application-options">
            {event.applicationSheetUrl && (
              <div className="event-application-option">
                <p>Apply online through our entry form.</p>
                <a
                  href={event.applicationSheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Open application form
                </a>
              </div>
            )}

            {event.qrCodeImage && (
              <div className="event-application-option">
                <p>Or scan this code with your phone to apply.</p>
                <img src={event.qrCodeImage} alt="Scan to apply" className="event-qr-code" />
              </div>
            )}
          </div>
        ) : (
          <p className="event-application-none">
            Applications for this event aren't open yet — use the enquiry form below and we'll let you know as soon as they are.
          </p>
        )}
      </Reveal>

      <Reveal delay={100} className="event-enquiry-section">
        <h2>Enquire about this event</h2>
        <p>Have a question about this event? Send us a message and we'll get back to you.</p>

        {/* Non-functional for now — no submit handling wired up yet. */}
        <form className="event-enquiry-form" onSubmit={(event) => event.preventDefault()}>
          <div className="event-enquiry-row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
          </div>
          <textarea rows="4" placeholder="Your question" required />
          <button type="submit" className="btn btn-accent">Send enquiry</button>
        </form>
      </Reveal>
    </div>
  );
}