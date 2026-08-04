import Reveal from "./Reveal";

const trainers = [
  {
    name: "Coach placeholder one",
    role: "Head coach",
    image: "https://placehold.co/700x900/1a1a1a/666666?text=Coach+Placeholder+1",
  },
  {
    name: "Coach placeholder two",
    role: "Senior coach",
    image: "https://placehold.co/700x900/1a1a1a/666666?text=Coach+Placeholder+2",
  },
  {
    name: "Coach placeholder three",
    role: "Junior program coach",
    image: "https://placehold.co/700x900/1a1a1a/666666?text=Coach+Placeholder+3",
  },
];

export default function TrainersSection() {
  return (
    <section className="trainers">
      <Reveal className="trainers-header">
        <h2>Our coaches</h2>
        <p>Experienced instructors guiding every belt level</p>
      </Reveal>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <Reveal key={trainer.name} delay={index * 120}>
            <div
              className="trainer-card"
              style={{ backgroundImage: `url(${trainer.image})` }}
            >
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
                <p className="trainer-bio">
                  Placeholder bio text describing coaching background and achievements.
                </p>
                <div className="trainer-socials">
                  <a href="#" aria-label="Instagram">IG</a>
                  <a href="#" aria-label="WhatsApp">WA</a>
                  <a href="#" aria-label="Facebook">FB</a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
