import React from 'react'
import './Login.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import facebook from '../../img/login/facebook-fill.svg'
import gmail from '../../img/login/google-fill.svg'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <Header />
        <div className='Login-Panel'>
            <div className="Container">
                <div className="Panel-heading">
                    <h2 className='text-[20px] sm:text-[25px] font-semibold'>Welcome to Manage! Please login.</h2>
                    <span data-spm-anchor-id="a2a0e.login_signup.0.i14.53032829hfwNws">New member? <NavLink to='../../register' className='text-[tomato]'>Register</NavLink>  here.</span>
                </div>
                <div className="Login-body">
                    <div className="User-area">
                        <form>
                            <div class="form-groups">
                                <label class="control-label" for="input-email">Email</label>
                                <input type="email" id="input-email" name="address_1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="form-control" placeholder="Please enter your Phone Email!" />
                            </div>
                            <div class="form-groups">
                                <label class="control-label" for="input-password">Password</label>
                                <input type="password" id="input-password" name="pass" class="form-control" pattern=".{8,}" title="Eight or more characters" placeholder="Please enter your password!" />
                            </div>
                            <div className=' text-right'>
                                <button id="button-confirm" class="Btn-red text-center w-full sm:w-[200px]" type="submit">Login</button>
                                <p className=' text-[tomato] pt-4 cursor-pointer text-base'>Forgot Passowrd?</p>
                            </div>
                        </form>
                    </div>
                    <div className="Loginvia-email">
                        <p className=' text-gray-600 pb-4 sm:pb-10'>Or, login with</p>
                        <button id="button-confirm" class="Facebook" type="submit"> <img src={facebook} width={18} height={18} alt='facebook' className='mr-4' /> Facebook</button>
                        <button id="button-confirm" class="Google" type="submit"><img src={gmail} width={18} height={18} alt='gmail' className='mr-4' />  Gmail</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
