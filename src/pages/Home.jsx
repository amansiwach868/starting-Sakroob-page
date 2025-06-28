import React from 'react'
import MarqeePage from '../components/MarqeePage'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedCategories from '../components/FeaturedCategories'
import BlogPage from '../components/BlogPage'
import Testimonials from '../components/Testimonials'
import BestSellers from '../components/BestSellers'
import JoinCircle from '../components/JoinCircle'

const Home = () => {
    return (
        <div>
            <MarqeePage />
            <Hero />
            <Services />
            <FeaturedCategories />
            <BestSellers />
            <BlogPage />
            <Testimonials />
            <JoinCircle />
        </div>
    )
}

export default Home
