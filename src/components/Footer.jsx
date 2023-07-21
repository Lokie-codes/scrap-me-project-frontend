import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-container  bg-black text-slate-300 grid gap-4'>
      <div className='bg-black'>
        <nav className='flex items-center justify-center mt-5 gap-10'>
          <ul className='grid gap-1'>
            <h3 className='text-lg'>Navigate</h3>
            <li><NavLink to={'#'} className='nav-button'>Home</NavLink></li>
            <li><NavLink to={''} className='nav-button'>About</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Services</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Contact</NavLink></li>
          </ul>

          <ul className='grid gap-1'>
            <h3 className='text-lg'>Follow us</h3>
            <li><NavLink to={'#'} className='nav-button'>Facebook</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Instagram</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Send Query</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Contact us</NavLink></li>

          </ul>



          <ul className='grid gap-1'>
            <h3 className='text-lg'>Company</h3>
            <li><NavLink to={'#'} className='nav-button'>About</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Callback</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Contact</NavLink></li>
            <li><NavLink to={''} className='nav-button'>Location</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className='flex items-center justify-center bottom-0'>
        <p>© 2022 Vamshi Enterprises. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer