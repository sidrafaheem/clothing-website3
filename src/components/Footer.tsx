import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 ">
            <h3 className="text-xs font-extrabold mb-4 ml-5">KHAS</h3>
            <p className="text-gray-600 mb-2 text-xs ml-5">224 County road, South New York 11968</p>
            <p className="text-gray-600 mb-2 text-xs ml-5">info@khasstore.us</p>
            <p className="text-gray-600 mb-2 text-xs ml-5">Pakistan (+92) 340 999 5954</p>
            <p className="text-gray-600 text-xs ml-5">USA (+1) 347 315 6595</p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-gray-500 hover:text-black cursor-pointer ml-5" />
              <FaInstagram className="text-gray-500 hover:text-black cursor-pointer ml-5" />
              <FaTwitter className="text-gray-500 hover:text-black cursor-pointer ml-5" />
              <FaPinterest className="text-gray-500 hover:text-black cursor-pointer ml-5" />
              <FaSnapchatGhost className="text-gray-500 hover:text-black cursor-pointer ml-5" />
              <FaTiktok className="text-gray-500 hover:text-black cursor-pointer ml-5" />
            </div>
          </div>
          
          {/* Information Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xs font-extrabold mb-4">INFORMATION</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="text-xs">Privacy Policy</li>
              <li className="text-xs">Shipping Policy</li>
              <li className="text-xs">Exchange & Return Policy</li>
              <li className="text-xs">Payment & Delivery</li>
              <li className="text-xs">Help & FAQs</li>
              <li className="text-xs">How to Order</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xs font-extrabold mb-4">QUICK LINKS</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="text-xs">Contact Us</li>
              <li className="text-xs">Size Guide</li>
              <li className="text-xs">Customer Reviews</li>
              <li className="text-xs">Fabric Glossary</li>
              <li className="text-xs">e-Catalog</li>
              <li className="text-xs">Latest Ads</li>
              <li className="text-xs">Blogs</li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-extrabold mb-4">NEWSLETTER SIGNUP</h3>
            <p className="text-gray-600 mb-4 text-xs mr-5">Sign up to our newsletters and don’t miss new arrivals, the latest fashion updates, and our promotions.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-xs"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-md text-xs mr-5">SUBMIT</button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-500 text-xs ">
          <p className="text-xs">&copy; 2024 KHAS STORES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

