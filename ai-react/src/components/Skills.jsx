import React from 'react'

export default function Skills() {
  const ski = {
    ['Machine Learning']: ['Pytorch','TensorFlow',' Scikit-learn'],
    ['Full Stack']: ['Spring', 'Spring boot', 'Spring Security', 'Hibernate', 'Node.js', 'React',
      'AWS', 'GCP', 'MySQL', 'PostgreSQL', 'ElasticSearch', 'Git', 'Linux', 'Docker', 'Postman'],
    ['Programming Language']: ['Java', 'Python', 'go', 'JavaScript','HTML'],
    Design: ['Canva','Illustrater'],
    ['Others']: ['Research','Data Analysis','Technical Writing'],
  }  


  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl'>Contact Me</h1>
        <div className='flex items-center gap-1 text-base
        relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full
        after:bg-purple-500 hover:after:translate-x-full
        after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>Email</h3>
          <a href="mailto:Liz543234@gmail.com"
          className='text-blue-500'> Liz543234@gmail.com</a>
        </div>

        <div className='flex items-center gap-1 text-base
        relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full
        after:bg-purple-500 hover:after:translate-x-full
        after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>GitHub</h3>
          <a href="https://github.com/ZiyanLi01"
          className='text-blue-500'> ZiyanLi01</a>
        </div>

        <div className='flex items-center gap-1 text-base
        relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full
        after:bg-purple-500 hover:after:translate-x-full
        after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>Linkedin</h3>
          <a href="https://www.linkedin.com/in/ziyan-7757b6105/"
          className='text-blue-500'> ziyan-7757b6105</a>
        </div>

      </div>
      <div>
        <h1 className='text-4xl'>Skills</h1>
        <div className='flex flex-col gap-3'>
        {Object.keys(ski).map((keyName, index) => {
          return(
            <div key={index}>
              <h3 className='text-lg'>{keyName}</h3>
              <div className='flex items-center gap-2 flex-wrap'>
                  {ski[keyName].map((skill,i) =>{
                    return(
                      <div key ={i} className='rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-2 text-xs'>
                        {skill}
                      </div>
                    )
                  })}
        
              </div>
            </div>
          )

        })}
      </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-4xl'>Just for fun</h1>
        <div className='flex items-center flex-wrap text-2xl p-4 gap-2'>
        <i className="fa-solid fa-dog"></i>
        <i className="fa-solid fa-person-skiing"></i>
        <i className="fa-solid fa-person-swimming"></i>
        <i className="fa-solid fa-camera"></i>
        <i className="fa-solid fa-book-open"></i>
        </div>
      </div>      
    </div>
  )
}
