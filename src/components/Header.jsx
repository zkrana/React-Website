import React from 'react'
import logo from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <header className="App-header">
    <div className='Logo-box w-2/12'>
      <img src={logo} alt='Logo' height={60} width={120} className='animate-spin transition'></img>
    </div>
    <div className='w-10/12 flex justify-end items-center'>
      <ul className='px-4 hidden sm:flex'>
        <li className='Nav-item Active'>Home</li>
        <li className='Nav-item'>About Us</li>
        <li className='Nav-item'>Service</li>
        <li className='Nav-item'>Shop</li>
        <li className='Nav-item'>Contact</li>
      </ul>
      <div className='flex w-20 h-20 justify-center items-center sm:hidden'>
      <FontAwesomeIcon icon={faBars} className=' pl-2 text-primary text-3xl cursor-pointer'></FontAwesomeIcon>
      </div>
    </div>
  </header>
  )
}
