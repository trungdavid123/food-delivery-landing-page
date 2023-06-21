import React from 'react'

const Services = () => {
    return (
        <div className='h-auto bg-[#FCF4F4]' id='services'>
            <div className='py-10'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-2xl relative font-semibold mb-6 text-primary'>Tjänster
                        <span className="absolute -bottom-3 left-6 w-[50px] h-[2px] bg-primary"></span>
                    </h2>
                    <div className='px-3 md:w-3/5 text-center'>
                        <p className='text-md font-medium leading-6'>Det är dags att beställa hem din mat för billigare leverans, och börja leva på nuet! Lägg din tid på något kul, så levarerar vi hem din mat till dig. Just nu levarerar vi om i hela Kristianstad, </p>
                    </div>
                </div>
                <div className='px-5 gap-5 lg:px-20 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 md:10 lg:gap-16 mt-10'>
                    <div className='shadow h-[35vh] flex flex-col gap-2 px-5 py-5 bg-white rounded-lg'>
                        <div className="mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#552828]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <h3 className='text-xl text-[#552828] font-bold'>Måltidsleverans</h3>
                        <p className='text-sm text-[#545252]'>Hungriga erbjuder bekväma och pålitliga hemleveranser av färdiga måltider. Välj från ett brett utbud av restauranger och rätter, och få maten levererad direkt till din dörr.</p>
                    </div>

                    <div className='shadow h-[35vh] flex flex-col gap-2 px-5 py-5 bg-white rounded-lg'>
                        <div className='mb-7'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-[#552828]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                        </div>
                        <h3 className='text-xl text-[#552828] font-bold'>Snabbmatleverans</h3>
                        <p className='text-sm text-[#545252]'>Ibland har man bara lust att njuta av snabbmat hemma. Hungriga erbjuder snabbmatleverans från olika restauranger, inklusive hamburgare, pizza, asiatisk mat och mycket mer.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services