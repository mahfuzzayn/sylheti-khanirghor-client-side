import React, { useEffect, useRef } from "react";
import BannerImage from "../../../assets/images/banner/banner-chefs.jpg";

const Banner = () => {
    let bannerRef = useRef();

    const handleCheckThemOut = () => {
        const bannerElement = bannerRef.current;
        if (bannerElement) {
            const chefScrollPoint = 152 + bannerElement.scrollHeight;
            window.scrollTo({
                top: chefScrollPoint,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="banner" ref={bannerRef}>
            <div className="container bg-green-50 max-w-[1920px] pt-[50px] md:pt-[100px] px-0 sm:px-5 pb-[100px] mx-auto">
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 p-4">
                    <div className="content text-center md:text-left">
                        <h2 className="text-[40px] lg:text-[60px] font-semibold">
                            Welcome
                        </h2>
                        <span className="text-[20px] lg:text-[30px]">to</span>
                        <h3 className="text-[30px] lg:text-[40px] font-bold">
                            Sylheti Khanirghor
                        </h3>
                        <p className="mt-2 font-medium">
                            The most precious chefs of Bangladesh
                        </p>
                        <button
                            onClick={handleCheckThemOut}
                            type="button"
                            className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4"
                        >
                            Check them out!
                        </button>
                    </div>
                    <div className="picture">
                        <img
                            src={BannerImage}
                            className="w-full max-w-[600px] rounded-[20px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
