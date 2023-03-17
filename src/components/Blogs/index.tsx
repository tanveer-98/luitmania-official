import React from "react";
import BlogCard from "../BlogCard";
import BLOGJSON from "./Blogs.json";
const Blogs = () => {
  return (
    <section id="blogs">
      <div className="overflow-hidden pb-20 w-full h-full flex flex-col justify-center items-center bg-bgcolormain">
        <h3 className="mb-2 block uppercase text-white font-bold  text-2xl text-center md:text-3xl ">
          {" "}
          <span className="font-bold text-white mr-4  ">Blogs</span>& Articles
        </h3>
 
        <h3 className=" px-10 sub-title mb-6 text-gray-400 text-xl text-center md:text-xl">
        Insights and Inspiration: Explore Our Blog and Articles for Expert Perspectives and Valuable Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOGJSON.map((element: any, idx: number) => (
            <BlogCard
              imgSource={element.imgSource}
              title={element.title}
              key={idx}
              content={element.content}
              writerImg ={element.writerImg}
              date= {element.date}
              writtenBy = {element.writtenBy}
            />
          ))}
        </div>
        <div className="w-full h-full flex justify-center items-center mt-10">
        <button
          className=" button-inner-shadow text-sm border-green-300 transition-all duration-500 ease-in-out bg-transparent hover:bg-green-400 rounded-md  border-2
            w-[100px] h-[40px]  text-white uppercase tracking-tight"
        >
          {" "}
          LOAD MORE 
        </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
