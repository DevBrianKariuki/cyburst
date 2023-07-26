import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} ${styles.paddingX} flex-col md:flex-row flex-wrap bg-primary sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className='flex-1 flex justify-center md:justify-start items-center flex-row m-3'>
        <h4 className='font-poppins font-bold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gray-900'>{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
  )

export default Stats;