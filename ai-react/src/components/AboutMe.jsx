import React from 'react'

export default function AboutMe() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2'>
        <div className='flex flex-col gap-3 md'>
            <div className='flex items-center'>
                <h1 className='font-bold text-4xl sm:text-6xl'>Ziyan Li(Ph.D)</h1>
                <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg'src="https://avatars.githubusercontent.com/u/86816068?v=4" alt="me"/>
            </div>
            
            <h2 className='font-medium text-slate-800 text-lg sm:text-2xl'>Software Engineer| Machine Learning Engineer</h2>
            <p className='text-slate-500'>think about what to put here! write something short to let the people know you in a seconds</p>
            <div className='my-10 flex items-center gap-4 text-sm sm:text-medium'>
                <button className='rounded-full bg-gradient-to-r from-blue-600 to-violet-500 text-white px-4 py-2 hover:opacity-50'>Projects</button>
                <button className='rounded-full text-purple-800 border border-solid border-violet-800 px-4 py-2'>Papers</button>
            </div>
        </div>
        <img className='mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg'src="https://avatars.githubusercontent.com/u/86816068?v=4" alt="me"/>
    </div>
  )
}
