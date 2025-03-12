"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            {/* Logo */}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-22 left-0 w-full bg-white shadow-md transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-black hover:text-[#26A86E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-[#26A86E]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-black hover:text-[#26A86E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/teams"
              className="text-black hover:text-[#26A86E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
          </div>
        </div>
      </nav>

      <main className={`${isHome ? "" : "pt-20"}`}></main>
    </>
  );
}
