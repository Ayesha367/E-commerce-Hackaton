import React from "react";
import { Whisper } from "next/font/google";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

function Footer() {
  return (
    <div className="pt-16 h-auto bg-[#000000] text-[#d1d0d0]">
      <h1 className={`${whisper.className} text-pink-500 text-center md:px-8 md:text-left pb-5 text-4xl`}>
        <a 
          href="https://portfolio-2-sigma-three.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          Ayesha&apos;s Cosmetics Shop
        </a>
      </h1>
      <div className="px-3 sm:px-5 md:px-14 flex justify-between gap-10 md:gap-20 flex-col items-start md:flex-row md:items-center">
        <ul>
          <h3 className="font-bold pb-3 text-white">Shop By Category</h3>
          <li>Face Care</li>
          <li>Eye Makeup</li>
          <li>Cheeks & Contour</li>
          <li>Lip Care</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-white">About Us</h3>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Wholesale</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-white">Customer Support</h3>
          <li>Contact Us</li>
          <li>FAQ&apos;s</li>
          <li>Find a Store</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="md:w-[40%]">
          <h3 className="font-semibold text-white pb-3">
            Stay Updated with Our Newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter email here"
            className="px-2 py-1 sm:px-9 sm:py-2 text-gray-600 rounded-sm mx-2 border-none outline-none text-[17px]"
          />
          <button className="border-2 p-[3px] sm:p-[7px] font-semibold border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
            Subscribe Now
          </button>
          <p className="py-4 text-[14px] text-gray-400">
            By subscribing, you agree to receive promotional emails from Ayesha&apos;s Cosmetics Shop and accept our terms of use and privacy policy. *Terms apply.
          </p>
        </div>
      </div>

      <p className="font-thin text-white text-center pt-12 pb-4">
        ©2024 <a href="https://portfolio-2-sigma-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ayesha&apos;s</a> Cosmetics Shop. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
