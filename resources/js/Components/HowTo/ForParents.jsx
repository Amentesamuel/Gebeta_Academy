import {
    femaleTutor,
    menTutor,
    parents,
    shapeOne,
    shapeTwo,
} from "../../../../public/img";
import React from "react";
import { BiBookOpen } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { LuContact, LuSearch } from "react-icons/lu";
import { FaHourglassStart } from "react-icons/fa";

const ForParents = () => {
    return (
        <div className="container mx-auto md:px-28 px-5 flex  items-center relative justify-between py-20">
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
                <div className="relative w-full flex  h-40">
                    <img
                        src={parents}
                        alt="banner"
                        className=" relative animate-slow-bounce bottom-20 rounded-3xl   h-72 object-cover"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <BiBookOpen className="text-2xl text-button" />
                    <h1 className="text-md font-medium font-poppins text-button">
                        For Parents
                    </h1>
                </div>
                <h1 className="text-3xl font-medium font-poppins text-black">
                    Steps To Find The Best Tutor For Your Child <br />
                </h1>

                <div className="flex items-start gap-4 pt-3">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-5">
                            <div className="rounded-full bg-background w-12 h-12 flex items-center justify-center shadow-md">
                                <FiUserPlus className="text-xl text-button" />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-lg text-button font-semibold font-poppins ">
                                    Create an Account
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        Create an account to get started
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                        <div className="rounded-full bg-background w-12 h-12 flex items-center justify-center shadow-md">
                                <LuSearch className="text-xl text-green-500" />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-lg text-button font-semibold font-poppins ">
                                    Search for tutors
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        Find tutors that fit your needs using our
                                        search feature
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                        <div className="rounded-full bg-background w-12 h-12 flex items-center justify-center shadow-md">
                                <LuContact className="text-xl text-orange-500" />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-lg text-button font-semibold font-poppins ">
                                    Contact Us
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        Book Your Tutor by contacting our support
                                        team
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                        <div className="rounded-full bg-background w-12 h-12 flex items-center justify-center shadow-md">
                                <FaHourglassStart className="text-xl text-green-500" />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <h1 className="text-lg text-button font-semibold font-poppins ">
                                    Start Your Lesson
                                </h1>
                                <div className="">
                                    <p className="text-sm text-gray-500 text-justify">
                                        Start your lesson with your tutor
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

export default ForParents;
