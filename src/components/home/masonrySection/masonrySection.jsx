import NormalCard from "./normalCard";
import SeparatedCard from "./separatedCard";

export default function MasonrySection() {
  return (
    <section className="container-width mt-[6.25rem] grid grid-cols-2 gap-6">
      <SeparatedCard />
      <NormalCard contentFirst={false} />
      <NormalCard />
      <SeparatedCard />
    </section>
  );
}
