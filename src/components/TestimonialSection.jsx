import { useState } from "react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Parent placeholder",
    role: "Parent",
    quote:
      "Placeholder testimonial text describing a positive experience with the club, its coaches, and the community.",
  },
  {
    name: "Athlete placeholder",
    role: "Member",
    quote:
      "Placeholder testimonial text describing progress made through training and support from the coaching team.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const showPrevious = () =>
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);

  const showNext = () =>
    setActiveIndex((index) => (index + 1) % testimonials.length);

  return (
    <section className="testimonials">
      <Reveal className="testimonial-card" key={activeIndex}>
        <span className="testimonial-quote-mark">&ldquo;</span>

        <div className="testimonial-body">
          <div className="testimonial-avatar" />
          <div>
            <h3>{current.name}</h3>
            <p className="testimonial-role">{current.role}</p>
          </div>
        </div>

        <p className="testimonial-text">{current.quote}</p>

        <div className="testimonial-controls">
          <button onClick={showPrevious} aria-label="Previous testimonial">&larr;</button>
          <button onClick={showNext} aria-label="Next testimonial">&rarr;</button>
        </div>
      </Reveal>
    </section>
  );
}
