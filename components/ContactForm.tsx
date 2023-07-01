"use client"

import React, { useState } from 'react'
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xdovqgwn");
    const [subject, setSubject] = useState('');

    if (state.succeeded) {
        return <div className='md:h-[75vh] flex items-center text-lg font-semibold text-center w-full md:w-auto px-10 md:shadow py-6 rounded-lg'>Thanks for your submission</div>;
    }

    return (
        <div className='md:h-[75vh] w-full md:w-auto px-6 md:px-10 md:shadow py-6 rounded-lg'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div>
                        <label htmlFor='name'>Ditt namn</label>
                        <input type='text' id='name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Din e-post</label>
                        <input id="email" type="email" name="email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label htmlFor='_subject'>Ämne</label>
                    <input type='text' name="_subject" onChange={(e) => setSubject(e.target.value)} value={subject} />
                </div>
                <div className='mt-5'>
                    <label htmlFor='message'>Meddelande</label>
                    <textarea id="message" name="message" className='md:h-56' placeholder="Skriv dina tankar här..." rows={5} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className='mt-5'>
                    <button className='flex gap-2 bg-primary w-[150px] cursor-pointer py-3 justify-center rounded-full' type="submit" disabled={state.submitting}>
                        <div className='text-white font-semibold'>Skicka</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm