import React from "react";
import { assets } from "../assets/assets";
import { Search, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center px-12 py-5 shadow-md">
     <Link to="/" className="cursor-pointer"><img src={assets.logo} alt="" className="h-10" /></Link> 

      <div className="bg-green-50 h-9 w-1/3 mx-12 rounded-full flex justify-between items-center px-5 py-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />
        <button className="cursor-pointer">
          <Search size={20} />
        </button>
      </div>

      <ul className="flex w-1/2 justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative group px-2 py-1 cursor-pointer duration-300 ease-in-out hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>Home</span>
          </li>
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `relative group px-2 py-1 cursor-pointer duration-300 ease-in-out hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>Collection</span>
          </li>
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `relative group px-2 py-1 cursor-pointer duration-300 ease-in-out hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>Doctors</span>
          </li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative group px-2 py-1 cursor-pointer duration-300 ease-in-out hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>About</span>
          </li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative group px-2 py-1 cursor-pointer duration-300 ease-in-out hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>Contact</span>
          </li>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `relative group cursor-pointer duration-300 ease-in-out bg-green-600 text-white px-6 py-2 rounded-full hover:rotate-10 ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
        >
          <li>
            <span>Login</span>
          </li>
        </NavLink>
        <Link to="/cart" className="relative mx-4">
          <ShoppingCart />
          <p className="absolute right-[-5px] top-[-3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
