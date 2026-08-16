import HomePageImageSlider from "../components/HomePageImageSlider";
import ProgramsSection from "../components/ProgramsSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import TrainersSection from "../components/TrainersSection";
import NewsSection from "../components/NewsSection";
import TestimonialSection from "../components/TestimonialSection";
import LocationSection from "../components/LocationSection";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomePageImageSlider />
      <ProgramsSection />
      <AboutSection />
      <FeaturesSection />
      <TrainersSection />
      <NewsSection />
      <TestimonialSection />
      <LocationSection />
    </div>
  );
}
