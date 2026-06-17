import { useState } from "react";
import { supabase } from "../supabase";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addProduct = async () => {
  const { error } = await supabase.from("products").insert([
    {
      title: title,
      description: description,
      price: price,
      image_url: imageUrl,
    },
  ]);

  if (error) {
    console.log(error);
    alert("Error adding product");
  } else {
    alert("Product added successfully!");
  }
};

  return (
    <div>
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Product Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <br /><br />

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;