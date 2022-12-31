import React from 'react'
import Customerinfo from './components/Checkout/Customerinfo'
import Deliverymethod from './components/Checkout/Deliverymethod'
import Orderoverview from './components/Checkout/Orderoverview'
import Payment from './components/Checkout/Payment'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import home from './img/icon/home-2-line.svg'

export default function Checkout() {
  return (
    <div>
        <Header />
        <div className='Container'>
            <div className="Page-bar">
                <img src={home} alt='Homepage' width={20} height={20} className='mr-[4px] cursor-pointer' /> <span className='-mt-[2px] cursor-pointer'> / Shopping Cart <span className='text-gray-500'> / Checkout</span></span>
            </div>
            <div className="Checkout">
                <h1 className='Product-tittle px-[10px] sm:px-0'> Shopping Cart </h1>
                <div className="Checkout-wrapper">
                    <div className="Customer-info">
                        <Customerinfo />
                    </div>
                    <div className="Customer-details">
                        <div className="Card-delivery">
                            <Payment />
                            <Deliverymethod />
                        </div>
                        <div class="flex justify-between flex-wrap bg-white p-5 rounded mt-[20px] shadow-sm">
                            <div class=" w-full sm:w-1/2 flex items-center justify-between sm:justify-start">
                                <input type="text" name="coupon" placeholder="Promo / Coupon Code" id="input-coupon" class="w-[calc(100%-160px)] mr-5" value="" />
                                    <button class="Btn-outline">Apply Code</button>
                            </div>
                            <div class="w-full sm:w-1/2 flex items-center justify-between sm:justify-start mt-3 sm:mt-0">
                                <input type="text" name="voucher" placeholder="Enter your gift voucher code here" id="input-voucher" class="w-[calc(100%-160px)] mr-5" value="" />
                                    <button class="Btn-outline">Apply Boucher</button>
                            </div>
                        </div>
                        <div className="Order-overview">
                            <Orderoverview />
                        </div>
                    </div>
                </div>
                <div class="checkout-final-action mt-5">
                    <div class="agree-text">
                        I have read and agree to the <a href="https://www.startech.com.bd/warranty-policy"> <b>Terms and Conditions</b> </a>,
                            <a href="https://www.startech.com.bd/privacy" > <b>Privacy Policy</b> </a>
                            and <a href="https://www.startech.com.bd/refund-policy"> <b>Refund and Return Policy</b> </a>                                        <input type="checkbox" name="agree" value="1" checked="checked" />
                    </div>
                    <button id="button-confirm" class="Btn-red" type="submit">Confirm Order</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
