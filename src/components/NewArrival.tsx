"use client";
import { client } from "@/sanity/lib/client";
import { simplifiedProduct } from "./interface";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

async function getData() {
  const query = 
  `*[_type == "product"] [0...4] | order(_createdAt desc) {
    _id,
      price,
      name,
      "slug":slug.current,
    "categoryName": category->name,
      "images": images[].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

const NewArrival= async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-20">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            NEW ARRIVAL
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 sm:mb-7">
          {data.map((product) => (
            <motion.div
              key={product._id}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/product/${product.slug}`}>
                <div className="w-full overflow-hidden bg-gray-200 mt-2 cursor-pointer relative">
                  <Image
                    src={product.images[0]}
                    alt="Product image"
                    className="w-full h-[500px] object-cover object-top transition-transform duration-300"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={product.images[1]}
                      alt="Hover image"
                      className="w-full h-[500px] object-cover object-top"
                      width={300}
                      height={300}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </Link>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-900">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                </div>
                <p className="text-small font-medium text-gray-900">${product.price}</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-black text-white font-semibold rounded">Add to Cart</button>
                <div className="flex space-x-2 mt-3">
                  {["S", "M", "L", "XL"].map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 bg-gray-300 rounded-full text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
