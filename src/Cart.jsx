import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import home from './img/icon/home-2-line.svg'

export default function Cart() {
  return (
    <div>
        <Header/>
        <div className='Container'>
            <div className="Page-bar">
                <img src={home} alt='Homepage' width={20} height={20} className='mr-[4px] cursor-pointer' /> <span className='-mt-[2px] cursor-pointer'><span className='text-gray-500'> / Shopping Cart</span></span>
            </div>
            <div className="Cart-wrapper">
                <div>
                    <h1 className='Product-tittle'> Shopping Cart </h1>
                    <table className='Cart-table'>
                        <thead>
                                <tr>
                                    <td class="text-center rs-none">Image</td>
                                    <td class="text-left">Product Name</td>
                                    <td class="text-left rs-none">Model</td>
                                    <td class="text-left">Quantity</td>
                                    <td class="text-right rs-none">Unit Price</td>
                                    <td class="text-right">Total</td>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <a href="https://www.startech.com.bd/amd-ryzen-5-5600g-bijoy-desktop-pc">
                                    <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/bijoy-pc/amd-ryzen-5-5600g-bijoy-desktop-pc-47x47.webp" alt="AMD Ryzen 5 5600G Bijoy Desktop PC" title="AMD Ryzen 5 5600G Bijoy Desktop PC" class="img-thumbnail" /></a>
                                </td>
                                <td>
                                    <span>
                                        AMD Ryzen 5 5600G Bijoy Desktop PC
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        Bijoy Desktop PC
                                    </span>
                                </td>
                                <td>
                                    <span> 1 </span>
                                </td>
                                <td>
                                    <span className=' text-right'> 42,850৳ 	 </span>
                                </td>
                                <td>
                                    <span className=' text-right'> 42,850৳ 	 </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Total-cart">
                    <table class="Cart-total">
                        <tbody>
                            <tr>
                                <td className='text-right'><strong>Sub-Total:</strong></td>
                                <td ClassName='text-right amount'>42,850৳</td>
                            </tr>
                            <tr>
                                <td class="text-right"><strong>Total:</strong></td>
                                <td class="text-right amount">42,850৳</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className='Product-tittle'>What would you like to do next?</h3>
                    <p>
                    Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
                    </p>
                    <div className='flex justify-between bg-[aliceblue] p-5 rounded mt-[10px]'>
                        <div className='w-1/2 flex items-center'>
                            <input type="text" name="coupon" value="" placeholder="Promo / Coupon Code" id="input-coupon" className='w-[calc(100%-160px)] mr-5' />
                            <button class="Btn-outline">Apply Code</button>
                        </div>
                        <div className='w-1/2 flex items-center'>
                            <input type="text" name="voucher" value="" placeholder="Enter your gift voucher code here" id="input-voucher" className='w-[calc(100%-160px)] mr-5' />
                            <button class="Btn-outline">Apply Boucher</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-5 pb-[65px]'>
                    <div className='w-1/2 flex items-center justify-start'>
                        <button class="Btn-outline">
                            <NavLink to='/service'>
                                Continue Shopping
                            </NavLink>
                        </button>
                    </div>
                    <div className='w-1/2 flex items-center justify-end'>
                        <button class="Btn-outline">Continue Order</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
