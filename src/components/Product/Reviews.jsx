import React from 'react'
import './reviews.css'
import review from '../../img/icon/review.png'
export default function Reviews() {
  return (
    <div className='Container'>
        <div className="Reviews-wrapper">
            <div class="Section-head">
                <div class="Title-n-action">
                    <h2>Reviews (0)</h2>
                    <p class='Reviews-para'>Get specific details about this product from customers who own it.</p>
                </div>
                <div class="Q-action">
                    <button class="Btn-outline">Write a Review</button>
                </div>
            </div>
            <div className="Reviw-field">
                <div className="Review-body">
                    <span className='Review-img'>
                        <img src={review} alt='Review' />
                    </span>
                    <p class='Reviews-para'>Get specific details about this product from customers who own it.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
