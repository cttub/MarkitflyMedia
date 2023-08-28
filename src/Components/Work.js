import React, { Component } from 'react';
import './Style/work.css';
import Fade from 'react-reveal/Fade';

import frame from '../Assets/Frames/White-1.png';
class Work extends Component {
    state = {  } 
    render() { 
        return (
            <div id='work'>
               <div id='work-anchor' className='anchors'></div>
                <div className='work-container'>
                    <h1 className='off-white text-center'>Recent Work</h1>
                    <section className='work-img-container'>
                        <Fade up duration = {1000}><a href='https://www.figma.com/proto/0I9zSMnGj6ta09c56cvduC/Shorter?type=design&node-id=101-3&t=ERtA8dueWsgRcw1Y-1&scaling=scale-down-width&page-id=101%3A2&mode=design' target='_blank'><div className='work-img first'><Fade down duration = {1000}><p className='click-website box-shadow'>See Mockup Page</p>
                        </Fade></div></a></Fade>

                        <Fade up duration = {1500}><a href='https://www.transformlandmo.com/' target='_blank'><div className='work-img second'>
                            <Fade down duration = {1000}><p className='click-website box-shadow'>See Project Page</p></Fade></div></a></Fade>
                            
                        <Fade up duration = {2000}><a href='https://www.jmarquezconstruction.com/' target='_blank'><div className='work-img third'>
                            <Fade down duration = {1000}><p className='click-website box-shadow'>See Project Page</p></Fade></div></a></Fade>
                    </section>
                    <h3 className='text-center off-white'>Curious about your future website?</h3>
                    <h4 className='text-center off-white'>We offer Web Design Mockups!</h4>
                    <div className='cta-btn'><button className='margin-auto'>Schedule a FREE Consultation</button></div>
                </div>
                <img className='bottom-frame' src={frame}/>
                
            </div>
        );
    }
}
 
export default Work;