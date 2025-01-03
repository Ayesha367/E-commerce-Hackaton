"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/Hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  sale: boolean | undefined;
  quantity: number;
}

function ProductCard({ id, img, name, price, sale }: IProduct) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Reload cart from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      parsedCart.forEach((item: IProduct) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);

  const getRating = () => {
    const randomNum = (min: number, max: number) =>
      Math.ceil(Math.random() * (max - min) + min);

    const starCount = randomNum(0, 5);
    return (
      <div className="flex justify-center text-pink-500 pb-2 pt-4">
        {Array(5)
          .fill(null)
          .map((_, idx) =>
            idx < starCount ? (
              <FaStar key={idx} />
            ) : (
              <CiStar key={idx} className="text-pink-300" />
            )
          )}
      </div>
    );
  };

  const addProductCard = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };

    // Update Redux store
    dispatch(addToCart(payload));

    // Update LocalStorage
    const existingCart = localStorage.getItem("cart");
    const updatedCart = existingCart ? JSON.parse(existingCart) : [];
    updatedCart.push(payload);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${name} added to cart!`);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => router.push(`/details/${id}`)}
    >
      <ToastContainer />
      <div className="relative">
        <Image
          className="w-full"
          width={1000}
          height={1142}
          src={img}
          alt={name}
        />
        {sale && (
          <div
            className="bg-pink-500 inline-block absolute top-0 left-0 text-[14px] text-white
          rounded-md px-2 py-[2px] m-4"
          >
            SALE!
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000090] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
          <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <CiHeart className="hover:text-pink-500" />
            </div>
            <div
              className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
              onClick={addProductCard}
            >
              <AiOutlineShoppingCart className="hover:text-pink-700" />
            </div>
          </div>
        </div>
      </div>
      {getRating()}
      <h2 className="font-medium pb-4 hover:text-pink-500">{name}</h2>
      <p className="text-gray-400 font-light">${price}.00</p>
    </div>
  );
}

export default ProductCard;
