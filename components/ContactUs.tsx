'use client'

import React from 'react'
import ContactForm from './ContactForm'

interface Iprops {
    title: string,
    desc: string,
    location: string,
    email: string,
    phone: string,
    url: string
}

const ContactUs: React.FC<Iprops> = ({ title, desc, location, email, phone, url }) => {



    const handleCall = () => {
        window.location.href = `tel:${phone}`;
    };

    const handleEmail = () => {
        window.location.href = `mailto:${email}`;
    };


    return (
        <div id='contact-us'>
            <div className='py-10'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-2xl relative font-semibold mb-6 text-primary'>{title}
                        <span className="absolute -bottom-3 left-10 w-[50px] h-[2px] bg-primary"></span>
                    </h2>
                    <div className='px-3 mb-2 md:w-3/5 text-center'>
                        <p className='text-md font-medium leading-6'>{desc}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:flex-row justify-center gap-4 mt-5 '>
                    <ContactForm />
                    <div className='w-full md:h-[75vh]  md:w-[580px] md:mt-0 lg:w-[40%] md:shadow py-6 rounded-lg'>
                        <div className='flex flex-col w-full px-10'>
                            <div className='flex-col gap-5 flex'>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-[#FCF4F4] p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg text-primary font-bold'>Plats:</h3>
                                        <p className='text-sm'>{location}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-[#FCF4F4] p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div onClick={handleEmail} className='cursor-pointer'>
                                        <h3 className='text-lg text-primary font-bold'>E-post:</h3>
                                        <p className='text-sm'>{email}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-[#FCF4F4] p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div onClick={handleCall} className='cursor-pointer'>
                                        <h3 className='text-lg text-primary font-bold'>Ringa:</h3>
                                        <p className='text-sm'>{phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <iframe className='w-full' src={url} width="600" height={270}  loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs