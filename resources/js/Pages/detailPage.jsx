import FooterBanner from "@/Components/Landingpage/FooterBanner";
import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";
import { TutorBanner1 } from "../../../public/img";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const detailPage = ({ tutor }) => {
  
    return (
        <Mainlayout>
            <Banner>
                <h1 className="flex flex-col items-center text-5xl text-button font-sourGummy justify-center">
                    Tutor's Detail
                </h1>
            </Banner>
            <div className="w-full bg-background2">
                <div className="container mx-auto md:px-40 px-5 flex gap-5 items-center relative justify-between ">
                    <div className=" w-[24rem] py-5 mt-20 rounded-md h-fit bg-foreground shadow-md flex flex-col items-center justify-center">
                        <div className="flex rounded-full bg-background p-2  shadow-md">
                            <img
                                src={"http://localhost:8000/storage/"+tutor?.image}
                                alt=""
                                className="w-12 h-12 object-cover rounded-full"
                            />
                        </div>
                        {/* info */}
                        <h1 className="py-3">
                          {tutor?.name}
                        </h1>

                        <div className="flex items-center gap-10 px-2 justify-center w-full">
                          <div className="flex gap-1">
                            <h1 className="text-sm text-gray-500">Gender: </h1>
                            <h1 className="text-sm ">{tutor?.gender}</h1> 

                          </div>
                         
                          {/* rate */}
                          <div className="flex ">
                            <FaStar className="text-sm pt-1 text-yellow-500"/>
                            <h1 className="text-sm">4.5</h1>

                          </div>


                        </div>
                        <hr className="w-full border-b-1 border-gray-400 border-dashed mt-8" />


                        <div className="flex flex-col w-full pt-8">
                          <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                            <BiPhone className="text-sm text-button"/>
                            <h1 className="text-xs">{tutor?.phone}</h1>

                          </div>
                          <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                            <FiMail className="text-sm text-green-500"/>
                            <h1 className="text-xs">{tutor?.email}</h1>

                          </div>
                          <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                            <GoLocation className="text-sm text-orange-500"/>
                            <h1 className="text-xs">{tutor?.address}</h1>

                          </div>

                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start shadow-md px-10 py-5 mt-16  bg-foreground justify-start">
                          <h1 className="text-md  font-semibold">Tutition Info</h1>
                          <hr className="w-full border-b-1 border-gray-400 border-dashed mt-5" />
                          <div className="flex items-center justify-between w-full p-2 mt-5 bg-background rounded-md px-10">
                            <h1 className="text-sm">Experiance</h1>
                            <h1 className="text-sm">{tutor?.experience}</h1>

                          </div>
                          <div className="flex items-center justify-between w-full px-10 mt-2 ">
                          <h1 className="text-sm">Available Days</h1>
                          <h1 className="text-sm">{tutor?.available_days}</h1>
                          </div>
                          <div className="flex items-center justify-between w-full p-2 mt-2 bg-background rounded-md px-10">
                            <h1 className="text-sm">Subject</h1>
                            <h1 className="text-sm">{tutor?.subject}</h1>

                          </div>

                          <div className="flex items-center justify-between w-full px-10 mt-2 ">
                          <h1 className="text-sm">Description</h1>
                          <h1 className="text-sm">{tutor?.description}</h1>
                          </div>

                          <div className="flex items-center justify-between w-full p-2 mt-2 bg-background rounded-md px-10">
                            <h1 className="text-sm">Educational Level</h1>
                            <h1 className="text-sm">{tutor?.education}</h1>

                          </div>



                          

                        </div>
                </div>
            </div>

            <FooterBanner />
        </Mainlayout>
    );
};

export default detailPage;
