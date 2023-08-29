import React, { Component } from 'react';

import './Style/price.css';
import check1 from '../Assets/Icons/Checks/primary-check.svg';
import empty1 from '../Assets/Icons/Checks/primary-empty.svg';

import check2 from '../Assets/Icons/Checks/secondary-check.svg';
import empty2 from '../Assets/Icons/Checks/secondary-empty.svg';

import check3 from '../Assets/Icons/Checks/third-check.svg';
import empty3 from '../Assets/Icons/Checks/third-empty.svg';

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
                <h1 className='primary-purple text-center'>Pricing</h1>

                <section className='price-container'>

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='title off-white primary'>Build My Presence</p>
                        <p className='primary-purple price text-center'>$2,579 + $250/month</p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                            <li><img src={check1}/> Manage Online Ads</li>
                            <li><img src={check1}/> Monthly Consultations</li>
                            <li><img src={check1}/> Website Design</li>
                            <li className='not-benefit'><img src={empty1}/> Website Development</li>
                            <li className='not-benefit'><img src={empty1}/> Website Hosting / Testing</li> 
                            <li className='not-benefit'><img src={empty1}/> Unlimited Requests</li> 
                            <li className='not-benefit'><img src={empty1}/> Unlimited Consultations</li>              
                        </ul>
                    </div>
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='primary-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='price-tag off-white box-shadow'>Most Popular!</p>
                        <p className='title off-white secondary'>Start from Scratch</p>
                        <p className='secondary-purple price text-center'>$4,879 + $300/month</p>
                        
                    <div className='list-container'>
                        <ul className='benefit-list brock-regular'>
                            <li><img src={check2}/> Manage Online Ads</li>
                            <li><img src={check2}/> Monthly Consultations</li>
                            <li><img src={check2}/> Website Design</li>
                            <li><img src={check2}/> Website Development</li>
                            <li><img src={check2}/> Website Hosting / Testing</li> 
                            <li className='not-benefit'><img src={empty2}/> Unlimited Requests</li> 
                            <li className='not-benefit'><img src={empty2}/> Unlimited Consultations</li>              
                        </ul>
                        </div>
                        <div style={{display: "flex", padding: "14px"}}><button onClick={this.scrollToConsultation} className='secondary-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

                    <div className='price-box col-lg-3 position-relative'>
                        <p className='title off-white third'>Grow my Numbers</p>
                        <p className='secondary-purple price text-center'>$5,079 + $450/month</p>
                        
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

                    </div>

             

                </section>

            </div>
        );
    }
}
 
export default Price;