import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function SeparatedCard({ contentFirst = true }) {
  return (
    <div
      className={cn(
        "flex gap-x-6",
        contentFirst ? "flex-row" : "flex-row-reverse",
      )}
    >
      <div className="h-[14.875rem] w-[17.625rem] bg-[#f6f7f9] p-6">
        <h3 className="text-[16px] font-medium text-title-one">
          Smart Home Automation
        </h3>

        <p className="mt-3.5 line-clamp-[7] text-sm text-gray">
          Explore connected devices and learn to automate your home for
          convenience, security, and energy savings. Discover smart lighting,
          thermostats, security systems, and voice control to create smart
          living experience.
        </p>
      </div>

      <div className="relative">
        <Image
          alt="course image"
          src="/home-automation.png"
          width={282}
          height={238}
        />

        <Link
          href="/"
          className="absolute bottom-0 left-0 flex h-[3.75rem] w-full items-center justify-between bg-[#F6F7F9] px-4 text-title-one"
        >
          Smart Home Automation{" "}
          <IoIosArrowForward className="size-7 rounded-full border border-base p-1 text-base hover:bg-title-one hover:text-white" />
        </Link>
      </div>
    </div>
  );
}
