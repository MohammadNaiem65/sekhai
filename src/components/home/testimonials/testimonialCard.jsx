import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <Card className="border-0 py-8 shadow-none">
      <CardContent className="px-5">
        <p className="text-body text-gray">
          "This platform completely transformed my learning experience! The
          courses are well structured, and the mentors are super supportive.
          Highly recommended!"
        </p>
      </CardContent>

      <CardFooter className="flex items-center gap-x-2">
        <Image
          src="/chef-2.png"
          alt="user image"
          width={40}
          height={40}
          className="size-10 rounded-full"
        />
        <p className="text-body text-text-dark">Ayesha Rahman</p>
      </CardFooter>
    </Card>
  );
}
