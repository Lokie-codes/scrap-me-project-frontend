import React, { useState } from 'react'
import mapIcon from '../icons/map-icon.svg';
import facebookIcon from '../icons/facebook-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import contactPhoto from '../images/contact-photo.png';
import Forms from './Forms.jsx';

const ContactUs = ({ contact }) => {


    return (
        <div id='contact' className='contact-container bg-white mx-9 mt-3.5 rounded-lg p-5 gap-5'>
            <div className='contact-card grid items-center justify-center gap-3 sm:w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 rounded-lg'>
                <h1 className='text-center text-5xl sm:text-3xl py-3 text-black drop-shadow-xl md:text-4xl font-bold lg:text-5xl mt-5'>Contact Us</h1>
                <div className='flex items-center justify-center'>
                    <div className='w-1/3 sm:w-full md:w-full lg:w-2/3'>
                        <div className='grid gap-2 m-3 py-3 px-4 items-center'>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Name : {contact.name}</h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Phone : {contact.phone}</h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg'>Email : {contact.email} </h3>
                            <h3 className='bg-slate-200 px-4 py-5 rounded-md text-lg drop-shadow-lg flex gap-2'>Address : {contact.address}
                                <a href="https://maps.google.com/?cid=11661797318443512105&entry=gps" className='p-3 m-2 w-21'>
                                    <img src={mapIcon} alt="map/icon" className='w-6 ' />
                                </a>
                            </h3>
                        </div>
                        <div className='flex items-center justify-center gap-3 '>
                            <a target='_blank' href='https://www.facebook.com/profile.php?id=100095494356304&mibextid=2JQ9oc' className='flex items-center bg-slate-100 px-4 py-3 rounded-xl drop-shadow-lg mx-4 my-3'><img src={facebookIcon} alt="fb/icon" className='w-7' />@facebook</a>
                            <a target='_blank' href='https://instagram.com/scrapme.live?igshid=MzRlODBiNWFlZA==' className='flex items-center bg-slate-100 px-4 py-3 rounded-xl drop-shadow-lg mx-4 my-3'><img src={instagramIcon} alt="insta/icon" className='w-7' />@instagram</a>
                        </div>
                    </div>
                    <div className='w-1/2 m-3 p-5 sm:hidden md:hidden lg:w-1/2'>
                        <img src={contactPhoto} alt="contact/png" />
                    </div>

                </div>
                <Forms />
            </div>
        </div >
    )
}

export default ContactUs