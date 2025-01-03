"use client";
import { useAppSelector } from "@/redux/Hooks";
import { Whisper } from "next/font/google";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import NavMobile from "./NavMobile";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });

interface NavbarProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setShowCart }: NavbarProps) {
  const cartCount = useAppSelector((state) => state.cart.length);

  return (
    <div className="backdrop-blur-[20px] bg-black text-pink-500 sticky top-0 z-10 py-4">
      <div className="container flex justify-between items-center">
        <NavMobile />

        <Link
          href={"/"}
          className={`${whisper.className} text-3xl sm:text-5xl font-semibold sm:hover:text-pink-700`}
        >
          <h3 className={`${whisper.className} text-[40px]`}>Cosmetics</h3>
        </Link>

        <ul className="gap-6 hidden md:flex">
          <Link href={"/"} className="nav-Link text-white hover:text-pink-500">
            Home
          </Link>
          <Link href={"/shop"} className="nav-Link text-white hover:text-pink-500">
            Shop
          </Link>
          <Link href={"/blog"} className="nav-Link text-white hover:text-pink-500">
            Blog
          </Link>
          <Link href={"/contact"} className="nav-Link text-white hover:text-pink-500">
            Contact
          </Link>
        </ul>

        <div className="flex gap-6 text-[26px]">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart className="text-pink-500 hover:text-pink-700" />
            <div className="absolute top-[-15px] right-[-10px] bg-pink-500 w-[25px] h-[25px] rounded-full text-black text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </div>
          <IoSearchSharp className="text-pink-500 hover:text-pink-700" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

