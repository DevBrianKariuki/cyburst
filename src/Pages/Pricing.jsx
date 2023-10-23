import React from 'react'
import '../index.css'
import styles from '../style'
import { Hero, Navbar, Stats, Pricing, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from '../components';
import { search } from '../assets/'
import { PriceCard } from '../components/Pricing';

const PricingPage = () => {
  return (
    <div className='bg-white w-full overflow-hidden '>
       {/* <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <Navbar />
         </div>
       </div> */}

      <div className={`bg-white mt-24 md:mt-18 ${styles.paddingX}, ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           
        <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className='w-full flex justify-center text-center items-center flex-col mb-0 '>
              <h1 className={`px-2 md:w-[70%] font-poppins font-bold text-[28px] md:text-[40px] text-gray-900 w-full`}>
                You can 
                <span className='text-primary'> check</span> below if your 
                <span className='text-primary'> area</span> has our 
                <span className='text-primary'> network coverage</span>
              </h1>
              <div className='flex flex-row justify-between p-2 mt-8 border border-gray-300 w-[100%] md:w-[60%] rounded-full'>
                <input className='border-none w-[80%] font-poppins outline-none focus:outline-none px-2' type='text' placeholder='Enter your location...' />
                <button type='submit' className=' flex items-center justify-center bg-primary rounded-full'>
                  <img src={search} className='w-[60%] h-[60%] contain' />
                </button>
              </div>
            </div>

        </section>

          <section className={` ${styles.flexCenter} flex-col relative mb-10`}>
            <div className='w-full flex justify-center text-center items-center flex-col mb-0 relative z-[1]'>
              <h1 className={`px-2 md:w-[70%] mt-10 font-poppins font-bold text-[32px] md:text-[40px] text-primary w-full`}>
                Our Plans
              </h1>
              <p className={`${styles.paragraph} md:w-[60%] px-2 pt-2 text-gray-200`}>
                At Cyburst, we offer transparent and competitive pricing plans to ensure that you get 
                the best value for your investment.
              </p>
            </div>

            {/* <!-- Pricing --> */}
            <div className="max-w-[90rem] py-4sm:px-6 lg:px-8 lg:py-3 mx-auto">
              {/* <!-- Grid --> */}
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center">
                <PriceCard  title={'HOME PLAN'} speed={5} price={'1,500'} />
                <PriceCard title={'SCHOOL PLAN'} speed={10} price={'2,000'} />
                <PriceCard title={'BUSINESS PLAN'} speed={20} price={'2,500'} />
              </div>
            </div>
            {/* // <!-- End Pricing --> */}

          </section>

         </div>
      </div>

       <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col lg:mx-0 bg-primary md:rounded-none box-shadow`}>
              <div className='flex-1 flex flex-col'>
                <h2 className={`text-center md:text-left font-poppins font-semibold text-[32px] text-gray-900 w-full`}>Ready to get started?</h2>
                <p className={`font-poppins font-normal text-center md:text-left text-white text-[16px] leading-[30.8px] max-w-[470px] mb-5 mt-5`}>If you have any queries or enquiries you would like to enquire about
                  please don't hesitate to reach out to us</p>
              </div>

              <a href={`/contact`}>
                <button className="font-poppins hover:font-bold bg-white text-[16px] rounded-md uppercase font-medium text-primary p-4">
                  Get a free quote
                </button>
              </a>
            </section>
           <Footer />
         </div>
       </div>

    </div>
  )
}

export default PricingPage