import React from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
const RecentProjects = () => {
    const stack = [{
        img: '/nextjs.png',
        title: 'Next.js',
      },{
        img: '/tailwind.png',
        title:'tailwindcss'
      },{
        img:'/gsap.png',
        title:'gsap'
      },
      {
        img:'/three.png',
        title:'three'
      }]

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
    <div className='flex flex-col gap-8 justify-center items-center'>
        <p className='text-4xl font-semibold'>A small selection of <span className='text-purple-300'>recent projects</span></p>
        <div className='grid grid-cols-2 gap-20 '>
            {projects.map((item) => (
                <ProjectCard title={item.title} image={item.image} link={item.link} desc={item.desc}/>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects