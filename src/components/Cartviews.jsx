import React from 'react';
import { NavLink } from 'react-router-dom';

    const Cartviews = ({open, onClose}) =>{
        if(!open) return null;
        return (
            <div className='Overlay'>
                <div className="Cart-container">
                    <div className="Content-show">
                        <span className='Close-icon' onClick={onClose}>X</span>
                        <div className="Cart-wrappers">
                            <p>
                            You have added AMD Ryzen 5 5600G Bijoy Desktop PC to your shopping cart!
                            </p>
                            <div class="cart-info">
                                <span class="cart-quantity">Cart quantity: <span class="value">1</span>
                                </span>
                                <span class="cart-total">Cart Total: <span class="value">42850</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Button-wrap">
                        <button type='button' className='Btn-red'>
                            <NavLink to='../cartpage'>
                                View Cart
                            </NavLink>
                        </button>
                        <button class="Btn-outline">Confirm Order</button>
                    </div>
                </div>
            </div>
          )
    }
    export default  Cartviews;
