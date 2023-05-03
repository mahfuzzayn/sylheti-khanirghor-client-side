import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import Loader from "../../../components/Loader/Loader";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [chefData, setChefsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://sylheti-khanirghor-server-side-devmahfuzzayn.vercel.app${location.pathname}`)
            .then((res) => res.json())
            .then((data) => {
                setChefsData(data);
                setLoading(false);
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
                            <LazyLoad height={500}>
                                <img
                                    src={picture}
                                    className="w-full h-[500px] max-w-[768px] object-cover rounded-xl"
                                />
                            </LazyLoad>
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
                    <Loader></Loader>
                )}
            </div>
        </div>
    );
};

export default ChefRecipes;
