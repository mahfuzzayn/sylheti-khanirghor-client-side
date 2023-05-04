import React from "react";
import "./OurSponsors.css";

const OurSponsors = () => {
    return (
        <div className="our-sponsors">
            <section class="mx-5">
                <div class="container max-w-[1920px] mx-auto">
                    <div class="details">
                        <h2 class="details-title">Our Sponsors</h2>
                        <p class="details-description">
                            We are incredibly grateful to have the support of
                            these amazing sponsors who have helped us achieve
                            our goals and make a positive impact in our
                            community.
                        </p>
                    </div>
                    <div class="os-items-container">
                        <div class="item">
                            <img
                                src="https://i.ibb.co/NVs4mH8/pran-logo-416-D020-A91-seeklogo-com-removebg-preview.png"
                                className="w-[100px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://i.ibb.co/C8s92Wk/pizza-hut-make-it-great-png-logo-10-removebg-preview.png"
                                className="relative top-[10px] max-w-[230px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://i.ibb.co/yVdStSd/445-4456880-dominos-pizza-logo-png-transparent-png-removebg-preview.png"
                                className="w-[200px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://i.ibb.co/tKQKV3v/v-T8-Lg-YY2no17-Fz-Sjl-AQ9-RP8zl-D6h-KQ3-QKBc-YEFin-removebg-preview.png"
                                className="relative top-[-35px] w-[140px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://i.ibb.co/vjpnC0H/2560px-KFC-Logo-svg.png"
                                className="relative top-[13px] w-[140px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurSponsors;
