import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AdminEventsPanel from "../components/AdminEventsPanel";
import AdminNewsPanel from "../components/AdminNewsPanel";
import AdminBookingsPanel from "../components/AdminBookingsPanel";
import AdminContactsPanel from "../components/AdminContactsPanel";

const tabs = [
  { slug: "events", label: "Events", Component: AdminEventsPanel },
  { slug: "news", label: "News", Component: AdminNewsPanel },
  { slug: "bookings", label: "Bookings & Payments", Component: AdminBookingsPanel },
  { slug: "messages", label: "Messages", Component: AdminContactsPanel },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("events");
  const ActivePanel = tabs.find((tab) => tab.slug === activeTab).Component;

  return (
    <div className="admin-page">
      <PageHeader title="Admin" />

      <section className="admin-section">
        <div className="admin-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              className={activeTab === tab.slug ? "admin-tab-active" : ""}
              onClick={() => setActiveTab(tab.slug)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ActivePanel />
      </section>
    </div>
  );
}