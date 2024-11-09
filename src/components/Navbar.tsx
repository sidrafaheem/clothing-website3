// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='hidden lg:block bg-gray-50'>
//         <div className="container">
//             <div className="flex w-fit gap-10 mx-auto font-bold py-2 text-gray-800 text-xs">
//                 <Link className='navbar__link relative' href={"#"}>HOME </Link>
//                 <Link className='navbar__link relative' href={"#"}>NEW ARRIVALS </Link>
//                 <Link className='navbar__link relative' href={"#"}>WOMEN  </Link>
//                 <Link className='navbar__link relative' href={"#"}>WINTER </Link>
//                 <Link className='navbar__link relative' href={"#"}>LOUNGE WEAR </Link>
//                 <Link className='navbar__link relative' href={"#"}>ACCESSORIES  </Link>
//                 <Link className='navbar__link relative' href={"#"}>BLOG</Link>
              
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isWomenHover, setIsWomenHover] = useState(false);

  return (
    <div className="hidden lg:block bg-gray-50">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-bold py-2 text-gray-800 text-xs ">
          <Link className="navbar__link relative" href={"#"}>HOME</Link>
          <Link className="navbar__link relative" href={"#"}>NEW ARRIVALS</Link>
          
          {/* Women Link with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsWomenHover(true)}
            onMouseLeave={() => setIsWomenHover(false)}
          >
            <Link className="navbar__link relative" href={"#"}>WOMEN</Link>
            
            {/* Dropdown menu */}
            {isWomenHover && (
              <div className="absolute left-0  top-full mt-2 w-[1000px] p-4 bg-white shadow-lg rounded transition-opacity duration-300 ease-in-out z-20 opacity-100">
                <div className="grid grid-cols-3 gap-6 text-gray-700 text-xs">
                  <div>
                    <h3 className="font-semibold mb-2">BY SEASON</h3>
                    <ul>
                      <li><Link href={"#"}>Summer</Link></li>
                      <li><Link href={"#"}>Winter</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">BY FABRIC</h3>
                    <ul>
                      <li><Link href={"#"}>Lawn</Link></li>
                      <li><Link href={"#"}>Chiffon</Link></li>
                      <li><Link href={"#"}>Khaddar</Link></li>
                      <li><Link href={"#"}>Linen</Link></li>
                      <li><Link href={"#"}>Velvet/Silk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">BY COLLECTION</h3>
                    <ul>
                      <li><Link href={"#"}>Aizal</Link></li>
                      <li><Link href={"#"}>Nigar e Khas</Link></li>
                      <li><Link href={"#"}>Ayman</Link></li>
                      <li><Link href={"#"}>Dilara</Link></li>
                      <li><Link href={"#"}>Parishay</Link></li>
                      <li><Link href={"#"}>Nureh</Link></li>
                      <li><Link href={"#"}>Meraki</Link></li>
                      <li><Link href={"#"}>Winter Collection</Link></li>
                      <li><Link href={"#"}>Luxury Chiffon</Link></li>
                      <li><Link href={"#"}>Lawn Collection</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Link className="navbar__link relative" href={"#"}>WINTER</Link>
          <Link className="navbar__link relative" href={"#"}>LOUNGE WEAR</Link>
          <Link className="navbar__link relative" href={"#"}>ACCESSORIES</Link>
          <Link className="navbar__link relative" href={"#"}>BLOG</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isWomenHover, setIsWomenHover] = useState(false);

//   return (
//     <div className="hidden lg:block bg-gray-50">
//       <div className="container">
//         <div className="flex w-fit gap-10 mx-auto font-bold py-2 text-gray-800 text-xs">
//           <Link className="navbar__link relative" href={"#"}>HOME</Link>
//           <Link className="navbar__link relative" href={"#"}>NEW ARRIVALS</Link>

//           {/* Women Link with Hover Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsWomenHover(true)}
//             onMouseLeave={() => setIsWomenHover(false)}
//           >
//             <Link className="navbar__link relative" href={"#"}>WOMEN</Link>

//             {/* Dropdown menu with sliding animation */}
//             <div
//               className={`absolute left-0 top-full mt-2 w-[1000px] p-4 bg-white shadow-lg rounded transition-all duration-500 ease-in-out z-20
//                 ${isWomenHover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"}`}
//             >
//               <div className="grid grid-cols-3 gap-6 text-gray-700 text-xs">
//                 <div>
//                   <h3 className="font-semibold mb-2">BY SEASON</h3>
//                   <ul>
//                     <li><Link href={"#"}>Summer</Link></li>
//                     <li><Link href={"#"}>Winter</Link></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">BY FABRIC</h3>
//                   <ul>
//                     <li><Link href={"#"}>Lawn</Link></li>
//                     <li><Link href={"#"}>Chiffon</Link></li>
//                     <li><Link href={"#"}>Khaddar</Link></li>
//                     <li><Link href={"#"}>Linen</Link></li>
//                     <li><Link href={"#"}>Velvet/Silk</Link></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">BY COLLECTION</h3>
//                   <ul>
//                     <li><Link href={"#"}>Aizal</Link></li>
//                     <li><Link href={"#"}>Nigar e Khas</Link></li>
//                     <li><Link href={"#"}>Ayman</Link></li>
//                     <li><Link href={"#"}>Dilara</Link></li>
//                     <li><Link href={"#"}>Parishay</Link></li>
//                     <li><Link href={"#"}>Nureh</Link></li>
//                     <li><Link href={"#"}>Meraki</Link></li>
//                     <li><Link href={"#"}>Winter Collection</Link></li>
//                     <li><Link href={"#"}>Luxury Chiffon</Link></li>
//                     <li><Link href={"#"}>Lawn Collection</Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Link className="navbar__link relative" href={"#"}>WINTER</Link>
//           <Link className="navbar__link relative" href={"#"}>LOUNGE WEAR</Link>
//           <Link className="navbar__link relative" href={"#"}>ACCESSORIES</Link>
//           <Link className="navbar__link relative" href={"#"}>BLOG</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
