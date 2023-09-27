'use client'
import React, { useState } from 'react'

const FaqCard = ({question, answer}) => {
    const [faqToggle, setFaqToggle] = useState(false)
    return (
        <div className='flex flex-col justify-center mx-2 md:mx-0 w-full md:w-[600px] hover:bg-slate-800/25 bg-slate-800/10 border border-slate-600 border-opacity-90 rounded-xl cursor-pointer' onClick={() => setFaqToggle((prev) => !prev)} >
            <div className='px-5 py-3'>
                <div className=' flex flex-row justify-between items-center'>
                    <h2 className='text-base md:text-lg'>{question}</h2>
                    <div className='cursor-pointer'>
                        {!faqToggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }
                    </div>
                </div>
                {faqToggle && <div className='mt-3'>
                    <p className='text-sm md:text-base text-slate-400'>{answer}</p>
                </div>}
            </div>
        </div>
    )
}

export default FaqCard