import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
    const { _id, picture, name, years_of_experience, recipes_count, likes } =
        chef;

    return (
        <div className="chef-card bg-green-50 p-5 rounded-xl">
            <div className="picture">
                <LazyLoad height={250}>
                    <img
                        src={picture}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                </LazyLoad>
            </div>
            <div className="content flex flex-col gap-y-2 mt-4">
                <h2 className="text-[26px] font-semibold">{name}</h2>
                <p className="font-medium">
                    {years_of_experience} years of experience
                </p>
                <p className="font-medium">{recipes_count} Recipes</p>
                <p className="flex items-center gap-x-2 font-medium">
                    <FaThumbsUp className="text-default-color"></FaThumbsUp>
                    <span className="relative top-[1px]">{likes}</span>
                </p>
                <Link to={`/chefs/${_id}`} className="max-w-[126px]">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4"
                    >
                        View Recipes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;
