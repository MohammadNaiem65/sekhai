export default function Stat({ title, subtitle }) {
  return (
    <div className="pr-[71px] text-center last-of-type:pr-0">
      <h1 className="font-hanken_grotesk text-6xl font-semibold text-stroke">
        {title}
      </h1>
      <p className="mt-0.5 text-2xl text-text-light">{subtitle}</p>
    </div>
  );
}
