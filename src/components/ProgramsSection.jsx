import Reveal from "./Reveal";

const programs = [
  {
    title: "Kids judo",
    image: "https://placehold.co/700x500/222222/666666?text=Kids+Judo+Placeholder",
    description:
      "Fundamentals of balance, falling safely, and respect for the dojo, taught through age-appropriate drills and games.",
    featured: true,
  },
  {
    title: "Adult judo",
    image: "https://placehold.co/700x500/222222/666666?text=Adult+Judo+Placeholder",
    description:
      "Technique-focused sessions covering throws, groundwork, and competition preparation for all grades.",
  },
  {
    title: "Women's judo",
    image: "https://placehold.co/700x500/222222/666666?text=Women's+Judo+Placeholder",
    description:
      "A dedicated training group building confidence and skill in a supportive, welcoming environment.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="programs">
      <div className="programs-grid">
        {programs.map((program, index) => (
          <Reveal key={program.title} delay={index * 120}>
            <div
              className={`program-card ${program.featured ? "program-card-featured" : ""}`}
              style={{ backgroundImage: `url(${program.image})` }}
            >
              <div className="program-card-overlay">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <span className="program-arrow">&rarr;</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
