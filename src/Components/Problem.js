import React, { Component } from 'react';
import './Style/problem.css';
import judge from '../Assets/Icons/Person-Check.svg';
import thumb from '../Assets/Icons/Thumbs-Down.svg';
import bubble from '../Assets/Icons/Bubble-X.svg';
import Fade from 'react-reveal/Fade';
class Problem extends Component {
    state = {  } 
    render() { 
        return (
            <div id='problem'>

                <section className='problem-statement'>
                    <div>
                        <h1 className='black'>How Important is Online Presence?</h1>
                        
                        <div className='stats-container'>
                            <Fade up duration = {1500}><div className='stats-box col-lg-3'>
                                    <div>
                                        <h4 className='primary-purple'>75%</h4>
                                        <h5>customers will <strong>judge company’s credibility</strong> base on their website alone</h5>
                                    </div>
                                    <div className='stats-circle'><img className='stats-img' src={judge}/></div>
                            </div></Fade>
                            <Fade up duration = {2000}><div className='stats-box col-lg-3'>
                                    <div>
                                        <h4 className='primary-purple'>57%</h4>
                                        <h5>of people <strong>won’t recommend</strong> a business with a <strong>poorly designed website</strong></h5>
                                    </div>
                                    <div className='stats-circle'><img className='stats-img' src={thumb}/></div>
                            </div></Fade>
                            <Fade up duration = {2500}> <div className='stats-box  col-lg-3'>
                                    <div>
                                        <h4 className='primary-purple'>88%</h4>
                                        <h5>of users will <strong>less likely</strong> return to a website due to <strong>bad user experience</strong></h5>
                                    </div>
                                    <div className='stats-circle'><img className='stats-img' src={bubble}/></div>
                            </div></Fade>
                        </div>

                    </div>
                </section>
                

            </div>
        );
    }
}
 
export default Problem;