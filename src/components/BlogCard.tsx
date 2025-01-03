import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
  width?: number; // Optional prop for dynamic width
  height?: number; // Optional prop for dynamic height
}

function BlogCard({ img, title, comment, date, width = 600, height = 600 }: propsType) {
  return (
    <div className="space-y-4">
      <Image
        width={width}
        height={height}
        className="rounded-lg hover:scale-105 transition-transform"
        alt="post"
        src={img}
      />

      <div className="text-pink-500 font-medium">
        <span>{date} / </span>
        <span>{comment} Comments </span>
      </div>
      <h3 className="font-bold lg:text-[20px] text-xs text-white hover:text-pink-500">
        {title}
      </h3>
    </div>
  );
}

export default BlogCard;
