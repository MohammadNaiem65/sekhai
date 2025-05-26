import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsTriangleFill } from "react-icons/bs";

export default function VideoSection() {
  return (
    <section className="container-width mt-[6.25rem]">
      <div className="mb-[4.375rem] text-center">
        <h1 className="text-hero-headline font-semibold text-title-one">
          Your Learning Journey <br />
          <span className="text-title-two">Starts with Shekhai</span>
        </h1>

        <Button variant="outline" className="mt-10 text-lg text-[#181818]">
          Start Learning
        </Button>
      </div>

      <div className="relative h-[500px] w-full">
        <Image
          src="/video-thumbnail.png"
          alt="video thumbnail"
          width={1200}
          height={500}
          className=""
        />

        <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#DB2B42]">
          <BsTriangleFill className="rotate-90 text-3xl text-white" />
        </span>
      </div>
    </section>
  );
}
