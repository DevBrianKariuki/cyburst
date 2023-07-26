import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum is a text we use we as designer to ensure all of our information gets
        displayed as we want it to appear in the final release of our work
      </p>
      <Button styles={'mt-10 rounded-[10px]'}/>
    </div>
    <div className={layout.sectionImg}>
      <img src={ card } alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )

export default CardDeal;