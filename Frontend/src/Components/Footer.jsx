import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent mb-4">
            Nishara
          </h2>
          <p className="text-gray-400 text-sm">
            Empowering women to travel solo with confidence, safety, and style. Connect, explore, and embark on unforgettable adventures.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="hover:text-pink-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-pink-500 transition">Home</a>
            </li>
            <li>
              <a href="/destinations" className="hover:text-pink-500 transition">Destinations</a>
            </li>
            <li>
              <a href="/safety" className="hover:text-pink-500 transition">Safety</a>
            </li>
            <li>
              <a href="/community" className="hover:text-pink-500 transition">Community</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">Guides</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">Support</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">
            Get the latest updates and travel tips from Nishara.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nishara. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

