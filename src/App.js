import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SingleContentSection from "./components/SingleContentSection";
import DoubleContentSection from "./components/DoubleContentSection";
import { sections } from "./config/sections";

function App() {
  return (
    <div class="overflow-x-hidden">
      <Navbar />

      <HeroSection />
      
      {sections.map((section) => {

        if (section.type === "single") {
          return (
            <SingleContentSection
              title={section.title}
              description={section.description}
              img={section.img}
            />
          );
        }

        if (section.type === "double") {
          return (
            <DoubleContentSection
              title={section.title}
              description={section.description}
              img={section.img}
              direction={section.direction}
            />
          );
        }

      })}
    </div>
  );
}

export default App;
