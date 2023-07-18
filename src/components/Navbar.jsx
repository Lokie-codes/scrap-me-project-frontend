import React, { useState } from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import menuIcon from '../icons/menu-icon.svg';
import PopUpMenu from './PopUpMenu';

const Navbar = ({ navlinks }) => {
  const [popUpState, setPopUpState] = useState(false);

  const onTriggerPopUp = () => setPopUpState(!popUpState);
  return (
    <div>
      <header className='flex items-center justify-center w-auto h-auto absolute top-5 left-0 right-0'>
        <nav className='flex items-center justify-between scrap-container'>
          <NavLink to={`/`} className='flex items-center'>
            <img src={logo} alt="logo/img" className='w-18 h-20 object-fill sm:w-16 sm:h-16' />
          </NavLink>
          <ul className='flex items-center lg:hidden gap-7'>
            {/* <li><NavLink to={'#'} className='nav-button'>Home</NavLink></li>
            <li><NavLink to={''} className='nav-button'>About</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Services</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Contact</NavLink></li> */}
            {navlinks.map((val, idx) => (
              <li key={idx} className='rounded-lg py-2 '><NavLink to={val} className="text-lg text-slate-900 hover:bg-green-600 hover:text-slate-100 py-2 px-2 rounded-md hover:shadow-md font-bold hover:font-normal">{val.link}</NavLink></li>
            ))}
          </ul>
          <ul className='flex items-center lg:hidden'>
            <li><button type='button' className='button-emrald bg-green-600 text-black   text-base  flex items-center justify-center py-3 px-7 gap-1'>
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone" className='w-6 ' /> +91 9876543210</button></li>
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
    </div>
  )
}

export default Navbar