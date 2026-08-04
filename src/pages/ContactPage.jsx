export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <section className="contact-details">
        <p>Email:</p>
        <p>Phone:</p>
        <p>Chairperson:</p>
        <p>Treasurer:</p>
      </section>
      <form className="contact-form">
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" type="text" required />

        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
