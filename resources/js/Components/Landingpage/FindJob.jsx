import {
    shapeFive,
    shapeOne,
    shapeThree,
    shapeTwo,
} from "../../../../public/img";
import React from "react";
import { BiBookOpen, BiLogIn, BiSearch, BiUser, BiVideo } from "react-icons/bi";
import Tutor from "../../../../public/img/joinus.jpg";
import { LuUsers } from "react-icons/lu";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { Link } from "@inertiajs/react";

const FindJob = () => {
    return (
        <div className="w-full bg-foreground font-poppins">
            <div className="container mx-auto px-10 md:px-20 lg:px-28 flex  gap-5 items-center relative  justify-between py-20">
                <img
                    src={shapeOne}
                    alt="shape"
                    className="w-8 h-8 absolute top-16 right-10 lg:right-40 animate-pulse  object-cover"
                />
                <img
                    src={shapeTwo}
                    alt="shape"
                    className="w-16 h-16 absolute bottom-5 left-10 lg:left-40 animate-pulse  object-cover"
                />
              
                

                <div className="w-1/2 lg:block hidden">
                    <div className="relative flex gap-10 px-20 h-40">
                        <img
                            src={Tutor}
                            alt="banner"
                            className="w-72  relative  bottom-10 rounded-tr-3xl rounded-bl-3xl  h-80 object-cover"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <BiBookOpen className="text-2xl text-button" />
                        <h1 className="text-md font-medium font-poppins text-button">
                            Find the best Tutoring Jobs
                        </h1>
                    </div>
                    <h1 className="md:text-4xl text-2xl font-medium font-poppins text-black">
                        Find Tutoring Jobs <br />
                    </h1>
                    <div className="text-sm font-medium font-poppins text-gray-500">
                        <p className="capitalize text-justify">
                            If teaching jobs interset you, then you are in the
                            right place.we offer you the best teaching jobs in
                            the country.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-4 pt-5">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex rounded-full bg-background p-2">
                                    <BiUser
                                        className="text-xl text-button"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h1 className="text-sm  capitalize">
                                        Create Your Profile
                                    </h1>
                                    <p className="text-xs font-medium text-gray-500 capitalize">
                                        Sign up to create your profile
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex rounded-full bg-background p-2">
                                    <LuUsers
                                        className="text-xl text-orange-500"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h1 className="text-sm  capitalize">
                                        Connect Students
                                    </h1>
                                    <p className="text-xs font-medium text-gray-500 capitalize">
                                        Be matched with students
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-start gap-4">
                                <div className="flex rounded-full bg-background p-2">
                                    <PiSuitcaseSimpleLight
                                        className="text-xl text-green-500"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h1 className="text-sm  capitalize">
                                        Set Your Schedule
                                    </h1>
                                    <p className="text-xs font-medium text-gray-500 capitalize">
                                        Choose your preferred schedule
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex rounded-full bg-background p-2">
                                    <BiVideo
                                        className="text-xl text-button"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h1 className="text-sm  capitalize">
                                        Start Tutoring
                                    </h1>
                                    <p className="text-xs font-medium text-gray-500 capitalize">
                                        Begin your teaching journey
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2"></div>
                    </div>

                    <div className="flex items-center gap-4 pt-5">
                        <Link href={'/Tutordashboard/apply'} className="bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-white items-center justify-center flex gap-2 text-sm px-5 py-2 rounded-2xl">
                            <BiSearch className="text-sm" /> Find Jobs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJob;
