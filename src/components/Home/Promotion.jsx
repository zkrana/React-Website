import React from 'react'

export default function Promotion() {
  return (
    <div className='Promotion py-10'>
      <div className='Container text-center'>
        <h2 className='Promotion-header'>
          25% discount on every latest deal!
        </h2>
        <p className='text-2xl text-white pt-5'>
          Let's subscribe our news letter
        </p> 
        <blockquote className='text-2xl font-semibold italic text-center text-white pt-7'>
          When you look
          <span  className='Shape-mark mx-2'>
            <span className='relative text-slate-700'>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
        <div  className='mt-7'>
          <form>
            <input type="email" name="email" placeholder="Email" className='inline h-11 border-none rounded focus:outline-none pl-3'></input>
            <input type="submit" className='Subscription' value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  )
}
