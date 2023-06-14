import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='h-auto bg-white' id='about'>
            <div className='lg:py-16 lg:px-28 px-5 py-20 flex md:gap-16 flex-col-reverse gap-10 md:flex-row'>
                <div>
                    <Image src='/postnord.svg' className='h-[50vh] object-cover rounded-lg' width={500} height={600} alt='img' />
                </div>
                <div className='md:w-[40vw] flex flex-col gap-4'>
                    <div className='w-30'>
                        <h2 className='text-2xl relative font-semibold mb-6 text-primary'>About Us
                            <span className="absolute -bottom-3 left-6 w-[50px] h-[2px] bg-primary"></span>
                        </h2>
                    </div>
                    <p className='text-sm font-medium leading-6'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-sm leading-6'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs