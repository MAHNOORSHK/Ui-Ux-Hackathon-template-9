'use client';
import { useState } from 'react';
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#0D0D0D] top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7 z-50 relative">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoCloseCircleOutline size={24} /> : <LuMenu size={24} />}
          </button>

          {/* Desktop Menu - always visible */}
          <ul className="hidden lg:flex lg:flex-row lg:gap-[32px] text-white">
            <li>
              <Link href="/" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/menu" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Menu</Link>
            </li>
            <li>
              <Link href="/blog" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Blog</Link>
            </li>
            <li>
              <Link href="/pages" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Pages</Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">About</Link>
            </li>
            <li>
              <Link href="/shop" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Shop</Link>
            </li>
            <li>
              <Link href="/signin" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Contact</Link>
            </li>
          </ul>

          {/* Mobile menu (visible when toggled) */}
          <div
            className={`
              fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
              lg:hidden transition-all duration-300 ease-in-out
              ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
          >
            <Link
              href="/"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/blog"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/about"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/shop"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/signin"
              className="text-white text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Icons for large screens */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
              <IoIosSearch />
            </Link>
            <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
              <LuUserRound />
            </Link>
            <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
              <HiOutlineShoppingBag />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
