import Reveal from "./Reveal";

const newsItems = [
  {
    date: "January 11, 2026",
    title: "Placeholder headline about a recent grading",
    image: "https://placehold.co/500x400/1a1a1a/666666?text=News+Placeholder+1",
  },
  {
    date: "December 7, 2025",
    title: "Placeholder headline about a provincial result",
    image: "https://placehold.co/500x400/1a1a1a/666666?text=News+Placeholder+2",
  },
  {
    date: "November 6, 2025",
    title: "Placeholder headline about the club dojo",
    image: "https://placehold.co/500x400/1a1a1a/666666?text=News+Placeholder+3",
  },
  {
    date: "October 10, 2025",
    title: "Placeholder headline about a member milestone",
    image: "https://placehold.co/500x400/1a1a1a/666666?text=News+Placeholder+4",
  },
];

export default function NewsSection() {
  return (
    <section className="news">
      <Reveal className="news-header">
        <h2>Recent news</h2>
        <p>Announcements, results, and club highlights</p>
      </Reveal>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <article className="news-card">
              <img src={item.image} alt="" className="news-image" />
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
