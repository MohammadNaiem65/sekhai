import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel from "./carousel";

export default function MentorSliderOne() {
  return (
    <section className="mt-[6.25rem] h-[44.813rem] w-full bg-[#F4FAFF] pt-[7.5rem]">
      <div className="relative container-width flex items-center justify-between">
        <Image
          alt="chef image"
          src="/chef.png"
          width={529}
          height={581}
          className=""
        />

        <section className="w-[37.5rem]">
          <div className="flex w-full flex-col gap-y-5">
            <h1 className="line text-hero-headline/14 font-semibold text-title-one">
              Your Guide to <br /> Cooking & Recipes
            </h1>
            <p className="text-[22px] text-[#898787]">
              Learn to cook delicious meals at home with easy-to-follow recipes
              and helpful kitchen tips. No experience needed — just a love for
              good food!
            </p>
            <Button variant="default" className="self-start">
              Start Learning
            </Button>
          </div>

          {/* <section className="w-[36.75rem]"> */}
          <Carousel />
          {/* </section> */}
        </section>
      </div>
    </section>
  );
}
