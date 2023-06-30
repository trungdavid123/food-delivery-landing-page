import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Services from '@/components/Services'

import Head from 'next/head'


async function getData() {
  const res = await fetch(`${process.env.STRAPI_PUBLIC_URL}/api/main-texts/1/?populate=*`, { cache: "no-cache" });
  return res.json();
}

export default async function Home() {
  const data = getData();
  const [allData] = await Promise.all([data])
  const { title, description, background, about_us_title, about_us_desc_1, about_us_desc_2, about_us_img, service_title, service_desc, service_card_title_1, service_card_desc_1, service_card_title_2, service_card_desc_2, contact_us_title, contact_us_desc, contact_us_location, contact_us_mail, contact_us_phone, google_map_url } = allData.data.attributes


  return (
    <>
      <Head>
        <title>Hemkörning från restaurang | Hungriga</title>
        <meta name="description" content="Hungriga är ett företag som vill skapa möjligheten för alla, små som stora, att kunna beställa matleveranser till hemmet. Tanken är att erbjuda ett billigare alternativ som alla kan dra nytta av. Även restauranger kan dra fördel av det billigare alternativet, vilket i sin tur gör att de kan förhandla fram mer förmånliga priser"></meta>
      </Head>
      <div id='home'>
        <Layout>
          <main className='h-[100vh] -mb-[1rem]'>
            <div style={{
              backgroundImage: `url(${process.env.STRAPI_PUBLIC_URL}${background.data.attributes.url})`,
            }} className={`absolute inset-0 h-full z-10  bg-no-repeat bg-center md:bg-fixed bg-cover`}>
              <div className="w-full h-full bg-slate-900 bg-opacity-40 flex items-center md:px-12">
                <div className='px-4 flex flex-col justify-center h-full md:w-1/2'>
                  <div className="flex flex-col gap-3">
                    <h1 className=' text-4xl md:text-5xl text-white font-bold md:w-4/5' dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <span className='text-white text-md md:text-xl mb-6'>{description}</span>
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
          <AboutUs title={about_us_title} desc_1={about_us_desc_1} desc_2={about_us_desc_2} bg_img={about_us_img} />
          <Services title={service_title} desc={service_desc} card_title_1={service_card_title_1} card_title_2={service_card_title_2} card_desc_1={service_card_desc_1} card_desc_2={service_card_desc_2} />
          <ContactUs title={contact_us_title} desc={contact_us_desc} location={contact_us_location} email={contact_us_mail} phone={contact_us_phone} url={google_map_url} />
          <Footer />
        </Layout>
      </div>

    </>
  )
}
