import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = () => {
    const chefData = useLoaderData();

    const {
        picture,
        name,
        description,
        likes,
        recipes_count,
        years_of_experience,
        recipes,
    } = chefData;

    // console.log(chefData);

    return (
        <div className="chef-info chef-recipes mx-5">
            <div className="container max-w-[1920px] mx-auto">
                <div className="">
                    <div className="banner flex justify-center">
                        <img src={picture} className="rounded-xl" />
                    </div>
                    <div className="content flex flex-col gap-y-4 mt-4">
                        <h2 className="text-[26px] font-semibold">{name}</h2>
                        <hr />
                        <p className="">{description}</p>
                        <p className="flex items-center gap-x-2 font-medium">
                            <FaThumbsUp className="text-default-color"></FaThumbsUp>
                            <span className="relative top-[1px]">{likes}</span>
                        </p>
                        <p className="font-medium">{recipes_count} Recipes</p>
                        <p className="font-medium">
                            {years_of_experience} years of experience
                        </p>
                        <div className="recipes-container">
                            <h2 className="text-[24px] font-semibold mb-4">
                                Recipes
                            </h2>
                            <div className="bg-green-50 px-4 py-8 rounded-lg">
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
            </div>
        </div>
    );
};

export default ChefRecipes;
