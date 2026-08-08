import Reveal from "./Reveal";
import trialbackground from "../assets/images/background/1125387-2500x1406-desktop-hd-combat-sports-background.jpg";

// Form is presentational only for now — no submit handling wired up yet.
export default function FreeTrialSection() {
  return (
    <section
      id="free-trial"
      className="free-trial"
      style={{
        backgroundImage:
          `url(${trialbackground})`,
      }}
    >
      <div className="free-trial-overlay" />

      <Reveal className="free-trial-content">
        <h2>Book your <span className="text-accent">free</span> trial session</h2>
        <p>Come experience a training session with our coaches, no commitment required.</p>

        <form className="free-trial-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Full name" />
          <input type="tel" placeholder="Your phone" />
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Time" />
          <textarea placeholder="Your message" rows="4" />
          <button type="submit" className="btn btn-accent btn-lg">Send</button>
        </form>
      </Reveal>
    </section>
  );
}
