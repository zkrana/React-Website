import React from 'react'
import phone from '../../img/icon/phone-line.svg'
import mail from '../../img/icon/mail-line.svg'
import location from '../../img/icon/map-pin-line.svg'
export default function Contactinfo() {
  return (
    <div className="Contact-info">
        <div className="Info-wrapper">
            <h2>Contact Information</h2>
            <p>
                Fill up form and our team will contact within 24 hours.
            </p>
            <ul className='Contact-icon'>
              <li>
                  <img src={phone} alt='Phone' /> <span>+02 656 9087</span>
              </li>
              <li>
                  <img src={mail} alt='Email' /> <span>hello@manage.com</span>
              </li>
              <li>
                  <img src={location} alt='Location' /> <span>Uttara, Dhaka-1230, Bangladesh</span>
              </li>
            </ul>
            <ul className='Social'>
              <li><img src={phone} alt='Phone' /></li>
              <li> <img src={mail} alt='Email' /></li>
              <li><img src={location} alt='Location' /></li>
              <li><img src={location} alt='Location' /></li>
            </ul>
            <div className="smallCircle"></div>
            <div className="bigCircle"></div>
        </div>
    </div>
  )
}
