import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
    const [chefsData, setChefsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setChefsData(data));
    }, []);

    return (
        <div className="chefs mx-5">
            <div className="container max-w-[1280px] mt-12 mx-auto">
                <h2 className="text-[30px] md:text-[50px] text-center font-semibold mb-8">
                    Sylheti Khanighor Chefs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chefsData.map((chef) => (
                        <ChefCard key={chef._id} chef={chef}></ChefCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chefs;
