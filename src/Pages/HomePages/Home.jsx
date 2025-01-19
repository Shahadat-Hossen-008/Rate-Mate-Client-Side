import React from 'react'
import Banner from '../../Component/Banner'
import ServiceSection from '../../Component/ServiceSection'
import MeetOurTeam from '../../Component/Meet our team/MeetOurTeam'
import DynamicTitle from '../../Dynamic Title/DynamicTitle'

function Home () {
  return (
    <div>
        <DynamicTitle title={"Home | RateMate"}  description={"Explore Our Website RateMate"} />
        <Banner></Banner>
        <ServiceSection></ServiceSection>
        <MeetOurTeam></MeetOurTeam>
    </div>
  )
}

export default Home