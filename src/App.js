import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import { sections } from "./config/sections";

function App() {
  return (
    <div class="overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {sections.map((section) => {
        return (
          <ContentSection
            title={section.title}
            description={section.description}
            img={section.img}
            direction={section.direction}
          />
        );
      })}

    </div>
  );
}

export default App;
