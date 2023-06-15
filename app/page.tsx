
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll/modules';

export default function Home() {
  return (
    <div id='home'>
      <Layout>
        <main className='h-[100vh] -mb-[1rem]'>
          <div className="relative h-full bg-[url('https://dms-api.ntm.eu/api/v1/images/r13qxz3j/smart/width/980/height/551/as/webp')] bg-no-repeat bg-left bg-fixed bg-cover">
            <div className=" bg-black w-full h-full md:h-full bg-opacity-30 md:bg-opacity-50 flex items-center justify-center md:px-12">
              <div className='px-4 flex flex-col justify-center h-full md:w-1/2'>
                <div className="flex flex-col gap-3">
                  <h1 className=' text-4xl md:text-5xl text-white font-bold md:w-4/5'>Better Solution For Your Business</h1>
                  <span className='text-white text-md md:text-xl'>We are team of talented designers making websites with Bootstrap</span>
                  <span className='text-white text-sm mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id non temporibus quam ipsam facere dolorem debitis eius iusto sit dignissimos pariatur repellendus fugit numquam dolore soluta optio, in sed commodi.</span>
                  <div>
                    <a href='#contact-us' className='text-primary bg-white py-2 px-5 rounded transition md:px-5 text-lg hover:-translate-y-2 font-semibold' >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className='hidden md:block'>
                <Image alt="bild" className="rounded-lg object-cover object-left min-[768px]:w-[40vw]" src="/right-bg-6.png"
                  width={450} height={450} />
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
  )
}
