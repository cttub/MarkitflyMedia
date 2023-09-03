import React, { Component } from 'react';
import './Style/footer.css';
import logo from '../Assets/Logos/MarkitflyWhite.svg';

class Footer extends Component {
    componentDidMount() {
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSf878XkU6LvOInwtuONRMFa6tx6C57TbhEHX4BTZ8nxEt9hZQ/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }
    showTerms = () => {
        const terms = document.getElementById("terms");
        if (terms) {
            terms.classList.remove("hidden");
        }
    }
    showTerms(){
        const terms = document.getElementById("terms");
    }

    showPrivacy = () => {
        const privacy = document.getElementById("privacy");
        if (privacy) {
            privacy.classList.remove("hidden");
        }
    }
    showPrivacy(){
        const privacy = document.getElementById("privacy");
    }

    render() {
        return (
            <div id='footer'>
                
                <section>
                    <div>
                        <a href="#"><img src={logo} alt="Logo" /></a>
                        <a href='mailto:contact@markitfly.com' className='off-white footer-link'><p>contact@markitfly.com</p></a>
                    </div>
                    <div>
                        <a className='off-white footer-link'><p className='off-white footer-link' onClick={this.showPrivacy}>Privacy Policy</p></a>
                        <a className='off-white footer-link'><p className='off-white footer-link' onClick={this.showTerms}>Terms of Use</p></a>
                    </div>
                   
                  
                    
                </section>
            </div>
        );
    }
}

export default Footer;
