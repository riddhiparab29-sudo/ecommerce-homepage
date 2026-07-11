import React from "react";
import "./Hero.css";

export function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)",
      }}
    >
      <div className="overlay">
        <h1>Discover The Future Of Technology</h1>

        <p>
          Explore premium smartphones, laptops, headphones and accessories.
        </p>

        <button>Shop Now</button>
      </div>
    </section>
  );
}