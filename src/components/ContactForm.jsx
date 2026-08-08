export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <label>
        <span>Name</span>
        <input type="text" placeholder="Your full name" />
      </label>

      <label>
        <span>Email</span>
        <input type="email" placeholder="you@example.com" />
      </label>

      <label>
        <span>Phone</span>
        <input type="tel" placeholder="Your phone number" />
      </label>

      <label>
        <span>Message</span>
        <textarea rows="5" placeholder="How can we help?" />
      </label>

      <button type="submit" className="btn btn-accent">
        Send message
      </button>
    </form>
  );
}