"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CenterLInks } from "./centerLinks";

export default function Navbar() {
  return (
    <nav className="sticky top-5 mx-[7.5rem] my-4 flex items-center justify-between">
      <Image src="/logo.png" alt="logo" width={180} height={60} />

      <CenterLInks />

      <Button className="flex h-[3.75rem] flex-col px-6 py-2">
        <span className="text-[1.125rem] font-semibold">Study Bit</span>
        <span className="text-[0.625rem] font-bold">Which skill to learn?</span>
      </Button>
    </nav>
  );
}
