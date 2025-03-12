import { fetchData } from "@/lib/backendless";
import { ComproInfo } from "@/types/types";
import Image from "next/image";
import React from "react";

export default async function Landing() {
  const comproInfo = await fetchData<ComproInfo>("compro_info");

  return (
    <>
      <section className="relative w-full h-screen">
        {comproInfo.map((main) => (
          <div key={main.title} className="relative w-full h-full">
            <Image
              src={main.hero_image_url}
              alt={main.title}
              fill
              style={{ objectFit: "fill" }}
              className="w-full h-full"
            />

            <h2 className="absolute inset-0 flex justify-center text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line font-extrabold px-4 mt-35">
              {main.title}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}
