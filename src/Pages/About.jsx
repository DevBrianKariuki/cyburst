import React from 'react'
import '../index.css'
import styles from '../style'
import { Hero, Navbar, Stats, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from '../components';
import { introduction, mission, history, team, home, business, enterprise } from '../assets';


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

         <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
            <div className='w-full flex justify-center text-center items-center flex-col mb-0 relative z-[1]'>
              <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
                Services
              </h2>
              <p className={`${styles.paragraph} max-w-[90%] mt-5`}>
                At Cyburst, we offer a range of flexible and affordable internet service packages 
                designed to cater to diverse needs. Whether you're a residential customer looking for 
                reliable home internet or a business in need of high-speed connectivity, 
                we have a solution for you. Our services include:
              </p>
            </div>

            {/* <!-- Pricing --> */}
            <div className="max-w-[90rem] overflow-hidden py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
              {/* <!-- Grid --> */}
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center">
                <InfoCard title={'Home Internet'} icon={home}  text={'Enjoy lightning-fast speeds, unlimited data, and a seamless online experience for your home.'}/>
                <InfoCard title={'Business Internet'} icon={business} text={'Power your business with reliable and secure internet connections that enable productivity and growth.'} />
                <InfoCard title={'Enterpise Internet'} icon={enterprise} text={'Tailored internet solutions for large organizations, including dedicated bandwidth, scalable infrastructure, and customized support.'} />
              </div>
            </div>
            {/* // <!-- End Pricing --> */}

          </section>

          <section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 ${styles.flexStart} flex-col`}>
              <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
                Introduction
              </h2>
              <hr className='text-primary' />
              <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Welcome to Cyburst Internet Solutions, where we are dedicated to providing fast and reliable internet services to meet your connectivity needs. With a focus on customer satisfaction and cutting-edge technology, we strive to deliver 
                seamless internet experiences that keep you connected, informed, and empowered.
              </p>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
              <img src={introduction} alt="Who are we" className='w-[100%] h-[100%] md:w-[75%] md:px-0' />
            </div>
          </section>

          <section className={`flex md:flex-row flex-col-reverse ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
              <img src={mission} alt="Mission" className="w-[100%] h-[100%] md:w-[75%] relative z-[5]" />

              {/* gradient start */}
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
              {/* gradient end */}
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
              Our Mission & Vision
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              At Cyburst, our mission is to connect people, businesses, and communities through reliable 
              internet services. We envision a world where everyone has access to high-speed connectivity, enabling them to thrive in the digital age. 
              We are committed to delivering exceptional service, innovative solutions, and unmatched customer support.
              </p>

            </div>
          </section>


          <section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 ${styles.flexStart} flex-col`}>
              <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
                Our History
              </h2>
              <hr className='text-primary' />
              <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Established in 2015, Cyburst Internet Solutions 
                has been at the forefront of the internet service industry. What began as a small venture with a 
                passion for bridging the digital divide has grown into a leading provider with a strong presence in Nairobi & Kiambu counties. Over the years, we have continuously expanded our network, 
                invested in advanced infrastructure, and built a reputation for excellence.
              </p>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
              <img src={history} alt="History" className='w-[100%] h-[100%] md:w-[75%] md:px-0' />
            </div>
          </section>

          <section className={`flex md:flex-row flex-col-reverse ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
              <img src={team} alt="Team and Expertise" className="w-[100%] h-[100%] md:w-[75%] relative z-[5]" />

              {/* gradient start */}
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
              {/* gradient end */}
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
              Team & Expertise
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Behind Cyburst's success is a team of dedicated professionals who are passionate 
                about providing top-quality internet services. Our technicians, engineers, and support staff 
                bring a wealth of experience and expertise to the table. We are committed to staying up-to-date with the latest industry trends and technologies, 
                allowing us to offer innovative solutions and superior customer service.
              </p>

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


export const InfoCard = ({ title, icon, text }) => (
  <div className="flex p-4 flex-col border w-full h-[100%] bg-gray-100 border-gray-200 text-left rounded-xl shadow-sm dark:border-gray-700">
    <div className='flex items-start justify-end'>
      <img src={icon} alt="History" className='contain w-[20%] md:px-0' />
    </div>
    <div className='flex flex-col'>
      <h2 className={`font-poppins font-bold  text-[24px] text-primary w-full`}>{title}</h2>
      <p className={`font-poppins font-normal text-gray-500 mt-4 mb-3 leading-[30px] text-[16px] `}>
        {text}
      </p>
    </div>
  </div>

);

export default Pricing