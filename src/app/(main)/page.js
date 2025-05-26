import Hero from "@/components/home/hero";
import MasonrySection from "@/components/home/masonrySection/masonrySection";
import MentorSliderOne from "@/components/home/mentorSliderOne/mentorSliderOne";
import MentorSliderTwo from "@/components/home/mentorSliderTwo/mentorSliderTwo";
import OnDemandSkillsPromo from "@/components/home/OnDemandSkillsPromo";
import SkillCTAOne from "@/components/home/skillCTAOne/skillCTAOne";
import SkillCTATwo from "@/components/home/skillCTATwo/skillCTATwo";

export default function Home() {
  return (
    <>
      <Hero />
      <MasonrySection />
      <OnDemandSkillsPromo />
      <MentorSliderOne />
      <SkillCTAOne />
      <MentorSliderTwo />
      <SkillCTATwo />
    </>
  );
}
