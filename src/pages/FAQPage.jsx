import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQPage() {
  return (
    <div className="faq-page">
      <PageHeader title="FAQ" />
      <section className="faq-section">
        <FAQAccordion />
      </section>
    </div>
  );
}