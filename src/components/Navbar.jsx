import React from 'react'
import { useState } from 'react';
import styles from '../style'
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';
import { Link, NavLink, useLocation } from 'react-router-dom';



const Navbar = () => {

  const { pathname } = useLocation()  
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={` ${styles.paddingX} w-full flex fixed top-0 bg-white justify-between items-center py-6 navbar border-b border-primary z-[5]`}>
      <Link to={'/'}>
        <h3 className='text-primary font-poppins font-bold text-2xl lg:text-4xl pl-4 lg:pl-0'>Cyburst</h3>
      </Link>
      <ul className="list-none flex flex-row gap-6 sm:flex hidden justify-end items-center flex-1">
        <NavLink className={`${pathname ===  '/' ? 'font-semibold text-primary' : 'text-black'} mr-4 hover:text-primary font-poppins cursor-pointer text-[16px] hover:text-primary hover:font-semibold`} to={`/`}>
            Home
        </NavLink>
        <NavLink className={`${pathname ===  '/pricing' ? 'font-semibold text-primary' : 'text-black'} mr-4 hover:text-primary font-poppins cursor-pointer text-[16px] hover:text-primary hover:font-semibold`} to={`pricing`}>
            Pricing
        </NavLink>
        <NavLink className={`${pathname ===  '/about' ? 'font-semibold text-primary' : 'text-black'} mr-4 hover:text-primary font-poppins cursor-pointer text-[16px] hover:text-primary hover:font-semibold`} to={`about`}>
            About Us
        </NavLink>
        <NavLink className={`${pathname ===  '/blog' ? 'font-semibold text-primary' : 'text-black'} mr-4 hover:text-primary font-poppins cursor-pointer text-[16px] hover:text-primary hover:font-semibold`} to={`blog`}>
            Blog
        </NavLink>
        <NavLink className={`${pathname ===  '/contact' ? 'font-semibold text-primary' : 'text-black'} mr-4 hover:text-primary font-poppins cursor-pointer text-[16px] hover:text-primary hover:font-semibold`} to={`contact`}>
            Contact
        </NavLink>
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` hover:text-primary font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
            <NavLink className={`${pathname ===  nav.path ? 'font-semibold text-primary' : 'text-black' } hover:text-primary hover:font-semibold`} to={`${nav.path}`}>
              {nav.title}
              {console.log(pathname + ' ' + nav.path)}
            </NavLink>
          </li>
        ))} */}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] object-contain mr-4'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} bg-primary absolute top-16 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
          <ul className="list-none border rounded-xl border-primary flex flex-col justify-end w-full items-left flex-1">
            <NavLink className={`${pathname ===  '/' ? 'bg-white font-semibold text-primary' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`/`}>
                Home
            </NavLink>
            <NavLink className={`${pathname ===  '/pricing' ? 'bg-white font-semibold text-primary' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`pricing`}>
                Pricing
            </NavLink>
            <NavLink className={`${pathname ===  '/about' ? 'bg-white font-semibold text-primary' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`about`}>
                About Us
            </NavLink>
            <NavLink className={`${pathname ===  '/blog' ? 'bg-white font-semibold text-primary' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`blog`}>
                Blog
            </NavLink>
            <NavLink className={`${pathname ===  '/contact' ? 'bg-white font-semibold text-primary' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`contact`}>
                Contact
            </NavLink>
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${ pathname === nav.path ? 'bg-white font-semibold text-primary' : 'text-white' } font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`}>
                <NavLink href={`${nav.path}`}>
                  {nav.title}
                </NavLink>
              </li>
            ))} */}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;

// ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}

