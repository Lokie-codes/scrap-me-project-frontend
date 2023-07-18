import React from 'react'
import backdropImage from '../images/hero-image.jpg';

const About = ({ about }) => {
    // console.log(about);
    return (
        <div className='about-container flex items-center justify-center '>
            <img src={backdropImage} className='backdrop-image' alt='backdrop/piles-of-scrap' />
            <div className='about-content mx-5 my-5 py-5 px-4 bg-cover grid gap-5 bg-gradient-to-b from-green-500 to-green-700'>
                <div>
                    <h1 className='text-center text-6xl sm:text-3xl py-3 text-black drop-shadow-xl md:text-4xl font-bold lg:text-5xl'>About Us</h1>
                </div>
                <div className='bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg py-7 px-5 flex items-center sm:grid sm:gap-3 md:grid md:gap-3 justify-center m-3'>
                    <h1 className='text-3xl w-2/5 text-center drop-shadow-lg sm:w-full md:w-full sm:text-2xl md:text-2xl'>Who We Are?</h1>
                    <p className='w-3/5 text-md drop-shadow-sm sm:w-full md:w-full'>{about.whoweare}</p>
                </div>
                <div className='bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg py-7 px-5 flex items-center sm:grid sm:gap-3 md:grid md:gap-3 justify-center m-3'>
                    <h1 className='text-3xl w-2/5 text-center drop-shadow-lg sm:w-full md:w-full order-last sm:order-1 md:order-1 sm:text-2xl md:text-2xl'>What We Do?</h1>
                    <p className='w-3/5 text-md drop-shadow-sm sm:w-full md:w-full sm:order-2 md:order-2'>{about.whatwedo}</p>
                </div>
                <div className='bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg py-7 px-5 flex items-center sm:grid sm:gap-3 md:grid md:gap-3 justify-center m-3'>
                    <h1 className='text-3xl w-2/5 text-center drop-shadow-lg sm:w-full md:w-full md:text-2xl sm:text-2xl'>Why we exist?</h1>
                    <p className='w-3/5 text-md drop-shadow-sm sm:w-full md:w-full'>{about.whyweexist}</p>
                </div>
            </div>
        </div>
    )
}

export default About