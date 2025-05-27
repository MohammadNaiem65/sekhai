import Perks from "./perks";

export default function WhySekhai() {
  return (
    <section className="container-width mt-[10rem]">
      <h1 className="relative text-center text-hero-headline font-semibold text-black before:absolute before:top-1/2 before:left-1/2 before:-z-1 before:-translate-x-1/2 before:-translate-y-1/2 before:text-[20rem] before:text-[#70A0BE] before:opacity-15 before:content-['?']">
        Why works with <br />
        <span className="text-[#234A96]">Shekhai?</span>
      </h1>

      <Perks />
    </section>
  );
}
