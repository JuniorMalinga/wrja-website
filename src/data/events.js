// Shared event data. EventsPage.jsx uses this for both the upcoming
// list and the calendar; EventDetailPage.jsx uses it for the full
// detail view. applicationSheetUrl and qrCodeImage are optional —
// filled in by the admin per event once an event actually has an
// application process open. 

import placeholderQrCode from "../assets/images/events/qr codes/unnamed.png";
import placeholder from "../assets/images/team/image 79.jpg";


const events = [
  {
    id: 1,
    name: "Placeholder grading",
    type: "Grading",
    date: "2026-09-12",
    location: "Special dojo",
    image: placeholder,
    description:
      "Placeholder description of what this grading covers, who can attend, and what to bring.",
    applicationSheetUrl: "https://docs.google.com/spreadsheets/d/138pFFvZxT-s6YzoS4eAARgQkZGQdmlJ1i8FOzhauuYE/edit?gid=0#gid=0",
    qrCodeImage: placeholderQrCode,
  },
  {
    id: 2,
    name: "Placeholder provincial competition",
    type: "Competition",
    date: "2026-10-10",
    location: "Placeholder venue",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=Competition",
    description:
      "Placeholder description of the competition, weight categories, and entry requirements.",
    applicationSheetUrl: "",
    qrCodeImage: "",
  },
  {
    id: 3,
    name: "Placeholder training camp",
    type: "Training camp",
    date: "2026-11-21",
    location: "Placeholder venue",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=Training+Camp",
    description:
      "Placeholder description of the training camp schedule and what athletes should bring.",
    applicationSheetUrl: "",
    qrCodeImage: "",
  }, 
  {
    id: 4,
    name: "Placeholder grading",
    type: "Grading",
    date: "2026-11-21",
    location: "Special dojo",
    image: placeholder,
    description:
      "Placeholder description of what this grading covers, who can attend, and what to bring.",
    applicationSheetUrl: "https://docs.google.com/spreadsheets/d/138pFFvZxT-s6YzoS4eAARgQkZGQdmlJ1i8FOzhauuYE/edit?gid=0#gid=0",
    qrCodeImage: placeholderQrCode,
  },
];

export default events;