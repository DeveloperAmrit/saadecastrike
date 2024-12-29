import React from 'react'
import { Link } from 'react-router-dom';

const HoverUnderline = ({text,link}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link
        to={link}
        className="relative text-lg font-medium  group"
      >
        {text}
        <span
          className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-500 transition-all duration-500 group-hover:w-full"
        ></span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className='w-full h-[88px] flex justify-center'>
      <div className='max-w-7xl w-full h-full flex justify-between items-center px-2 py-2'>
        <div className='flex justify-center items-center gap-3 cursor-pointer'>
          <img className='w-16 h-16 rounded-full -z-10'  src="/assets/images/decastrike-logo.jpg" alt="TIGER" />
          <h1 className='text-xl sm:text-3xl font-bold '>DecaStrike</h1>
        </div>
        <ul className='flex gap-x-6 text-xl'>
          <li><HoverUnderline text="Home" link="/"/></li>
          <li><HoverUnderline text="SAA" link="https://saa.iitj.ac.in/"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar