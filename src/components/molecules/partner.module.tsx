import Image from "next/image";

export default function Clients() {
  const logos = [
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440826677264477/Logo_fore_2020_color_landscape.jpg?ex=67d31c34&is=67d1cab4&hm=6f9b032adba88f3bd62d8ccac1646b694120efbba2d66919e923c84442844dcd&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440825888608357/7am-enfant5062.logowik.com.webp?ex=67d31c34&is=67d1cab4&hm=144fc42a172f5713b97c45093ada0fbeb03db6660ec478cf51c136c19c1c0eeb&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440826345783457/Kopi_Kenangan.svg.png?ex=67d31c34&is=67d1cab4&hm=7013a5ef6acd650cb65371142067b0e7db5f0b62f4c8f69be1df2ea707942ec4&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440826962346077/logo-kopi-tuku.png?ex=67d31c34&is=67d1cab4&hm=ee382bc73fa103839c91f6bcb9b8717bc326ee047510a429efeb9b4f5f14ff70&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440827209945170/LogoCroco.png?ex=67d31c34&is=67d1cab4&hm=16c03849d4229d14c21ecc1aa2ea98d59e5939f3cfee10fdf1b7aa0ea7958cf1&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440827419529227/Orange-1.png?ex=67d31c34&is=67d1cab4&hm=7ec09cf75de60ecd7fde61d437c21b44680bfd2ff0d597d645f6d186e4bc0350&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440827667251290/Point-coffee-logo-update.png?ex=67d31c34&is=67d1cab4&hm=4e95ba45f2f2777ecdd4082473930862030d03ee37f3398ec64691d9fca035e5&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349440827893616770/starbucks-redprinting.com_480x480.png?ex=67d31c34&is=67d1cab4&hm=178b19da14ee72a662e46da4067cb3c995891f51a2e65935481a72a1100fe290&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349441089651736596/LogoMS1panjang.png?ex=67d31c73&is=67d1caf3&hm=862c8688c640668714d8cdc3a2835ac462ec1f1a970790cc26702084b67e797a&",
    "https://cdn.discordapp.com/attachments/1348912502720958494/1349441089861320816/wwwcommongroundscoid82cartcloud-logo-1659430552_1.jpg?ex=67d31c73&is=67d1caf3&hm=7c8a2913c5c03fea8b855a3c86891f27499264d2f72a1459d7ccff97a39efac1&",
  ];

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">Partners</h2>
        <p className="text-lg text-gray-600">Companies we partner with</p>
      </div>

      <hr className="w-full border-t border-gray-300 my-6" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-30 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo}
              alt={`Company ${index + 1}`}
              width={120}
              height={60}
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <hr className="w-full border-t border-gray-300 mt-6" />
    </section>
  );
}
