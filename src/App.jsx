import React from 'react';
import styles from './style'
import { Hero , Navbar , Stats , Billing,Testimonials, Clients, CardDeal, CTA, Footer, Business} from './components';

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
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;