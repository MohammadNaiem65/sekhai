import Image from "next/image";
import Perk from "./perk";

export default function Perks() {
  return (
    <section className="mt-[89px] flex items-start justify-between">
      <Perk
        icon={
          <Image
            src={"/video-icon.svg"}
            alt="icon"
            width={74}
            height={74}
            className="mb-5"
          />
        }
        title="On-demand tutoring"
        description="Connect with an online tutor 24/7.
It doesn’t matter if you want help with
a single problem or you need a regular session."
      />

      <Perk
        icon={
          <Image
            src={"/whiteboard-icon.svg"}
            alt="icon"
            width={78}
            height={78}
            className="mb-5"
          />
        }
        title="All the tools you need"
        description="Our lesson space features a virtual whiteboard, text editor, audio/video chat, screensharing and so much more."
      />
      <Perk
        icon={
          <Image
            src={"/video-icon.svg"}
            alt="icon"
            width={77}
            height={77}
            className="mb-5"
          />
        }
        title="On-demand tutoring"
        description="Highly qualified tutors from the best universities across the globe ready to help. You can choose whom to study and what to study."
      />
    </section>
  );
}
