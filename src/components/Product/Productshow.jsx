import React from 'react'
import './product.css'
import home from '../../img/icon/home-2-line.svg'
import product from '../../img/Product.webp'
import { useState } from 'react'
import Cartviews from '../Cartviews'

export default function Productshow() {
    const [amount, setAmount] = useState(1)
    const stock = 10;
    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () =>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const [openModal, setOpenModal] = useState (false);

  return (
    <div className='Container'>
        <div className="Page-bar">
            <img src={home} alt='Homepage' width={20} height={20} className='mr-[4px] cursor-pointer' /> <span className='-mt-[2px] cursor-pointer'> / Service /<span className='text-gray-500'> Package-1</span></span>
        </div>
        <div className="Product-wrapper">
            <div className="Product-image">
                <img src={product} width={500} height={500} alt='Product' />
            </div>
        <div className="Product-description">
            <h1 className='Product-tittle'>Package Name</h1>
                <div className="Product-p-details">
                    <table class="product-info-table">
                        <tbody>
                            <tr class="product-info-group">
                                <td class="product-info-label">Price</td>
                                <td class="product-info-data product-price">42,850৳</td>
                                </tr>
                            <tr class="product-info-group">
                                <td class="product-info-label">Regular Price</td>
                                <td class="product-info-data product-regular-price">46,320৳</td>
                            </tr>                              
                            <tr class="product-info-group">
                                <td class="product-info-label">Status</td>
                                <td class="product-info-data product-status">In Stock</td>
                            </tr>
                            <tr class="product-info-group">
                                <td class="product-info-label">Product Code</td>
                                <td class="product-info-data product-code">25844</td>
                            </tr>
                            <tr class="product-info-group" itemprop="brand" itemtype="http://schema.org/Thing" itemscope="">
                                <td class="product-info-label">Brand</td>
                                <td class="product-info-data product-brand" itemprop="name">AMD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className='Product-tittle'>Key Features</h2>
                <ul className='Specification'>
                    <li>Model: Bijoy Desktop PC</li>
                    <li>AMD Ryzen 5 5600G Processor (A), GIGABYTE B450M H Motherboard (China Version)</li>
                    <li>Kingston FURY Beast 8GB 3200MHz DDR4 Desktop RAM</li>
                    <li>HP EX900 M.2 250GB PCIe NVMe SSD + Seagate 1TB HDD</li>
                    <li>Antec NX260 Mid Tower ARGB Gaming Case</li>
                    <li class="View-more">View More Info</li>
                </ul>
                <form>                 
                    <div className="Payment-panel">
                        <h3 className='text-[20px] font-semibold'>Payment Options</h3>
                        <div className="Payment-choice">
                            <div className="Onetime-purchase">
                            <label class="p-wrap cash-payment active">
                            <input type="radio" id="html1" name="fav_language" value="HTML" checked />
                                <span class="price">42,850৳</span>
                                <div class="p-tag">Cash Discount Price</div>                                
                                <div class="p-tag fade">Online / Cash Payment</div>
                            </label>
                            </div>
                            <div className="Monthly-base">
                            <label class="p-wrap cash-payment active">
                                <input type="radio" id="html2" name="fav_language" value="HTML" />
                                <span class="price">42,850৳</span>
                                <div class="p-tag">Cash Discount Price</div>                                
                                <div class="p-tag fade">Online / Cash Payment</div>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="Buy-now">
                        <div className="Counter">
                            <span className='Decrement' onClick={ ()=> setDecrease() }> - </span>
                            <span className='Set-counter'>{amount}</span>
                            <span className='Increment' onClick={ ()=> setIncrease() }> + </span>
                        </div>
                        <Cartviews open={openModal} onClose={ () => setOpenModal(false) } />
                        <button type='button' name='buy' id='buy' className='Btn-red h-fixed' onClick={() => setOpenModal(true)}> Buy Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
