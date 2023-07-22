import React, { useState } from 'react'
import callBackImg from '../images/callback-photo.png';

const Forms = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", company: "", whatsapp: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Name : ${formData.name} ');
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='w-1/3 m-3 p-5 sm:hidden md:hidden lg:w-1/3'>
                <img src={callBackImg} alt="callback/png" />
            </div>
            <div className=' sm:w-fit md:w-fit lg:w-fit grid items-center justify-center m-3 gap-3'>
                <div className='grid text-center justify-center bg-slate-200 drop-shadow-lg rounded-lg px-3 py-2 '>
                    <h2 className='text-2xl drop-shadow-lg'>Send your Message</h2>
                    <p className='text-md drop-shadow-md'>Please feel free to get in touch using the form below.</p>
                    <p>We'd love to hear from you.</p>
                </div>
                <form onSubmit={handleSubmit} className='grid items-center justify-center bg-white rounded-lg px-3 py-4 gap-3'>
                    {/* Name */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="name" className='drop-shadow-md text-center w-1/4'>Name</label>
                        <input type="text" required placeholder='John Doe' autoComplete='name' value={formData.name} onChange={handleChange} className='shadow-lg px-5 py-3 rounded-md w-fit bg-slate-300' id='name' name='name' />
                    </div>
                    {/* Phone */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="phone" className='drop-shadow-md text-center w-1/4'>Phone</label>
                        <input type="tel" required name="phone" id="phone" autoComplete='tel' value={formData.phone} onChange={handleChange} className='shadow-lg m-1/2 px-5 py-3 rounded-md w-fit bg-slate-300' placeholder='9876543210' />
                    </div>
                    {/* Email */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="email" className='drop-shadow-md text-center w-1/4'>Email</label>
                        <input type="email" required name="email" id="email" autoComplete='email' value={formData.email} onChange={handleChange} className='shadow-lg px-5 py-3 rounded-md w-fit bg-slate-300' placeholder='john.doe@example.com' />
                    </div>
                    {/* Address */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="location" className='drop-shadow-md text-center w-1/4 '>Address</label>
                        <input type="text" name="location" required id="location" autoComplete="street-address" className='shadow-lg  px-5 py-3 rounded-md w-fit bg-slate-300' value={formData.location} onChange={handleChange} placeholder='cityname' />
                    </div>
                    {/* Company Name */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="company" className='drop-shadow-md  w-1/4'>Company <span className='text-sm'>(optional)</span></label>
                        <input type="text" placeholder='abc inc.,' autoComplete='organization' value={formData.company} onChange={handleChange} className='shadow-lg  px-5 py-3 rounded-md w-fit bg-slate-300' id='company' name='company' />
                    </div>
                    {/* Message */}
                    <div className='flex items-center justify-center gap-2 px-3 py-2 mx-1'>
                        <label htmlFor="message" className='drop-shadow-md text-center w-1/4'>Message </label>
                        <textarea type="textarea" placeholder='your message here' value={formData.message} onChange={handleChange} className='shadow-lg h-[15vh] px-5 py-3 rounded-md w-fit bg-slate-300 ' id='message' name='message' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <button type="submit" className='rounded-xl drop-shadow-lg shadow-xl bg-green-500 m-2 p-3'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forms