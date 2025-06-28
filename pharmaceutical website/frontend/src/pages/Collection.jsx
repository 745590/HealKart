import React, { useState } from "react";
import { products } from "../assets/assets.js";
import { BaggageClaim, Minus } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

const Collection = () => {
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (itemId) => {
    setHoveredItems(prev => ({ ...prev, [itemId]: true }));
  };

  const handleMouseLeave = (itemId) => {
    setHoveredItems(prev => ({ ...prev, [itemId]: false }));
  };
  return (
    <div>
        <Navbar />
         <div>
        <div className="w-full flex justify-center mt-5 mb-2">
          <h1 className="flex items-center text-4xl">
            Our Collection <Minus className="mt-2" />
          </h1>
        </div>
        <p className="px-30 text-center text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          illum consectetur cumque maxime modi nulla voluptate atque sequi!
        </p>
      </div>
        <div className="w-full py-10 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        {products.map((item) => (
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

            <div className="w-full flex justify-center px-4 py-3">
              <button
                className="w-10/12 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-300 rounded-full"
                onMouseEnter={() => handleMouseEnter(item._id)}
                onMouseLeave={() => handleMouseLeave(item._id)}
              >
                {hoveredItems[item._id] ? (
                  <>
                    <BaggageClaim className="w-5 h-5" />
                  </>
                ) : (
                  <>
                  Add to cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Collection