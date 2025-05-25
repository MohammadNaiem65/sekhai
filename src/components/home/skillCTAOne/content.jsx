import { Button } from "@/components/ui/button";

export default function Content() {
  return (
    <div className="text-center">
      <h1 className="font-hanken_grotesk text-hero-headline leading-none font-semibold text-title-one">
        Grow Your <br />
        <span className="text-text-dark">Agriculture Skills</span>
      </h1>
      <h4 className="mt-2 text-xl text-gray">
        Harvest Knowledge, Not Just Crops!
      </h4>
      <h4 className="mt-2 text-2xl text-text-dark">Special Offer Inside!</h4>
      <Button variant="outline" className="mt-4 bg-transparent">
        Start Learning
      </Button>
    </div>
  );
}
