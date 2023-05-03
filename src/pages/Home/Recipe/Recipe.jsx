import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
    const { name, ingredients, cooking_method, rating } = recipe;
    const [isDropDownVisible, setIsDropdownVisible] = useState(true);
    const [isFavDisabled, setIsFavDisabled] = useState(false);

    const handleFavorites = () => {
        setIsFavDisabled(true);
        toast.success(`${name} recipe added to your favorites`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="recipe mb-5 border-default-color border-b-2 p-4">
            <h2 className="text-[22px] font-semibold">{name}</h2>
            <button
                onClick={() => setIsDropdownVisible(!isDropDownVisible)}
                className="flex items-center cursor-pointer select-none my-4"
            >
                <MdArrowDropDown
                    className={`text-[20px] ${
                        isDropDownVisible ? "" : "rotate-[-90deg]"
                    }`}
                ></MdArrowDropDown>
                <span className="font-medium pr-2">
                    {isDropDownVisible ? "Hide" : "See"} Ingredients
                </span>
            </button>
            <div
                className={`ingredients ${
                    isDropDownVisible ? "static" : "hidden"
                } flex flex-col gap-y-2 mb-4`}
            >
                {ingredients.map((ingredient, idx) => (
                    <li key={idx} className="font-medium text-default-color">
                        <span className="text-black">{ingredient}</span>
                    </li>
                ))}
            </div>
            <p className="font-medium">Cooking method: {cooking_method}</p>
            <div className="rating-container flex gap-x-2 mt-2">
                <p className="font-medium">Rating: </p>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    itemStyles={{
                        itemShapes: Star,
                        activeFillColor: "#22C55E",
                        inactiveFillColor: "#BBF7D0",
                    }}
                    readOnly
                />
            </div>
            <button
                onClick={handleFavorites}
                type="button"
                className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4 disabled:bg-green-800"
                disabled={isFavDisabled}
            >
                Favorites
            </button>
        </div>
    );
};

export default Recipe;
