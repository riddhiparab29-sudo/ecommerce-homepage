import { Hero } from "../components/Hero";
import { Brands } from "../components/Brands";
import { Categories } from "../components/Categories";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Deals } from "../components/Deals";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Categories />
      <FeaturedProducts />
      <Deals />
      <Testimonials />
    </>
  );
}