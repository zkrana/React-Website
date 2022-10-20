import React from 'react'
import logo from '../img/logo.svg';
export default function Header() {
  return (
    <header className="App-header">
    <div className='Logo-box w-2/12'>
      <img src={logo} alt='Logo' height={60} width={120} className='animate-spin transition'></img>
    </div>
    <div className='w-10/12 flex justify-end items-center'>
      <ul className='flex px-4'>
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
