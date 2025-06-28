import React from "react";
import Navbar from "../components/Navbar";
import { Minus } from "lucide-react";
import { assets, products } from "../assets/assets";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex mt-5 mb-2 px-10">
        <h1 className="flex items-center text-3xl">
          Your Cart <Minus className="mt-2" />
        </h1>
      </div>
      <div className="px-10 mt-10 ">
        {products.slice(0,2).map((item) => (
            <div
            key={item._id}
            className=" h-36 border-t border-b flex items-center justify-between"
          >
          <img
            src={item.image[0]}
            alt={item.name}
            className="h-32"
          />
          <div >
          <p>{item.name}</p>
          <p className="mt-3">₹{item.price}</p>
          </div>
          <input type="number" name="number" className="border w-16 px-2" value="1"/>
          <img src={assets.bin} alt="" className="h-5 mr-5 cursor-pointer"/>
          </div>
        ))}
      </div>
      <div className="w-full px-10">
      <div className=" mt-10">
              <div className="w-1/3 flex  mt-5 mb-2">
        <h1 className="flex items-center text-3xl">
          Cart Totals <Minus className="mt-2" />
        </h1>
      </div>
      <div className="flex justify-between border-b w-1/3 mt-4">
      <p>Subtotal</p>
      <p>₹ {(products[0].price + products[1].price)}</p>
      </div>
      <div className="flex justify-between border-b w-1/3 mt-4">
      <p>Shipping Fee</p>
      <p>₹ 25</p>
      </div>
      <div className="flex justify-between w-1/3 mt-4">
      <p>Total</p>
      <p>₹ {(products[0].price + products[1].price) + 25}</p>
      </div>
      <button className="bg-green-950 text-white hover:text-green-950 hover:bg-white hover:border-2 px-2 py-2 mt-3">Proceed to Checkout</button>
      </div>
      </div>
    </div>
  );
};

export default Cart;
