import Stat from "./stat";

const STATS = [
  {
    title: "200+",
    subtitle: "Exclusive Mentors",
  },
  {
    title: "50k+",
    subtitle: "Active Students",
  },
  {
    title: "500+",
    subtitle: "Support Material",
  },
  {
    title: "1200+",
    subtitle: "Hours Studied",
  },
];

export default function Stats() {
  return (
    <section className="mt-36 flex h-[11.25rem] items-center justify-between divide-x-2 divide-dashed bg-title-one px-[calc((100dvw-1200px)/2))]">
      {STATS.map((stat) => (
        <Stat key={stat.title} title={stat.title} subtitle={stat.subtitle} />
      ))}
    </section>
  );
}
