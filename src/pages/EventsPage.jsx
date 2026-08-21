import PageHeader from "../components/PageHeader";
import EventsCalendar from "../components/EventsCalendar";
import events from "../data/events";

export default function EventsPage() {
  return (
    <div className="events-page">
      <PageHeader title="Events" />
      <EventsCalendar />
    </div>
  );
}