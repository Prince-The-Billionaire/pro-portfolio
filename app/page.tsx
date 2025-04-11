import Advantages from '@/components/Advantages'
import Approach from '@/components/Approach'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Platforms from '@/components/Platforms'
import RecentProjects from '@/components/RecentProjects'
import Testimony from '@/components/Testimony'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>  
      <Advantages/>
      <RecentProjects/>
      <Testimony/>
      <Platforms/>
      <Experience/>
      <Approach/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default page