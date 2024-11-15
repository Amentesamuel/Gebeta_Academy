import { Link } from '@inertiajs/react';
import React from 'react'
import { BiColor, BiCurrentLocation, BiLocationPlus, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiMailSend, BiPhone, BiSolidEditLocation } from 'react-icons/bi';
import { IoMail } from 'react-icons/io5';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='w-full px-8 py-10 lg:p-12 shadow-xl bg-footer  lg:px-20'>
        <div className='container mx-auto grid px-0 md:px-20 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10'>
            <div className='flex flex-col col-span-1 lg:col-span-2 gap-3'>
            <div>
                <Link href="/" className='text-2xl'><span className='text-button  font-semibold'>Gebeta</span> Acadamy</Link>
            </div>
            <div>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className='flex gap-4'>
                <div className='hover:scale-110 transition-all duration-300'>
                <SocialIcon url="https://facebook.com" style={{ height: 25, width: 25 }} />
                </div>
                <div className='hover:scale-110 transition-all duration-300'>
                <SocialIcon url="https://instagram.com" style={{ height: 25, width: 25 }} />
                </div>
                <div className='hover:scale-110 transition-all duration-300 '>
                <SocialIcon url="https://twitter.com" style={{ height: 25, width: 25 }} />
                </div>
                <div className='hover:scale-110 transition-all duration-300 '>
                <SocialIcon url="https://youtube.com" style={{ height: 25, width: 25 }} />
                </div>
            </div>
            </div>

            <div className='flex flex-col gap-2 px-0 md:px-20 md:pt-16'>
                <h1 className='text-lg font-semibold'>Navigation</h1>

                <Link href="/" className='hover:text-button transition-all duration-300'>Home</Link>
                <Link href="about" className='hover:text-button transition-all duration-300'>About</Link>
                <Link href="tutor" className='hover:text-button transition-all duration-300'>Tutors</Link>
                <Link href="/" className='hover:text-button transition-all duration-300'>Resources</Link>
                <Link href="/" className='hover:text-button transition-all duration-300'>Blog</Link>
            </div>

            <div className='flex flex-col col-span-2   lg:col-span-1  gap-2 lg:pt-8'>
                <h1 className='text-md'>Contact Us</h1>
                <div className='flex gap-2'>
                    <BiPhone className='text-button mt-3' style={{fontSize: 25}}/>
                    <div className='flex flex-col'>
                    <p>+25194567890</p>
                    <p>+25194567890</p>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <BiMailSend className='text-button ' style={{fontSize: 25}}/>
                    <div className='flex flex-col '>
                    <p className='text-sm'>gebeta@gmail.com</p>
                    
                    </div>
                
                </div>
                <div className='flex gap-3'>
                    <BiCurrentLocation className='text-button ' style={{fontSize: 25}}/>
                    <div className='flex flex-col '>
                    <p className='text-sm'>22 Hanan k plaza</p>
                    
                    </div>
                
                </div>
            </div>

            
            
        </div>
    
    </div>
  )
}

export default Footer;
