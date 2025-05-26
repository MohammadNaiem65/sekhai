import Image from "next/image";
import Content from "./content";

export default function SkillCTATwo() {
  return (
    <section className="mt-[6.25rem] flex items-center justify-between bg-[#ECF4FA]">
      <Content />

      <Image
        src="/stitching.png"
        alt="skill image"
        width={720}
        height={340}
        className=""
      />
    </section>
  );
}
