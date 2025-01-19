import React from 'react'
import Banner from '../../Component/Banner'
import ServiceSection from '../../Component/ServiceSection'
import MeetOurTeam from '../../Component/Meet our team/MeetOurTeam'
import DynamicTitle from '../../Dynamic Title/DynamicTitle'
import useAuth from '../../Context/Custom Hook/useAuth'
import Count from '../../Component/Count up/Count'
import WhyTrustUs from '../../Component/Why Trust Us/WhyTrustUs'

function Home () {
  
  return (
    <div>
        <DynamicTitle title={"Home | RateMate"}  description={"Explore Our Website RateMate"} />
        <Banner></Banner>
        <ServiceSection></ServiceSection>
        <MeetOurTeam></MeetOurTeam>
        <Count></Count>
        <WhyTrustUs></WhyTrustUs>
    </div>
  )
}

export default Home