import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";
import { TutorBanner1 } from "../../../../public/img";
import React from "react";
import { FiEdit, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Dashboard = ({user,student}) => {
  
    return (
        <Mainlayout user={user}>
            <Banner>
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="relative mb-8">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-xl"></div>
                    
                    <div className="absolute -bottom-16 left-8">
                        <div className="relative">
                            <img
                                src={TutorBanner1}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                            />
                            <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition">
                                <FiEdit size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                            {/* <p className="text-gray-600 mt-3">Mathematics Tutor</p> */}
                        </div>
                        {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                            Edit Profile
                        </button> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                            <FiMail className="text-blue-500" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-gray-700">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                            <FiPhone className="text-blue-500" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="text-gray-700">{student.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                            <FiMapPin className="text-blue-500" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="text-gray-700">{student.address}</p>
                            </div>
                        </div>
                    </div>

                  

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-blue-500">150+</p>
                            <p className="text-gray-600">Students</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-blue-500">4.9</p>
                            <p className="text-gray-600">Rating</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-blue-500">1.2k</p>
                            <p className="text-gray-600">Hours</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-blue-500">98%</p>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                    </div> */}
                </div>
            </div>
            </Banner>
        </Mainlayout>
    );
};

export default Dashboard;
