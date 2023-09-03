import React, { Component } from 'react';
import './Style/termsprivacy.css';
import x from '../Assets/white-x.svg';
class Privacy extends Component {

    
      // Function to toggle the visibility of the terms section
      toggleTermsVisibility = () => {
        const window = document.getElementById("privacy");
        
        // Check if "hidden" class is present
        const isHidden = window.classList.contains("hidden");
        
        // Toggle the "hidden" class
        if (isHidden) {
          window.classList.remove("hidden");
        } else {
          window.classList.add("hidden");
        }
      };
      
      toggleTermsVisibilityPrivacy = (event) => {
        const window = document.getElementById("privacy");
        
        // Check if the clicked element is the #terms itself
        if (event.target === window) {
            const isHidden = window.classList.contains("hidden");
            
            // Toggle the "hidden" class
            if (isHidden) {
                window.classList.remove("hidden");
            } else {
                window.classList.add("hidden");
            }
        }
    };
    state = {  } 
    render() { 
        
        return (
            <div id = "privacy" className='hidden' onClick={this.toggleTermsVisibilityPrivacy}>
             <div>
                    <section className='box-shadow'>
                        <h1>Privacy Policy</h1>

                        <h5><b>Information We Collect</b></h5>
                        <p>We collect various types of information, which may include:</p>
                        <ul>
                            <li>Emails: We may collect email addresses for communication purposes.</li>
                            <li>Consultation Information: We may collect information submitted through our consultation form.</li>
                            <li>Analytics Data: We may collect data for analytical and optimization purposes.</li>
                        </ul>

                        <h5><b>How We Use Your Information</b></h5>
                        <p>We may use the collected information for various purposes, including:</p>
                        <ul>
                            <li>Communication: We may use email addresses to communicate with you and send updates.</li>
                            <li>Service Delivery: Information submitted through our consultation form may be used to provide requested services.</li>
                            <li>Analysis and Optimization: We may use data for analysis and optimization of our website and services.</li>
                        </ul>

                        <h5><b>Security</b></h5>
                        <p>We take appropriate measures to protect your information from unauthorized access and use, but no data transmission or storage system can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee its security.</p>

                        <h5><b>Changes to this Privacy Policy</b></h5>
                        <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated date.</p>

                        <h5><b>Contact Us</b></h5>
                        <p>If you have any questions about this Privacy Policy or need to contact us for any reason, you can reach us at <a  href="mailto:contact@markitfly.com">contact@markitfly.com</a>.</p>
                    </section>
                    <button onClick={this.toggleTermsVisibility} className='close-section'><p>[x] Exit Window</p></button>
                </div>
            </div>
        );
    }
}
 
export default Privacy;