import { fetchData } from "@/lib/backendless";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default async function OurProducts() {
  const products = await fetchData<Product>("products");
  return (
    <section className="bg-gradient-to-b from-[#26A86E] to-[#0F422B] min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold mb-6">Our Products</h2>
      <div className="max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <Image
              src={product.image_url}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-center p-4 flex-grow text-[#484848]">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
      <Link href="/products">
        <button className="mt-6 px-6 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          View More
        </button>
      </Link>
    </section>
  );
}
