import HeroSection from "@/components/hero-section";
import MentorsSection from "@/components/mentors-section";
import GridLayout from "@/components/grid-layout";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#067333] relative overflow-hidden pb-10">
      <GridLayout />
      <HeroSection />

      <MentorsSection />
    </div>
  );
}

// TODO: Fix font
// TODO: Make responsive
// TODO: Fix svg mask
