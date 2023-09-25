import React, { Component } from 'react';

import './Style/price.css';
import check1 from '../Assets/Icons/Checks/primary-check.svg';
import empty1 from '../Assets/Icons/Checks/primary-empty.svg';

import check2 from '../Assets/Icons/Checks/secondary-check.svg';
import empty2 from '../Assets/Icons/Checks/secondary-empty.svg';

import check3 from '../Assets/Icons/Checks/third-check.svg';
import empty3 from '../Assets/Icons/Checks/third-empty.svg';

import Fade from 'react-reveal/Fade';
class Price extends Component {
    scrollToConsultation = () => {
        const consultAnchor = document.getElementById('consult-anchor');
        if (consultAnchor) {
            consultAnchor.scrollIntoView({ behavior: 'smooth' });
        }
    };
    state = {  } 
    render() { 
        return (
            <div id='price'>
                <div id='pricing-anchor' className='anchors'></div>
                <h1 className='primary-purple text-center'>Pricing</h1>
                <Fade up><p className='text-center orange'><b>We build your Google Business Profile for <u>FREE</u> with all packages.</b></p></Fade>
              
            

                <section className='price-container'>

                    <div className='price-box position-relative'>
                        <p className='title off-white primary'>Manage My Profile</p>
                        <p className='secondary-purple price text-center'>$2,997<span className='flat-fee'>/setup fee</span> <br></br>$799<span className='flat-fee'>/month</span></p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                            <li><img src={check1}/> Local SEO</li>
                            <li><img src={check1}/> Google Search Ads</li>
                            <li><img src={check1}/> Paid Traffic</li>
                           
                            
                                 
                        </ul>
                    </div> 
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='primary-p-btn margin-auto get-started'>Get Started</button></div>
                        <p className='includes text-center'>Additional fees may apply for certain advertisement campaigns.</p>
                    </div>

                    <div className='price-box position-relative'>
                        <p className='price-tag off-white box-shadow'>Most Popular!</p>
                        <p className='title off-white secondary'>Start from Scratch</p>
                        <p className='secondary-purple price text-center'>$5,997<span className='flat-fee'>/setup fee</span> <br></br>$999<span className='flat-fee'>/month</span></p>
                        
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>

                            <li><img src={check1}/> Local SEO</li>
                            <li><img src={check1}/> Google Search Ads</li>
                            <li><img src={check1}/> Paid Traffic</li>
                            <li><img src={check1}/> Brand Design</li>
                            <li><img src={check1}/> Website Design</li>
                            <li><img src={check1}/> Monthly Meetings</li>
                           
                                   
                        </ul>
                        </div>
                        
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='secondary-p-btn margin-auto get-started'>Get Started</button></div>
                        <p className='includes text-center'>Additional fees may apply for certain advertisement campaigns.</p>
                    </div>

                    <div className='price-box position-relative'>
                        <p className='title off-white third'>Grow my Numbers</p>
                        <p className='secondary-purple price text-center'>$6,997<span className='flat-fee'>/setup fee</span> <br></br>$1,199<span className='flat-fee'>/month</span></p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                        <li><img src={check1}/> Local SEO</li>
                            <li><img src={check1}/> Google Search Ads</li>
                            <li><img src={check1}/> Paid Traffic</li>
                            <li><img src={check1}/> Brand Design</li>
                            <li><img src={check1}/> Website Design + Development</li>
                            <li><img src={check1}/> Website Hosting + Maintenance</li>
                            <li><img src={check1}/> Monthly Meetings</li>
                            <li><img src={check1}/> Website Optimization & Testing</li>
                            <li><img src={check2}/> Unlimited Requests / Changes</li> 
                            <li><img src={check2}/> Unlimited Meetings</li>              
                        </ul>
                    </div>
                        
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='third-p-btn margin-auto get-started'>Get Started</button></div>
                        <p className='includes text-center'>Additional fees may apply for certain advertisement campaigns.</p>
                    </div>

             

                </section>
                <br></br>
                <h1 className='text-center pink'>Can't afford our services?</h1>
                <p className='text-center'><b>Don't pay us the monthly fee,</b>until we grow your numbers.</p>

            </div>
        );
    }
}
 
export default Price;