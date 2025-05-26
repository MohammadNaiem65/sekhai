import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./carouselCard";

export default function MentorCarousel() {
  return (
    <Carousel className="mt-[3.75rem]" opts={{ align: "start" }}>
      <CarouselContent className="-ml-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/4 pl-4">
            <CarouselCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
