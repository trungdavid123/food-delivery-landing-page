import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hemkörning från restaurang | Hungriga</title>
        <meta name="description" content="Hungriga är ett företag som vill skapa möjligheten för alla, små som stora, att kunna beställa matleveranser till hemmet. Tanken är att erbjuda ett billigare alternativ som alla kan dra nytta av. Även restauranger kan dra fördel av det billigare alternativet, vilket i sin tur gör att de kan förhandla fram mer förmånliga priser"></meta>
      </Head>
      <div id='home'>
        <Layout>
          <main className='h-[100vh] -mb-[1rem]'>
            <div className="h-full z-10 bg-[url('/bg-home-main.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
              <div className="w-full h-full bg-slate-900 bg-opacity-40 flex items-center md:px-12">
                <div className='px-4 flex flex-col justify-center h-full md:w-1/2'>
                  <div className="flex flex-col gap-3">
                    <h1 className=' text-4xl md:text-5xl text-white font-bold md:w-4/5'>Beställ din mat och får det till din<span className='text-yellow-400'> dörr</span>! </h1>
                    <span className='text-white text-md md:text-xl mb-6'>Hungriga är ett företag som vill skapa möjligheten för alla, små- som stora att kunna beställa hem sin mat</span>
                    <div>
                      <a href='#contact-us' className='text-primary bg-white py-3 px-5 rounded transition md:px-5 text-lg hover:-translate-y-2 font-semibold' >
                        Kontakt oss
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AboutUs />
          <Services />
          <ContactUs />
          <Footer />
        </Layout>
      </div>

    </>
  )
}
