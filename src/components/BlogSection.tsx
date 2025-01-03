import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/post__1.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "Nov 6, 2024",
    comment: 3,
    width: 500,  // Dynamic width for this image
    height: 400, // Dynamic height for this image
  },
  {
    img: "/post__2.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "Oct 1, 2024",
    comment: 13,
    width: 600,  // Dynamic width for this image
    height: 600, // Dynamic height for this image
  },
  {
    img: "/post__3.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "Dec 25, 2024",
    comment: 9,
    width: 550,  // Dynamic width for this image
    height: 400, // Dynamic height for this image
  },
];

function BlogSection() {
  return (
    <div className="container pt-9 md:pt-32 pb-16">
      <h2 className="font-bold text-4xl text-white">Latest News</h2>
      <p className="text-pink-500">
        Present posts in a best way to highlight interesting moments of your blog.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
            width={item.width}  // Passing dynamic width
            height={item.height} // Passing dynamic height
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
