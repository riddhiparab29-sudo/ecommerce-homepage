import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { DealsPage } from "./pages/DealsPage";
import { Contact } from "./pages/Contact";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;