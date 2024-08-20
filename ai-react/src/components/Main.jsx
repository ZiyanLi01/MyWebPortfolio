import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'

export default function Main() {
  return (
    <div className='p-4 flex flex-col flex-1 md:grid 
    md:grid-cols-4 gap-4'>
        <div className='md:col-span-3 flex flex-col gap-4'>
            <AboutMe/>
            <Experience/>
        </div>
        
        {/* <Experience/> */}
        <Skills/>
    </div>
  )
}
