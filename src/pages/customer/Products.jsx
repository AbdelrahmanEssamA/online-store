import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api/shopServer";
import ProductCard from "../../components/ProductCard";
import image from "./cover2.png";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="min-h-screen p-16 bg-slate-100 ">
      <div className="flex justify-center gap-60 items-center bg-background pt-16 rounded-xl mb-10">
        <div className="">
          <h1 className="font-extrabold text-6xl leading-none tracking-tight">
            <span className="block text-black bg-white p-1">LET’S</span>
            <span className="block text-black bg-white p-1 mt-2">EXPLORE</span>
            <span className="block text-white bg-blue-500 p-1 mt-2">
              UNIQUE
            </span>
            <span className="block text-black bg-white p-1 mt-2">CLOTHES.</span>
          </h1>
        </div>
        <img
          src={image}
          alt="cover"
          style={{ height: "700px" }}
          className="w-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
