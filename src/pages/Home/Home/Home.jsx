import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Chefs from "../Chefs/Chefs";
import OurAchievements from "../OurAchievements/OurAchievements";
import OurSponsors from "../OurSponsors/OurSponsors";

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Chefs></Chefs>
            <OurAchievements></OurAchievements>
            <OurSponsors></OurSponsors>
        </div>
    );
};

export default Home;
