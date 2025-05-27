import Hero from "@/components/home/hero";
import MasonrySection from "@/components/home/masonrySection/masonrySection";
import MentorCTA from "@/components/home/mentorCTA/mentorCTA";
import MentorSliderOne from "@/components/home/mentorSliderOne/mentorSliderOne";
import MentorSliderTwo from "@/components/home/mentorSliderTwo/mentorSliderTwo";
import OnDemandSkillsPromo from "@/components/home/OnDemandSkillsPromo";
import PopularProducts from "@/components/home/popularProducts/popularProducts";
import SkillCTAOne from "@/components/home/skillCTAOne/skillCTAOne";
import SkillCTATwo from "@/components/home/skillCTATwo/skillCTATwo";
import Studybit from "@/components/home/studybit/studybit";
import VideoSection from "@/components/home/videoSection/videoSection";
import WhySekhai from "@/components/home/whySekhai/whySekhai";

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
      <MentorCTA />
      <VideoSection />
      <WhySekhai />
    </>
  );
}
