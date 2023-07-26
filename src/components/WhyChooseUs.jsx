import { why_choose_us } from '../assets'
import styles, { layout } from '../style'
import { features } from '../constants'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] onject-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-gray-900'>{title}</h4>
      <p className={`font-poppins text-gray-500 text-[15px] leading-[24px]`}>{content}</p>
    </div>
  </div>
)

const WhyChooseUs = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center md:text-left px-4 md:px-0`}>Why should you choose<br className='sm:block hidden' /> to opt for our services</h2>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={why_choose_us} alt="WHy Chose us" className='w-[100%] h-[100%] px-4 md:px-0' />
    </div>
  </section>
  )

export default WhyChooseUs;