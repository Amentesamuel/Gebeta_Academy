import GetIntouchForm from '@/Components/ContactUs/GetIntouchForm'
import GetIntouchInfo from '@/Components/ContactUs/GetIntouchInfo'
import Banner from '@/Layouts/Banner'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const ContactUs = () => {
  return (
    <Mainlayout>
        <Banner>
            <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>Contact Us</h1>
        </Banner>
        <GetIntouchInfo/>
        <GetIntouchForm/>

    </Mainlayout>
  )
}

export default ContactUs
