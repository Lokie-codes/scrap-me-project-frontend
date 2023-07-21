import React from 'react'
import mapIcon from '../icons/map-icon.svg';
import facebookIcon from '../icons/facebook-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import contactPhoto from '../images/contact-photo.png';

const ContactUs = ({ contact }) => {
    return (
        <div className='contact-container bg-white mx-9 mt-3.5 rounded-lg p-5 gap-5'>
            <div className='contact-card grid items-center justify-center gap-3 sm:w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 rounded-lg'>
                <h1 className='text-center text-5xl sm:text-3xl py-3 text-black drop-shadow-xl md:text-4xl font-bold lg:text-5xl mt-5'>Contact Us</h1>
                <div className='flex items-center justify-center'>
                    <div className='w-1/3 sm:w-full md:w-full lg:w-2/3'>
                        <div className='grid gap-2 m-3 py-3 px-4 items-center'>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Name : {contact.name}</h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Phone : {contact.phone}</h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Email : {contact.email} </h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg flex gap-2'>Address : {contact.address}
                                <button>
                                    <img src={mapIcon} alt="map/icon" className='w-6 ' />
                                </button>
                            </h3>
                        </div>
                        <div className='flex items-center justify-center gap-3 '>
                            <button className='flex items-center bg-slate-100 px-4 py-3 rounded-xl drop-shadow-lg mx-4 my-3'><img src={facebookIcon} alt="fb/icon" className='w-7' />@facebook</button>
                            <button className='flex items-center bg-slate-100 px-4 py-3 rounded-xl drop-shadow-lg mx-4 my-3'><img src={instagramIcon} alt="insta/icon" className='w-7' />@instagram</button>
                        </div>
                    </div>
                    <div className='w-1/2 m-3 p-5 sm:hidden md:hidden lg:w-1/2'>
                        <img src={contactPhoto} alt="contact/png" />
                    </div>
                </div>
                <div className='grid items-center justify-center m-3 gap-3'>
                    <h2 className='text-xl text-center bg-slate-200 drop-shadow-lg rounded-lg px-3 py-2'>or get a callback from us</h2>
                    <form className='grid items-center justify-center bg-white rounded-lg px-3 py-4 gap-3'>
                        {/* Name */}
                        <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                            <label htmlFor="name" className='drop-shadow-md text-center m-1/2'>Name</label>
                            <input type="text" placeholder='John Doe' autoComplete='name' className='shadow-lg m-1/2 px-5 py-3 rounded-md w-full bg-slate-300' id='name' name='name' />
                        </div>
                        {/* Phone */}
                        <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                            <label htmlFor="phone" className='drop-shadow-md text-center m-1/2'>Phone</label>
                            <input type="tel" name="phone" id="phone" autoComplete='tel' className='shadow-lg m-1/2 px-5 py-3 rounded-md w-full bg-slate-300' placeholder='9876543210' />
                        </div>
                        {/* Email */}
                        <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                            <label htmlFor="email" className='drop-shadow-md text-center m-1/2'>Email</label>
                            <input type="email" name="email" id="email" autoComplete='email' className='shadow-lg m-1/2 px-5 py-3 rounded-md w-full bg-slate-300' placeholder='john.doe@example.com' />
                        </div>
                        {/* Location */}
                        <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                            <label htmlFor="location" className='drop-shadow-md text-center m-1/2 '>Location</label>
                            <input type="text" name="location" id="location" className='shadow-lg m-1/2 px-5 py-3 rounded-md w-full bg-slate-300' autoComplete='address-level2' placeholder='cityname' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className='rounded-xl drop-shadow-lg shadow-xl bg-green-500 m-2 p-3'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ContactUs