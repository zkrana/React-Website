import React from 'react'
import Team1 from '../../img/team/team-member-1.png'
import Team2 from '../../img/team/team-member-2.png'
import Team3 from '../../img/team/team-member-3.png'
import fb from '../../img/icon-facebook.svg';
import tw from '../../img/icon-twitter.svg';
import pin from '../../img/icon-pinterest.svg';
import yt from '../../img/icon-youtube.svg';
export default function Team() {
  return (
    <div className='Container'>
        <div className="Section-title">
            <h6 className='sub-heading'>About</h6>
            <h2 className='Header-text'>Meet Our Team</h2>
            <p className='Header-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cum sed reprehenderit laudantium accusamus maiores a, voluptas maxime excepturi sit consectetur cumque architecto similique impedit deleniti soluta veniam quaerat!</p>
        </div>
        <div className="Team-wrapper">
            <div className="Team-member">
                <div className="Thumbnail">
                    <img src={Team1} width={300} height={360} alt='Team Member' />
                </div>
                <div className="Details">
                    <h4> Thomas Moore</h4>
                    <h5> CEO & Chief Developer</h5>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laboriosam illo sunt quam, voluptatibus explicabo rem impedit.
                    </p>
                    <div className='flex justify-start space-x-4 mt-6'>
                        <a href='facebook.com'>
                            <img src={fb} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='twitter.com'>
                            <img src={tw} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='pinterest.com'>
                            <img src={pin} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='youtube.com'>
                            <img src={yt} alt='Social' width={25} height={25}></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Team-member mt-[120px] sm:mt-0">
                <div className="Thumbnail">
                    <img src={Team2} width={300} height={360} alt='Team Member' />
                </div>
                <div className="Details">
                    <h4> Robert Patinson</h4>
                    <h5> Project Manager</h5>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laboriosam illo sunt quam, voluptatibus explicabo rem impedit.
                    </p>
                    <div className='flex justify-start space-x-4 mt-6'>
                        <a href='facebook.com'>
                            <img src={fb} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='twitter.com'>
                            <img src={tw} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='pinterest.com'>
                            <img src={pin} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='youtube.com'>
                            <img src={yt} alt='Social' width={25} height={25}></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Team-member mt-[120px] sm:mt-0">
                <div className="Thumbnail">
                    <img src={Team3} width={300} height={360} alt='Team Member' />
                </div>
                <div className="Details">
                    <h4> Meri Pett</h4>
                    <h5> Marketing Executive </h5>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laboriosam illo sunt quam, voluptatibus explicabo rem impedit.
                    </p>
                    <div className='flex justify-start space-x-4 mt-6'>
                        <a href='facebook.com'>
                            <img src={fb} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='twitter.com'>
                            <img src={tw} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='pinterest.com'>
                            <img src={pin} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='youtube.com'>
                            <img src={yt} alt='Social' width={25} height={25}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
