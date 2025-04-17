import React from 'react'
import Image from 'next/image'

const Experience = () => {
    const experiences = [
        {
            title:'Frontend Engineer Intern',
            desc:'Assisted in the development of a web-based platform using NextJs, enhancing interactivity and speed by over 35%',
            image:'/hacker.png'
        },
        {
            title:'Full Stack Developer - ZAP',
            desc:'Designed and developed various SaaS to solve various problems people are facing in various industries',
            image:'/laptop.png'
        },
        {
            title:'Freelance App Development',
            desc:'Worked with a client to design a meal planner application for both the ios and android store',
            image:'/bulb.png'
        },
        {
            title:'Lead Frontend Developer',
            desc:'Developed and maintained user-facing features using modern frontend technologies',
            image:'/side.png'
        }
    ]
  return (
    <div className='flex flex-col items-center mt-16'>
        <p className='text-5xl font-bold max-md:text-2xl '>My <span className='text-purple-300'>Work Experience</span> </p>
        <div className='grid grid-cols-2 gap-10 mt-12 md:flex  md:flex-col max-md:flex max-md:flex-col'>
            {experiences.map((item,index) => (
                <div key={index} className='flex flex-row max-md:flex-col md:flex-col gap-8 max-md:p-8 bg-white/10 border-t-2 rounded-2xl border-t-white/20 p-4 '>
                    <Image src={item.image} alt={item.title} width={80} height={60} className='object-contain'/>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl font-semibold max-md:text-sm '>{item.title}</p>
                        <p className='text-base text-white/75 w-[30rem] max-md:text-xs max-md:text-wrap max-md:w-[14rem] '>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience