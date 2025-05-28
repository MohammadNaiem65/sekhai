import { Button } from "@/components/ui/button";

export default function Content() {
  return (
    <div className="ml-[22rem] w-[437px]">
      <h1 className="font-hanken_grotesk text-[41px] leading-12">
        From Hobby To Hustle <br />{" "}
        <span className="text-[#234A96]">Start Stitching Now!</span>
      </h1>
      <p className="mt-4 text-xl font-light text-gray">
        Master the art of sewing and tailoring with expert guidance.
      </p>

      <Button className="mt-4">Start Learning</Button>
    </div>
  );
}
