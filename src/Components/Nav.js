import React, { Component } from 'react';
import logo from '../Assets/Logos/Bird.svg';
import './Style/nav.css';

class Nav extends Component {
    scrollToConsultation = () => {
        const consultAnchor = document.getElementById('consult-anchor');
        if (consultAnchor) {
            consultAnchor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        return (
            <div id='nav'>
                <section>
                    <a href='#' className='icon box-shadow'><img src={logo} alt='' /></a>
                    <a href='#tools-anchor'>Services</a>
                    <a href='#testimonials-anchor'>Testimonials</a>
                    <a href='#work-anchor'>Recent Work</a>
                    <a href='#pricing-anchor'>Pricing</a>
                    <a href='#faq-anchor'>FAQ</a>
                    <button onClick={this.scrollToConsultation}>Free Consultation</button>
                </section>
            </div>
        );
    }
}

export default Nav;
