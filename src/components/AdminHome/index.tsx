import { useState, useEffect } from "react";
import "./AdminHome.css";
import { Link } from "react-router-dom";

import testimonialsImage from "/rating-stars.png";
import servicesImage from "/customer-service.png";
import blogsImage from "/blog.png";
import projectsImage from "/project-management.png";


const links = [
    {
        description: "Testimonials",
        image: testimonialsImage,
        imageAlt: "feed",
        name: "Testimonials Admin",
        redirectLink: "/admin/testimonials",
    },
    {
        description: "Services",
        image: servicesImage,
        imageAlt: "feed",
        name: "Services Admin",
        redirectLink: "/admin/testimonials",
    },
    {
        description: "Blogs",
        image: blogsImage,
        imageAlt: "feed",
        name: "Blogs Admin",
        redirectLink: "/admin/testimonials",
    },
    {
        description: "Projects",
        image: projectsImage,
        imageAlt: "feed",
        name: "Projects Admin",
        redirectLink: "/admin/testimonials",
    },
];

function AdminHome() {
    //   let m = import.meta.env.VITE_CI ?? true;
    const [maintenance, setMaintenance] = useState(false);
    const [show, setShow] = useState(false);
    const options = {
        top: 0,
        left: 0,
        smooth: "smooth",
    };
    const onClickHandler = () => {
        window.scrollTo(options);
    };

    const ShowbuttonTop = () => {
        if (window.scrollY > 500) {
            setShow(true);
        } else setShow(false);
    };

    window.addEventListener("scroll", ShowbuttonTop);

    return (
        <div className="grid justify-center ">
            <div className="m-10 grid grid-cols-1 justify-items-center gap-2 lg:gap-16 sm:grid-cols-2">
                {links.map((link) => {
                    return (
                        <div className="m-3 max-w-[250px] rounded-lg border border-gray-200 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-[#1d1d1d]">
                            <div className="flex flex-col items-center">
                                <button className="p-2">
                                    <img
                                        className="rounded-t-lg h-full w-full"
                                        src={link.image}
                                        alt={link.imageAlt}
                                    />
                                </button>
                            </div>
                            <div className=" flex flex-wrap justify-center mb-5">
                                <button className="w-full mt-5">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                        {link.name}
                                    </h5>
                                </button>
                                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {link.description}
                                </p> */}
                                <Link
                                    to={link.redirectLink}
                                    className="inline-flex items-center rounded-lg bg-[#2196f3] py-2 px-3   text-center text-xs text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#2196f3] dark:hover:bg-[#009ffd]/[0.6] dark:focus:ring-yellow-800 sm:text-sm admin-links"
                                >
                                Redirect
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        </div>
            );
                })}
        </div>
        </div >
    );
}

export default AdminHome;
