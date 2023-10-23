import styles from '../style';
import { hero_image } from '../assets';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Hero = () => 
  (
  <section id="home" className={`flex md:flex-row mt-24 md:mt-14 items-center flex-col padding ${styles.paddingY}`}>

    <div className={`flex-1 flex items-center md:items-start flex-col xl:px-0 sm:px-16 px-6`}>

      <div className='flex flex-row justify-center items-center w-full'>
        <h1 className="flex-1 font-poppins text-center md:text-left font-bold ss:text-[72px] text-[52px] ss:leading=[100px] leading-[75px]">
          <span className="text-zinc-800 text-6xl font-semibold tracking-tight">Elevate Your </span>
          <br className='sm:block hidden' />
          <span className="text-primary text-6xl font-semibold tracking-tight">Online Presence</span>
          <span className="text-zinc-800 text-6xl font-semibold tracking-tight"> with </span>
          <span className="text-primary text-6xl font-semibold tracking-tight">Cyburst!</span>
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-6 text-center md:text-left `}>We believe in delivering exceptional value and ensuring that you
        have the right internet solution for your needs.
      </p>
      <Link to={`contact`}>
        <button className="font-poppins hover:text-black font-semibold uppercase mt-8 rounded-md bg-primary text-white p-4">
          Get a free quote
        </button>
      </Link>
    </div>
    <div id='heroimage' className={`flex-1 flex ${styles.flexCenter} md:my-0 my-14 relative`}>
      <img src={hero_image} alt='hero-image' className='w-[100%] h-[100%] md:w-[90%] md:h-[90%] relative' />
    </div>
  </section>
  )

export default Hero