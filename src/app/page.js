import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/AboutPage/subcomponents/HeroSection";
import JourneySection from "@/components/AboutPage/subcomponents/JourneySection";
import CorePhilosophySection from "@/components/AboutPage/subcomponents/CorePhilosophySection";
import TechStackSection from "@/components/AboutPage/subcomponents/TechStackSection";
import BeyondTerminalSection from "@/components/AboutPage/subcomponents/BeyondTerminalSection";

export const metadata = {
  title: "About Me - Aniket Singh",
  description:
    "Frontend Developer at Yatra.com - Driven by Code, Focused on User Experience.",
};

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pt-[72px] sm:pt-20">
      <Header currentPath="/" />
      <main className="flex-1 flex flex-col items-center">
        <HeroSection />
        <JourneySection />
        <CorePhilosophySection />
        <TechStackSection />
        <BeyondTerminalSection />
      </main>
      <Footer />
    </div>
  );
}
