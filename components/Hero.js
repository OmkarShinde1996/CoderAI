import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='h-screen w-screen flex flex-col gap-10 justify-center items-center'>
            {/* Background */}
            <div className='absolute bottom-2 left-5 transform rotate-45 -z-10 h-[200px] w-1/2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full blur-3xl opacity-10'>
            </div>

            <div className='absolute bottom-12 right-10 transform rotate-45 -z-10 h-[200px] w-1/2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full blur-3xl opacity-10'>
            </div>

            <div>
                <h2 className='py-2 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-slate-400 bg-clip-text md:text-6xl md:font-normal text-center'><span className='underline decoration-sky-500'>Turbocharge</span> Your <span className='underline decoration-pink-500'>Coding</span> Experience <span className='underline decoration-indigo-500'>with CoderAI's</span> <span className='underline decoration-[#FF7448]'>Coding Assistant</span></h2>
            </div>
            <div className=''>
                <h2 className='text-center text-slate-500'>Eliminate Errors and Boost Efficiency with AI-Powered Code Generation.</h2>
            </div>
            <div className='hover:scale-105 transition-all delay-100'>
                <Link href='/get-started' className='bg-white opacity-90 hover:opacity-100 transition-all delay-150 text-slate-950 font-semibold px-6 py-3 rounded-full cursor-pointer text-md'>Get Started</Link>
            </div>
        </section>
    )
}

export default Hero