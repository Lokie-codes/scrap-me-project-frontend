import React from 'react'
import { NavLink } from 'react-router-dom';

const PopUpMenu = ({ navlinks, popUpState }) => {
    return (
        <div>
            <nav className={`
            fixed top-14 right-14 bg-green-600 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg w-45 h-auto py-5 px-9 hidden lg:flex items-center justify-center opacity-100 z-50 transition-transform duration-300 ${popUpState ? 'lg:showpopup':'lg:hidepopup'}
            `}>
                <ul className='flex items-center flex-col gap-3 '>
                    {navlinks?.map((val, i) => (
                        <li key={i} className='sm:text-white sm:font-semibold  hover:text-black sm:drop-shadow-2xl'><NavLink to={'#'}>{val.link}</NavLink></li>
                    ))}
                    <li><button type="button" className='button-light flex items-center justify-center gap-3 sm:w-auto px-6 py-2 rounded-full'><img width="50" height="50" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" className='w-5' /> +91 9876543210</button></li>
                </ul>

            </nav>
        </div>
    )
}

export default PopUpMenu