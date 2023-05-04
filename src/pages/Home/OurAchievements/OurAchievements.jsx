import React from "react";
import "./OurAchievements.css";
import { FaFire, FaHandshake, FaThLarge, FaTrophy } from "react-icons/fa";

const OurAchievements = () => {
    return (
        <div className="our-achievements mx-5">
            <div className="container max-w-[1920px] mx-auto">
                <section class="some-facts">
                    <div class="container mx-auto">
                        <div class="details flex flex-col items-center mx-auto">
                            <h2 class="details-title text-[35px] sm:text-[45px] text-center">
                                Our Achievements
                            </h2>
                            <p class="details-description">
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
                        <div class="sf-items-container">
                            <div class="item flex flex-col items-center ">
                                <FaTrophy className="text-[40px] text-default-color mb-2"></FaTrophy>
                                <h2 class="count">120</h2>
                                <h3 class="title">Awards Winnings</h3>
                            </div>
                            <div class="item flex flex-col items-center">
                                <FaThLarge className="text-[40px] text-default-color mb-2"></FaThLarge>
                                <h2 class="count">14058</h2>
                                <h3 class="title">Arrangement Made</h3>
                            </div>
                            <div class="item flex flex-col items-center">
                                <FaHandshake className="text-[40px] text-default-color mb-2"></FaHandshake>
                                <h2 class="count">4580</h2>
                                <h3 class="title">Clients Served</h3>
                            </div>
                            <div class="item flex flex-col items-center">
                                <FaFire className="text-[40px] text-default-color mb-2"></FaFire>
                                <h2 class="count">77528</h2>
                                <h3 class="title">Recipes Cooked</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurAchievements;
