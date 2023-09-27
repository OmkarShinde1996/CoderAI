'use client'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=''>
            <div className='relative w-screen bg-slate-950 rounded-t-3xl'>
                <div className='absolute -z-10 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-50 w-screen h-[100px] rounded-full'></div>
                <div className='p-4 md:p-10'>
                    <h2 className='text-center md:text-start'>Made by <a href='#' className='cursor-pointer underline decoration-sky-500'>Omkar Shinde</a></h2>
                    <p className='text-center md:text-start text-xs my-2 text-slate-400'>CodeMate is still in early Beta, so please keep in mind that there may be some imperfections as we continue to work on improving it.</p>
                    <div className='text-center md:text-start font-bold text-xl md:font-extrabold cursor-pointer py-1 rounded-full mt-10'><Link href='/' className='text-shadow shadow-white'>CoderAI</Link></div>

                    
                    <hr className='mt-10 mb-10 opacity-30'/>
                    
                    <div className='text-sm font-normal text-slate-400 pb-5 text-center md:text-start'>
                        &copy; 2023 CoderAI. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer