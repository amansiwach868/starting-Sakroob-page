import React from 'react'
import Marqee from '../components/Marqee'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedCategories from '../components/FeaturedCategories'
import BlogPage from '../components/BlogPage'
import Testimonials from '../components/Testimonials'
import BestSellers from '../components/BestSellers'
import JoinCircleSection from '../components/JoinCircleSection'

const Home = () => {
    return (
        <div>
            <Marqee />
            <Hero />
            <Services />
            <FeaturedCategories />
            <BestSellers/>
            <BlogPage />
            <Testimonials/>
            <JoinCircleSection/>
        </div>
    )
}

export default Home
