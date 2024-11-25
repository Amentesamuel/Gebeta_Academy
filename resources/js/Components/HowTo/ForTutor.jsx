import { shapeFive, shapeThree, whyUs } from '../../../../public/img'
import React from 'react'
import { BiBookOpen, BiUser, BiVideo } from 'react-icons/bi'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { PiSuitcaseSimpleLight } from 'react-icons/pi'

const ForTutor = () => {
  return (
    <div className="w-full bg-foreground font-poppins">
            <div className="container mx-auto md:px-28 px-5 flex gap-5 items-center relative  justify-between py-20">
                
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
             

                

                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <BiBookOpen className="text-2xl text-button" />
                        <h1 className="text-md font-medium font-poppins text-button">
                            For Tutors
                        </h1>
                    </div>
                    <h1 className="text-3xl font-medium font-poppins text-black">
                        How to start your journey as a tutor <br />
                    </h1>
                    <div className="text-sm font-medium font-poppins text-gray-500">
                        <p className="capitalize text-justify">
                           Here are the steps to start your journey as a tutor
                        </p>
                    </div>

                    <div className="flex items-start gap-4 pt-5">
                        <div className="flex flex-col items-start gap-5">
                            <div className='flex items-center gap-2'>
                            <div className="flex rounded-full bg-background p-3 shadow-md">
                                    <BiUser
                                        className="text-xl text-button"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <h1 className='text-md font-semibold font-poppins text-gray-700'>
                                Create Your Profile
                                </h1>
                            </div>

                            <div className='flex items-center gap-2'>
                            <div className="flex rounded-full bg-background p-3 shadow-md">
                                    <PiSuitcaseSimpleLight
                                        className="text-xl text-green-500"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <h1 className='text-md font-semibold font-poppins text-gray-700'>
                                Set Your Availability
                                </h1>
                            </div>

                            <div className='flex items-center gap-2'>
                            <div className="flex rounded-full bg-background p-3 shadow-md">
                            <LuUsers
                                        className="text-xl text-orange-500"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <h1 className='text-md font-semibold font-poppins text-gray-700'>
                                Connect With Students
                                </h1>
                            </div>

                            <div className='flex items-center gap-2'>
                            <div className="flex rounded-full bg-background p-3 shadow-md">
                                    <BiVideo
                                        className="text-xl text-button"
                                        style={{ fontSize: "20px" }}
                                    />
                                </div>
                                <h1 className='text-md font-semibold font-poppins text-gray-700'>
                                Start Your Tutoring Journey
                                </h1>
                            </div>

                            
                        </div>

                        

                        
                    </div>

                </div>

                <div className="w-1/2 lg:block hidden">
                    <div className="relative flex gap-10 px-20 h-40">
                        <img
                            src={whyUs}
                            alt="banner"
                            className="w-72  relative  bottom-10 rounded-tr-3xl rounded-bl-3xl  h-96 object-cover"
                        />
                       
                    </div>
                </div>
            </div>
        </div> 
  )
}

export default ForTutor
