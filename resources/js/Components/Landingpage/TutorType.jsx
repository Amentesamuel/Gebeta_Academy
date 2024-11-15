import React from 'react'
import { BiBookOpen, BiHome, BiWifi } from 'react-icons/bi'
import { LuUsers } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";

const TutorType = () => {
  return (
    <div className='w-full pb-16 bg-background2'>
        <div className='flex flex-col gap-4 items-center py-16 justify-center'>
        <div className='flex items-center justify-center gap-6'>
            <BiBookOpen className='text-xl text-button'/>
            <h1 className='text-sm font-medium font-poppins text-button'>Find the best tutors for your child</h1>
            </div>
            <h1 className='md:text-2xl text-xl font-medium text-center capitalize '>Find the best Tuition Type Which <br/>suits you most</h1>
        </div>

        <div className='grid container mx-auto md:px-20 lg:px-32 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='flex flex-col gap-2 items-center py-10  bg-background rounded-lg shadow-md justify-center'>
                <div className='flex rounded-full bg-foreground p-3'>
                    <BiHome className='text-xl text-button' style={{fontSize: '24px'}}/>
                </div>
                <h1 className='text-sm font-medium capitalize'>Home Tutoring</h1>
            </div>
            <div className='flex flex-col gap-2 items-center py-14  bg-white rounded-lg shadow-md justify-center'>
            <div className='flex rounded-full bg-foreground p-3'>
                    <BiWifi className='text-xl text-orange-500' style={{fontSize: '24px'}}/>
                </div>
                <h1 className='text-sm font-medium capitalize'>Online Tutoring</h1>
            </div>
            <div className='flex flex-col gap-2 items-center py-14  bg-white rounded-lg shadow-md justify-center'>
            <div className='flex rounded-full bg-foreground p-3'>
                    <LuUsers className='text-xl text-button' style={{fontSize: '24px'}}/>
                </div>
                <h1 className='text-sm font-medium capitalize'>Group Tutoring</h1>
            </div>
            <div className='flex flex-col gap-2 items-center py-14  bg-white rounded-lg shadow-md justify-center'>
            <div className='flex rounded-full bg-foreground p-3'>
                    <TbUsersGroup className='text-xl text-green-400' style={{fontSize: '24px'}}/>
                </div>
                <h1 className='text-sm font-medium capitalize'>Package Tutoring</h1>
            </div>
            


        </div>
      
    </div>
  )
}

export default TutorType
