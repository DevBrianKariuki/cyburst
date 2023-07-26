import styles, { layout } from '../style';
import { apple, bill, google } from '../assets';

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' className='w-[50%] h-[100%] relative z-[5]' />
      
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing</h2>
        <p className={`${styles.paragraph}`}>Lorem ipsum is a text that one can use to create
          boring textswhen developing or designinng interfaces and 
          stuff like that
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={ apple } alt="apple store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={ google } alt="apple store" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </div>
    </section>
  )

export default Billing;