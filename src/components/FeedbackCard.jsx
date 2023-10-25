import React from 'react'
import {  quotes } from '../assets'
import { motion } from 'framer-motion'

const FeedbackCard = ({content, name, title, img}) => (
  <div className='flex justify-between flex-col px-10 py-12 max-w-[370px] md:mr-9 sm:mr-5 mr-0 my-5 '>
    <motion.div animate={{ scale: [0.95, 1, 1, 0.95] }}  transition={{ repeat:Infinity, duration: 3 }}>
      <img src={quotes} className='w-[42px] h-[30px] object-contain' />
    </motion.div>
    <p className='font-poppins font-normal text-[16px] leading-[32px] text-gray-700 my-10'>{content}</p>
    
    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[48px] h-[48px] object-cover rounded-full' />
      
      <div className='flex flex-col ml-4' >
        <h4 className='font-poppins font-semibold text-[18px] leading-[32px] text-gray-900'>{name}</h4>
        <p className='font-poppins font-normal text-[15px] leading-[23px] text-gray-500'> {title}</p>
      </div>
    </div>
  </div>

)

export default FeedbackCard