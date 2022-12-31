import React from 'react'

export default function Deliverymethod() {
  return (
    <div className='w-full sm:w-[47.55%] h-full'>
        <div className="Payment-wrapper h-full">
            <div class="Section-head">
              <h2><span>3</span>Delivery Method</h2>
            </div>
            <p>Select a delivery method</p>

            <label class="radio-inline">
            <input type="radio" id='a' name="delivery_method" value="M" checked="checked" />
            Home Delivery - 60৳  </label><br />

            <label class="radio-inline">
            <input type="radio" id='b' name="delivery_method" value="C"  />
            Store Pickup - 0৳   </label><br />

            <label class="radio-inline">
            <input type="radio" id='c' name="delivery_method" value="O"  />
            Request Express - Charge Applicable    </label>
          <div className='Extra-pad pt-[4.7rem]'></div>
        </div>
    </div>
  )
}
