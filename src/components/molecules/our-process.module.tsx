import Image from "next/image";

import React from "react";

export default function OurProcess() {
  const ourProcess = [
    {
      title: "How to Crafting the Perfect Cup of Coffee",
      description: "Ini adalah isi dari Card 1.",
      image_url:
        "https://media.discordapp.net/attachments/1348529687877648406/1348584862105468968/premium_photo-1670758291967-25ed2e90f21e_1.png?ex=67d2a206&is=67d15086&hm=577dc2cf43876f76d8e17eed6697eeef6121b8e9a167327b086d124d035056b7&=&format=webp&quality=lossless",
    },
    {
      title: "Roasted to Perfection",
      description: "Precision roasting to bring out the best flavors",
      image_url: "https://source.unsplash.com/400x300/?technology",
    },
    {
      title: "Selected with Care",
      description: "Only the finest, sustainably sourced coffee beans",
      image_url: "https://source.unsplash.com/400x300/?city",
    },
    {
      title: "Card 3",
      description: "Isi dari Card 3.",
      image_url:
        "https://media.discordapp.net/attachments/1348529687877648406/1348584800302272554/image.png?ex=67d2a1f7&is=67d15077&hm=2ad5fa3b312b4c4fc25ef84878237390e70f07b8e86ad44f0f20878416dd10a8&=&format=webp&quality=lossless",
    },
  ];
  return (
    <>
      <section className="p-4">
        <h2 className="text-4xl text-center font-bold text-black mb-15">
          Our Process
        </h2>
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row gap-4">
          {/* Card 1 */}
          <div className="sm:w-full md:w-1/2 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden relative">
            <Image
              src={ourProcess[0].image_url}
              alt={ourProcess[0].title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/70"></div>

            <div className="absolute bottom-0 left-0 w-full mb-25 text-white">
              <h2 className="font-semibold z-10 relative sm:text-2xl sm:ml-5 lg:text-4xl lg:pl-0 text-4xl pl-8 ">
                {ourProcess[0].title}
              </h2>
            </div>

            <button className="absolute bottom-4 px-4 py-2 ml-8 mb-5 bg-[#24AA6F] text-white rounded-lg hover:bg-blue-600 z-10 sm:ml-5">
              Read More
            </button>
          </div>

          <div className="sm:w-full md:w-1/2 flex gap-4">
            {/* Card 2 */}
            <div className="w-1/2 flex flex-col gap-4">
              {ourProcess.slice(1, 3).map((card, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#24AA6F] rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden relative h-1/2"
                >
                  <div className="absolute w-full p-2 md:p-4">
                    <h2 className="text-2xl md:text-xl lg:text-3xl font-extrabold leading-tight md:leading-normal text-[#24AA6F]">
                      {card.title}
                    </h2>
                    <p className="text-base pt-4 sm:text-xs md:text-md lg:text-md mt-1 md:mt-2 lg:mt-15 text-[#484848]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card 3 */}
            <div className="w-1/2 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/70"></div>
              <Image
                src={ourProcess[3].image_url}
                alt={ourProcess[3].title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="pt-20"></div>
    </>
  );
}
