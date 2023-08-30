import React, { Component } from 'react';
import './Style/consult.css';
import Fade from 'react-reveal/Fade';
import { InlineWidget } from 'react-calendly';

import Footer from './Footer';
class Consult extends Component {
    state = {  } 
    render() { 
        return (
            <div id='consult'>
                <div id='consult-anchor' className='anchors'></div>
                <section>
                    <p className='text-center email-txt-small'><b>Not ready to meet?</b><br></br> Email Us at <span><a className='orange' href='mailto:contact@markitfly.com'>contact@markitfly.com</a></span> instead!</p>
                    <div className="inline-widget col-lg-5">
            
                    <InlineWidget className = "calendly" url="https://calendly.com/markitflymedia/consultation" 
                            styles={{
                            height: '600px',
                            width: '500px',
                        
            
                            }}
                            pageSettings={{
                            hideEventTypeDetails: true,
                            hideLandingPageDetails: true,
                            primaryColor: '#FF793F',
                            textColor: '#171A1B',
                            }}
                    
                        ></InlineWidget>
                        
                </div>
               
        
                <div className='col-lg-5 consult-info'>
                    <div>
                        <Fade duration = {1500}><div className='consult-img'></div></Fade>
                        <Fade up duration = {1500}><h2 className='pink text-center'>Your First Consultation is FREE!</h2></Fade>
                        <h1 className='text-center primary-purple'>Get started on growing your business and online presence</h1>
                        <p className='text-center email-txt'><b>Not ready to meet?</b> Email Us at <span><a className='orange' href='mailto:contact@markitfly.com'>contact@markitfly.com</a></span> instead!</p>
                    </div>
                </div>
                
                </section>
                <Footer/>
            </div>
        );
    }
}
 
export default Consult;