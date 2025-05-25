import Image from "next/image";
import Content from "./content";

export default function SkillCTAOne() {
  return (
    <section className="mt-[6.25rem] flex items-center justify-between bg-[#ECF4FA]">
      <Image src="/farm.png" alt="skill image" width={480} height={340} />

      <Content />

      <Image src="/farm.png" alt="skill image" width={480} height={340} />
    </section>
  );
}
