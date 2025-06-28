import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import { Minus } from "lucide-react";
import Hero2 from "../components/Hero2.jsx";
import Products2 from "../components/Products2.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <div className="w-full flex justify-center mt-5 mb-2">
          <h1 className="flex items-center text-4xl">
            Our Products <Minus className="mt-2" />
          </h1>
        </div>
        <p className="px-30 text-center text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          illum consectetur cumque maxime modi nulla voluptate atque sequi!
        </p>
      </div>
      <Products />
      <Hero2 />
            <div>
        <div className="w-full flex justify-center mt-5 mb-2">
          <h1 className="flex items-center text-4xl">
            Our Special Products <Minus className="mt-2" />
          </h1>
        </div>
        <p className="px-30 text-center text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          illum consectetur cumque maxime modi nulla voluptate atque sequi!
        </p>
      </div>
      <Products2 />
      <Footer />
    </div>
  );
};

export default Home;
