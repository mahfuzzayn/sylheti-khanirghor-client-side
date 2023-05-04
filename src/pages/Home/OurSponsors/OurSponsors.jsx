import React from "react";
import "./OurSponsors.css";

const OurSponsors = () => {
    return (
        <div>
            <section class="our-sponsors">
                <div class="container">
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png" className="w-[152px]" alt="" />
                        </div>
                        <div class="item">
                            <img src="images/sponsors/amazon.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="images/sponsors/google.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="images/sponsors/telerama.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="images/sponsors/figma.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurSponsors;
