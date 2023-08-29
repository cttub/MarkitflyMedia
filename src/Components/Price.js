import React, { Component } from 'react';

import './Style/price.css';
import check1 from '../Assets/Icons/Checks/primary-check.svg';
import empty1 from '../Assets/Icons/Checks/primary-empty.svg';

import check2 from '../Assets/Icons/Checks/secondary-check.svg';
import empty2 from '../Assets/Icons/Checks/secondary-empty.svg';

import check3 from '../Assets/Icons/Checks/third-check.svg';
import empty3 from '../Assets/Icons/Checks/third-empty.svg';

class Price extends Component {
    state = {  } 
    render() { 
        return (
            <div id='price'>
                <h1 className='primary-purple text-center'>Pricing</h1>

                <section className='price-container'>

                    <div className='price-box col-lg-3'>
                        <p className='title off-white primary'>Build My Presence</p>
                        <p className='primary-purple price text-center'>$2,579 + $250/month</p>
                        

                        <ul className='benefit-list brock-regular'>
                            <li><img src={check1}/> Manage Online Ads</li>
                            <li><img src={check1}/> Monthly Consultations</li>
                            <li><img src={check1}/> Website Design</li>
                            <li className='not-benefit'><img src={empty1}/> Website Development</li>
                            <li className='not-benefit'><img src={empty1}/> Website Hosting / Testing</li> 
                            <li className='not-benefit'><img src={empty1}/> Unlimited Requests</li> 
                            <li className='not-benefit'><img src={empty1}/> Unlimited Consultations</li>              
                        </ul>
                        <div style={{display: "flex", padding: "14px"}}><button className='primary-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

                    <div className='price-box col-lg-3'>
                        <p className='title off-white secondary'>Build My Presence</p>
                        <p className='secondary-purple price text-center'>$2,579 + $250/month</p>
                        

                        <ul className='benefit-list brock-regular'>
                            <li><img src={check2}/> Manage Online Ads</li>
                            <li><img src={check2}/> Monthly Consultations</li>
                            <li><img src={check2}/> Website Design</li>
                            <li><img src={check2}/> Website Development</li>
                            <li><img src={check2}/> Website Hosting / Testing</li> 
                            <li className='not-benefit'><img src={empty2}/> Unlimited Requests</li> 
                            <li className='not-benefit'><img src={empty2}/> Unlimited Consultations</li>              
                        </ul>
                        <div style={{display: "flex", padding: "14px"}}><button className='secondary-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

                    <div className='price-box col-lg-3'>
                        <p className='title off-white third'>Build My Presence</p>
                        <p className='secondary-purple price text-center'>$2,579 + $250/month</p>
                        

                        <ul className='benefit-list brock-regular'>
                            <li><img src={check3}/> Manage Online Ads</li>
                            <li><img src={check3}/> Monthly Consultations</li>
                            <li><img src={check3}/> Website Design</li>
                            <li><img src={check3}/> Website Development</li>
                            <li><img src={check3}/> Website Hosting / Testing</li> 
                            <li><img src={check3}/> Unlimited Requests</li> 
                            <li><img src={check3}/> Unlimited Consultations</li>              
                        </ul>
                        <div style={{display: "flex", padding: "14px"}}><button className='third-p-btn margin-auto get-started'>Get Started</button></div>

                    </div>

             

                </section>

            </div>
        );
    }
}
 
export default Price;