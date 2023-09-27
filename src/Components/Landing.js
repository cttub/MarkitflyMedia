import React, { Component } from 'react';
import './Style/landing.css';
import bottomFrame from '../Assets/Frames/White-2.png';
import logo from '../Assets/Logos/MarkitflyWhite.svg';
import Fade from 'react-reveal/Fade';
import mail from '../Assets/Icons/mail.svg';

class Landing extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSf878XkU6LvOInwtuONRMFa6tx6C57TbhEHX4BTZ8nxEt9hZQ/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }
    scrollToConsultation = () => {
        const consultAnchor = document.getElementById('consult-anchor');
        if (consultAnchor) {
            consultAnchor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    toggleNewsletter = () => {
        const newsletterInfo = document.getElementById("newsletter-info");
        const newsletterIcon = document.querySelector('.newsletter-icon');
        const shouldShowInfo = newsletterIcon.classList.contains("hidden") && newsletterInfo.classList.contains("show");

        newsletterInfo.classList.remove(shouldShowInfo ? "show" : "hidden");
        newsletterInfo.classList.add(shouldShowInfo ? "hidden" : "show");

        newsletterIcon.classList.remove(shouldShowInfo ? "hidden" : "show");
        newsletterIcon.classList.add(shouldShowInfo ? "show" : "hidden");
    }

    render() {
        return (
            <div id='landing'>
              

                <section>
                    <div className='col-lg-7'>
                        <Fade duration={2000}><img className='logo' src={logo} alt='Logo' /></Fade>
                        <h1 className='headline off-white'>Captivate your Online Audience and Grow your Revenue</h1>
                        <p className='off-white'>We empower our clients with <strong>website design & development, business analysis & consultation,</strong> and <strong>online advertisement.</strong></p>
                        <button  onClick={this.scrollToConsultation}><a>Schedule a <u>FREE</u> Consultation</a></button>
                    </div>
                </section>

                <img className='bottom-frame' src={bottomFrame} alt='Bottom Frame' />
            </div>
        );
    }
}

export default Landing;
