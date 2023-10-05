import React from 'react'
import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {

  const { pathname } = useLocation()
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center py-6 navbar border-b border-primary z-[5]'>
      <h3 className='text-primary font-poppins font-bold text-2xl lg:text-4xl pl-4 lg:pl-0'>Cyburst</h3>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` hover:text-primary font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
            <Link className={`${pathname ===  nav.path ? 'font-semibold text-primary' : 'text-black' }`} to={`${nav.path}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] object-contain mr-4'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} bg-primary absolute top-16 right-0 mx-4 my-2 min-w-[140px] sidebar`}
        >
          <ul className="list-none border rounded-sm border-primary flex flex-col justify-end w-full items-left flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${ pathname === nav.path ? 'bg-white font-semibold text-primary' : 'text-white' } font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`}>
                <a href={`${nav.path}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;

// ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}

