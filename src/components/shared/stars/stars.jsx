import { MdOutlineStar } from "react-icons/md";

export default function Stars({ count }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) =>
        index <= count ? (
          <MdOutlineStar key={index} className="text-[#FFC700]" />
        ) : (
          <MdOutlineStar key={index} className="size-3.5 text-gray-400" />
        ),
      )}
    </div>
  );
}
