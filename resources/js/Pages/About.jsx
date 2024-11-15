import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";

import React from "react";

import MissionAndVision from "@/Components/AboutUsPage/MissionAndVision";
import WhyUs from "@/Components/AboutUsPage/WhyUs";
import FooterBanner from "@/Components/Landingpage/FooterBanner";

const About = () => {
    return (
        <Mainlayout>
            <Banner>
                <div className="flex flex-col items-center text-5xl text-button font-sourGummy justify-center">
                    About Us
                </div>
            </Banner>
            <MissionAndVision/>
            <WhyUs/>
            <FooterBanner/>
        </Mainlayout>
    );
};

export default About;
