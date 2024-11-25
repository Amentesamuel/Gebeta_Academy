import { TutorBanner1 } from "../../../../public/img";
import React from "react";
import { BiBookOpen } from "react-icons/bi";
import { FaStar, FaStarOfLife } from "react-icons/fa6";

const Testimony = () => {
    return (
        <div className="w-full bg-background2 font-poppins">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col gap-4 items-center py-10 justify-center">
                    <div className="flex items-center justify-center gap-4">
                        <BiBookOpen className="text-xl text-button" />
                        <h1 className="text-sm font-medium font-poppins text-button">
                            What Our Students Say
                        </h1>
                    </div>
                    <h1 className="text-2xl font-medium text-center capitalize">
                        Here are few Testimonials <br />
                        From Our Students
                    </h1>
                </div>

                <div className="container mx-auto md:px-28 px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
                    <div className="flex flex-col items-center justify-center gap-3 shadow-md p-5 rounded-md bg-background">
                        <div className="flex rounded-full bg-foreground p-2  shadow-md">
                            <img src={TutorBanner1} alt="" className="w-12 h-12 object-cover" />
                        </div>
                        <div >
                            <ul className="flex gap-1">
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-sm  text-gray-700">
                            I have been using this platform for a while now and it has been a great experience. The tutors are very knowledgeable and the platform is very easy to use. I would recommend this to anyone looking for a tutor.
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 shadow-md p-5 rounded-md bg-background">
                        <div className="flex rounded-full bg-foreground p-2  shadow-md">
                            <img src={TutorBanner1} alt="" className="w-12 h-12 object-cover" />
                        </div>
                        <div >
                            <ul className="flex gap-1">
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-sm  text-gray-700">
                            I have been using this platform for a while now and it has been a great experience. The tutors are very knowledgeable and the platform is very easy to use. I would recommend this to anyone looking for a tutor.
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 shadow-md p-5 rounded-md bg-background">
                        <div className="flex rounded-full bg-foreground p-2  shadow-md">
                            <img src={TutorBanner1} alt="" className="w-12 h-12 object-cover" />
                        </div>
                        <div >
                            <ul className="flex gap-1">
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-sm font-medium text-gray-500">
                                    <FaStar className="text-yellow-500" />
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-sm  text-gray-700">
                            I have been using this platform for a while now and it has been a great experience. The tutors are very knowledgeable and the platform is very easy to use. I would recommend this to anyone looking for a tutor.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimony;
