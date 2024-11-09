"use client";
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

const HeaderMain = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative border-b border-gray-200">
      <div className="container py-4 flex items-center justify-between">
        
        {/* Left Side - Hamburger, Search Icons, and Email on Small Screens */}
        <div className="flex items-center space-x-10">
          {/* Hamburger Icon - Visible on small screens */}
          <div className="sm:hidden ml-2 ">
            <FaBars className="text-gray-500 cursor-pointer" />
          </div>

          {/* Search Icon - Toggle input box on click for small screens */}
          <div className="sm:hidden ml-6" onClick={toggleSearch}> {/* Added margin-left here */}
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>

          {/* Email - Visible only on larger screens */}
          <div className="hidden lg:block text-gray-500 ml-4">
            info@khasstore.us
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-grow text-center">
          <h1 className="text-xl font-bold">KHAS</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Input - Visible only on larger screens */}
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-2 py-1 rounded text-gray-500 text-sm"
            />
          </div>

          {/* Shopping Cart Icon - Visible on all screen sizes */}
          <div className="text-gray-800 cursor-pointer ml-10" onClick={toggleCart}>
            <FaShoppingCart />
          </div>
        </div>
      </div>

      {/* Small Screen Search Input */}
      {isSearchOpen && (
        <div className="sm:hidden fixed top-16 inset-x-0 bg-white p-4 shadow-lg z-40">
          <div className="flex items-center border border-gray-300 rounded px-2 py-1">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-gray-500"
              onBlur={() => setIsSearchOpen(false)} // Closes search on blur
            />
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full '
        }`}
        style={{ width: '250px', zIndex: 30 }}
      >
        {/* Close button */}
        <button className="text-gray-500 text-xs mb-4" onClick={toggleCart}>
          CLOSE
        </button>

        {/* Cart Content */}
        <h2 className="text-sm font-semibold mb-2">YOUR BAG</h2>
        <p className="text-gray-500 text-xs mb-6">Your cart is currently empty.</p>
        
        {/* Continue Shopping Button */}
        <button
          className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded hover:bg-gray-100"
          onClick={toggleCart}
        >
          CONTINUE SHOPPING
        </button>
      </div>

      {/* Overlay to close cart on outside click */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleCart}
        ></div>
      )}
    </div>
  );
};

export default HeaderMain;

// "use client"
// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

// const HeaderMain = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <div className="relative border-b border-gray-200">
//       <div className="container py-4 flex items-center justify-between">
        
//         {/* Left Side - Hamburger, Search Icons, and Email on Small Screens */}
//         <div className="flex items-center space-x-2">
//           {/* Hamburger Icon - Visible on small screens */}
//           <div className="sm:hidden">
//             <FaBars className="text-gray-500 cursor-pointer" />
//           </div>

//           {/* Search Icon - Toggle input box on click for small screens */}
//           <div className="sm:hidden" onClick={toggleSearch}>
//             <FaSearch className="text-gray-500 cursor-pointer" />
//           </div>


//           {/* Email - Visible only on larger screens */}
//           <div className="hidden lg:block text-gray-500 ml-4">
//             info@khasstore.us
//           </div>
//         </div>

//         {/* Center - Logo */}
//         <div className="flex-grow text-center">
//           <h1 className="text-xl font-bold">KHAS</h1>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center space-x-4">
//           {/* Search Input - Visible only on larger screens */}
//           <div className="hidden lg:flex">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 px-2 py-1 rounded text-gray-500 text-sm"
//             />
//           </div>


//           {/* Shopping Cart Icon - Visible on all screen sizes */}
//           <div className="text-gray-500 cursor-pointer mr-8" onClick={toggleCart}>
//             <FaShoppingCart />
//           </div>
//         </div>
//       </div>

//       {/* Small Screen Search Input */}
//       {isSearchOpen && (
//         <div className="sm:hidden fixed top-16 inset-x-0 bg-white p-4 shadow-lg z-40">
//           <div className="flex items-center border border-gray-300 rounded px-2 py-1">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full outline-none text-gray-500"
//               onBlur={() => setIsSearchOpen(false)} // Closes search on blur
//             />
//           </div>
//         </div>
//       )}

//       {/* Shopping Cart Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${
//           isCartOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//         style={{ width: '250px', zIndex: 30 }}
//       >
//         {/* Close button */}
//         <button className="text-gray-500 text-xs mb-4" onClick={toggleCart}>
//           CLOSE
//         </button>

//         {/* Cart Content */}
//         <h2 className="text-sm font-semibold mb-2">YOUR BAG</h2>
//         <p className="text-gray-500 text-xs mb-6">Your cart is currently empty.</p>
        
//         {/* Continue Shopping Button */}
//         <button
//           className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded hover:bg-gray-100"
//           onClick={toggleCart}
//         >
//           CONTINUE SHOPPING
//         </button>
//       </div>

//       {/* Overlay to close cart on outside click */}
//       {isCartOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-20"
//           onClick={toggleCart}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default HeaderMain;


