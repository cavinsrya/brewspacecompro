"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full h-[374px] flex items-center bg-white px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Do You Have Ideas? <br /> Let’s Talk!
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Make every business idea come true with the best & most interesting
          results with us
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <Link
            href="https://wa.me/6285156736505"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition"
          >
            Let’s Talk
          </Link>
          <button
            className="w-12 h-12 flex items-center justify-center bg-white text-black border-2 border-black rounded-full hover:bg-gray-800 hover:text-white transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
}
