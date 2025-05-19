import Link from "next/link";
import CompanyInfo from "./companyInfo";
import Links from "./links";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="px-[7.375rem] pt-[6.25rem] pb-6">
      <div className="flex items-start justify-between border-y border-t-base border-b-[#f1f1f3] py-16">
        <CompanyInfo />

        <Links />
        <Links />
        <Links />

        <Socials />
      </div>

      <p className="mt-9 text-center font-hanken_grotesk text-lg text-[#656567]">
        © 2025 Shekhai. All rights reserved.
      </p>

      <div className="flex items-center justify-between font-hanken_grotesk">
        <Link href="/privacy-policy" className="text-[#656567]">
          Privacy & Policy
        </Link>
        <Link href="/privacy-conditions" className="text-[#656567]">
          Privacy & Conditions
        </Link>
      </div>
    </footer>
  );
}
