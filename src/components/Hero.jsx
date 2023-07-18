import React from 'react'

const Hero = ({ hero: { title, subTitle, text, btn1, btn2, img } }) => {
  return (
    <div className='flex flex-col h-auto w-auto '>
      <div id='hero-container' className=' scrap-container  grid items-start justify-items-center '>
        {/*   Text on the image */}
        <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
          <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl'>{title}</h1>
          <h1 className='text-5xl  lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl'>{subTitle} </h1>
          <p className='text-base my-5 text-center sm:text-sm'>{text} </p>
          <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
            <button type="button" className='button-emrald shadow-sm text-base'>{btn1}</button>
            {/* <button type="button" className='button-light'>{btn2}</button> */}
          </div>
        </div>

        {/* Hero Image */}
        <div className='flex items-center mb-11 '>
          <img src={img} alt="dashboard/image" className='rounded-lg h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[42vh] sm:object-contain heroimage opacity-80' />
        </div>
      </div>
    </div>
  )
}

export default Hero