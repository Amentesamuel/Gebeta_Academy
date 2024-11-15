import { useForm } from "@inertiajs/react";
import { shapeFive, shapeThree } from "../../../../public/img";
import React from "react";
import { BiBook } from "react-icons/bi";

const GetIntouchForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg-foreground w-full">
            <div className="container mx-auto  md:px-28 px-5 flex flex-col lg:flex-row gap-16 items-center relative  justify-between py-20">
                <img
                    src={shapeThree}
                    alt="shape"
                    className="w-16 h-16 absolute bottom-5 left-10 animate-pulse  object-cover"
                />
                <img
                    src={shapeFive}
                    alt="shape"
                    className="w-8 h-8 absolute top-16 lg:right-40 right-10 animate-pulse  object-cover"
                />

                <div className="w-full order-1 lg:order-1 lg:w-1/2 flex items-start flex-col gap-5">
                    <div className="flex gap-2">
                        <BiBook className="text-2xl text-button" />
                        <h1 className="text-sm font-medium text-button">
                            Contact Us
                        </h1>
                    </div>
                    <h1 className="text-3xl font-medium text-black">
                        Have a question? We're here to help!Leave us a message
                        and we'll get back to you soon.
                    </h1>
                    <h1 className="text-sm font-medium text-gray-500">
                        we are passionate about providing transforming life
                        through education. Founded with a vision to empower
                        individuals and communities through quality education,
                        we are committed to excellence and innovation in
                        learning.
                    </h1>
                </div>

                <div className="w-full order-2 lg:order-2 lg:w-1/2">
                <form onSubmit={submit}>
                        <div className="py-10 px-5 lg:px-10  rounded-md shadow-2xl bg-background2">
                            <h1 className="text-2xl text-black ">
                                Get in touch
                            </h1>
                           

                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 text-sm  mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={data.name}
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 text-sm shadow-sm text-black bg-white rounded-lg "
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm  mb-1"
                                >
                                    Enter Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    placeholder="Enter Your Email..."
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 text-sm shadow-sm text-black bg-white rounded-lg "
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm mb-1"
                                >
                                    Enter phone number
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={data.phone}
                                    placeholder="Enter phone number"
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 shadow-sm text-sm  text-black bg-white rounded-lg "
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-gray-700 text-sm mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    type="textarea"
                                    id="message"
                                    rows={5}
                                    value={data.message}
                                    placeholder="Enter Your Message"
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full  border border-gray-200 shadow-sm text-sm  text-black bg-white rounded-lg "
                                />
                            </div>

                            

                            <div className="flex items-center justify-center gap-2 pt-5">
                                <button className="w-full bg-button text-white py-2 rounded-lg">
                                    Submit
                                </button>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetIntouchForm;
