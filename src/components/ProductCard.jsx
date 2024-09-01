import React from "react";

const ProductCard = ({ data }) => {
  const { title, price, image } = data;
  const shorterText = (text) => {
    return text.length > 25 ? text.substring(0, 25) + "..." : text;
  };
  const token = localStorage.getItem("token");

  return (
    <div className="bg-white py-4 px-6 rounded-2xl shadow-xl">
      <img src={image} alt={title} className="w-full h-64" />
      <h3 className="text-md font-bold mt-10 mb-2 text-mainColor">
        {shorterText(title)}
      </h3>
      <span className="text-md font-semibold bg-green-500 text-white px-2 py-1 rounded-full">
        ${price}
      </span>
      <br />
      {token && (
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-secondaryColor">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
