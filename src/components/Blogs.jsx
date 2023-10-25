import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { router, network_security, parent } from '../assets'

export const BlogCard = ({ category, title, date, photo, message }) => (
  <Card className='mx-2 lg:mx-0 hover:scale-105'
    imgAlt={title}
    imgSrc={photo}>

    <p className='uppercase text-sm text-gray-500 font-poppins font-semibold'>{category}</p>

    <Link to={title}>
      <h5 className="text-2xl hover:text-black font-bold tracking-tight text-primary font-poppins dark:text-white">
        {title}
      </h5>
    </Link>
    <p className=' text-[12px] text-grey-400 font-poppins'>{date}</p>

    <p className="font-normal text-gray-600 font-poppins text-[15px] dark:text-gray-400">
      {message}
    </p>
    <Link to={title}>
    <Button className={'bg-primary hover:bg-primary font-poppins'} >Read More</Button>
    </Link>
  </Card>
)


const Blogs = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='w-full flex justify-center text-center items-center md:flex-row flex-col mb-0 relative z-[1]'>
      <h1 className={`px-2 ${styles.heading2}`}>Latest news and articles</h1>
    </div>

    <div className="max-w-[90rem] py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center ">
        <BlogCard title={'How to troubleshoot a router'} date={'Jan 6,2023 09:45am'} photo={router} category={'Networking'}
          message={'If you’re having issues connecting to the Internet, your router may be to blame. Regardless of whether... '} />
        <BlogCard title={'Learn how you can protect your home network'} date={'Jan 6,2023 09:45am'} photo={network_security} category={'Security'}
          message={'Home network security is becoming increasingly crucial as people purchase more wirelessly linked...'} />
        <BlogCard title={'Control what your kids are seeing online'} date={'Feb 23,2023 10:05pm'} photo={parent} category={'Child Protection'}
          message={'Setting tight Internet boundaries for your young children protects them against improper information...'} />
      </div>
    </div>

  </section>
)

export default Blogs;