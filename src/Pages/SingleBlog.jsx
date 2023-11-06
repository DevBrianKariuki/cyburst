import React from 'react'
import '../index.css'
import styles from '../style'
import { blog } from '../constants/blog';
import {  Footer } from '../components';
import { blackfacebook, people03, blackinstagram, blacktiktok, blacktwitter, people02, menu} from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, } from 'react-icons/fa'
import { HiLink, HiCalendar} from 'react-icons/hi'


const SingleBlog = (blog) => {
  return (
    <div className={`bg-white w-full overflow-hidden flex flex-col`}>
		<div className={` ${styles.boxWidth} ${styles.paddingX} mt-28 mb-14`}>
			
			<div className='flex flex-col'>
				<div className='w-full md:w-[70%]'>
					<h1 className='font-poppins font-bold text-[24px] text-left md:text-[40px] text-gray-900'>International Baccalaureate Mission to Empower Students in Kenya
						 with a New Future-Proof Curriculum
					</h1>
				</div>

				<div className='flex flex-row justify-end items-end my-4'>
					<div className='flex flex-row w-full items-center gap-3'>
						<HiCalendar className='text-gray-600' fontSize={20} />
						<span className='font-poppins text-sm text-gray-500'>October 25, 2023 | 5 mins read</span>
					</div>
				</div>

				<div className='w-full mt-4 mx-auto'>
					<img src={people03} className='md:w-[80%] md:h-[80%] object-cover' alt='title' />
				</div>

				<div className='text-left items-center md:w-[70%] mt-8'>
					<p className={`${styles.paragraph} font-poppins text-gray-700`}>
						<span className='font-semibold'>Nairobi, Kenya; 7th, July, 2023</span> – The International Baccalaureate (IB), a global leader in international education, is set to revolutionize the learning landscape in Kenya by conducting a comprehensive, multi-year, community-driven and collaborative review of its programmes targeted at students aged 16 and over (16+ review). This groundbreaking initiative aims to provide a transformative education that empowers the organisation’s diverse community to contribute to a more peaceful and sustainable world while preparing young people to flourish individually, with others and with the shared planet.<br/><br/>
						The IB believes in the importance of a collaborative environment to foster excellence education, and this holistic programme level review will embrace a wider IB community, from students and alumni to educators and staff. The purpose is to make IB programmes, subjects and assessments more flexible, future-oriented and responsive to school and student contexts by placing choice, well-being and real-world relevance at their core. continuous evaluation of the curriculum, the IB is set to rethink education and design transformative experiences for students.<br/><br/>
						IB programmes have been offered in the country for over 40 years with a current presence in 11 Kenyan Schools such as the <span className='font-semibold'>MPESA Foundation Academy, Aga Khan Academy, the Nairobi Academy</span> among other key schools across the region. IB intends to develop future-ready students by molding them into critical thinkers, courageous risk-takers and empathetic human beings in an environment that prioritizes their well-being. To date, renowned personalities and global leaders from a broad range of disciplines have studied in IB schools in Kenya, where IB methodologies have provided them with lifelong opportunities and the sense of purpose they need to thrive throughout their lives and contribute to making the world a better place. <br/><br/>
						Fidelis Nthenge, Director of Curriculum Development expressed her excitement about the review of the curriculum, stating, “We believe that by reviewing and creating a future-oriented curriculum, we are equipping our students with the skills and knowledge needed to succeed in a rapidly evolving global job market. The initiative will empower them to be adaptive, innovative, and ethical global citizens ready to contribute to the world around them.”<br /><br/>
						As Artificial Intelligence (AI) technology continues to generate significant interest and discussion globally, IB is aware of the fundamental need to adapt and transform its educational programmes and assessment practices so that students and teachers can use these new AI tools ethically and effectively. While AI technology, including ChatGPT, offers significant advancements in various fields, the IB underscores the importance of working with schools and educators to support students with the ethical implications of using AI tools inside classrooms.<br/><br/>
						International Baccalaureate’s integration of AI into their programmes in Kenya marks a significant milestone in the future of innovative education. By embracing AI technology, IB is reinforcing its commitment to preparing students for the future, fostering critical thinking, personalization, collaboration, and creativity. Through this initiative, IB aims to empower Kenyan students with the skills and knowledge necessary to thrive in a volatile world. <br/><br/>
						Recognizing the challenges and opportunities presented by a fast-paced world, the IB is committed to equipping students with the necessary skills and competencies to succeed in the 21st century. IB’s continuous curriculum evaluation and its adaptation to new innovative technologies, represents a global and transformative impact for both students and teachers alike as it fosters seamless accommodation of the changing times. It is equally in line with Kenya’s Vision 2030 intent to provide globally competitive quality education for development. <br/><br/>
						As IB continues to evolve alongside technological advancements and changing global landscapes, it remains steadfast in its mission to empower students to become well-rounded individuals who contribute positively to society. By continuously promoting IB’s educational programmes and their impact, the organization seeks to inspire students, educators, and communities worldwide to embrace a holistic education that prepares young people for a future full of possibilities. <br/>
						<br/>
						<span className='font-semibold'>About IB</span>
						<br/>
						Founded in 1968, the International Baccalaureate (IB) pioneered a movement of international education and now offers four high-quality, challenging educational programmes to students aged 3-19. The IB gives students distinct advantages by providing strong foundations, critical thinking skills, and proficiency for solving complex problems while encouraging diversity, curiosity, and a healthy appetite for learning and excellence. In a world where asking the right questions is as important as discovering answers, the IB champions critical thinking and flexibility in study by crossing disciplinary, cultural and national boundaries. Supported by world-class educators and coordinators, the IB currently engages with more than 1.9 million students in over 5,600 schools across 159 countries. 
						Take the first step towards a transformative educational experience visiting <a href='https://www.ibo.org' className='text-primary cursor-pointer'>www.ibo.org</a>.
					</p>
				</div>

				<div className='flex flex-col md:flex-row justify-between mt-10'>
					<div className='flex flex-col mb-6'>
						<h5 className='font-poppins font-semibold text-[18px]'>Share this post</h5>
						<motion.div animate={{ y: [0, 3, 3, 0] }}  transition={{ repeat:Infinity, duration: 3 }} className='flex my-2'>
							<FaFacebookSquare className=' mr-3 cursor-pointer text-primary ' fontSize={28} />
							<FaInstagramSquare className=' mr-3 cursor-pointer text-primary ' fontSize={28} />
							<FaLinkedin className='mr-3 cursor-pointer  text-primary ' fontSize={28} />
							<FaTwitterSquare className='mr-3 cursor-pointer text-primary ' fontSize={28} />
							<HiLink className='mr-3 cursor-pointer text-primary ' fontSize={28} />
						</motion.div>
					</div>
					{/* <div className='flex flex-row gap-2 items-center'>
						<div className='rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white px-2 py-1 uppercase font-poppins font-medium'>Networking</div>
						<div className='rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white px-2 py-1 uppercase font-poppins font-medium'>Online Safety</div>
						<div className='rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white px-2 py-1 uppercase font-poppins font-medium'>Network Security</div>
					</div> */}
				</div>

			</div>

		</div>
		<Footer />
    </div>
  )
}

export default SingleBlog;