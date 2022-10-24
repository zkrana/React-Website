import React, { useState } from 'react';
import logo from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState (false);
  return (
    <header className="App-header">
    <div className='Logo-box w-1/2 h-12 flex justify-start items-center pl-3 md:pl-0 md:w-2/12'>
      <img src={logo} alt='Logo' height={60} width={120} className='animate-pulse'></img>
    </div>
    <div className='w-1/2 md:w-10/12 flex justify-end items-center'>
      <ul className='px-4 hidden md:flex'>
        <li className='Nav-item Active'>Home</li>
        <li className='Nav-item'>About Us</li>
        <li className='Nav-item'>Service</li>
        <li className='Nav-item'>Shop</li>
        <li className='Nav-item'>Contact</li>
      </ul>

      <button className='Btn-red Display-condition'>Get In Touch</button>

      <div className='flex w-20 h-20 justify-center items-center md:hidden'>
      <FontAwesomeIcon onClick={ () => setShowMobileMenu(!showMobileMenu)} icon={faBars} className=' pl-2 text-primary text-3xl cursor-pointer relative'></FontAwesomeIcon>
      </div>

      <ul className= {showMobileMenu ? 'mb-menu':'hidden'}>
        <li className='Nav-item Active'>Home</li>
        <li className='Nav-item'>About Us</li>
        <li className='Nav-item'>Service</li>
        <li className='Nav-item'>Shop</li>
        <li className='Nav-item'>Contact</li>
      </ul>

    </div>
  </header>
  )
}
