import React from 'react'
import '../index.css'
import styles from '../style'
import {  motion } from 'framer-motion'
import { Hero, Navbar, Stats, Pricing, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from '../components';

const Home = () => {
  return (

    
    <div 
       className='bg-white w-full overflow-hidden '>

       <div className={`bg-white ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Hero />
           <Stats />
         </div>
       </div>

       <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
         <motion.div 
            animate
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            className={`${styles.boxWidth}`}>
           <WhyChooseUs />
           <Pricing />
           <WhoAreWe />
           <Testimonials />
         </motion.div>
       </div>


       <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <CTA />
         </div>
       </div>

       <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Blogs />
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

export default Home