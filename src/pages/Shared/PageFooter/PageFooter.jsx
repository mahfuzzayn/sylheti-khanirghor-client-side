import React from "react";
import SylhetiKhanirghorLogo from "../../../assets/sylheti-khanirghor-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./PageFooter.css";

const PageFooter = () => {
    return (
        <div className="page-footer mx-0 sm:mx-5 mt-[100px]">
            <footer className="bg-white rounded-lg dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <NavLink
                                    to="/"
                                    className="mr-4 hover:underline md:mr-6 "
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className="mr-4 hover:underline md:mr-6 "
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img
                                src={SylhetiKhanirghorLogo}
                                className="h-8 mr-3"
                                alt="Sylheti Khanighor Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Sylheti Khanirghor
                            </span>
                        </Link>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Sylheti Khanirghor™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default PageFooter;
