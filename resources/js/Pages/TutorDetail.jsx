import FooterBanner from "@/Components/Landingpage/FooterBanner";
import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";
import { TutorBanner1 } from "../../../public/img";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineStart } from "react-icons/md";
import { useForm } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";


const TutorDetail = ({ tutor, user,rate }) => {
    const [openModal, setOpenModal] = useState(false);
    const [hover, setHover] = useState(0);
    const { data, setData, post, processing } = useForm({
        rate: 0,
        comment: '',
       
    });
   
    const OpenModal = () => {
        setOpenModal(!openModal);
    };
    const submitRate = (e,tutorId) => {
      console.log('hi')
        e.preventDefault();
        
        post(route("rate", { id: tutorId }), {
            preserveScroll: true,
            onSuccess: () => {
                setOpenModal(false);
                // Reset form
                setData({
                    rate: 0,
                    comment: '',
                    
                });
                toast.success('Rating submitted successfully!', {
                  position: 'top-right',
              });
            },
        });
    };
    const submit = (e, tutorId) => {
        e.preventDefault();

        post(route("reserve", { id: tutorId }), {
          onSuccess: () => {
            toast.success('Tutor booked successfully!', {
                position: 'top-right',
            });
        },
        });
    };

    return (
        <Mainlayout user={user}>
          <Toaster/>
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
                                src={
                                    "http://localhost:8000/storage/" +
                                    tutor?.image
                                }
                                alt=""
                                className="w-12 h-12 object-cover rounded-full"
                            />
                        </div>
                        {/* info */}
                        <h1 className="py-3">{user?.name}</h1>

                        <div className="flex items-center gap-10 px-2 justify-center w-full">
                            <div className="flex gap-1">
                                <h1 className="text-sm text-gray-500">
                                    Gender:{" "}
                                </h1>
                                <h1 className="text-sm ">{tutor?.gender}</h1>
                            </div>

                            {/* rate */}
                            <div className="flex ">
                                <FaStar className="text-sm pt-1 text-yellow-500" />
                                <h1 className="text-sm">{rate}</h1>
                            </div>
                        </div>
                        <hr className="w-full border-b-1 border-gray-400 border-dashed mt-8" />

                        <div className="flex flex-col w-full pt-8">
                            <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                                <BiPhone className="text-sm text-button" />
                                <h1 className="text-xs">{tutor?.phone}</h1>
                            </div>
                            <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                                <FiMail className="text-sm text-green-500" />
                                <h1 className="text-xs">{user?.email}</h1>
                            </div>
                            <div className="flex items-start gap-2 justify-start px-5 w-full mt-2">
                                <GoLocation className="text-sm text-orange-500" />
                                <h1 className="text-xs">{tutor?.address}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start shadow-md px-10 py-5 mt-16  bg-foreground justify-start">
                        <h1 className="text-md  font-semibold">
                            Tutition Info
                        </h1>
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

                        <div className="pt-10">
                            <div className="flex gap-3 items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    onClick={(e) => submit(e, tutor.id)}
                                    className="bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-white items-center justify-center flex gap-2 text-sm px-5 py-2 rounded-xl"
                                >
                                    <MdOutlineStart className="text-sm" />{" "}
                                    {processing ? "Submitting..." : "Reserve"}
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    onClick={OpenModal}
                                    className=" hover:bg-button hover:text-white  hover:scale-105 transition-all duration-300 ease-in-out  text-button border border-gray-500 items-center justify-center flex gap-2 text-sm px-10 py-2 rounded-xl"
                                >
                                    Rate
                                </button>
                            </div>

                            {openModal && (
                                <div className="w-full h-full pt-72 md:pt-0 overflow-y-auto flex transtion-opacity duration-300 items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-[100]">
                                    <div className="bg-white rounded-xl shadow-md p-10 md:w-[500px] relative">
                                        <button
                                            onClick={() => setOpenModal(false)}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                        >
                                            ×
                                        </button>

                                        <form onSubmit={(e) => submitRate(e,tutor.id)} >
                                        <div className="flex flex-col items-center gap-6">
                                            <h2 className="text-2xl text-button font-sourGummy">
                                                Rate The Tutor
                                            </h2>

                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, index) => {
                                                    const ratingValue = index + 1;
                                                    return (
                                                        <FaStar
                                                            key={index}
                                                            className={`cursor-pointer text-2xl transition-colors duration-200 ${
                                                                ratingValue <= (hover || data.rate)
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-300"
                                                            }`}
                                                            onClick={() => setData('rate', ratingValue)}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(data.rate)}
                                                        />
                                                    );
                                                })}
                                            </div>

                                            <textarea
                                                value={data.comment}
                                                onChange={(e) => setData('comment', e.target.value)}
                                                placeholder="Share your experience with this tutor..."
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-button focus:border-transparent resize-none h-32"
                                            />

                                            <button
                                                className="w-full bg-button text-white py-3 rounded-lg hover:bg-button/80 transition-all duration-300 flex items-center justify-center gap-2"
                                               
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? "Submitting..."
                                                    : "Submit Review"}
                                            </button>
                                        </div>
                                        </form>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <FooterBanner />
        </Mainlayout>
    );
};

export default TutorDetail;
