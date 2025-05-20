"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CenterLInks } from "./centerLinks";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[99] flex w-full items-center justify-between bg-white px-[7.5rem] py-4">
      <Image src="/logo.png" alt="logo" width={180} height={60} />

      <CenterLInks />

      <Button className="flex h-[3.75rem] flex-col px-6 py-2">
        <span className="text-[1.125rem] font-semibold">Study Bit</span>
        <span className="text-[0.625rem] font-bold">Which skill to learn?</span>
      </Button>
    </nav>
  );
}
