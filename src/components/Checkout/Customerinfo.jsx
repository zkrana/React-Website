import React from 'react'
import './customerinfo.css'

export default function Customerinfo() {
  return (
    <div>
        <div className="Customer-wrapper">
          <div class="Section-head">
              <h2><span>1</span>Customer Information</h2>
          </div>
          <div className="Customer-data">
              <div class="multiple-form-groups">
                  <div class="form-groups">
                      <label class="control-label" for="input-firstname">First Name</label>
                      <input class="form-control" name="firstname" type="text" id="input-firstname" value="" placeholder="First Name*" />
                  </div>
                  <div class="form-groups">
                      <label class="control-label" for="input-lastname">Last Name</label>
                      <input type="text" id="input-lastname" name="lastname" value="" class="form-control" placeholder="Last Name*" />
                  </div>
              </div>
              <div class="form-groups">
                  <label class="control-label" for="input-address">Address</label>
                  <input type="text" id="input-address" name="address_1" value="" class="form-control" placeholder="Address*" />
              </div>
              <div class="form-groups">
                  <label class="control-label" for="input-telephone">Mobile</label>
                  <input type="tel" id="input-telephone" name="telephone" value="" class="form-control" placeholder="Telephone*" />
              </div>
              <div class="form-groups" for="input-email">
                  <label class="control-label">Email</label>
                  <input type="email" id="input-email" name="email" value="" class="form-control" placeholder="E-Mail*" />
              </div>
              <div class="multiple-form-groups">
                  <div class="form-groups" for="input-city">
                      <label class="control-label">City</label>
                      <input type="text" id="input-city" name="city" value="" class="form-control" placeholder="City*" />
                  </div>
                  <div class="form-groups" for="input-zone">
                      <label class="control-label">Zone</label>
                      <select name="zone_id" id="input-zone" class="form-control">
                          <option value="322" selected=""> Dhaka City</option>
                          <option value="323"> Khulna City</option>
                          <option value="4231"> Rangpur City</option>
                          <option value="321">Chittagong City</option>
                          <option value="4233">Gazipur City</option>
                          <option value="4232">Others</option>
                      </select>
                  </div>
              </div>
              <div class="form-groups">
                  <label class="control-label">Comment</label>
              <textarea class="form-control" name="comment" value="" placeholder="Comment" rows="6"></textarea>
              </div>
          </div>
        </div>
    </div>
  )
}
