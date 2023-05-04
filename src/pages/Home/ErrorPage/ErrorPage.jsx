import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import PageFooter from "../../Shared/PageFooter/PageFooter";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="error">
                <div className="container max-w-[1920px] mx-auto">
                    <div className="flex flex-col justify-center items-center gap-y-10">
                        <div className="banner bg-green-50 h-[400px] w-full flex justify-center items-center px-5">
                            <img
                                src="https://i.ibb.co/hmdRSjz/404-banner.png"
                                className="w-full max-w-[400px]"
                            />
                        </div>
                        <div className="content flex flex-col items-center gap-y-4 px-5">
                            <h2 className="text-[50px] font-bold">Oops</h2>
                            <p className="font-medium text-center">
                                The page you were looking for is not available
                                on this site.
                            </p>
                            <Link to="/" className="w-[120px]">
                                <button
                                    type="submit"
                                    className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Go to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
};

export default ErrorPage;
