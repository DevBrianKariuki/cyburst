import React from 'react'
import '../index.css'
import styles from '../style'
import {  Footer } from '../components';
import { blackfacebook, people03, blackinstagram, blacktiktok, blacktwitter, people02} from '../assets';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <div className='bg-white w-full overflow-hidden '>

      <div className={`bg-white mt-24 md:mt-18 ${styles.paddingX}, ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           
        <section id='single-blog' className={`${styles.paddingY} ${styles.flexCenter} md:w-[80%] flex-col`}>

            <div className='w-full flex justify-center px-4 text-center items-start flex-col mb-0 '>
              <h1 className={`px-2 md:w-[90%] font-poppins font-bold text-[26px] text-left md:text-[40px] text-gray-900 w-full`}>
              Control what your kids are seeing online
              </h1>
              <div className='flex'>
                <div className='flex flex-row justify-center items-center mt-6'>
                  <img src={people02} className='w-[48px] h-[48px] object-cover rounded-full' />
                  <div className='flex flex-col items-start ml-4' >
                    <h4 className='font-poppins font-semibold text-[18px]  text-gray-900'>Robert Maina</h4>
                    <p className='font-poppins font-normal text-[14px] text-gray-500'>11 January 2023 | 5 mins read</p>
                  </div>
                </div>

                <div className='flex flex-row gap-1 mt-2 hidden'>
                  <Link to={'https://facebook.com/cyburst_internet'}>
                    <img src={blackfacebook} className='text-black contain w-[70%]' />
                  </Link>
                  <Link to={'https://instagram.com/cyburst_internet'}>
                    <img src={blackinstagram} className='text-black contain w-[70%]' />
                  </Link>
                  <Link to={'https://twitter.com/cyburst_internet'}>
                    <img src={blacktwitter} className='text-black contain w-[70%]' />
                  </Link>
                  <Link to={'https://tiktok.com/cyburst_internet'}>
                    <img src={blacktiktok} className='text-black contain w-[70%]' />
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-full my-6 px-2'>
              <img src={people03} className='w-[100%] h-[100%] md:w-[100%] contain' />
            </div>
        </section>
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

export default SingleBlog;