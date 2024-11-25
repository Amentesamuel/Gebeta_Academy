import {
    shapeFive,
    shapeOne,
    shapeThree,
    shapeTwo,
} from "../../../../public/img";
import React from "react";
import {
    BiBookOpen,
    BiHome,
    BiSearch,
    BiUser,
    BiVideo,
    BiWifi,
} from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuContact, LuSearch, LuUsers } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { Link } from "@inertiajs/react";

const HowToStudy = () => {
    return (
        <div className="w-full bg-background2 font-poppins">
            <div className="container mx-auto  md:px-20  xl:px-32 flex flex-col lg:flex-row gap-10 relative items-center justify-between py-20">
                <img
                    src={shapeTwo}
                    alt="shape"
                    className="w-16 h-16 absolute bottom-5 left-10 lg:left-28 animate-pulse  object-cover"
                />
                <img
                    src={shapeThree}
                    alt="shape"
                    className="w-16 h-16 absolute top-5 right-10 lg:right-40 animate-pulse  object-cover"
                />

                <div className="lg:w-1/2 w-full order-2 lg:order-1 grid container mx-auto grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="  bg-foreground rounded-lg shadow-md ">
                        <div className="flex flex-col items-start gap-2 w-full py-10 px-5 pl-10 ">
                            <div className="rounded-full bg-background w-10 h-10 flex items-center justify-center shadow-md">
                                <LuSearch className="text-xl text-button" />
                            </div>
                            <h1 className="text-md font-medium font-poppins text-button">
                                Search for tutors
                            </h1>
                            <p className="text-xs font-medium font-poppins text-gray-500">
                                Find tutors that fit your needs
                            </p>
                        </div>
                    </div>
                    <div className="  bg-cardOrange rounded-lg  shadow-md ">
                        <div className="flex flex-col items-start gap-2 w-full py-10 px-5 pl-10 ">
                            <div className="rounded-full bg-background w-10 h-10 flex items-center justify-center shadow-md">
                                <LuContact className="text-xl text-orange-500" />
                            </div>
                            <h1 className="text-md font-medium font-poppins text-button">
                                Get In Touch With Us
                            </h1>
                            <p className="text-xs font-medium font-poppins text-gray-500">
                                Contact us and Book Your Tutor
                            </p>
                        </div>
                    </div>

                    <div className="  bg-cardOrange rounded-lg shadow-md ">
                        <div className="flex flex-col items-start gap-2 w-full py-10 px-5 pl-10 ">
                            <div className="rounded-full bg-background w-10 h-10 flex items-center justify-center shadow-md">
                                <LuUsers className="text-xl text-orange-500" />
                            </div>
                            <h1 className="text-md font-medium font-poppins text-button">
                                Hire Your Tutor
                            </h1>
                            <p className="text-xs font-medium font-poppins text-gray-500">
                                After you have found the right tutor, you can
                                hire them
                            </p>
                        </div>
                    </div>
                    <div className="  bg-foreground rounded-lg shadow-md ">
                        <div className="flex flex-col items-start gap-2 w-full py-10 px-5 pl-10 ">
                            <div className="rounded-full bg-background w-10 h-10 flex items-center justify-center shadow-md">
                                <BsBook className="text-xl text-green-500" />
                            </div>
                            <h1 className="text-md font-medium font-poppins text-button">
                                See The Result
                            </h1>
                            <p className="text-xs font-medium font-poppins text-gray-500">
                                Get Knowledge and Improve Your Grades
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 px-12 md:px-0  order-1 lg:order-2 items-start justify-center flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <BiBookOpen className="text-2xl text-button" />
                        <h1 className="text-md font-medium font-poppins text-button">
                            For Students/Guardians
                        </h1>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium font-poppins text-black">
                        Here Is How It Works <br />
                    </h1>
                    <div className="text-sm font-medium font-poppins text-gray-500">
                        <p className="capitalize text-justify">
                            We tring to make the tutoring process
                            simple,effective and stress free for both students
                            and Parents. We have a wide range of tutors who are
                            <br /> ready to help you with your studies.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-5">
                        <Link href={'register'} className="bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-white items-center justify-center flex gap-2 text-sm px-5 py-2 rounded-2xl">
                            <FaArrowRightLong
                                className="text-sm"
                                style={{ transform: "rotate(325deg)" }}
                            />{" "}
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToStudy;
