import React from 'react'
import '../index.css'
import styles from '../style'
import { Hero, Navbar, Stats, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from '../components';
import { BlogCard } from '../components/Blogs';
import {network_security, parent, router } from '../assets'


const Pricing = () => {
  return (
    <div className='bg-white w-full overflow-hidden '>
       {/* <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <Navbar />
         </div>
       </div> */}

      <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
          <div className='flex flex-col justify-center text-center gap-3 items-center w-full px-4 mb-7 mt-12'>
              <h1 className={`px-2 md:w-[70%] font-poppins text-center font-bold text-[25px] md:text-[40px] text-gray-900 w-full`}>
                  <span className='text-primary'> Writings </span> from our team
              </h1>
              <p className='font-poppins text-gray-600'>
                The latest industry news, interviews, technologies and resources
              </p>
          </div>

          <div className="max-w-[90rem] py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center ">
            <BlogCard title={'How to troubleshoot a router'} date={'Jan 6,2023 09:45am'} photo={router} category={'Networking'}
              message={'If you’re having issues connecting to the Internet, your router may be to blame. Regardless of whether... '} />
            <BlogCard title={'Learn how you can protect your home network'} date={'Jan 6,2023 09:45am'} photo={network_security} category={'Security'}
              message={'Home network security is becoming increasingly crucial as people purchase more wirelessly linked...'} />
            <BlogCard title={'Control what your kids are seeing online'} date={'Feb 23,2023 10:05pm'} photo={parent} category={'Child Protection'}
              message={'Setting tight Internet boundaries for your young children protects them against improper information...'} />
            <BlogCard title={'How to troubleshoot a router'} date={'Jan 6,2023 09:45am'} photo={router} category={'Networking'}
              message={'If you’re having issues connecting to the Internet, your router may be to blame. Regardless of whether... '} />
            <BlogCard title={'Learn how you can protect your home network'} date={'Jan 6,2023 09:45am'} photo={network_security} category={'Security'}
              message={'Home network security is becoming increasingly crucial as people purchase more wirelessly linked...'} />
            <BlogCard title={'Control what your kids are seeing online'} date={'Feb 23,2023 10:05pm'} photo={parent} category={'Child Protection'}
              message={'Setting tight Internet boundaries for your young children protects them against improper information...'} />
            </div>
          </div>

        </div>
      </div>


       <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Footer />
         </div>
       </div>

    </div>
  )
}

export default Pricing