import React, { useContext, useState } from "react";
import SylhetiKhanirghorLogo from "../../../assets/sylheti-khanirghor-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import { useValidateImageURL } from "use-validate-image-url";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
    const { user } = useContext(AuthContext);
    const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(false);
    const userPhotoUrlStatus = useValidateImageURL(user?.photoURL);

    return (
        <div className="nav-bar mt-10 mx-0 sm:mx-5 mb-10">
            <div className="container max-w-[1920px] mx-auto">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src={SylhetiKhanirghorLogo}
                                className="h-10 mr-3"
                                alt="Sylheti Khanirghor Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Sylheti Khanirghor
                            </span>
                        </Link>
                        <button
                            onClick={() =>
                                setIsNavBarCollapsed(!isNavBarCollapsed)
                            }
                            type="button"
                            className="inline-flex items-center p-2 ml-0 mt-1 sm:ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className={`${
                                !isNavBarCollapsed && "hidden"
                            } w-full md:flex items-center gap-x-10 md:w-auto`}
                            id="navbar-default"
                        >
                            <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                            <div
                                className={`user-information-container mt-4 md:mt-0 ${
                                    user && "w-[35px]"
                                }`}
                            >
                                {user ? (
                                    userPhotoUrlStatus === "valid" ? (
                                        <>
                                            <span
                                                className="user-name-tooltip"
                                                data-tooltip-content={
                                                    user?.displayName
                                                }
                                            >
                                                <img
                                                    src={user.photoURL}
                                                    className="h-[35px] w-[35px] rounded-full cursor-pointer"
                                                />
                                            </span>
                                            <Tooltip anchorSelect=".user-name-tooltip" />
                                        </>
                                    ) : (
                                        <>
                                            <span
                                                className="user-name-tooltip"
                                                data-tooltip-content={
                                                    user?.displayName
                                                }
                                            >
                                                <FaUserCircle className="text-[35px] cursor-pointer"></FaUserCircle>
                                            </span>
                                            <Tooltip anchorSelect=".user-name-tooltip" />
                                        </>
                                    )
                                ) : (
                                    <Link to="/login" className="py-2.5 ">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
