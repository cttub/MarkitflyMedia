import React, { Component } from 'react';
import './Style/benefits.css';

import frame from '../Assets/Frames/Purple-1.png';
import unlimited from '../Assets/Icons/Moving/Infinity.png';
import time from '../Assets/Icons/Moving/Timer.png';
import chat from '../Assets/Icons/Moving/Bubble.png';

import Fade from 'react-reveal/Fade';
class Benefits extends Component {
    state = {  } 
    render() { 
        return (
            <div id='benefits'>
                <div>
                    <section className='col-lg-7'>
                        <div className='txt-benefit'>
                        <h1 className='off-white text-shadow'>We thrive for your success</h1>
                        <h2 className='off-white text-shadow'>Markitfly is your own personal agency, providing you with many perks and benefits.</h2>
                        </div>
                        <Fade up duration = {1500}><div className='benefit-bar box-shadow'>
                            <div className='icon'><img src={unlimited} alt='Unlimited' /></div>
                            <h5 className='primary-purple'>
                                Subscribe and receive <strong>unlimited request</strong> whenever you want.
                            </h5>
                        </div></Fade>
                        <Fade up duration = {2000}><div className='benefit-bar box-shadow'>
                            <div className='icon'><img src={chat} alt='Chat' /></div>
                            <h5 className='primary-purple'>
                                We will have <strong>consistent communication</strong> throughout the whole process.
                            </h5>
                        </div></Fade>
                        <Fade up duration = {2500}><div className='benefit-bar box-shadow'>
                            <div className='icon'><img src={time} alt='Time' /></div>
                            <h5 className='primary-purple'>
                                Our delivery is <strong>faster than the average industry standard</strong> with an <strong>average delivery of 3 weeks.</strong>
                            </h5>
                        </div></Fade>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default Benefits;
