
import React from 'react'
import FeatureTitle from './FeatureTitle'
import FeatureDesc from './FeatureDesc'
import CodeWindow from './CodeWindow'

const Features = () => {
    return (
        <section className=''>
            <div className='relative flex justify-between'>
                <div className='absolute -bottom-[800px] right-28 transform -rotate-45 -z-10 h-[200px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-25'>
                </div>
                {/* <div className='absolute -bottom-96 right-0 transform -rotate-45 -z-10 h-[200px] w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-10'>
                </div> */}
            </div>

            <div className='flex flex-col justify-center items-center gap-4 px-2 md:px-10 lg:px-20'>
                <div className='text-3xl md:text-4xl font-semibold text-center text text-transparent bg-gradient-to-r from-white to-slate-400 bg-clip-text'>Do More With CoderAI</div>
                <div className='h-full rounded-3xl bg-slate-900/60 border-[1px] border-slate-600 border-opacity-90'>
                    <div className='flex flex-col justify-center lg:items-center p-5 gap-5'>
                        <FeatureTitle title='Text to Code' />
                        <FeatureDesc text='Generate code snippets or boilerplate code for common tasks using AI-powered code generation' />
                        <div className='flex flex-col gap-5 md:flex-row'>
                            <CodeWindow text='Calculate the factorial of a number given by the user' requestType='[Request in Python]' />
                            <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
                                <div className='flex justify-between items-center h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                                    <h2 className='px-2'>Generated code</h2>
                                    <span className='px-2 text-sm text-slate-500'>[Answer]</span>
                                </div>
                                <div className='px-2'>
                                    <code className='text-xs leading-[20px] '>import math<br />

                                        print("Enter a number: ")<br />
                                        num = int(input())<br />
                                        factorial_number = 1<br />
                                        for i in range(1, num + 1):<br />
                                        factorial_number *= i<br />
                                        print(factorial_number)</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-full rounded-3xl bg-slate-900/60 border-[1px] border-slate-600 border-opacity-90'>
                    <div className='flex flex-col justify-center lg:items-center p-5 gap-5'>
                        <FeatureTitle title='Code Review' />
                        <FeatureDesc text='Highlighting potential issues, and suggesting improvements based on best practices and coding standards' />

                        <div className='flex flex-col gap-5 md:flex-row'>
                            <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
                                <div className='flex justify-between items-center h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                                    <h2 className='px-2'>User's Input</h2>
                                    <span className='hidden md:block px-2 text-sm text-slate-500'>[Refactoring required]</span>
                                </div>
                                <div className='px-2'>
                                    <code className='text-xs leading-[20px] text-cyan-300'>from collections import Counter<br />

                                        def count_ab(string):<br />
                                        string = string.lower()<br />
                                        counts = Counter(string)<br />
                                        if counts['a'] == counts['b']:<br />
                                        return True<br />
                                        else:<br />
                                        return False</code>
                                </div>
                            </div>

                            <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
                                <div className='flex justify-between items-center h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                                    <h2 className='px-2'>Generated code</h2>
                                    <span className='px-2 text-sm text-slate-500'>[Answer]</span>
                                </div>
                                <div className='px-2'>
                                    <code className='text-xs leading-[20px]'>def count_ab(str):<br />
                                        str = str.lower()<br />
                                        return str.count['a'] == str.count['b']</code>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='h-full rounded-3xl bg-slate-900/60 border-[1px] border-slate-600 border-opacity-90'>
                    <div className='flex flex-col justify-center lg:items-center p-5 gap-5'>
                        <FeatureTitle title='Syntax Error Fixing & Debugging' />
                        <FeatureDesc text='Provides debugging suggesions and fixes on just click of a button' />

                        <div className='flex flex-col gap-5 md:flex-row'>
                            <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
                                <div className='flex justify-between items-center h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                                    <h2 className='px-2'>User's Input</h2>
                                    <span className='hidden md:block px-2 text-sm text-slate-500'>[Fix required]</span>
                                </div>
                                <div className='px-2'>
                                    <code className='text-xs leading-[20px] text-cyan-300'>msg = 'don't' <br />
                                        print("Hello World!)<br />
                                        print(msg)</code>
                                </div>
                            </div>

                            <div className='h-full pb-2 w-full md:w-[400px] bg-[#1E1E1E]/30 rounded-lg border-[1px] border-slate-600 border-opacity-90'>
                                <div className='flex justify-between items-center h-[30px] bg-[#191A1B]/70 rounded-t-lg border-b border-slate-600 border-opacity-90'>
                                    <h2 className='px-2'>Generated code</h2>
                                    <span className='px-2 text-sm text-slate-500'>[Answer]</span>
                                </div>
                                <div className='px-2'>
                                    <code className='text-xs leading-[20px]'>msg = "don't"<br />
                                        print("Hello World!")<br />
                                        print(msg)</code>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features