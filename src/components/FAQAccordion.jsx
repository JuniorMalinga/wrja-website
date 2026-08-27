import { useState } from "react";
import Reveal from "./Reveal";
import faqs from "../data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal key={faq.question} delay={index * 60} className="faq-item">
            <button
              className={`faq-question ${isOpen ? "faq-question-open" : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
              <span className="faq-toggle-icon">{isOpen ? "\u2212" : "+"}</span>
            </button>
            <div className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}