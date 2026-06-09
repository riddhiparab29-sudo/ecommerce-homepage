export function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="product-img" />

      <h3>{name}</h3>
      <p>{price}</p>

      <button>View Details</button>
    </div>
  );
}