import React from 'react'
import FaqCard from './FaqCard'
import faqList from '@data/faqs'


const Faq = () => {
    return (
        <section>
            <div className='mt-16 flex justify-center items-center'>
                <div className='text-3xl md:text-4xl font-semibold text text-transparent bg-gradient-to-r from-white to-slate-400 bg-clip-text text-center'>Frequently Asked Questions</div>
            </div>
            <div className='mt-10 flex flex-col items-center mx-2 justify-center gap-3'>
                {faqList.map((faqItem, index)=>(<FaqCard question={faqItem.question} answer={faqItem.answer} key={index}/>))}
                
            </div>
        </section>
    )
}

export default Faq