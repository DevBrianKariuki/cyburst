import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () =>  (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='w-full flex justify-center text-center items-center md:flex-row flex-col mb-0 relative z-[1]'>
      <h1 className={`px-2 ${styles.heading2}`}>See what are people saying <br className='sm:block hidden' /> about us</h1>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
  )

export default Testimonials;