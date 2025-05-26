import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaUserPlus } from "react-icons/fa6";

export default function RightContent() {
  return (
    <div className="relative ml-12 flex h-[239px] w-[469px] flex-col items-center justify-center self-center rounded-2xl border border-dashed border-gray">
      <FaUserPlus className="h-[3.5rem] w-[4rem] text-stroke" />
      <h3 className="mt-6 text-2xl font-medium text-white">
        Your Journey Starts Here
      </h3>
      <Button
        variant="secondary"
        className="mt-5 rounded-sm [font-size:_14px] text-base"
      >
        Register Now
      </Button>
      <small className="absolute right-6 bottom-3 text-white underline underline-offset-5">
        Terms and Conditions
      </small>

      <Image
        src="/arrow.png"
        alt="arrow"
        width={161}
        height={85}
        className="absolute top-10 -left-24 text-white"
      />
    </div>
  );
}
