import React from "react";
import "./OurSponsors.css";

const OurSponsors = () => {
    return (
        <div className="our-sponsors">
            <section className="mb-[130px] mx-5">
                <div className="container max-w-[1920px] mx-auto">
                    <div className="details">
                        <h2 className="details-title">Our Sponsors</h2>
                        <p className="details-description">
                            We are incredibly grateful to have the support of
                            these amazing sponsors who have helped us achieve
                            our goals and make a positive impact in our
                            community.
                        </p>
                    </div>
                    <div className="os-items-container">
                        <div className="item">
                            <img
                                src="https://i.ibb.co/NVs4mH8/pran-logo-416-D020-A91-seeklogo-com-removebg-preview.png"
                                className="relative top-[5px] w-[100px]"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <img
                                src="https://i.ibb.co/d0SWyfc/logo-removebg-preview.png"
                                className="max-w-[120px]"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <img
                                src="https://i.ibb.co/fn8WZRx/KFK-logo-ai.png"
                                className="relative top-[-15px] w-[200px]"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <img
                                src="https://i.ibb.co/tKQKV3v/v-T8-Lg-YY2no17-Fz-Sjl-AQ9-RP8zl-D6h-KQ3-QKBc-YEFin-removebg-preview.png"
                                className="relative top-[-35px] w-[140px]"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <img
                                src="https://i.ibb.co/dcZ9wJs/1200px-Ajinomoto-logo-svg.png"
                                className="relative top-[25px] w-[140px]"
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
