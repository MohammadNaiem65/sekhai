import Hero from "@/components/home/hero";
import MasonrySection from "@/components/home/masonrySection/masonrySection";
import MentorSliderOne from "@/components/home/mentorSliderOne/mentorSliderOne";
import OnDemandSkillsPromo from "@/components/home/OnDemandSkillsPromo";
import SkillCTATwo from "@/components/home/skillCTAOne/skillCTAOne";

export default function Home() {
  return (
    <>
      <Hero />
      <MasonrySection />
      <OnDemandSkillsPromo />
      <MentorSliderOne />
      <SkillCTATwo />
    </>
  );
}
