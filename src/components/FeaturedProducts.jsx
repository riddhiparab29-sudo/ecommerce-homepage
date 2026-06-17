
    import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { supabase } from "../supabase";

export function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <h2>Featured Products</h2>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image_url}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}