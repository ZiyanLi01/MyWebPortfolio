import React from 'react'

export default function Skills() {
  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Info</h1>
        <div className='flex items-center gap-2'>
          <h3>Email</h3>
          <a href="mailto:Liz543234@gmail.com"className='text-blue-500'> Liz543234@gmail.com</a>
        </div>
      </div>
      <div>
        <h1 className='text-4xl'>Skills</h1>
      </div>
      <div>
        <h1 className='text-4xl'>Just for fun</h1>
      </div>      
    </div>
  )
}
