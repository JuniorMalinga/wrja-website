import Reveal from "./Reveal";
import kidsJudo from "../assets/images/Kids/image 91.jpg";
import adultJudo from "../assets/images/Adult/Buff Guy.jpg";
import womensJudo from "../assets/images/Women/image 1.jpg";

const programs = [
  {
    title: "Kids judo",
    image: kidsJudo,
    description:
      "Fundamentals of balance, falling safely, and respect for the dojo, taught through age-appropriate drills and games.",
    featured: true,
  },
  {
    title: "Adult judo",
    image: adultJudo,
    description:
      "Technique-focused sessions covering throws, groundwork, and competition preparation for all grades.",
  },
  {
    title: "Women's judo",
    image: womensJudo,
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
