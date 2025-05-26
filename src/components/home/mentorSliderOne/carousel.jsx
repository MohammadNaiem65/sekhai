"use client";

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./carouselCard";

export default function Carousel() {
  return (
    <CarouselContainer
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="mt-10 w-[37rem]"
    >
      <CarouselContent className="-ml-[9px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-[9px]">
            <CarouselCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselContainer>
  );
}
