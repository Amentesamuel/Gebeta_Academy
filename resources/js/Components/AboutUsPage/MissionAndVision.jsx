import React from "react";
import { BiBookOpen, BiUser, BiVideo } from "react-icons/bi";

import { GoGraph } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import {
    femaleTutor,
    menTutor,
    shapeOne,
    shapeTwo,
    Tutor,
} from "../../../../public/img";

const MissionAndVision = () => {
    return (
        <div className="container mx-auto md:px-28 px-5 flex gap-20 items-center relative justify-between py-20">
            <img
                src={shapeOne}
                alt="shape"
                className="w-8 h-8 absolute top-16 lg:right-40 right-10 animate-pulse  object-cover"
            />
            <img
                src={shapeTwo}
                alt="shape"
                className="w-16 h-16 absolute bottom-5 lg:left-40 left-10 animate-pulse  object-cover"
            />
            <div className="w-1/2 lg:block hidden">
                <div className="relative flex gap-10 h-40">
                    <img
                        src={menTutor}
                        alt="banner"
                        className="w-60 relative animate-slow-bounce bottom-20 rounded-tr-3xl rounded-bl-3xl  h-72 object-cover"
                    />

                    <img
                        src={femaleTutor}
                        alt="banner"
                        className="w-60 relative animate-slow-bounce  top-2 h-72 rounded-tl-3xl rounded-br-3xl object-cover"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <BiBookOpen className="text-2xl text-button" />
                    <h1 className="text-md font-medium font-poppins text-button">
                        About us
                    </h1>
                </div>
                <h1 className="text-3xl font-medium font-poppins text-black">
                    Place Where You Will Can Achieve Your Goals <br />
                </h1>
                <div className="text-sm font-medium font-poppins text-gray-500">
                    <p className="capitalize text-sm text-justify">
                        We are a platform that connects tutors and students and
                        also we offer you the best tutoring jobs in the country
                    </p>
                </div>

                <div className="flex items-start gap-4 pt-3">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-5">
                            <div className="rounded-full bg-foreground w-14 h-14 border border-gray-200 shadow-sm flex items-center justify-center">
                                <TbTargetArrow
                                    className="text-2xl text-button"
                                    style={{ fontSize: "24px" }}
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-xl text-gray-900 font-semibold font-poppins ">
                                    Our Mission
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        We are a platform that connects tutors
                                        with students and
                                        <br /> offers the best tutoring jobs in
                                        the country
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="rounded-full bg-foreground w-16 h-14 border border-gray-200 shadow-sm flex items-center justify-center">
                                <FaEye
                                    className="text-2xl text-button"
                                    style={{ fontSize: "24px" }}
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-xl font-semibold font-poppins ">
                                    Our Vision
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        A professional seeking to upskill, or a
                                        life long learner
                                        <br />
                                        exploring new horizons,We are here to
                                        help you achieve your goals
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2"></div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;
