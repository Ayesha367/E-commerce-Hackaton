import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="container relative pt-16">
      <Image
        className="w-[1000%] h-[60%]"
        src={"/hero.png"}
        alt={"Hero image"}
        width={500}
        height={200}
      />

      <div className="hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[250px] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8 rounded-lg">
        <h2 className="text-[22px] lg:text-[30px] xl:text-[40px] font-semibold text-pink-500">
          New Cosmetics for you girls
        </h2>
        <p className="text-white text-[14px] lg:text-[16px] xl:text-[18px] font-light">
    Explore a wide range of beauty products for every occasion!
        </p> 
        
        <Link href={"/shop"}>
          <button
            className="bg-pink-500 uppercase my-3 text-black text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-pink-700 hover:text-white transition-colors"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
