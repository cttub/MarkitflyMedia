import React, { Component } from 'react';
import './Style/tools.css';
import frame from '../Assets/Frames/Purple-2.png';
import underline from '../Assets/Other/underline.png';
import cogs from '../Assets/Other/cogs.png';
import Fade from 'react-reveal/Fade';
class Tools extends Component {
    renderService = (services) => {
        return services.map((service, index) => (
            <div key={index} className='service col-lg-4'>
                <h3>{service}</h3>
            </div>
        ));
    }

    render() {
        const services = [
            'SEO', 'Online Ads', 'Google Ads',
            'Graphic Design', 'Business Analysis', 'Consultations',
            'Web Design', 'Web Development', 'A/B Testing'
        ];

        return (
            <div id='tools'>
                <section className='tools-container position-relative'> 
                    <img className='cogs' src={cogs}/>
                    <div id='tools-anchor' className='anchors'></div>
                    <section className='information'>
                        
                        <div>
                            <Fade up><h1 className='text-center'>
                                We give you the tools to give you&nbsp;
                                <span className='maximum position-relative'>
                                    maximum<img className='underline' src={underline}/>  
                                </span>&nbsp;potential
                            </h1></Fade>
                           <div className='service-card'>
                                {this.renderService(services)}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Tools;
