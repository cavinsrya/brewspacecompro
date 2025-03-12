"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          isHome
            ? isScrolled
              ? "bg-white shadow-md"
              : "bg-none"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/">
              <Image
                src="/logonav.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              <Link
                href="/"
                className={`hover:text-[#26A86E] ${
                  isHome && !isScrolled ? "text-black" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-[#26A86E]">
                About
              </Link>
              <Link
                href="/products"
                className="text-black hover:text-[#26A86E]"
              >
                Products
              </Link>
              <Link href="/teams" className="text-black hover:text-[#26A86E]">
                Teams
              </Link>
            </div>

            {/* Mobile Menu */}
            <button
              className={`md:hidden ${
                isHome && !isScrolled ? "text-white" : "text-black"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className={`${isHome ? "" : "pt-20"}`}></main>
    </>
  );
}
