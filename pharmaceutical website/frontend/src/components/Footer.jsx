import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and Contact Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-4xl text-green-500 font-bold mr-2">+</div>
            <h2 className="text-2xl font-semibold">HealKart</h2>
          </div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-start">
              <MapPin className="mt-1 mr-2 h-5 w-5 text-white" />
              No: 58 A, East Madison Street,<br />Baltimore, MD, USA 4508
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-white" />
              +91 12345678
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-white" />
              support@somemail.com
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="#" className="bg-blue-500 p-2 rounded-full hover:scale-110 transition">
              <Twitter className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition">
              <Facebook className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-pink-600 p-2 rounded-full hover:scale-110 transition">
              <Instagram className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:scale-110 transition">
              <Linkedin className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-500 p-2 rounded-full hover:scale-110 transition">
              <Globe className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Scissors</li>
            <li>Glucometer</li>
            <li>Disposable Gloves</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Plaster Machine</li>
            <li>Pedometer</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Scissors</li>
            <li>Glucometer</li>
            <li>Disposable Gloves</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        Copyright Powered by Designthemes
      </div>
    </footer>
  );
};

export default Footer;