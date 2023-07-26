import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2 }>Let's try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mb-5 mt-5`}> Everything you need to accept card payments and grow your business amywhere on the planet</p>
    </div>

    <div>
      <Button styles={'rounded-lg'} />
    </div>
  </section>
  )

export default CTA