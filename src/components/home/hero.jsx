"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [hasFocused, setHasFocused] = useState(false);

  return (
    <section className="body-font relative isolate h-[24rem] overflow-hidden bg-title-two bg-scroll bg-repeat-x text-gray-600 after:absolute after:inset-0 after:-z-[1] after:bg-[url('/hero-mesh.png')] after:opacity-25 after:content-['']">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-[3.5rem] font-medium text-title-light text-shadow-[2px_2px_4px_rgba(0,_0,_0,_0.7)]">
            Get Your Study Done
          </h1>
          <p className="leading-relaxed">
            Browse through Thousands of StudyBit. Choose one you trust. Pay as
            you go.
          </p>

          <div className="relative mx-auto mt-11 flex h-14 w-[32.125rem] justify-center rounded-full bg-white">
            <Input
              className="absolute top-0 left-0 z-1 h-14 w-[32.125rem] rounded-full pr-[10rem] pl-[37px] text-text-dark"
              value={query}
              onFocusCapture={() => setHasFocused(true)}
              onBlur={() => setHasFocused(false)}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button className="absolute top-0 right-0 z-2 h-14 w-[9.625rem] cursor-pointer rounded-r-full bg-title-light text-button hover:bg-title-light/90">
              Search Now
            </Button>

            {!hasFocused && !query && (
              <TypeAnimation
                sequence={[
                  "I want to learn Cooking",
                  1800, // Waits 1s
                  "I want to learn Mathematics",
                  1000, // Waits 1s
                  "I want to learn Programming",
                  2000, // Waits 2s
                ]}
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  position: "absolute",
                  left: "37px",
                  top: "50%",
                  translate: "0 -50%",
                }}
                wrapper="div"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
