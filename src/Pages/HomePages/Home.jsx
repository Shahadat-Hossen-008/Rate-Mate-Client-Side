import React from 'react'
import Banner from '../../Component/Banner'
import ServiceSection from '../../Component/ServiceSection'
import MeetOurTeam from '../../Component/Meet our team/MeetOurTeam'
import DynamicTitle from '../../Dynamic Title/DynamicTitle'
import useAuth from '../../Context/Custom Hook/useAuth'
import Count from '../../Component/Count up/Count'

function Home () {
  const{isDarkTheme} = useAuth()
  return (
    <div className={`${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <DynamicTitle title={"Home | RateMate"}  description={"Explore Our Website RateMate"} />
        <Banner></Banner>
        <ServiceSection></ServiceSection>
        <MeetOurTeam></MeetOurTeam>
        <Count></Count>
    </div>
  )
}

export default Home