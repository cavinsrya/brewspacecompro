import { fetchData } from "@/lib/backendless";
import { MainContent } from "@/types/types";
import Image from "next/image";
import React from "react";

export default async function OurStory() {
  const mainContent = await fetchData<MainContent>("main_content");

  return (
    <>
      <section id="ourstory" className="py-20 px-6 mt-20">
        <div className="max-w-screen-xl mx-auto">
          {mainContent.map((content, index) => (
            <div
              key={content.title}
              className={`flex flex-col md:flex-row items-center gap-6 text-black ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={content.image_url}
                  alt={content.title}
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
              </div>

              <div className="w-full lg:ml-20 md:w-1/2 text-center md:text-left">
                <h2 className="lg:text-4xl text-xl sm:text-3xl font-bold">
                  {content.title}
                </h2>
                <p className="text-gray-700 mt-5 lg:text-lg">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
