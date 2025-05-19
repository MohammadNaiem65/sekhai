import Image from "next/image";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

export default function CompanyInfo() {
  return (
    <div className="space-y-1">
      <Image src="/logo.png" alt="logo" width={180} height={60} />

      <div className="flex items-center gap-x-2">
        <IoMailOutline className="text-xl" />
        hello@sekhai.com
      </div>

      <div className="flex items-center gap-x-1.5">
        <MdOutlinePhone className="text-xl" />
        (603) 555-0123
      </div>

      <div className="flex items-center gap-x-1.5">
        <IoLocationSharp className="text-xl" />
        Mohammadpur, Dhaka
      </div>
    </div>
  );
}
