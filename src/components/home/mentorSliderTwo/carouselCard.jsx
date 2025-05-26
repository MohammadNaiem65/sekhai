import Image from "next/image";

export default function CarouselCard() {
  return (
    <div className="relative flex h-36 w-[18.375rem] items-center justify-between overflow-hidden rounded-lg bg-text-light">
      <div className="px-4">
        <h3 className="text-lg text-title-one">Wade Warren</h3>
        <p className="text-gray">Ethical Hacker</p>
      </div>

      <Image
        src="/instructor-carousel-image.png"
        alt="instructor image"
        width={294}
        height={144}
        className="absolute top-0 right-0"
      />
    </div>
  );
}
