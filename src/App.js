import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div class="overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <div class="relative w-screen h-screen p-10 bg-black text-white">
        <p>Hello World!</p>
      </div>
      
    </div>
  );
}

export default App;
