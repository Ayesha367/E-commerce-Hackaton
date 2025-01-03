"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { products } from "@/app/api/products/product";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/features/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PI {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean;
}

import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState<PI | null>(null);

  useEffect(() => {
    const id = params.id;
    const getProductData = products.filter((item) => item.id.toString() === id)[0];

    setProductData(getProductData);
  }, [params.id]);

  const addProductToCart = () => {
    if (productData) {
      const payload = {
        id: productData.id,
        name: productData.name,
        img: productData.img,
        price: productData.price,
        quantity: 1,
      };
      dispatch(addToCart(payload));

      toast.success(`${productData.name} added to cart!`);
    }
  };

  return (
    <div className="pt-8">
      <div className="bg-black py-4">
        <ToastContainer />
        <div className="container flex gap-4 items-center text-pink-500">
          <Link href={"/"} className="cursor-pointer hover:text-pink-400">
            Home
          </Link>

          <div className="w-[30px] h-[2px] bg-gray-600" />
          <p className="capitalize">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400 " />
          <p>{productData?.name}</p>
        </div>
      </div>

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-full"
              src={productData?.img || ""}
              width={1000}
              height={1200}
              alt={productData?.name || "Product Image"}
            />
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center text-pink-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-700 text-[14px] ml-2 hover:text-pink-400 cursor-pointer">
                (8 customer reviews)
              </p>
            </div>

            <div className="text-[#161616] space-y-6">
              <h2 className="text-3xl font-semibold text-pink-500">
                {productData?.name}
              </h2>
              <p className="text-xl text-pink-500">${productData?.price}.00</p>
            </div>

            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              numquam laudantium asperiores quidem quisquam quae error doloribus
              aut ex quam.
            </p>
            <p className="text-gray-600 text-[14px] font-semibold">
              20 in stock
            </p>

            <button
              onClick={addProductToCart}
              className="uppercase bg-pink-500 py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-pink-700"
            >
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to Cart
            </button>

            <div className="flex gap-4 items-center pt-3">
              <div className="flex gap-1 items-center text-pink-500">
                <AiOutlineHeart />
                Add to Wish List
              </div>
              <div className="flex gap-1 items-center text-pink-500">
                <MdCompareArrows />
                Compare
              </div>
            </div>

            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div>Name: {productData?.name}</div>
            <div className="capitalize">
              Category: {productData?.category[0]}
            </div>

            <div className="flex gap-1 items-center capitalize">
              Tags:{" "}
              {productData?.category.map((item: string) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400" />

            <div className="flex gap-1 items-center text-pink-500">
              SHARE:{" "}
              <div className="flex gap-2 items-center text-[18px]">
                <a
                  href="https://facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/ayeshafarooq125?igsh=MjFkc3kxdGxqdjRx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href=" https://www.linkedin.com/in/ayesha-farooq-0b66b42ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
