import Hero from "@/components/home/hero";
import MasonrySection from "@/components/home/masonrySection/masonrySection";
import MentorSliderOne from "@/components/home/mentorSliderOne/mentorSliderOne";
import MentorSliderTwo from "@/components/home/mentorSliderTwo/mentorSliderTwo";
import OnDemandSkillsPromo from "@/components/home/OnDemandSkillsPromo";
import PopularProducts from "@/components/home/popularProducts/popularProducts";
import SkillCTAOne from "@/components/home/skillCTAOne/skillCTAOne";
import SkillCTATwo from "@/components/home/skillCTATwo/skillCTATwo";
import Studybit from "@/components/home/studybit/studybit";

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
      <Studybit />
      <PopularProducts />
    </>
  );
}
