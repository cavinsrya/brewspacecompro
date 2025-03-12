"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Typica Buhun Lot MKMR Coffee Roast",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912954925649942/3.png?ex=67d13096&is=67cfdf16&hm=5538d586fe77b7c467bdf70eb9b1744f12d380df5d4dac7445f45216ed018d59&",
    },
    {
      title: "Tohari Mossto Coffee   Aeropress",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348914168153247834/1.png?ex=67d131b7&is=67cfe037&hm=8e75df7ca75659431b784f412727740e09434902e2a58a3d706943d2e551ff54&",
    },
    {
      title: "Mbohang Lot MKMR Coffee Roast",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912956154318849/6.png?ex=67d13096&is=67cfdf16&hm=fadc2ad741ce77647a751e6d11e488eaffa75b1aa5c3ed00e458fd4c8def2ba7&",
    },
    {
      title: "Ethiopia Lalesa Natural  Coffee",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912954560614452/2.png?ex=67d13095&is=67cfdf15&hm=4ac0ee11cf7c1319877ee803dc1b72f8152a06d28ee8a968a8c5a5ba94aa2a6e&",
    },
    {
      title: "Espresso Brazil Santos Coffee Roast",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912955693076534/5.png?ex=67d13096&is=67cfdf16&hm=2d94e1a4dc88593b9d7cb1e97d20710213c24f981893200067916aab2647e7a1&",
    },
    {
      title: "Raspberry Nabila Natural  Anaerob Filter Roast Coffee",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912954187448361/1.png?ex=67d13095&is=67cfdf15&hm=dffaa5c5f4cf1acf80cc3dc9a9bdeaf537a94a372fcdaf32f38e09e11cd44a58&",
    },
    {
      title: "Margamulya Natural  Anaerob  Coffee Roasters",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912955307327599/4.png?ex=67d13096&is=67cfdf16&hm=a3f8f8998d8423918e84f08776777bbcc95faafae0fc8e69898b1a80bee80056&",
    },
    {
      title: "Moonbeams Espresso  Blend Coffee",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348914168463622144/2.png?ex=67d131b7&is=67cfe037&hm=b0c201ff3dd55300462d857f80ebbb5d97ede474cbdd927711abd206caec4800&",
    },
    {
      title: "Tanzania Peaberry Natural Washed  Coffee",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912956154318849/6.png?ex=67d13096&is=67cfdf16&hm=fadc2ad741ce77647a751e6d11e488eaffa75b1aa5c3ed00e458fd4c8def2ba7&",
    },
    {
      title: "Panama Geisha Anaerob  Coffee Roasters",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912954925649942/3.png?ex=67d13096&is=67cfdf16&hm=5538d586fe77b7c467bdf70eb9b1744f12d380df5d4dac7445f45216ed018d59&",
    },
    {
      title: "Vietnam Robusta Anaerob  Coffee Roasters",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348914168153247834/1.png?ex=67d131b7&is=67cfe037&hm=8e75df7ca75659431b784f412727740e09434902e2a58a3d706943d2e551ff54&",
    },
    {
      title: "Mexican Chiapas Aeropress  Coffee Roasters",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1348912956154318849/6.png?ex=67d13096&is=67cfdf16&hm=fadc2ad741ce77647a751e6d11e488eaffa75b1aa5c3ed00e458fd4c8def2ba7&",
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
