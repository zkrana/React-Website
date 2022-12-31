import React from 'react'
import './components/Contact/contact.css'
import Header from './components/Home/Header'
import Footer from './components/Home/Footer'
import Contactinfo from './components/Contact/Contactinfo'
import Contactform from './components/Contact/contactform'

export default function Contact() {
  return (
    <div>
        <Header />
        <div className='Container mb-20'>
            <div className="Heading">
                <h1 className='Contact-Head'>Contact Us</h1>
                <p> Any questions or remarks? Just write us a message! </p>
            </div>
            <div className="Contact-wrapper">
                <Contactinfo />
                <Contactform />
            </div>
        </div>
        <Footer />
    </div>
  )
}
