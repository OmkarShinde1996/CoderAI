import React from 'react'

const CodeWindow = ({ text, requestType }) => {
    return (
        <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
            <div className='flex justify-between items-center
                                 h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                <h2 className='px-2'>User's Input</h2>
                <span className='hidden md:block px-2 text-sm text-slate-500'>{requestType}</span>
            </div>
            <div className='px-2'>
                <code className='text-xs text-cyan-300'>{text}</code>
            </div>
        </div>
    )
}

export default CodeWindow