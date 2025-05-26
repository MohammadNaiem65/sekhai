import { Badge } from "@/components/ui/badge";

export default function LeftContent() {
  return (
    <div className="w-[277px] self-center">
      <Badge
        variant="outline"
        className="border-none px-4 py-2 text-xl text-[#234A96] hover:bg-white hover:text-title-one"
      >
        Become a Member
      </Badge>
      <h2 className="mt-7 text-[34px] font-medium text-white">
        Want to share{" "}
        <span className="text-[56px] leading-none text-title-light">
          your skill?
        </span>
      </h2>
    </div>
  );
}
