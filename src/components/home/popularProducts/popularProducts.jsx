import CategoryCard from "./categoryCard";
import Header from "./header";

export default function PopularProducts() {
  return (
    <section className="container-width mt-[6.25rem]">
      <Header />

      <div className="mt-[5.125rem] grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <CategoryCard key={index} />
        ))}
      </div>
    </section>
  );
}
