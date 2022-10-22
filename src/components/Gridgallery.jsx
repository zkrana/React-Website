import React from 'react'

export default function Gridgallery() {
  return (
    <div className='p-4 sm:p-8 max-w-5xl grid gap-4 sm:grid-cols-2 md:grid-cols-4'>
        <h1 className='text-4xl font-extrabold sm:col-span-2 sm:w-1/2 sm:grid sm:grid-cols-2 sm:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3'>
           <span className=' md:col-span-2'> Grid layout with Tailwind CSS.</span>
        </h1>
        <p className=' sm:row-start-2 sm:self-center sm:col-start-2 md:col-start-1 md:col-span-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, dolore mollitia officiis illum expedita id veritatis natus ullam iusto! Esse quas neque sit atque consequatur sapiente nihil, soluta rerum eaque?
        </p>
        <div className='h-16 sm:h-auto sm:square bg-blue-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-pink-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-purple-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-blue-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-teal-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-red-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-blue-500'></div>
        <div className='h-16 sm:h-auto sm:square bg-pink-500'></div>
        <p className=' self-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum, mollitia nam incidunt iusto recusandae ab provident ex natus suscipit?
        </p>
    </div>
  )
}
