import React from 'react';
import modalImg from '../img/photo-1.jpg'

    const Modal = ({open, onClose}) =>{
        if(!open) return null;
        return (
            <div className='Overlay'>
                <div className="Modal-container">
                    <img src={modalImg} width={200} height={150} alt='Modal Banner' />
                    <div className="Content-wrapper">
                        <span className='Close-icon' onClick={onClose}>X</span>
                        <div className="Modal-right">
                            <p className='text-[18px]'> Do you want</p>
                            <h3 className='Modal-head'>25% Discount</h3>
                            <p className='text-[18px]'> On your first trade? </p>
                            <form>
                                <input className='Email' type='email' placeholder='Enter your email' name='subscription-email' required />
                                <button className='Submit' type='submit' name='submit'> Subscribe </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
    export default  Modal;
