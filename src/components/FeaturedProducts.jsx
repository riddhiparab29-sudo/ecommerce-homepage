
    import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <section>
      <h2>Featured Products</h2>

      <div className="products">
        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          name="iPhone 16 Pro"
          price="₹1,19,999"
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          name="MacBook Air"
          price="₹1,09,999"
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          name="Sony Headphones"
          price="₹19,999"
        />
      </div>
    </section>
  );
}