import React from "react";
import { BiBookOpen, BiSearch, BiStar } from "react-icons/bi";
import { Tutor } from "../../../../public/img";
import { LuGraduationCap } from "react-icons/lu";
import { FaArrowRightLong, FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const FeaturedTutor = ({tutors}) => {

    return (
        <div className="w-full   pb-16 bg-background2">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 items-center py-16 justify-center">
                    <div className="flex items-center justify-center gap-4">
                        <BiBookOpen className="text-xl text-button" />
                        <h1 className="text-sm font-medium font-poppins text-button">
                            Our Popular Tutors
                        </h1>
                    </div>
                    <h1 className="text-2xl font-medium text-center capitalize">
                        Here are few of the verified <br />
                        Teachers
                    </h1>
                </div>

                <div className="grid grid-cols-1 w-full px-10 md:px-0 md:w-auto md:grid-cols-3 gap-5">
                    {tutors.data.map((tutor, i) => (
                        <Link href={`/tutor/${tutor.id}`} >
                            <div
                            key={i}
                            className=" gap-3 flex pb-5 flex-col   items-start justify-start bg-background rounded-xl shadow-md"
                        >
                            <img
                                src={
                                    "http://localhost:8000/storage/" +
                                    tutor.image
                                }
                                alt="tutor"
                                className="rounded-xl p-1 mt-0 object-cover w-full h-48"
                            />
                            <h1 className="text-lg font-poppins  px-5 ">
                                {tutor.name}
                            </h1>
                            <div className="flex   items-center w-full justify-between px-4 md:gap-16">
                                <div className="flex items-center justify-center gap-2">
                                    <LuGraduationCap className="text-button" />
                                    <p className="text-xs">{tutor.education}</p>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    {/* <FaStar className="text-yellow-500" /> */}
                                    <p className="text-xs  text-button">
                                        {tutor.experience} experience
                                    </p>
                                </div>
                            </div>
                            <div className="flex ml-5 items-center justify-center gap-1">
                                {/* <FaStar className="text-yellow-500" /> */}
                                <p className="text-xs  text-button">
                                    {tutor.subject}
                                </p>
                            </div>

                            <div className="flex items-center justify-end w-full gap-2 px-4">
                                <div className="border px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                                    <FaLocationDot
                                        className="text-button"
                                        style={{ fontSize: "12px" }}
                                    />
                                    <p className="text-xs text-gray-500">
                                        {tutor.address}
                                    </p>
                                </div>
                            </div>

                            <hr className="w-full border-b-1 border-button border-dashed" />

                            <div className="flex items-center justify-between w-full px-4 py-2">
                                <button className="text-xs text-button flex items-center justify-center gap-2">
                                    View Profile
                                    <FaArrowRightLong className="text-button" />
                                </button>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4 pt-5">
                    <Link href={'tutor'} className="bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-white items-center justify-center flex gap-2 text-sm px-5 py-2 rounded-2xl">
                        <FaArrowRightLong className="text-sm" /> View All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTutor;
