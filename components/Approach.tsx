"use client"
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const Approach = () => {
    const divoneRef = useRef<HTMLDivElement>(null)
    const divtwoRef = useRef<HTMLDivElement>(null)
    const divthreeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.from(divoneRef.current,{
            scrollTrigger:{
                trigger:divoneRef.current,
                start:'top 50%',
                end:'+200px',
                toggleActions: "play none none reverse"
            },
            opacity:0,
            x:-200,
            duration:1.2,
            ease:'power3.out'
        })
        gsap.from(divtwoRef.current,{
            scrollTrigger:{
                trigger:divtwoRef.current,
                start:'top 50%',
                end:'+200px',
                toggleActions: "play none none reverse"
            },
            opacity:0,
            x:-150,
            delay:1.5,
            duration:1.2,
            ease:'power3.out'
        })
        gsap.from(divthreeRef.current,{
            scrollTrigger:{
                trigger:divthreeRef.current,
                start:'top 70%',
                end:'+200px',
                toggleActions: "play none none reverse"
            },
            opacity:0,
            x:-150,
            delay:2.5,
            duration:1.2,
            ease:'power3.out'
        })
    },[])
  return (
    <div className='flex flex-col items-center  mt-16 max-md:p-4'>
        <p className='text-4xl font-semibold '>My <span className='text-purple-400'>Approach</span></p>
        <div ref={divoneRef} className='mt-12 max-md:flex-col md:flex-col md:items-center max-md:items-center flex flex-row gap-8'>
            <div className='border relative border-white/20 max-md:w-64 max-md:h-[400px] w-96 h-[600px] rounded-2xl bg-white/2 flex flex-col items-center justify-center'>
                <img src={'/plus.png'} className='absolute -top-5 -left-5' />
                <img src={'/plus.png'} className='absolute -top-5 -right-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -left-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -right-5' />
                <button className='p-4 max-md:p-2 max-md:text-lg max-md:rounded-lg border-t-3 border-t-white/10 rounded-2xl bg-purple-400/20 px-8 text-purple-300 text-2xl font-semibold '>Phase 1</button>
                <div className='flex items-center text-center flex-col '>
                    <p className='max-md:text-lg'>Development & Progress Update</p>
                    <p className='max-md:text-xs '>Once we agree on the plan, i cue my edm playlist and dive into coding.From initial sketches to polished code, I keep updated every step of the way</p>
                </div>
            </div>

            <div ref={divtwoRef} className='border relative max-md:w-64 max-md:h-[400px] border-white/20 w-96 h-[600px] rounded-2xl bg-white/2 flex flex-col items-center justify-center'>
                <img src={'/plus.png'} className='absolute -top-5 -left-5' />
                <img src={'/plus.png'} className='absolute -top-5 -right-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -left-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -right-5' />
                <button className='p-4 border-t-3 max-md:p-2 max-md:text-lg max-md:rounded-lg  border-t-white/10 rounded-2xl bg-purple-400/20 px-8 text-purple-300 text-2xl font-semibold '>Phase 1</button>
                <div className='flex items-center text-center flex-col '>
                    <p className='max-md:text-lg'>Development & Progress Update</p>
                    <p className='max-md:text-xs '>Once we agree on the plan, i cue my edm playlist and dive into coding.From initial sketches to polished code, I keep updated every step of the way</p>
                </div>
            </div>

            <div ref={divthreeRef} className='border relative max-md:w-64 max-md:h-[400px] border-white/20 w-96 h-[600px] rounded-2xl bg-white/2 flex flex-col items-center justify-center'>
                <img src={'/plus.png'} className='absolute -top-5 -left-5' />
                <img src={'/plus.png'} className='absolute -top-5 -right-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -left-5' />
                <img src={'/plus.png'} className='absolute -bottom-5 -right-5' />
                <button className='p-4 border-t-3 max-md:p-2 max-md:text-lg max-md:rounded-lg border-t-white/10 rounded-2xl bg-purple-400/20 px-8 text-purple-300 text-2xl font-semibold '>Phase 1</button>
                <div className='flex items-center text-center flex-col '>
                    <p className='max-md:text-lg'>Development & Progress Update</p>
                    <p className='max-md:text-xs '>Once we agree on the plan, i cue my edm playlist and dive into coding.From initial sketches to polished code, I keep updated every step of the way</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Approach