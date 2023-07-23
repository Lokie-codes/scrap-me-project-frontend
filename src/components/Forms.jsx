import React, { useState } from 'react'
import callBackImg from '../images/callback-photo.png';
import axios from 'axios';

const Forms = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", company: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Name : ' + formData.name + '\nEmail : ' + formData.email + '\nPhone : ' + formData.phone + '\nLocation : ' + formData.location + '\nCompany : ' + formData.company + '\nMessage : ' + formData.message + '\n');
        axios.post('http://localhost:8000/api/forms/', {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            company: formData.company,
            message: formData.message,
        }).then((res) => {
            setFormData((prevFormData) => ({ ...prevFormData, name: "", email: "", phone: "", location: "", company: "", message: "" }));
            alert('Form submitted successfully');
        }).catch((err) => {
            console.log(err.message);
        });
    };

    return (
        <div id='forms' className='flex items-center justify-center'>
            <div className='w-1/3 m-3 p-5 sm:hidden md:hidden lg:w-1/3'>
                <img src={callBackImg} alt="callback/png" />
            </div>
            <div className=' sm:w-fit md:w-fit lg:w-fit grid items-center justify-center m-3 gap-3'>
                {/* <div className='grid text-center justify-center bg-slate-200 drop-shadow-lg rounded-lg px-3 py-2 '>
                    <h2 className='text-2xl drop-shadow-lg'>Send your Message</h2>
                    <p className='text-md drop-shadow-md'>Please feel free to get in touch using the form below.</p>
                    <p>We'd love to hear from you.</p>
                </div> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWe-O6KAmoFbnm48oTmCLrxf_CICHzybd9hNm13-7Q-yKmgg/viewform?embedded=true" className='sm:w-fit' width="640" height="550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

               
            </div>
        </div>
    )
}

export default Forms