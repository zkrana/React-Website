import React from 'react'
import HeroBg from '../../img/Web-Development-New.jpg'
export default function ServiceIntro2() {
  return (
    <div className="Container my-12">
      <div className='Hero-section sm:px-1' id='hero'>
        <div className='Left-text w-full md:w-1/2'>
            <h3 className='text-lg text-gray-500 font-semibold'>
                We Are Committed In Dynamic
            </h3>
            <h1 className='Header-text'>
                Web Design and Development In Bangladesh
            </h1>
            <p className='Paragraph'>
            We prioritize your personality and business value the most. So, we work with people with specific expertise in almost all areas. Their specific visuals concept will grab your visitors' interest in buying the product no matter what!  <br></br>
                We have designed websites for more than 500 clients per year since our beginning. You can glance at our client's testimonials about our committed delivery. Our team leader conducts direct discussions and meetings to complete your website projects. We run our full operations at uttara, Dhaka. ​
            </p>
        </div>
        <div className='Right-img w-full md:w-1/2 p-4'>
            <img src={HeroBg} alt='Banner' className='sm:ml-5'></img>
        </div>
      </div>
    </div>
  )
}
