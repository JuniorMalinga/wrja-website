import { useEffect, useState } from "react";

// Slide 1 uses a video background (drop an actual file at
// public/videos/news-hero-placeholder.mp4 later — poster shows until it
// loads, and browsers that block autoplay will just show the poster).
// Slides 2 and 3 are static images, matching the reference where only
// the first slide is a video/gif.
const slides = [
  {
    number: "01",
    type: "video",
    poster: "https://placehold.co/1600x900/1a1a1a/555555?text=Video+Poster+Placeholder",
    videoSrc: "/videos/news-hero-placeholder.mp4",
    heading: (
      <>
        <span className="text-accent">Judo</span> and{" "}
        <br />
        martial arts <span className="text-accent">school</span>
      </>
    ),
  },
  {
    number: "02",
    type: "image",
    image: "https://placehold.co/1600x900/1a1a1a/555555?text=News+Hero+Placeholder+2",
    heading: (
      <>
        <span className="text-accent">Choose</span> your
        <br />
        judo <span className="text-accent">program</span>
      </>
    ),
  },
  {
    number: "03",
    type: "image",
    image: "https://placehold.co/1600x900/1a1a1a/555555?text=News+Hero+Placeholder+3",
    heading: (
      <>
        Build your body
        <br />
        <span className="text-accent">by our training</span>
      </>
    ),
  },
];

export default function NewsHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="news-hero">
      {slides.map((slide, index) => (
        <div
          key={slide.number}
          className={`news-hero-slide ${index === activeIndex ? "news-hero-slide-active" : ""}`}
        >
          {slide.type === "video" ? (
            <video
              className="news-hero-media"
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div
              className="news-hero-media"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
        </div>
      ))}

      <div className="news-hero-overlay" />

      <div className="news-hero-content">
        <h2>{activeSlide.heading}</h2>

        <div className="news-hero-numbers">
          {slides.map((slide, index) => (
            <button
              key={slide.number}
              className={`news-hero-number ${index === activeIndex ? "news-hero-number-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${slide.number}`}
            >
              {slide.number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}