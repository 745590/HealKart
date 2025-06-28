import React from "react";
import { products } from "../assets/assets.js";

const Products2 = () => {
  return (
    <div className="w-full py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {products.slice(14, 18).map((item) => (
          <div
            key={item._id}
            className="rounded-xl border border-gray-100 hover:border-green-500 transition duration-300"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full object-contain mb-4 rounded-t-xl"
            />
            <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.category[0]}</p>
            <p className="text-lg font-bold text-green-600">₹{item.price}</p>
            <button className="px-4 py-3 rounded-full bg-green-700 text-white uppercase text-sm font-semibold my-4">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products2;
