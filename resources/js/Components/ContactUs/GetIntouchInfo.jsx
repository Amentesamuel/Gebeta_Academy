import React from 'react'
import { BiBook, BiBookOpen, BiPhone } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa6'
import { IoLocation, IoMailOpenOutline } from 'react-icons/io5'
import { LuLocate } from 'react-icons/lu'

const GetIntouchInfo = () => {
  return (
    <div className="container mx-auto md:px-28 px-5 flex gap-20 items-center relative justify-between py-20">
            
            
            <div className="w-full flex items-center justify-center flex-col gap-3">
                <div className="flex items-center gap-2">
                    <BiBook className="text-2xl text-button" />
                    <h1 className="text-md font-medium font-poppins text-button">
                        Get In Touch
                    </h1>
                </div>
                <h1 className="text-3xl font-medium font-poppins text-black">
                   Let's Talk <br />
                </h1>
               

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 pt-3">
                    <div className='bg-gray-200 items-center h-40  shadow-xl justify-center rounded-lg p-10 flex gap-4'>
                        <div className='bg-button rounded-full p-2'>

                        <IoLocation className='text-2xl text-white ' style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-lg font-medium text-black'>Main Office</h1>
                            <p className='text-sm text-black'>
                                <span className='font-medium'>Address:</span> 123 Main Street, Anytown, USA
                            </p>

                        </div>

                    </div>
                    <div className='bg-button items-center h-40 justify-center shadow-xl  rounded-lg p-10 flex gap-4'>
                        <div className='bg-white rounded-full p-2'>

                        <IoMailOpenOutline className='text-2xl text-black ' style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-lg font-medium text-white'>Email Address</h1>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-white'>gebeta@gmail.com</p>

                            </div>



                        </div>

                    </div>
                    <div className='bg-gray-200 items-center h-40 justify-center  shadow-xl rounded-lg p-10 flex gap-4'>
                        <div className='bg-button rounded-full p-2'>

                        <BiPhone className='text-2xl text-white ' style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-lg font-medium text-black'>Phone Number</h1>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-black'>+251 945 678 901</p>
                                <p className='text-sm text-black'>+251 945 678 901</p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
  )
}

export default GetIntouchInfo
