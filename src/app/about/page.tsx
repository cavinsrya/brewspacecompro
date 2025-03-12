import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16">
      <div className="flex">
        <h2 className="border border-black text-black px-6 py-2 rounded-full text-sm uppercase tracking-wide">
          All You Think About Us
        </h2>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-black">
        WELCOME TO BREW BLISSFUL COFFEE, , <br />{" "}
        <span className="text-black font-extrabold">
          WHERE EVERY BEAN TELLS A STORY
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mt-12">
        <div className="flex flex-col space-y-6 w-full md:w-1/2 text-center md:text-left">
          <div className="grid grid-cols-3 gap-6 text-4xl font-bold">
            <div className="text-black">
              200+ <p className="text-sm text-gray-600">Partners</p>
            </div>
            <div className="text-black">
              20+ <p className="text-sm text-gray-600">Single Origin</p>
            </div>
            <div className="text-black">
              100+ <p className="text-sm text-gray-600">Coffee Beans</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <h3 className="text-4xl font-extrabold text-[#24AA6F]">
              Contact Me
            </h3>
            <a
              href="https://wa.me/6285156736505"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white text-black border-2 border-black rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              →
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-700 leading-relaxed">
            At Brew Blissful Coffee, we believe in crafting the perfect cup by
            sourcing only the finest beans from sustainable farms worldwide.
            Every roast is a testament to our dedication, bringing out rich
            flavors and aromatic notes that define a superior coffee experience.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Our journey began with a passion for quality and innovation,
            ensuring each bean tells a story of its origin, process, and
            craftsmanship. Whether you are a casual drinker or a connoisseur,
            Brew Blissful Coffee promises a taste that lingers and a tradition
            that continues.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Image
          src="https://cdn.discordapp.com/attachments/1348912502720958494/1349412146873892965/image_3_1.png?ex=67d3017e&is=67d1affe&hm=0d80fee5af9321918543699731519addb580fc08656d1c2a5ebadf48e834569a&"
          alt="Coffee Roastery"
          width={1200}
          height={500}
          className="rounded-2xl"
          unoptimized
        />
      </div>
    </section>
  );
}
