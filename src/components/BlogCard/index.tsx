import React from "react";
interface IBlogCard {
  imgSource: string;
  title: string;
  content: string;
  writerImg: string;
  date: string;
  writtenBy: string;
}
const BlogCard = ({
  imgSource = "https://picsum.photos/200/300",
  title = "just a title ",
  content = "No content",
  writtenBy = "LuitoMania ",
  date = "16 Mar 2023",
  writerImg = "https://google.com",
}: IBlogCard) => {
  return (
    <div className=" min-w-[230px] max-w-[315px]">
      <div className="overflow-hidden relative">
        <img
          src="background.jpg"
          className="h-48 w-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110   flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-contain"
          title="Woman holding a mug"
        />
        <button
          className=" button-inner-shadow text-sm border-green-300 transition-all duration-500 ease-in-out bg-transparent hover:bg-green-400 rounded-md  border-2
          absolute top-2 right-2 w-[100px] h-[40px]  text-white uppercase tracking-tight"
        >
          {" "}
          read more
        </button>
      </div>

      <div className="bg-[#202020] h-[200px]
  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-white  flex items-center"></p>
          <div className="font-roboto text-white font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-500 text-base truncate overflow-hidden">
            {content}
          </p>
        </div>

        <div className="flex items-center">
          {/* <img
            className="w-10 h-10 rounded-full mr-4"
            src="chinmoy.jpg"
            alt="Chinmoy Talukdar Image"
          /> */}
          <div className="text-sm">
            <p className="text-white leading-none">{writtenBy}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
