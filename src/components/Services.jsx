import React from 'react'

const Services = ({ services }) => {
    return (
        <div id='services' className='services-container bg-gradient-to-b from-green-600 via-green-500 to-green-600 rounded-lg mx-7 my-5 py-5 px-4 bg-cover '>
            <h1 className='text-center text-5xl sm:text-3xl py-3 text-black drop-shadow-xl md:text-4xl font-bold lg:text-5xl'>Our Services</h1>
            <p className='text-center text-lg sm:text-md drop-shadow-sm md:text-md lg:text-lg'>We buy all your recyclables at best price</p>
            <div className='flex flex-row sm:flex-col md:flex-col lg:flex-row flex-wrap items-center justify-center'>
                {services.map((service) => {
                    return (
                        <div key={service.id} className='bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg gap-1 py-4 px-3 flex flex-col items-center sm:grid sm:gap-3 md:grid md:gap-3 justify-center m-3'>

                            <div className='m-1 p-1'>
                                <img src={service.img} alt={service.service} className='w-[45vh] h-[30vh] ' />
                            </div>
                            <div className=''>
                                <h1 className='text-xl text drop-shadow-lg sm:text-xl sm:text-center md:text-2xl'>{service.service}</h1>
                                {/* <p className='text-md drop-shadow-sm text-center'>{service.description}</p> */}
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Services