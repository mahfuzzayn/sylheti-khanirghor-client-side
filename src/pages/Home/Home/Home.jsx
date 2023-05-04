import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Chefs from "../Chefs/Chefs";
import OurAchievements from "../OurAchievements/OurAchievements";

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Chefs></Chefs>
            <OurAchievements></OurAchievements>
        </div>
    );
};

export default Home;
