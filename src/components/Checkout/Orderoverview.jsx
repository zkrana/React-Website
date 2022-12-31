import React from 'react'
import './customerinfo.css'
export default function Orderoverview() {
  return (
    <div className='w-full'>
        <div className="Order-table">
            <div class="Section-head">
              <h2><span>3</span>Delivery Method</h2>
            </div>
            <table className='Table'>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td class="text-right">Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="total">
                        <td colspan="2" class="text-right"><strong>Sub-Total:</strong></td>
                        <td class="text-right"><span class="amount">0৳</span></td>
                    </tr>
                    <tr class="total">
                        <td colspan="2" class="text-right"><strong>Total:</strong></td>
                        <td class="text-right"><span class="amount">0৳</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
