import React, { Component } from 'react';
import './Style/founder.css';
import Fade from 'react-reveal/Fade';
import award from '../Assets/Icons/Award.svg';
class Founder extends Component {
    state = {  } 
    render() { 
        return (
            <div id='founder'>
                    <h1 className='text-center'>Co-Founder's Note</h1>
                    <section className='founder-section'>
                        <div>
                            <div className='pfp christina'></div>
                            <div className='founder info col-lg-8'>
                                <p className='pink title brock-italic'>Christina Bui | Web Designer & Developer</p>
                                <p className='brock-semibold-italic'>“I want to ensure that each client is happy with our website. We have multiple feedback and checkpoints stages so that the customer is 100% satisfied with their online presence before going live.“</p>
                                <Fade up><p className='orange graduate'><span><img src={award}/></span>Computer Science Graduate!</p></Fade>
                            </div>
                        </div>
                    </section>

            </div>

        );
    }
}
 
export default Founder;