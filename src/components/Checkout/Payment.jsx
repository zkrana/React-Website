import React from 'react'
import './customerinfo.css'
import card from '../../img/payment/card-logo.png'
export default function Payment() {
  return (
    <div className='w-full sm:w-[47.55%]'>
        <div className="Payment-wrapper">
            <div class="Section-head">
              <h2><span>2</span>Customer Information</h2>
          </div>
            <p>Select a payment method</p>

            <label class="radio-inline">
            <input type="radio" name="payment_method" value="cod" checked="checked" />
             Cash on Delivery  </label><br />

            <label class="radio-inline">
            <input type="radio" name="payment_method" value="pos"  />
             POS on Delivery   </label><br />

            <label class="radio-inline">
            <input type="radio" name="payment_method" value="op"  />
             Online Payment   </label>

            <div class="Accepted-card">
                <h5>We Accept : </h5>
                <img class="logo logo-visa" src={card} alt='Card' />
            </div>

        </div>
    </div>
  )
}
