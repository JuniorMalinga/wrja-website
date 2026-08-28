import PageHeader from "../components/PageHeader";
import UpcomingEventsList from "../components/UpcomingEventsList";
import EventsCalendar from "../components/EventsCalendar";

export default function EventsPage() {
  return (
    <div className="events-page">
      <PageHeader title="Events" />

      <section className="events-page-layout">
        <UpcomingEventsList />
        <EventsCalendar />
      </section>
    </div>
  );
}