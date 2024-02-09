import React from 'react'
import HomeCard from './homecard'

const HomeCardsContainer = () => {
  return (
    <div className='sm:flex sm:flex-wrap sm:items-center  md:grid md:grid-cols-2 lg:grid-cols-3 w-4/5  my-3 justify-items-center py-2 '>
        <HomeCard image="/images/HomeBlogImage.png" heading="Event"/>
        <HomeCard image="/images/HomeBlogImage.png" heading="Event"/>
        <HomeCard image="/images/HomeBlogImage.png" heading="Event"/>
        
    </div>
  )
}

export default HomeCardsContainer