import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <Image
            src="/logofooter.png"
            alt="Company Logo"
            width={150}
            height={50}
            unoptimized
          />
          <p className="text-gray-400 mt-7">
            Crafted Perfection in Every Bean – Discover Your Perfect Brew
          </p>
          <h3 className="text-lg font-semibold mt-6 text-white">Address</h3>
          <p className="text-gray-400 mt-2">
            Jl. Kopi Sejahtera No. 21, Jakarta Selatan, 12110, Indonesia <br />
            Phone: (+62) 21-5678-9100
            <br />
            Fax: (+62) 21-5678-9101
            <br />
            Email: info@brewblissfulcoffee.com
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Subscribe Now</h1>
            <Link href="instagram.com">
              <button className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full text-xl">
                →
              </button>
            </Link>
          </div>

          <hr className="w-full border-t border-gray-600 my-6" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="text-gray-400 hover:text-white"
                  >
                    Teams
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold text-white">Socials</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tiktok.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full border-t border-gray-600 my-6" />

      <p className="text-gray-400 text-sm text-right">
        &copy; 2025 Your Company. All rights reserved.
      </p>
    </footer>
  );
}
