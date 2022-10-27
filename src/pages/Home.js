import React from 'react'
import Banner from '../components/Banner'
import CourseOffer from '../components/CourseOffer'
import Feedbacks from '../components/Feedbacks'
import Service from '../components/Service'

function Home() {
  return (
    <div className='home-page'>
      <Banner/>
      <Service/>
      <CourseOffer/>
      <Feedbacks/>
    </div>
  )
}

export default Home