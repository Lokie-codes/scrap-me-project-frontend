import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-container  bg-black text-slate-300 grid gap-4'>
      <div className='bg-black'>
        <nav className='flex items-center justify-center mt-5 gap-10'>
          <ul className='grid gap-1'>
            <h3 className='text-lg'>Navigate</h3>
            <li><a href='#home' className='nav-button'>Home</a></li>
            <li><a href='#about' className='nav-button'>About</a></li>
            <li><a href='#services' className='nav-button'>Services</a></li>
            <li><a href='#contact' className='nav-button'>Contact</a></li>
          </ul>

          <ul className='grid gap-1'>
            <h3 className='text-lg'>Follow us</h3>
            <li><a href='#' className='nav-button'>Facebook</a></li>
            <li><a href='#' className='nav-button'>Instagram</a></li>
            <li><a href='#forms' className='nav-button'>Send Message</a></li>
            <li><a href='#contact' className='nav-button'>Contact us</a></li>

          </ul>



          <ul className='grid gap-1'>
            <h3 className='text-lg'>Company</h3>
            <li><a href='#about' className='nav-button'>About</a></li>
            <li><a href='#forms' className='nav-button'>Callback</a></li>
            <li><a href='#contact' className='nav-button'>Contact</a></li>
            <li><a href='https://maps.google.com/?cid=11661797318443512105&entry=gps' className='nav-button'>Location</a></li>
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