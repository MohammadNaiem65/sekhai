import Image from "next/image";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";

export default function MentorCTA() {
  return (
    <section className="mt-[11.375rem] flex h-[22.125rem] items-end justify-between bg-title-one px-[calc((100dvw-1200px)/2))]">
      <LeftContent />

      <Image
        src="/mentor-1.png"
        alt="mentor image"
        width={337}
        height={437}
        className="aspect-[337/437]"
      />

      <RightContent />
    </section>
  );
}
