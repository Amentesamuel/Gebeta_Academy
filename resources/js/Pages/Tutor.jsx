import TutorsList from '@/Components/TutorPage/TutorsList'
import Banner from '@/Layouts/Banner'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const Tutor = ({tutors}) => {
  
  return (
    <Mainlayout>
        <Banner>
        <div className="flex flex-col items-center text-5xl text-button font-sourGummy justify-center">
                    Our Tutors
                </div>
        </Banner>
      <TutorsList tutors={tutors}/>
    </Mainlayout>
  )
}

export default Tutor
