import Reveal from "./Reveal";

// Non-functional for now — no submit handling wired up yet.
export default function ContactForm() {
  return (
    <Reveal className="contact-form-wrap">
      <h2>Contact form</h2>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <div className="contact-form-row">
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Your Phone" />
        </div>

        <input type="email" placeholder="Email Address" required />

        <textarea rows="6" placeholder="Your message" required />

        <button type="submit" className="btn btn-accent btn-lg">Send message</button>
      </form>
    </Reveal>
  );
}