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

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='title off-white primary'>Manage My Profile</p>
                        <p className='secondary-purple price text-center'> <span className='flat-fee'>No flat fee</span> <br></br>$300<span className='flat-fee'>/month</span></p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                            <li><img src={check1}/> Manage Google Profile</li>
                            <li><img src={check1}/> Reply to Reviews</li>
                            <li><img src={check1}/> Keep content updated weekly</li>
                            <li><img src={check1}/> Review Website Performance</li>
                            <li><img src={check1}/> Monthly Reports</li>
                            
                                 
                        </ul>
                    </div>
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='primary-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='price-tag off-white box-shadow'>Most Popular!</p>
                        <p className='title off-white secondary'>Start from Scratch</p>
                        <p className='secondary-purple price text-center'>$4,879<span className='flat-fee'>/flat fee</span> <br></br>$300<span className='flat-fee'>/month</span></p>
                        
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>

                            <li><img src={check2}/> Local SEO</li>
                            <li><img src={check2}/> Google Advertisement</li>
                            <li><img src={check2}/> Website Design</li>
                            <li><img src={check2}/> Website Development</li> 
                                   
                        </ul>
                        </div>
                        
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='secondary-p-btn margin-auto get-started'>Get Started</button></div>
                        <p className='includes text-center'>Also includes everything in lower priced packages</p>
                    </div>

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='title off-white third'>Grow my Numbers</p>
                        <p className='secondary-purple price text-center'>$4,879<span className='flat-fee'>/flat fee</span> <br></br>$300<span className='flat-fee'>/month</span></p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                            <li><img src={check2}/> Manage Online Ads</li>
                            <li><img src={check2}/> Monthly Consultations</li>
                            <li><img src={check2}/> Website Design</li>
                            <li><img src={check2}/> Website Development</li>
                            <li><img src={check2}/> Website Hosting / Testing</li> 
                            <li><img src={check2}/> Unlimited Requests</li> 
                            <li><img src={check2}/> Unlimited Consultations</li>              
                        </ul>
                    </div>
                        
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='third-p-btn margin-auto get-started'>Get Started</button></div>
                        <p className='includes text-center'>Also includes everything in lower priced packages</p>
                    </div>

             

                </section>

            </div>
        );
    }
}
 
export default Price;