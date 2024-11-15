import Footer from '@/Components/Landingpage/Footer'
import Navbar from '@/Components/Landingpage/Navbar'
import React from 'react'

const Mainlayout = ({children}) => {
  return (
    <div className='font-poppins'>
        <Navbar />
        <main className='bg-background2'>
            {children}
        </main>
        <Footer />
      
    </div>
  )
}

export default Mainlayout;
