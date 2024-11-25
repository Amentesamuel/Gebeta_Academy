import ForParents from '@/Components/HowTo/ForParents'
import ForTutor from '@/Components/HowTo/ForTutor'
import Banner from '@/Layouts/Banner'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const HowTo = () => {
  return (
    <Mainlayout>
        <Banner>
        <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>How To</h1>

        </Banner>
        <ForParents/>
        <ForTutor/>

    </Mainlayout>
  )
}

export default HowTo
