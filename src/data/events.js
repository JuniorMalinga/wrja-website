// Shared event data. EventsPage.jsx should import this array instead of
// keeping its own inline copy, so edits made in Admin are the same data
// the public site would show once this is backed by Firestore.
const events = [
  { id: 1, name: "Placeholder grading", type: "Grading", date: "2026-02-14", location: "Placeholder dojo" },
  { id: 2, name: "Placeholder provincial competition", type: "Competition", date: "2026-03-08", location: "Placeholder venue" },
  { id: 3, name: "Placeholder training camp", type: "Training camp", date: "2026-04-19", location: "Placeholder venue" },
];

export default events;