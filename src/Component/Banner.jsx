// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets//image1.jpg'
import bgimg2 from '../assets//image2.jpg'
import bgimg3 from '../assets//image3.jpg'
import { useEffect } from 'react'
import Aos from 'aos'

export default function Banner() {
  useEffect(() => {
    Aos.init({duration: 600, easing: 'ease-in-sine'});
    Aos.refresh();
  }, []);
  return (
    <div className='w-11/12 mx-auto' data-aos="fade-down">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            header='Discover the Best Eateries in Town!'
            paragraph = 'From cozy cafes to gourmet restaurants, find the perfect spot for your next meal. Browse top-rated dining options, read honest reviews, and share your own experience.'
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            header='Uncover the Best Online Services'
            paragraph= "From web design to digital marketing, find the best online services to meet your needs. Read reviews, compare ratings, and connect with top-rated professionals from anywhere in the world."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            header='Find Trusted Professionals for Every Need'
            paragraph="Whether you're looking for a plumber, electrician, or a skilled freelancer, we've got you covered. Explore a wide range of professional services and make informed decisions with reviews from real customers"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}