import React from 'react'
import { BiBook, BiBookContent, BiBookOpen, BiChevronDown, BiLogIn, BiLogInCircle } from 'react-icons/bi'
import { menTutor, femaleTutor } from '../../../../public/img'
import { shapeOne, shapeTwo ,shapeThree,shapeFive} from '../../../../public/img'
import { Link } from '@inertiajs/react'




const Banner = () => {

  return (
    <div className='w-full lg:h-[30rem] bg-foreground'>
        

        <div className='container mx-auto lg:px-28 flex flex-col lg:flex-row gap-20 items-center relative justify-between py-20'>
            <img src={shapeOne} alt='shape' className='w-8 h-8 absolute top-5 left-10 animate-pulse  object-cover'/>
            <img src={shapeTwo} alt='shape' className='w-16 h-16 absolute bottom-5 left-10 animate-pulse  object-cover'/>
            <img src={shapeThree} alt='shape' className='w-16 h-16 absolute bottom-5 right-10 animate-pulse  object-cover'/>
            <img src={shapeFive} alt='shape' className='w-16 h-16 absolute top-5 right-10 animate-pulse  object-cover'/>
            
        
            <div className='lg:w-1/2 w-full px-10 md:px-16 mt-10 lg:mt-0 lg:px-0  flex items-start  justify-center flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <BiBookOpen className='text-2xl text-button'/>
            <h1 className='md:text-md text-sm font-medium font-poppins text-button'>Find the best tutors for your child</h1>
            </div>
                <h1 className='text-xl md:text-4xl font-medium font-poppins text-black'>
                    Best Tutor Platform <br/>
                    Find the best tutors for your child
                </h1>
            <div className='text-sm font-medium font-poppins text-gray-500'>
                <p className='capitalize text-justify'>Find the best tutors near you, enhance your child's learning experience with our expert tutors</p>
            </div>

            <div className='flex items-center gap-4 w-full'>
                <Link href={'tutor'} className='bg-button text-white hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  items-center justify-center flex gap-2 text-xs  md:text-sm px-8 md:px-4 py-1 md:py-2 rounded-2xl'>Find best Tutor <BiLogIn className='text-sm md:block hidden'/></Link>
                <button className='border border-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-black items-center justify-center  text-xs flex md:text-sm px-8 md:px-5 hover:bg-button hover:text-white py-1 md:py-2 rounded-2xl'>Apply as Tutor <BiLogIn className='text-sm md:block hidden'/></button>
            </div>
            </div>

            <div className='w-1/2 lg:block hidden '>
                <div className='relative flex gap-10 h-40'>
                    <img src={menTutor} alt='banner' className='w-52 relative animate-slow-bounce bottom-10 rounded-tr-3xl rounded-bl-3xl  h-72 object-cover'/>


                    <img src={femaleTutor} alt='banner' className='w-52 relative animate-slow-bounce  top-2 h-72 rounded-tl-3xl rounded-br-3xl object-cover'/>
                </div>

            </div>
        </div>


      
    </div>
  )
}

export default Banner
