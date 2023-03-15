import React from 'react'
interface IBlogCard{
    imgSource : string ; 
    title : string ; 
    content : string ; 
    writerImg : string; 
    date: string; 
    writtenBy : string ; 

}
const BlogCard = ({
    imgSource ="https://picsum.photos/200/300", title ="just a title ", content="No content"
    , writtenBy ="Chinmoy Talukdar",
    date  = "14 Aug 2022",
    writerImg ="https://google.com"
    
}:IBlogCard) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "../../assets/background.jpg')"}} title="Woman holding a mug">
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-gray-600 flex items-center">
          
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{
          writtenBy}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  </div>)
}

export default BlogCard