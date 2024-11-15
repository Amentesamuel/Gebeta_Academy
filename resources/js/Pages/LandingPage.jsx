import Banner from '@/Components/Landingpage/Banner'
import FindJob from '@/Components/Landingpage/FindJob'
import FeaturedTutor from '@/Components/Landingpage/FeaturedTutor'
import TutorType from '@/Components/Landingpage/TutorType'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'
import HowToStudy from '@/Components/Landingpage/HowToStudy'
import FooterBanner from '@/Components/Landingpage/FooterBanner'

const LandingPage = () => {
  return (
    <Mainlayout>
        <Banner/>
        <TutorType/>
        <FindJob/>
        <FeaturedTutor/>
        <HowToStudy/>
        <FooterBanner/>
    </Mainlayout>
  )
}

export default LandingPage
