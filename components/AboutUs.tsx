"use client";

import Image from 'next/image'
import React from 'react'

interface IProps {
    title: String,
    desc_1: String,
    desc_2: String,
    bg_img: any
}

const AboutUs: React.FC<IProps> = ({ title, desc_1, desc_2, bg_img }) => {
    
    const loaderProp = ({ src }: { src: string }) => {
        return src;
    }
    return (
        <div className='h-auto bg-white' id='about'>
            <div className='lg:py-16 lg:px-28 px-5 md:pt-20 md:pb-20 flex md:gap-16 flex-col-reverse gap-10 md:flex-row'>
                <div>
                    <Image loader={loaderProp}
                        src={`${process.env.STRAPI_PUBLIC_URL}${bg_img.data.attributes.url}`} width={500} height={300} className='h-[50vh] object-cover rounded-lg' alt='img' />
                </div>
                <div className='md:w-[40vw] flex flex-col gap-4'>
                    <div className='w-30'>
                        <h2 className='text-2xl relative font-semibold mb-6 text-primary'>{title}
                            <span className="absolute -bottom-3 left-6 w-[50px] h-[2px] bg-primary"></span>
                        </h2>
                    </div>
                    <p className='text-sm font-medium leading-6'>
                        {desc_1}
                    </p>
                    <p className='text-sm leading-6'>
                        {desc_2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs