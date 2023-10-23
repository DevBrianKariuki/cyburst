import React from 'react'
import '../index.css'
import styles from '../style'
import { Hero, Navbar, Stats, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from '../components';
import { blackfacebook, blackinstagram, blacktiktok, blacktwitter} from '../assets';


const Pricing = () => {
  return (
    <div className='bg-white w-full overflow-hidden '>
       {/* <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <Navbar />
         </div>
       </div> */}

      <div className={`bg-white mt-24 md:mt-24 ${styles.paddingX}, ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <div className='flex flex-row justify-center items-center w-full px-4 mt-12'>
            <h1 className={`px-2 md:w-[70%] font-poppins text-center font-bold text-[28px] md:text-[40px] text-gray-900 w-full`}>
                We are here to assist you with any 
                <span className='text-primary'> questions </span>,
                <span className='text-primary'> enquiries </span>,
                <span className='text-primary'> or support </span>
                you may need
            </h1>
          </div>


        <section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 ${styles.flexStart} flex-col md:p-8 p-4 rounded-xl border-gray-200 bg-gray-100`}>
              <div className='flex flex-col'>
                <h3 className="font-poppins font-bold text-[24px] md:text-[28px] text-gray-900 w-full">
                  Talk to us
                </h3>
                <p className="text-sm text-gray-600 font-poppins font-normal ">
                  We will get back to you immediately
                </p>
                <form className='flex flex-col items-start justify-betweeen gap-5 my-4'>
                    <input type="text" className='font-poppins focus:border-primary border-gray-300 text-sm focus:outline-none w-[100%] rounded-md' placeholder='Your name'/>
                    <input type="text" className='font-poppins focus:border-primary border-gray-300 text-sm focus:outline-none w-[100%] rounded-md' placeholder='Your Phone'/>
                    <textarea type="text" className='font-poppins focus:border-primary border-gray-300 text-sm focus:outline-none w-[100%] rounded-md' placeholder='Your message goes here...'/>
                    <button className='bg-primary font-poppins p-4 w-[60%] rounded-md text-white' type='submit'>Send Message</button>
                </form>
              </div>
            </div>
            <div className={`flex-1 flex items-start flex-col justify-between bg-gray-100 md:py-4 md:px-8 p-4 rounded-xl border-gray-200 md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                <h3 className="font-poppins font-bold text-[24px] md:text-[28px] text-gray-900 w-full py-4">
                  Here are our Contacts
                </h3>
                <div className='flex flex-col gap-5 md:gap-16 md:flex-row'>
                  <div className='flex flex-col gap-1'>
                    <a href='tel://+254745232405' className='text-primary text-[18px] font-semibold font-poppins'>Phone</a>
                    <p className='font-poppins cursor-pointer font-medium text-gray-800 text-[18px]'>(+254) 745 232405</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h4 className='text-primary text-[18px] font-semibold font-poppins'>Email</h4>
                    <a href='mailto:info@cyburst.co.ke' className='font-poppins font-medium text-gray-800 text-[18px]'>info@cyburst.co.ke</a>
                  </div>
                </div>
                <div className='flex flex-col pt-5'>
                    <h4 className='text-primary text-[18px] font-semibold font-poppins'>Location</h4>
                    <a href='#' className='font-poppins font-medium text-gray-800 text-[18px]'>Lumumba Drive,Roysambu, Nairobi</a>
                </div>
                <div className='flex flex-col pt-5'>
                    <h4 className='text-primary text-[18px] font-semibold font-poppins'>Connect with us on our socials</h4>
                    <div className='flex flex-row gap-3 py-2'>
                      <a href='https://facebook.com/cyburst_internet'>
                        <img src={blackfacebook} className=' text-black contain w-[80%]' />
                      </a>
                      <a href='https://instagram.com/cyburst_internet'>
                        <img src={blackinstagram} className=' text-black contain w-[80%]' />
                      </a>
                      <a href='https://twitter.com/cyburst_internet'>
                        <img src={blacktwitter} className=' text-black contain w-[80%]' />
                      </a>
                      <a href='https://tiktok.com/cyburst_internet'>
                        <img src={blacktiktok} className=' text-black contain w-[80%]' />
                      </a>
                    </div>
                </div>
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

export default Pricing