import { shapeFive, shapeOne, shapeThree, shapeTwo } from '../../../public/img'
import React from 'react'

const Banner = ({children}) => {
  return (
    <div>
      <main className='bg-foreground relative shadow-sm font-raleway w-full py-20 flex items-center justify-center'>
      <img src={shapeOne} alt='shape' className='w-8 h-8 absolute top-5 md:left-10  left-5 animate-pulse  object-cover'/>
            <img src={shapeTwo} alt='shape' className='md:w-12 w-8 md:h-12 h-8 absolute bottom-5 md:left-10 left-5 animate-pulse  object-cover'/>
            <img src={shapeThree} alt='shape' className='md:w-12 w-8 md:h-12 h-8 absolute bottom-5 md:right-10 right-5 animate-pulse  object-cover'/>
            <img src={shapeFive} alt='shape' className='md:w-12 w-8 md:h-12 h-8 absolute top-5 md:right-10 right-5 animate-pulse  object-cover'/>
            
        {children}

      </main>
    </div>
  )
}

export default Banner
