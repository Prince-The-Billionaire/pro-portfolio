"use client"
import React, { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'

const RecentProjects = () => {
    
    const cardsRef = useRef<HTMLDivElement[]>([]);
    cardsRef.current = []
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      gsap.from(cardsRef.current,{
        scrollTrigger:{
            trigger:sectionRef.current,
            start:'top 80%'
        },
        opacity:0,
        y:100,
        stagger:0.2,
        duration:1.2,
        ease:'anticipate'
      })
    }, [])
    
      const projects = [
        {
            title:'3D Solar System Planets to Explore',
            desc:'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js',
            image:'/card.png',
            link:'/'
        },
        {
            title:'Animated Apple Iphone 3D Website',
            desc:'Recreated the Apple Iphone 15 Pro website, combining GSAP animations and Three.js 3D effects',
            link:'/',
            image:'/apple.png'
        },
        {
            title:'Yoom - Video Conferencing App',
            desc:'Simplify your video conferencing experience with Yoom.Seamlessly connect with colleagues and friends',
            image:'/yoom.png',
            link:'/'
        }
      ]
  return (
    <div className='flex flex-col  gap-8 justify-center items-center max-md:p-4 '>
        <p className='text-4xl font-semibold max-md:text-2xl max-md:text-center'>A small selection of <span className='text-purple-300'>recent projects</span></p>
        <div ref={sectionRef} className='grid grid-cols-2 md:flex-col md:flex md:items-center max-md:flex max-md:flex-col max-md:gap-10 max-md:items-center  gap-20 '>
            {projects.map((item,i) => (
                <ProjectCard ref={(el:HTMLDivElement |null) => {if (el) cardsRef.current[i] = el}} key={item.title} title={item.title} image={item.image} link={item.link} desc={item.desc}/>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects