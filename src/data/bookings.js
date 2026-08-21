// Mock booking requests for the admin panel to demonstrate against,
// since the public booking form doesn't write anywhere real yet. Once
// Firestore is wired up, this becomes the initial/fallback shape only.
const bookings = [
  {
    id: 1,
    name: "Thabo Nkosi",
    email: "thabo.n@example.com",
    phone: "071 234 5678",
    program: "Kids Judo",
    instructor: "Sensei Katja Bruwer",
    paymentMethod: "EFT",
    preferredDate: "2026-09-02",
    preferredTime: "16:00",
    status: "Pending",
    paymentStatus: "Unpaid",
  },
  {
    id: 2,
    name: "Aisha Patel",
    email: "aisha.p@example.com",
    phone: "082 345 6789",
    program: "Women's Judo",
    instructor: "Sensei Michelle Diamond",
    paymentMethod: "Card",
    preferredDate: "2026-09-05",
    preferredTime: "18:00",
    status: "Confirmed",
    paymentStatus: "Paid",
  },
  {
    id: 3,
    name: "Johan van Zyl",
    email: "johan.vz@example.com",
    phone: "083 456 7890",
    program: "Adult Judo",
    instructor: "Sensei Katja Bruwer",
    paymentMethod: "Cash at the dojo",
    preferredDate: "2026-09-06",
    preferredTime: "19:00",
    status: "Pending",
    paymentStatus: "Unpaid",
  },
];

export default bookings;