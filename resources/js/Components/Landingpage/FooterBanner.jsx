import React from 'react'
import { TutorBanner1 } from '../../../../public/img'
import { Link } from '@inertiajs/react'

const FooterBanner = () => {
  return (
    <div className='w-full  bg-background2 '>
        <div className='container mx-auto lg:h-72 bg-button relative  rounded-md mt-10'>
            <div className='flex items-center justify-center  lg:px-40 py-20'>
                <div className='w-full flex flex-col gap-4 px-10 md:px-28 lg:px-0 items-start justify-start'>
                    <h1 className='text-4xl lg:text-5xl font-semibold font-sourGummy  text-white'>Gebeta Acadamy</h1>
                    <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <div className='flex gap-4'>
                        <Link href={route('register')} className='bg-background text-button px-10 py-2 hover:scale-105 transition-all duration-300 rounded-md'>Register</Link>
                        <Link href="/login" className='bg-background text-button px-10 py-2 hover:scale-105 transition-all duration-300 rounded-md'>Login</Link>
                    </div>
                </div>
               
            </div>
            <div className='absolute lg:block hidden bottom-0 right-60'>
                <img src={TutorBanner1} alt="Tutor Banner" className='w-full h-80  object-cover' />
            </div>


        </div>
      
    </div>
  )
}

export default FooterBanner
