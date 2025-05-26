import Stars from "@/components/shared/stars/stars";
import Image from "next/image";

export default function CarouselCard() {
  return (
    <div className="flex h-[6.5rem] w-[18.125rem] items-center gap-x-2 rounded-2xl border border-stroke bg-title-light p-2">
      <Image
        alt="course thumbnail"
        src="/chef-2.png"
        width={88}
        height={88}
        className="size-[5.5rem] rounded-[0.625rem]"
      />

      <div>
        <h3 className="text-lg font-semibold">30-Minute Meals</h3>
        <p className="text-[#898787]">Fast & Tasty</p>
        <Stars count={3} />
      </div>
    </div>
  );
}
