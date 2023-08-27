import React, { Component } from 'react';
import './Style/landing.css';
import bottomFrame from '../Assets/Frames/White-2.png';
import logo from '../Assets/Logos/MarkitflyWhite.svg';
import Fade from 'react-reveal/Fade';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing'>
                <section>
                    <div className='col-lg-7'>
                        <Fade duration = {2000}><img className='logo' src={logo}/></Fade>
                        <h1 className='headline off-white'>Captivate your Online Audience and Grow your Revenue</h1>
                        <p className='off-white'>We employ our clients with <strong>website design & development, business analysis & consultation,</strong>  and <strong>online advertisement.</strong></p>
                        <button><a>Schedule a <u>FREE</u> Consultation</a></button>
                    </div>
                </section>
                
                <img className='bottom-frame' src={bottomFrame}/>
            </div>
        );
    }
}
 
export default Landing;