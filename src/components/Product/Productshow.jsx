import React from 'react'
import './product.css'
import home from '../../img/icon/home-2-line.svg'
import product from '../../img/Product.webp'
export default function Productshow() {
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
            <h2 className='Product-tittle'>Package 1</h2>
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
            </div>
        </div>
    </div>
  )
}
