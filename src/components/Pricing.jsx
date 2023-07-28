import React from 'react'
import { feedback } from '../constants'
import styles from '../style'


const PriceCard = ({ title, speed, price }) => (
  <div className="flex flex-col border w-full border-gray-200 text-left rounded-xl shadow-sm dark:border-gray-700">
    <div className="bg-primary rounded-t-xl py-3 px-4">
      <h4 class="font-medium text-lg font-poppins text-white my-2 text-left dark:text-gray-200">{title}</h4>
      <span class="mt-7 font-bold text-left font-poppins text-5xl text-gray-800 dark:text-gray-200">{speed} MBPS</span>
    </div>
    <ul class="mt-7 px-8 space-y-2.5 pb-10 text-sm">
      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          Fast web browsing
        </span>
      </li>

      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          4k movies & TV Shows
        </span>
      </li>

      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          Online gaming and streaming
        </span>
      </li>

      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          Multiple device music streaming
        </span>
      </li>

      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          Super fast downloads
        </span>
      </li>

      <li class="flex space-x-2">
        <svg class="flex-shrink-0 h-5 w-5 text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
        </svg>
        <span class="text-gray-800 font-poppins dark:text-gray-400">
          CCTV devices capability
        </span>
      </li>
    </ul>

    <div className=' px-8 flex flex-row items-center justify-center pb-6'>
      <h1 className='text-primary text-4xl font-poppins font-bold'>Ksh {price}</h1>
      <p className='font-poppins font-thin text-md'>/Monthly</p>
    </div>
  </div>

);

const Pricing = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='w-full flex justify-center text-center items-center md:flex-row flex-col mb-0 relative z-[1]'>
      <h1 className={`px-2 ${styles.heading2}`}>We’ve got a plan that is perfect <br />for your budget</h1>
    </div>

    {/* <!-- Pricing --> */}
    <div class="max-w-[90rem] py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
      {/* <!-- Grid --> */}
      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center">
        <PriceCard title={'HOME PLAN'} speed={5} price={'1,500'} />
        <PriceCard title={'SCHOOL PLAN'} speed={10} price={'2,000'} />
        <PriceCard title={'BUSINESS PLAN'} speed={20} price={'2,500'} />
      </div>
    </div>
    {/* // <!-- End Pricing --> */}

  </section>
)

export default Pricing;