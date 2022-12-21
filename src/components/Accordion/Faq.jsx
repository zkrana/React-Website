import React from 'react'
import { questions } from './Api'
import { useState } from 'react';
import Accordion from './Accordion';
import  './accordion.css'

export default function Faq() {
  const [data, setData] = useState(questions);
  
  return (
    <div className='Container'>
      <div className="Main-Faq">
          <div className="Wrap">
            <h2> Frequently Ask Question!</h2>
              {
                data.map((currElement)=>{
                    const { id } = currElement;
                    return <Accordion key={id} {...currElement}/>;
                })
              }
          </div>
      </div>
    </div>
  )
}
