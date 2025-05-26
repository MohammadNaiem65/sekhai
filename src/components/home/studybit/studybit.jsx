import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Content from "./content";

export default function Studybit() {
  return (
    <section
      className={`container-width mt-[6.25rem] flex h-[17.5rem] items-center justify-between rounded border-2 border-[#3AAEF6] bg-[#DDF1FF] [background-image:_url("/round-mesh.png")] pr-11 pl-[4.875rem]`}
    >
      <Content />

      <div className="flex items-center justify-between">
        <Image src="/mentor.png" alt="mentor image" width={234} height={327} />

        <Button
          variant="outline"
          className="mb-11 ml-[4.875rem] size-10 self-end rounded-full bg-transparent p-0"
        >
          <IoIosArrowForward className="size-6" />
        </Button>
      </div>
    </section>
  );
}
