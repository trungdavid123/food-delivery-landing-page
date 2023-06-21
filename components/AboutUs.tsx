import Image from 'next/image'
import React from 'react'



const AboutUs = () => {
    return (
        <div className='h-auto bg-white' id='about'>
            <div className='lg:py-16 lg:px-28 px-5 md:pt-20 md:pb-20 flex md:gap-16 flex-col-reverse gap-10 md:flex-row'>
                <div>
                    <Image src='/left-image.jpg' className='h-[50vh] object-cover rounded-lg' width={500} height={600} alt='img' />
                </div>
                <div className='md:w-[40vw] flex flex-col gap-4'>
                    <div className='w-30'>
                        <h2 className='text-2xl relative font-semibold mb-6 text-primary'>Om oss
                            <span className="absolute -bottom-3 left-6 w-[50px] h-[2px] bg-primary"></span>
                        </h2>
                    </div>
                    <p className='text-sm font-medium leading-6'>Hungriga är ett företag som vill skapa möjligheten för alla, små som stora, att kunna beställa matleveranser till hemmet. Tanken är att erbjuda ett billigare alternativ som alla kan dra nytta av. Även restauranger kan dra fördel av det billigare alternativet, vilket i sin tur gör att de kan förhandla fram mer förmånliga priser
                    </p>
                    <p className='text-sm leading-6'>Som kund hos oss är du alltid varmt välkommen att ladda ner vår app. Genom appen kan du enkelt köpa mat direkt. Som företagare kan du bli en del av vår plattform genom att kontakta oss, och vi tar hand om medlemskapsprocessen åt dig.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs