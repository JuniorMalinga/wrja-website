import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import programs from "../data/programs";
import instructors from "../data/instructors";
import trialbackground from "../assets/images/background/1125387-2500x1406-desktop-hd-combat-sports-background.jpg";

const paymentMethods = ["EFT", "Cash at the dojo", "Card"];

export default function BookingPage() {
  const [selectedProgramSlug, setSelectedProgramSlug] = useState("");
  const [activeInstructorIndex, setActiveInstructorIndex] = useState(0);

  const selectedProgram = programs.find(
    (program) => program.slug === selectedProgramSlug
  );

  const assignedInstructors = selectedProgram
    ? selectedProgram.instructorSlugs
        .map((slug) =>
          instructors.find((instructor) => instructor.slug === slug)
        )
        .filter(Boolean)
    : [];

  // Reset back to the first instructor whenever the program changes.
  useEffect(() => {
    setActiveInstructorIndex(0);
  }, [selectedProgramSlug]);

  // Auto-cycle through instructors only when there's more than one.
  useEffect(() => {
    if (assignedInstructors.length < 2) return;

    const timer = setInterval(() => {
      setActiveInstructorIndex(
        (current) => (current + 1) % assignedInstructors.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [assignedInstructors.length]);

  const activeInstructor = assignedInstructors[activeInstructorIndex];

  return (
    <div className="booking-page">
      <PageHeader title="Book a Session" />

      <section className="booking-section">

        {/* FIX: Reveal wraps the card instead of being the card.
            This prevents the background image from being lost if
            Reveal does not forward the style prop. */}
        <Reveal>
          <div
            className="booking-card"
            style={{
              // FIX: Apply the imported Vite image directly to the
              // normal div that has the booking-card class.
              backgroundImage: `url("${trialbackground}")`,
            }}
          >
            <h2>Request a booking</h2>

            <p className="booking-card-subtitle">
              Choose a program and we'll confirm your session with the
              assigned instructor.
            </p>

            <form
              className="booking-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                Program

                <select
                  value={selectedProgramSlug}
                  onChange={(event) =>
                    setSelectedProgramSlug(event.target.value)
                  }
                  required
                >
                  <option value="" disabled>
                    Select a program
                  </option>

                  {programs.map((program) => (
                    <option key={program.slug} value={program.slug}>
                      {program.highlightWord} {program.restWord}
                    </option>
                  ))}
                </select>
              </label>

              {activeInstructor && (
                <Reveal
                  key={selectedProgramSlug}
                  className="booking-instructor-assigned"
                >
                  <img
                    key={activeInstructor.slug}
                    src={activeInstructor.image}
                    alt={activeInstructor.name}
                    className="booking-instructor-photo"
                  />

                  <div>
                    <p className="booking-instructor-label">
                      {assignedInstructors.length > 1
                        ? "Your instructor could be"
                        : "Your instructor"}
                    </p>

                    <p className="booking-instructor-name">
                      {activeInstructor.name}
                    </p>

                    <p className="booking-instructor-role">
                      {activeInstructor.role}
                    </p>
                  </div>

                  {assignedInstructors.length > 1 && (
                    <div className="booking-instructor-dots">
                      {assignedInstructors.map((instructor, index) => (
                        <button
                          key={instructor.slug}
                          type="button"
                          className={`booking-instructor-dot ${
                            index === activeInstructorIndex
                              ? "booking-instructor-dot-active"
                              : ""
                          }`}
                          onClick={() =>
                            setActiveInstructorIndex(index)
                          }
                          aria-label={`Show ${instructor.name}`}
                        />
                      ))}
                    </div>
                  )}
                </Reveal>
              )}

              <div className="booking-form-row-2">
                <label>
                  Full name

                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label>
                  Email address

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <div className="booking-form-row-2">
                <label>
                  Phone number

                  <input
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </label>

                <label>
                  Payment method

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select a payment method
                    </option>

                    {paymentMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="booking-form-row-2">
                <label>
                  Preferred date

                  <input type="date" />
                </label>

                <label>
                  Preferred time

                  <input type="time" />
                </label>
              </div>

              <label>
                Notes (optional)

                <textarea
                  rows="4"
                  placeholder="Anything we should know before your session"
                />
              </label>

              <button
                type="submit"
                className="btn btn-accent btn-lg"
              >
                Request booking
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}