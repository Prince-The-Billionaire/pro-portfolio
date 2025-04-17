"use client"
import React, { useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const pRef = React.useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    gsap.fromTo(
      pRef.current,
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8,
      }
    );
    gsap.fromTo('#magic',{
      opacity: 0,
      y: 150,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 1,
    })
    gsap.from('#hi',{
      opacity: 0,
      y: -150,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.6,
    })
    gsap.from('#work',{
      opacity: 0,
      y: -150,
      duration: 1.2,
      ease: "power3.out",
      delay: 2.2,
    })
  }, []);
  
  return (
    <div className='relative max-md:-mt-14 max-md:gap-5 md:w-screen  text-white -mt-20 flex-col gap-8 items-center flex  justify-center min-h-screen '>
        <img src='/spotlight.png' className='absolute top-0 left-0 max-md:size-44'/>
        <img src='/spotlight.png' className='absolute top-0 left-0 max-md:size-44'/>
        <img src='/spotlight (1).png' className='absolute top-0 right-0 max-md:size-44 '/>
        <img src='/spotlight (1).png' className='absolute top-0 right-0  max-md:size-44'/>
        <p className='text text-lg max-md:text-center max-md:text-xs' id='magic' >DYNAMIC WEB MAGIC WITH NEXT JS AND EXPO</p>
        <p className='text-5xl font-semibold max-md:text-2xl max-md:text-center' ref={pRef}>Transforming Concepts into <br/> <span className='text-accent '>Seamless User Experiences</span></p>
        <p className='text-2xl text max-md:text-xs max-md:text-center ' id="hi">Hi! I&apos;m Prince, a Next.js and Expo Developer</p>
        <button id="work" className='gradient flex max-md:p-2 flex-row gap-2 cursor-pointer border-white/10 border-2 backdrop-blur-md  shadow-[3]  bg-gradient-to-r from-blue-500/25 to-white/1 rounded-xl p-4'>
          <p>Open to Work</p>
          <FiArrowUpRight size={20} />
        </button>
    </div>
  )
}

export default Hero