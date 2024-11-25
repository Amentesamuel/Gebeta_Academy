import Footer from '@/Components/Landingpage/Footer'
import Navbar from '@/Components/Landingpage/Navbar'
import React from 'react'

const Mainlayout = ({children, user}) => {
  
  return (
    <div className='font-poppins'>
        <Navbar user={user} />
        
        <main className='bg-background2'>
            {children}
        </main>
        <Footer />
      
    </div>
  )
}

export default Mainlayout;
