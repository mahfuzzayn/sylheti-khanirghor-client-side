import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [chefData, setChefsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000${location.pathname}`)
            .then((res) => res.json())
            .then((data) => {
                setChefsData(data);
                /**********************************/
                // Lazy Load: Remove this later on
                /**********************************/
                setTimeout(() => {
                    setLoading(false);
                }, 100);
            })
            .catch(() => {
                navigate("/404", { replace: true });
            });
    }, []);

    const {
        picture,
        name,
        description,
        likes,
        recipes_count,
        years_of_experience,
        recipes,
    } = chefData;

    return (
        <div className="chef-info chef-recipes mx-5 sm:mx-10 mt-[50px] md:mt-[100px]">
            <div className="container max-w-[1920px] mx-auto">
                {!loading ? (
                    <div className="main-content">
                        <div className="banner flex justify-center">
                            <img
                                src={picture}
                                className="w-full h-[500px] max-w-[768px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="content max-w-[1280px] flex flex-col gap-y-4 mt-5 mx-auto">
                            <h2 className="text-[26px] font-semibold">
                                {name}
                            </h2>
                            <hr />
                            <p className="">{description}</p>
                            <p className="flex items-center gap-x-2 font-medium">
                                <FaThumbsUp className="text-default-color"></FaThumbsUp>
                                <span className="relative top-[1px]">
                                    {likes}
                                </span>
                            </p>
                            <p className="font-medium">
                                {recipes_count} Recipes
                            </p>
                            <p className="font-medium">
                                {years_of_experience} years of experience
                            </p>
                            <div className="recipes-container">
                                <h2 className="text-[26px] font-semibold mb-4">
                                    Recipes
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-3 bg-green-50 px-4 py-4 lg:pt-8 gap-x-8 rounded-lg">
                                    {recipes.map((recipe) => (
                                        <Recipe
                                            key={recipe.id}
                                            recipe={recipe}
                                        ></Recipe>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-default-color"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChefRecipes;
