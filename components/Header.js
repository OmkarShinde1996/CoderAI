'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav className='my-2 flex justify-center sticky top-[0.5rem] z-10'>
                <div className='flex justify-around gap-28 md:gap-10 border-[1px] border-slate-600 border-opacity-70 bg-slate-950 bg-opacity-70 px-5 md:px-[20px] py-1 items-center rounded-full backdrop-blur-sm'>
                    <div className='font-bold text-xl md:font-extrabold hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer py-1 px-4 rounded-full'><Link href='/' className='text-shadow shadow-white'>CoderAI</Link></div>
                    <div onClick={() => setMenu((prev) => !prev)} className='cursor-pointer hover:bg-slate-600 py-1 px-2 rounded-full md:hidden'>
                        {!menu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }

                    </div>
                    <ul className='hidden gap-10 md:flex items-center'>
                        <Link href='/how-to-guide' className='hover:bg-slate-400 hover:bg-opacity-20 px-4 py-1 rounded-full cursor-pointer text-slate-500 font-semibold hover:text-white hover:text-shadow-sm hover:shadow-white text-sm'>How-to guide</Link>
                        <Link href='/contact' className='hover:bg-slate-400 hover:bg-opacity-20 px-4 py-1 rounded-full cursor-pointer text-slate-500 font-semibold hover:text-white hover:text-shadow-sm hover:shadow-white text-sm'>Contact</Link>
                        <Link href='/get-started' className='bg-white opacity-90 hover:opacity-100 transition-all delay-150 text-slate-950 font-semibold px-4 py-1 rounded-full cursor-pointer text-sm'>Get started</Link>
                    </ul>
                </div>
            </nav>
            {menu && <div className='flex justify-center sticky top-16 md:hidden'>
                <div className='border-[1px] border-slate-600 backdrop-blur-sm border-opacity-70 bg-slate-950 bg-opacity-70 py-2 px-20 rounded-xl'>
                    <ul className='gap-5 flex flex-col items-center'>
                        <Link href='/how-to-guide' className='hover:bg-slate-400 hover:bg-opacity-20 px-4 py-1 rounded-full cursor-pointer text-slate-500 font-semibold hover:text-white hover:text-shadow-sm hover:shadow-white text-base'>How-to guide</Link>
                        <Link href='/contact' className='hover:bg-slate-400 hover:bg-opacity-20 px-4 py-1 rounded-full cursor-pointer text-slate-500 font-semibold hover:text-white hover:text-shadow-sm hover:shadow-white text-base'>Contact</Link>
                        <Link href='/get-started' className='bg-white opacity-90 hover:opacity-100 transition-all delay-150 text-slate-950 font-semibold px-4 py-2 rounded-full cursor-pointer text-base'>Get started</Link>
                    </ul>
                </div>
            </div>}
        </>
    )
}

export default Header