import React from 'react';
import Exp from '../../img/WebDev/experience.png';
import Prof from '../../img/WebDev/professionals.png';
import Creative from '../../img/WebDev/user-interface.png';
import Delivary from '../../img/WebDev/fast-delivery.png';
import Medal from '../../img/WebDev/medal.png';
import Support from '../../img/WebDev/support.png';
export default function ServiceSupport() {
  return (
    <div className='Container'>
        <h2 className='Header-text text-center'>
            What Makes Shuvo It Best Web Design<br></br> Company In Bangladesh?​
        </h2>
        <p className='text-center'>
          Manage is the #1 Bangladeshi web design services company based in Dhaka with 4+ years of experience in the web development industry. Here is why you should work with Shuvo It. We have all kinds of expertise to enhance your global business value. Our expert team generates the best business strategies. So, you can grow maximum profit with our campaigns 
        </p>
        <div className="Support-wrapper">
          <div className="Support-item">
              <img src={Exp} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Highly Experianced</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
          <div className="Support-item">
              <img src={Prof} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Professionals</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
          <div className="Support-item">
              <img src={Creative} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Creative UI/UX</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
          <div className="Support-item">
              <img src={Delivary} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Creative UI/UX</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
          <div className="Support-item">
              <img src={Medal} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Creative UI/UX</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
          <div className="Support-item">
              <img src={Support} alt='Experianced' width={64} height={64} />
            <div className="Support-details">
                <h4>Creative UI/UX</h4>
                <p>
                  We always recruit the moist experienced developers in our team who can give you flawless prototype in a matter of time.
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}
