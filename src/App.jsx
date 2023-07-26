import React from 'react';
import styles from './style'
import { Hero, Navbar, Stats, Billing, Testimonials, WhyChooseUs, CTA, Footer, WhoAreWe } from './components';

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
          <Billing />
          <WhoAreWe />
          <Testimonials />
        </div>
      </div>


      <div className={`bg-white , ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;