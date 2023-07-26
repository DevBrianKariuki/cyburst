import React from 'react'
import styles from '../style'
import { Button } from 'flowbite-react'

const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col mx-3 lg:mx-0 bg-primary rounded-3xl md:rounded-none box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`text-center md:text-left ${styles.heading2}`}>Ready to get started?</h2>
      <p className={`font-poppins font-normal text-center md:text-left text-white text-[16px] leading-[30.8px] max-w-[470px] mb-5 mt-5`}>If you have any queries or enquiries you would like to enquire about
        please don't hesitate to reach out to us</p>
    </div>

    <div>
      <Button className="bg-white text-primary uppercase font-poppins font-semibold">Get a free quote</Button>
    </div>
  </section>
  )

export default CTA