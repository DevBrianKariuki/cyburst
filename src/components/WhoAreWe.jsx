import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import { who_are_we } from '../assets';
import { Button } from 'flowbite-react';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] onject-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white'>{title}</h4>
      <p className={`font-poppins text-white text-[16px] leading-[24px]`}>{content}</p>
    </div>
  </div>
)

const WhoAreWe = () => {
  return (
    <section id="who are we" className={`${layout.section} px-4 md:px-0`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Who are we and
          <br className='sm:block hidden' /> what do we do</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Welcome to Cyburst Internet Solutions, where we are dedicated to providing
          fast and reliable internet services to meet your connectivity needs. With a focus on customer
          satisfaction and cutting-edge technology, we strive to deliver seamless internet experiences that keep
          you connected, informed, and empowered...
        </p>
        <Button className="bg-primary font-poppins mt-6 hover:bg-orange-500 focus:bg-orange-500">Learn More</Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={who_are_we} alt="Who are we" className='w-[100%] h-[100%] px-4 md:px-0' />
      </div>
    </section>
  )
}

export default WhoAreWe;