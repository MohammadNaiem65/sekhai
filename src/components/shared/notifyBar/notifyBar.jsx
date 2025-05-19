"use client";

import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { LiaFacebook } from "react-icons/lia";
import { MdOutlinePhone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { SiInstagram } from "react-icons/si";

export default function NotifyBar() {
  const [showNotifyBar, setShowNotifyBar] = useState(true);
  return (
    showNotifyBar && (
      <section className="flex w-full items-center justify-between bg-text-dark px-[7.5rem] py-3.5 text-white">
        <p className="flex w-fit items-center rounded-full border border-white px-2.5 py-1 text-body">
          Get Eid Special 50% Off{" "}
          <BsStars className="ml-2 size-5 text-[#FFE500]" />
        </p>

        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-1.5">
            <MdOutlinePhone className="text-xl" />
            (603) 555-0123
          </div>

          <div className="flex items-center gap-x-1.5">
            <IoMailOutline className="text-xl" />
            shekhai@example.com
          </div>
        </div>

        <div className="flex items-center gap-x-[70px]">
          <div className="flex items-center gap-x-2.5">
            Follow us on
            <p className="flex items-center gap-x-2 text-lg">
              <LiaFacebook className="text-2xl" />
              <SiInstagram />
              <FaXTwitter />
              <FaThreads />
            </p>
          </div>

          <RxCross1
            className="cursor-pointer text-xl"
            onClick={() => setShowNotifyBar(false)}
          />
        </div>
      </section>
    )
  );
}
