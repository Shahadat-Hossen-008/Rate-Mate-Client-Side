import React from 'react'
import Navbar from '../../Component/Navbar'
import Banner from '../../Component/Banner'
import ServiceSection from '../../Component/ServiceSection'
import MeetOurTeam from '../../Component/Meet our team/MeetOurTeam'

function Home () {
  return (
    <div>
        <Banner></Banner>
        <ServiceSection></ServiceSection>
        <MeetOurTeam></MeetOurTeam>
    </div>
  )
}

export default Home