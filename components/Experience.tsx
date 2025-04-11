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
        <p className='text-5xl font-bold '>My <span className='text-purple-300'>Work Experience</span> </p>
        <div className='grid grid-cols-2 gap-10 mt-12'>
            {experiences.map((item,index) => (
                <div key={index} className='flex flex-row gap-8 bg-white/10 border-t-2 rounded-2xl border-t-white/20 p-4 '>
                    <Image src={item.image} alt={item.title} width={80} height={60} className='object-contain'/>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl font-semibold'>{item.title}</p>
                        <p className='text-base text-white/75 w-[30rem]'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience