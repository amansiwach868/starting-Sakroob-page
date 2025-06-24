import React from 'react'
import Marqee from '../components/Marqee'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedCategories from '../components/FeaturedCategories'
import BlogPage from '../components/BlogPage'

const Home = () => {
    return (
        <div>
            <Marqee />
            <Hero />
            <Services />
            <FeaturedCategories />
            <BlogPage/>
            
        </div>
    )
}

export default Home
