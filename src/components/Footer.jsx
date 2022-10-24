import React from 'react'
import logo from '../img/logo-white.svg';
import fb from '../img/icon-facebook.svg';
import tw from '../img/icon-twitter.svg';
import pin from '../img/icon-pinterest.svg';
import yt from '../img/icon-youtube.svg';

export default function Footer() {
  return (
    <div className=' w-full bg-slate-800 h-fit'>
        <div className='Container p-4 h-full'>
            <div className="flex justify-start flex-col md:flex-row">
                <div className='w-full md:w-1/5 py-5 h-full' >
                    <div className='Logo-box h-10'>
                        <img src={logo} alt='Logo' height={40} width={120} className='animate-pulse'></img>
                    </div>
                    <div className='flex justify-start space-x-4 mt-6'>
                        <a href='facebook.com'>
                            <img src={fb} alt='Social' width={40} height={40}></img>
                        </a>

                        <a href='twitter.com'>
                            <img src={tw} alt='Social' width={40} height={40}></img>
                        </a>

                        <a href='pinterest.com'>
                            <img src={pin} alt='Social' width={40} height={40}></img>
                        </a>

                        <a href='youtube.com'>
                            <img src={yt} alt='Social' width={40} height={40}></img>
                        </a>
                    </div>
                </div>

                <div className='w-full md:w-1/5' >
                    <div className='w-full flex justify-start md:justify-around space-x-32 mt-6'>
                        <div className='flex flex-col space-y-3 text-white'>
                            <h2 className='text-lg font-semibold'> Main Navigation </h2>
                            <a href='#mysite' className='hover:text-primary'>Home</a>
                            <a href='#mysite' className='hover:text-primary'>Pricing</a>
                            <a href='#mysite' className='hover:text-primary'>Products</a>
                            <a href='#mysite' className='hover:text-primary'>About</a>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/5' >
                    <div className='flex flex-col space-y-3 text-white mt-6'>
                        <h2 className='text-lg font-semibold'> Important Links </h2>
                        <a href='#mysite' className='hover:text-primary'>Careers</a>
                        <a href='#mysite' className='hover:text-primary'>Community</a>
                        <a href='#mysite' className='hover:text-primary'>Privacy Policy</a>
                    </div>
                </div>

                <div className='w-full md:w-2/5' >
                    <div className='flex flex-col space-y-3 text-white mt-6'>
                        <h2 className='text-lg font-semibold'> Subscription </h2>
                        <div  className='mt-7'>
                        <form>
                            <input type="email" name="email" placeholder="Email" className='inline h-11 border-none rounded focus:outline-none pl-3'></input>
                            <input type="submit" className='Subscription' value="Submit"></input>
                        </form>
                        </div>
                        <p class="text-base py-3">All Rights Reserved 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
