import React, { forwardRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

interface props{
    title: string,
    desc: string,
    link: string,
    image: string,
    
}

const ProjectCard = forwardRef<HTMLDivElement,props>( ({title, image,desc, link},ref) => {
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
  return (
    <div ref={ref}>
        <div className='p-4 rounded-2xl bg-white/10 gap-2 flex flex-col '>
            <Image src={image} width={580} height={400} alt={'apple'}/>
            <p className='text-3xl font-semibold max-md:text-xl'>{title}</p>
            <p className='text-white/60 w-[30rem] max-md:w-[16rem] max-md:text-sm text-lg'>{desc}</p>
            <div className='flex flex-row justify-between items-center max-md:flex-col '>
                <div className='flex flex-row gap-5'>
                    {stack.map((item) => (
                        <Image src={item.img} key={item.title} width={40} height={40} alt={item.title}/>
                    ))}
                </div>
                <Link href={link} className='max-md:text-sm flex flex-row gap-2 text-purple-300' >
                    <p>Check Live Site</p>
                    <FiArrowUpRight />
                </Link>
            </div>

        </div>
    </div>
  )
})

ProjectCard.displayName = "ProjectCard";
export default ProjectCard