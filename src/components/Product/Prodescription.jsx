import React from 'react'
import './product.css'
export default function Prodescription() {
  return (
    <div className='Container'>
        <div className="Description-wrapper mt-[40px]">
            <div class="Navs">
                <ul class="Nav">
                    <li data-area="specification">Specification</li>
                    <li data-area="description">Description</li>
                    <li class="hidden-xs" data-area="ask-question">Questions (0)</li>
                    <li data-area="write-review">Reviews (0)</li>
                </ul>
            </div>
            <div class="specification-tab" id="specification">
                <h2>Specification</h2>

                <table className='Data-table'>
                    <thead>
                        <tr>
                            <td class="heading-row" colspan="3">Basic Information</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Data-separate'>
                            <td class="name">Processor</td>
                            <td class="value">AMD Ryzen 5 5600G Processor (A)<br/>
                                03 Years Warranty (No Warranty for Fan or Cooler)</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">Motherboard</td>
                            <td class="value">GIGABYTE B450M H AMD AM4 Micro-ATX Motherboard(China Version)<br/>
                                03 Years Warranty</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">RAM</td>
                            <td class="value">Kingston FURY Beast 8GB 3200MHz DDR4 Desktop RAM<br/>
                                Lifetime Warranty</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">Storage</td><td class="value">Seagate Internal 1TB SATA Barracuda HDD (CRP)<br/>
                                02 Years Warranty<br/>
                                HP EX900 M.2 250GB PCIe NVMe Internal SSD<br/>
                                03 Years Warranty</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">Casing</td>
                            <td class="value">Antec NX260 Mid Tower ARGB Gaming Case<br/>
                                No Warranty</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">Power Supply</td>
                            <td class="value">EVOLUR EV600 600W 80 Plus Bronze Non-Modular ATX Power Supply<br/>
                                03 years warranty</td>
                        </tr>
                        <tr className='Data-separate'>
                            <td class="name">Gift Item</td>
                            <td class="value">Acer V206HQL Abi 19.5" HD Monitor</td>
                        </tr>      
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
