import React, { useState } from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import menuIcon from '../icons/menu-icon.svg';
import PopUpMenu from './PopUpMenu';
import PhoneIcon from '../icons/phone-icon.svg';

const Navbar = ({ navlinks }) => {
  const [popUpState, setPopUpState] = useState(false);

  const onTriggerPopUp = () => setPopUpState(!popUpState);
  return (
    <div>
      <header className='flex items-center justify-center w-auto h-auto absolute top-5 left-0 right-0'>
        <nav className='flex items-center justify-between scrap-container'>
          <a href='#top' className='flex items-center'>
            <img src={logo} alt="logo/img" className='w-18 h-20 object-fill sm:w-16 sm:h-16' />
          </a>
          <ul className='flex items-center lg:hidden gap-7'>
            <li className='rounded-lg py-2 '>
              <a href='#home' className="text-lg text-slate-900 hover:bg-green-600 hover:text-slate-100 py-2 px-3 rounded-md hover:shadow-md font-bold drop-shadow-sm">
                Home
              </a>
            </li>
            <li className='rounded-lg py-2 '>
              <a href='#about' className="text-lg text-slate-900 hover:bg-green-600 hover:text-slate-100 py-2 px-3 rounded-md hover:shadow-md font-bold drop-shadow-sm">
                About
              </a>
            </li>
            <li className='rounded-lg py-2 '>
              <a href='#services' className="text-lg text-slate-900 hover:bg-green-600 hover:text-slate-100 py-2 px-3 rounded-md hover:shadow-md font-bold drop-shadow-sm">
                Services
              </a>
            </li>
            <li className='rounded-lg py-2 '>
              <a href='#contact' className="text-lg text-slate-900 hover:bg-green-600 hover:text-slate-100 py-2 px-3 rounded-md hover:shadow-md font-bold drop-shadow-sm">
                Contact
              </a>
            </li>
          </ul>
          <ul className='flex items-center lg:hidden'>
            <li><a href="#contact">
              <button type='button' className='button-emrald bg-green-600 text-white  font-bold shadow-xl  flex items-center justify-center py-3 px-7 gap-1'>
                <img width="50" height="50" src={PhoneIcon} alt="phone" className='w-6 text-black shadow-xl drop-shadow-xl' /> +91 9666622690</button>
            </a></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li>
              <button type="button" className='menu-button flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopUp}>
                <img src={menuIcon} alt="menu/svg" className='object-cover shadow-sm filter' />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopUpMenu navlinks={navlinks} popUpState={popUpState} />
    </div >
  )
}

export default Navbar