import React from 'react'
import { useState } from 'react'
import  './accordion.css'
export default function Accordion({question, answer}) {
  const [show, setShow] = useState(false)
  return (
    <div className="Faq">
      <h3 className='Question'> <span className='Plus' onClick={()=> setShow(!show)}> { show ? "–":"+"} </span> {question}</h3>
      {
        show && <p className='Answer'>{answer}</p>
      }
    </div>
  )
}
