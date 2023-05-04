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
                            <img
                                src="https://o.remove.bg/downloads/b0ede49d-5d77-4b33-89f0-ada778810bf2/pran-logo-416D020A91-seeklogo.com-removebg-preview.png"
                                className="w-[100px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://o.remove.bg/downloads/aa17ac00-d607-494d-acdb-6fc6a06d01c1/pizza-hut-make-it-great-png-logo-10-removebg-preview.png"
                                className="max-w-[230px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://o.remove.bg/downloads/9616adf0-633c-4ddd-92b7-5dd473b24cfc/445-4456880_dominos-pizza-logo-png-transparent-png-removebg-preview.png"
                                className="w-[200px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://o.remove.bg/downloads/9512f1b5-51ce-4717-b102-1b528c2aa1e6/png-clipart-mcdonald-s-logo-mcdonalds-miscellaneous-angle-thumbnail-removebg-preview.png"
                                className="w-[100px]"
                                alt=""
                            />
                        </div>
                        <div class="item">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png"
                                className="w-[152px]"
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
