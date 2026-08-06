import { useEffect, useState } from "react";

import judo1 from "../assets/images/Landing/Landing 1.jpg";
import judo2 from "../assets/images/Landing/Landing 2.jpg";
import judo3 from "../assets/images/Landing/Landing 3.jpg";
const slides = [
  {
    image: judo1,
    number: "1",
  },
  {
    image: judo2,
    number: "2",
  },
  {
    image: judo3,
    number: "3",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`hero-slide ${index === activeIndex ? "hero-slide-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="hero-highlight">West Rand Judo</span> Association
        </h1>

        <div className="hero-numbers">
          {slides.map((slide, index) => (
            <button
              key={slide.number}
              className={`hero-number ${index === activeIndex ? "hero-number-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${slide.number}`}
            >
              {slide.number}
            </button>
          ))}
        </div>

        <p className="hero-text">
          Building discipline, respect, and excellence through judo for
          athletes of all ages across the West Rand community.
        </p>

        <div className="hero-actions">
          <a href="#free-trial" className="btn btn-accent btn-lg">Book a session</a>
          <a href="#about" className="btn btn-outline btn-lg">Learn more</a>
        </div>
      </div>
    </section>
  );
}
