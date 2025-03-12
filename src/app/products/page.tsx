"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Typica Buhun Lot MKMR Coffee Roast",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912954925649942/3.png?ex=67d32ad6&is=67d1d956&hm=755688c5dba1941f7ade2d49c3260ffd1c770c8c90c5ebae56542e75f47cb099&=&format=webp&quality=lossless",
    },
    {
      title: "Tohari Mossto Coffee   Aeropress",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348914168153247834/1.png?ex=67d32bf7&is=67d1da77&hm=670d5de16b245043ebdfe2c0774d966e9c33f4566d155e9f1ef20499e987bba3&=&format=webp&quality=lossless",
    },
    {
      title: "Mbohang Lot MKMR Coffee Roast",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912956154318849/6.png?ex=67d32ad6&is=67d1d956&hm=4db2afa76b3e2e2ddff8912b30eb6e727240b0f39ca2f8e6cf858dcad03cfaf2&=&format=webp&quality=lossless",
    },
    {
      title: "Ethiopia Lalesa Natural  Coffee",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912954560614452/2.png?ex=67d32ad5&is=67d1d955&hm=7ca3cd93d34d4b0284b4b084b20fecf087660a9892b2473bbe4c7192ea2e6dc1&=&format=webp&quality=lossless",
    },
    {
      title: "Espresso Brazil Santos Coffee Roast",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912955693076534/5.png?ex=67d32ad6&is=67d1d956&hm=2f82adc933e5cf9ec918e395910b887cdc089eb892a9f459c0f4867af5de8044&=&format=webp&quality=lossless",
    },
    {
      title: "Raspberry Nabila Natural  Anaerob Filter Roast Coffee",
      image: "Raspberry Nabila Natural  Anaerob Filter Roast Coffee",
    },
    {
      title: "Margamulya Natural  Anaerob  Coffee Roasters",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912955307327599/4.png?ex=67d32ad6&is=67d1d956&hm=3e33f847c5dc6447c9d908dcc85e5901e8975f092c303c020c8d6dbfe127eea4&=&format=webp&quality=lossless",
    },
    {
      title: "Moonbeams Espresso  Blend Coffee",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348914168463622144/2.png?ex=67d32bf7&is=67d1da77&hm=04912536435c9f2a91a90e10dc3a84bd53fb7c8b1f4d290a85b82373439ca22f&=&format=webp&quality=lossless",
    },
    {
      title: "Tanzania Peaberry Natural Washed  Coffee",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348914168153247834/1.png?ex=67d32bf7&is=67d1da77&hm=670d5de16b245043ebdfe2c0774d966e9c33f4566d155e9f1ef20499e987bba3&=&format=webp&quality=lossless",
    },
    {
      title: "Panama Geisha Anaerob  Coffee Roasters",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912954925649942/3.png?ex=67d32ad6&is=67d1d956&hm=755688c5dba1941f7ade2d49c3260ffd1c770c8c90c5ebae56542e75f47cb099&=&format=webp&quality=lossless",
    },
    {
      title: "Vietnam Robusta Anaerob  Coffee Roasters",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912954560614452/2.png?ex=67d32ad5&is=67d1d955&hm=7ca3cd93d34d4b0284b4b084b20fecf087660a9892b2473bbe4c7192ea2e6dc1&=&format=webp&quality=lossless",
    },
    {
      title: "Mexican Chiapas Aeropress  Coffee Roasters",
      image:
        "https://media.discordapp.net/attachments/1348912502720958494/1348912956154318849/6.png?ex=67d32ad6&is=67d1d956&hm=4db2afa76b3e2e2ddff8912b30eb6e727240b0f39ca2f8e6cf858dcad03cfaf2&=&format=webp&quality=lossless",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black max-w-md">
          Crafted Perfection in Every Bean – Discover Your Perfect Brew
        </h1>
        <p className="text-gray-600 max-w-lg">
          At Brew Blissful Coffee, we take pride in offering carefully selected
          coffee beans, roasted to perfection to bring out their unique flavors.
          Whether you prefer a bright and fruity light roast, a well-balanced
          medium roast, or a bold and rich dark roast, each batch is crafted
          with precision to ensure an unforgettable coffee experience. Indulge
          in the finest quality, sourced sustainably and roasted fresh, just for
          you. Check out our coffee products below and find your perfect brew!
        </p>
      </div>

      <div className="my-10">
        <Image
          src="https://cdn.discordapp.com/attachments/1348912502720958494/1349433520975642707/api.png?ex=67d31566&is=67d1c3e6&hm=f1bfb738bd6c6d074ed130806554274bd5b12bdd292d96b60a7b67917f8330d9&"
          alt="Coffee Banner"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <h2 className="text-3xl font-bold mb-8 text-black">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
