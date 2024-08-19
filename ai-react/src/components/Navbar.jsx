import React from 'react'

export default function Navbar() {
    const links=[
        ['Email','liz525354@gmail.com'],
        ['GitHub','https://github.com/ZiyanLi01'],
        ['Linkedin','https://www.linkedin.com/in/ziyan-7757b6105/']
    ]
  return (
    <div className='sticky-0 flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm'>
    <a className='text-sm sm:text-base' href='/'>Liz</a>
    <div className='flex items-center gap-4'>
        {links.map((link, index) => {
            return (
                <a key={link[1]} href={link[1]} target="_blank">{link[0]}</a>
            )
        })}
    </div>
</div>
  )
}
