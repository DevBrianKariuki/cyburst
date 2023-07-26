import React from 'react';
import styles from './style'
import { Hero, Navbar, Stats, Billing, Pricing, Blogs, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from './components';

const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden '>
      <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <WhyChooseUs />
          <Pricing />
          <WhoAreWe />
          <Testimonials />
        </div>
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

export default App;