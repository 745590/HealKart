import React from "react";
import Navbar from "../components/Navbar";
import { Phone, Mail, MapPin, Timer } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex">
        <div className="w-1/2 p-10">
          <h1 className="text-4xl font-semibold text-center">Contact Info</h1>
          <p className="text-md text-gray-500 text-center px-18 mt-4">
            Pellentesque posuere orci lobortis scelerisque blandit. Donec id
            tellus lacinia an, tincidunt risus ac
          </p>
          <div className="mt-4 flex flex-wrap justify-center">
            <div className="w-1/3 rounded-xl border border-gray-200 hover:border-green-500 transition duration-300 p-5 text-center mr-5 mb-5">
              <div className="w-full flex justify-center my-2">
                <div className="w-15 h-15 bg-green-300 flex justify-center items-center rounded-full">
                  <Phone size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold uppercase">Talk to us</h3>
              <p className="text-md text-gray-500 mt-2">
                Toll-Free: 0803 - 080 - 3081
              </p>
              <p className="text-md text-gray-500 mt-2">0803 - 080 - 3081</p>
            </div>
            <div className="w-1/3 rounded-xl border border-gray-200 hover:border-green-500 transition duration-300 p-5 text-center mr-5 mb-5">
              <div className="w-full flex justify-center my-2">
                <div className="w-15 h-15 bg-green-300 flex justify-center items-center rounded-full">
                  <Mail size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold uppercase">Contact Us</h3>
              <p className="text-md text-gray-500 mt-2">             
domainname@example.com
              </p>
              <p className="text-md text-gray-500 mt-2">support@example.com</p>
            </div>
            <div className="w-1/3 rounded-xl border border-gray-200 hover:border-green-500 transition duration-300 p-5 text-center mr-5 mb-5">
              <div className="w-full flex justify-center my-2">
                <div className="w-15 h-15 bg-green-300 flex justify-center items-center rounded-full">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold uppercase">Our Location</h3>
              <p className="text-md text-gray-500 mt-2">
                625 @ David Blake Road,
              </p>
              <p className="text-md text-gray-500 mt-2">Adventureland, USA</p>
            </div>
            <div className="w-1/3 rounded-xl border border-gray-200 hover:border-green-500 transition duration-300 p-5 text-center mr-5 mb-5">
              <div className="w-full flex justify-center my-2">
                <div className="w-15 h-15 bg-green-300 flex justify-center items-center rounded-full">
                  <Timer size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold uppercase">Opening Hours</h3>
              <p className="text-md text-gray-500 mt-2">
                Mon - Sat 9 am to 8 pm
              </p>
              <p className="text-md text-gray-500 mt-2">Sun - 10 am to 3 pm</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <h1 className="text-4xl font-semibold text-center">Enquire Now</h1>
          <p className="text-md text-gray-500 text-center px-18 mt-4">
            Pellentesque posuere orci lobortis scelerisque blandit. Donec id
            tellus lacinia an, tincidunt risus ac
          </p>
          <form className="w-full px-20 mt-10">
            <input type="text" placeholder="Name" className="border border-gray-300 rounded-xl px-5 py-2 outline-green-500 w-full my-3"/>
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-xl px-5 py-2 outline-green-500 w-full my-3"/>
            <input type="text" placeholder="Subject" className="border border-gray-300 rounded-xl px-5 py-2 outline-green-500 w-full my-3"/>
            <textarea name="message" placeholder="Message" className="border border-gray-300 rounded-xl px-5 py-2 outline-green-500 w-full my-3 h-30"/>
            <button className="w-full bg-green-600 text-white rounded-xl py-3 text-md font-semibold hover:rotate-2 cursor-pointer">Send Enquiry</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
