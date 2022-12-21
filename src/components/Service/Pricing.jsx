import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div className='Container mt-7'>

        <h2 className='Header-text text-center'>
            GET TO KNOW OUR PRICING PLANS
        </h2>
        <p className='text-center'>
        We have exciting pricing plans just for your convenience! Our plans can reach out your different projects up to the mark with basic, business, and custom plans depending on more and more features.
        </p>

        <div className="Pricing-wrapper">
            <div className="Price-item">
                <div className="Price-header">
                    <h3 className='Price-title'>Package Name</h3>
                </div>
                <div className="Price-body">
                    <div className="Price-amount">
                        <span>
                            <sup>৳</sup>15,000
                        </span>
                    </div>
                    <div className="Package-details">
                        <ul>
                            <li>WordPress Platform</li>
                            <li>Premium Theme</li>
                            <li>Theme Customization</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                            <li>Site Kit N/A</li>
                            <li>Admin Training N/A</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="Order-button">
                        <button type='submit' name='package-order'> 
                            <Link to='../../single'>
                                Order Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="Price-item">
                <div className="Price-header">
                    <h3 className='Price-title'>Package Name</h3>
                </div>
                <div className="Price-body">
                    <div className="Price-amount">
                        <span>
                            <sup>৳</sup>15,000
                        </span>
                    </div>
                    <div className="Package-details">
                        <ul>
                            <li>WordPress Platform</li>
                            <li>Premium Theme</li>
                            <li>Theme Customization</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                            <li>Site Kit N/A</li>
                            <li>Admin Training N/A</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="Order-button">
                        <button type='submit' name='package-order'> Order Now </button>
                    </div>
                </div>
            </div>

            <div className="Price-item">
                <div className="Price-header">
                    <h3 className='Price-title'>Package Name</h3>
                </div>
                <div className="Price-body">
                    <div className="Price-amount">
                        <span>
                            <sup>৳</sup>15,000
                        </span>
                    </div>
                    <div className="Package-details">
                        <ul>
                            <li>WordPress Platform</li>
                            <li>Premium Theme</li>
                            <li>Theme Customization</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                            <li>Site Kit N/A</li>
                            <li>Admin Training N/A</li>
                            <li>Up to 4 Pages </li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="Order-button">
                        <button type='submit' name='package-order'> Order Now </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
