import React from "react";
import "./OurAchievements.css";
import { FaFire, FaHandshake, FaThLarge, FaTrophy } from "react-icons/fa";

const OurAchievements = () => {
    return (
        <div className="our-achievements mx-5">
            <div className="container max-w-[1920px] mx-auto">
                <section className="some-facts">
                    <div className="container mx-auto">
                        <div className="details flex flex-col items-center mx-auto">
                            <h2 className="details-title text-[35px] sm:text-[45px] text-center">
                                Our Achievements
                            </h2>
                            <p className="details-description">
                                We proudly showcase our noteworthy
                                accomplishments and milestones that we have
                                achieved over the years. Our team has worked
                                tirelessly to achieve these successes, whether
                                it be receiving awards for our chefs or recipes,
                                completing challenging projects within tight
                                deadlines, or achieving impressive growth
                                metrics. We are excited to share these
                                achievements with you and hope that they
                                demonstrate our commitment to excellence and
                                dedication to providing exceptional results for
                                our clients.
                            </p>
                        </div>
                        <div className="sf-items-container">
                            <div className="item flex flex-col items-center ">
                                <FaTrophy
                                    className={`text-[40px] text-default-color mb-2`}
                                ></FaTrophy>

                                <h2 className="count">120</h2>
                                <h3 className="title">Awards Winnings</h3>
                            </div>
                            <div className="item flex flex-col items-center">
                                <FaThLarge className="text-[40px] text-default-color mb-2"></FaThLarge>
                                <h2 className="count">14058</h2>
                                <h3 className="title">Arrangement Made</h3>
                            </div>
                            <div className="item flex flex-col items-center">
                                <FaHandshake className="text-[40px] text-default-color mb-2"></FaHandshake>
                                <h2 className="count">4580</h2>
                                <h3 className="title">Clients Served</h3>
                            </div>
                            <div className="item flex flex-col items-center">
                                <FaFire className="text-[40px] text-default-color mb-2"></FaFire>
                                <h2 className="count">77528</h2>
                                <h3 className="title">Recipes Cooked</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurAchievements;
