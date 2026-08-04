import PageHeader from "../components/PageHeader";
import EventsCalendar from "../components/EventsCalendar";

export default function EventsPage() {
  return (
    <div className="events-page">
      <PageHeader title="Events" />
      <EventsCalendar />
    </div>
  );
}