import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function CategoryCard() {
  return (
    <div className="flex h-[213px] w-[17.625rem] items-center justify-between rounded-[.5rem] border border-[rgba(60,_157,_119,_0.20)] px-[1.5rem_2rem] py-8 [box-shadow:_0px_0px_45px_0px_rgba(16,_58,_186,_0.22)]">
      <div>
        <div className="relative">
          <Image
            src="/category-logo.png"
            alt="category logo"
            width={56}
            height={56}
            className="relative isolate size-[56px]"
          />
          <span className="absolute top-0 left-[25px] -z-1 block size-[56px] rounded-full bg-[#E7F0F6]" />
        </div>
        <h3 className="mt-4 text-card-title">Communication</h3>
        <p className="mt-1 text-card-title text-gray">03 Courses</p>
      </div>
      <MdArrowOutward className="size-10 self-end text-text-light" />
    </div>
  );
}
