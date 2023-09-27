import Link from 'next/link'
import React from 'react'

const Question = () => {
    return (
        <section>
            <div className='my-16 flex flex-col justify-center items-center'>
                <div className='text-3xl md:text-4xl font-medium text text-transparent bg-gradient-to-r from-white to-slate-400 bg-clip-text text-center'>Still have questions?</div>
                <h2 className='mt-6 text-lg text-slate-400'>Get in touch with our team.</h2>
                <Link href='/contact' className='mt-6 text-xl font-normal tracking-wider text-slate-300 hover:text-slate-50 cursor-pointer border border-slate-600 border-opacity-90 rounded-xl px-5 py-3 hover:bg-slate-800/25 bg-slate-800/10'>Contact</Link>
            </div>
        </section>
    )
}

export default Question