import React from 'react';
import photo  from '../../img/photo.jpg';
import photo1  from '../../img/photo-1.jpg';
import photo2  from '../../img/photo-2.jpg';
import photo3  from '../../img/photo-3.jpg';
export default function Support() {
  return (
    <div className='Container p-4' id='service'>
      <div className='w-full my-5 text-center'>
        <span className=' text-2xl md:text-4xl font-semibold text-gray-700'>
            Why You Choose Us?
        </span>
        <p className='Grid-paragraph py-3'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
      </div>
        <div className='GridGallery'>

          <div className='Grid-item'>
            <img className='Grid-img' src={photo} alt='Img'></img>
            <span className='Grid-heading'>Quick Analysis</span>
            <p className='Grid-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className='Grid-item'>
            <img className='Grid-img' src={photo1} alt='Img'></img>
            <span className='Grid-heading'>Home Support</span>
            <p className='Grid-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div className='Grid-item'>
            <img className='Grid-img' src={photo2} alt='Img'></img>
            <span className='Grid-heading'>24/7 Open Call Center</span>
            <p className='Grid-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div className='Grid-item'>
            <img className='Grid-img' src={photo3} alt='Img'></img>
            <span className='Grid-heading'>Best Solution</span>
            <p className='Grid-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

        </div>
    </div>
  )
}
