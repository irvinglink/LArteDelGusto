import "./HeroSection.css";
import HeroCard from "./HeroCard";

function HeroSection() {
  return (
    <section class="relative overflow-hidden h-screen w-screen bg-black">
      <HeroCard
        title={"Book Your Table"}
        description={
          "Delight in an exquisite dining experience with our enchanting reservations. Immerse yourself in refined flavors and impeccable service."
        }
        btn_text={"Reserve Now"}
      />

      <div class="fixed top-0 bottom-0 z-0">
        <video
          autoPlay
          loop
          muted
          src="./assets/hero_video.webm"
          type="video/mp4"
        />
      </div>
    </section>
  );
}

export default HeroSection;
