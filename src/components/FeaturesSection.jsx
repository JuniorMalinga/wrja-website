import Reveal from "./Reveal";

const features = [
  {
    title: "Convenient times",
    description: "Weekday evening and weekend sessions to fit around school and work schedules.",
  },
  {
    title: "Grading pathway",
    description: "A clear belt progression system with regular grading opportunities.",
  },
  {
    title: "Quality equipment",
    description: "Well-maintained mats and gis available for training sessions.",
  },
  {
    title: "Guided nutrition",
    description: "Basic nutrition guidance to support training and weight categories.",
  },
  {
    title: "Certified coaches",
    description: "Instructors with national coaching certification and years of experience.",
  },
  {
    title: "Club champions",
    description: "A strong track record of provincial and national competition results.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features">
      <Reveal className="features-header">
        <h2>Our <span className="text-accent">features</span></h2>
        <p>What you can expect training with WRJA</p>
      </Reveal>

      <div className="features-grid">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 80} className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <div className="feature-icon-placeholder" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
