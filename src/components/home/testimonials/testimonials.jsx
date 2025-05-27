import Header from "./header";
import TestimonialsCarousel from "./testimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="mt-[8.625rem] bg-title-light px-[calc((100dvw-1200px)/2))] pt-[97px] pb-[2.625rem]">
      <Header />

      <TestimonialsCarousel />
    </section>
  );
}
