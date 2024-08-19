import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'

export default function Main() {
  return (
    <div className='p-4 flex flex-col md:grid md:grid-cols-4'>
        <div>
            <AboutMe/>
            <Experience/>
        </div>
        
        {/* <Experience/> */}
        <Skills/>
    </div>
  )
}
