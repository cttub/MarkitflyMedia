import React, { Component } from 'react';
import './Style/termsprivacy.css';
import x from '../Assets/white-x.svg';
class Terms extends Component {

    
      // Function to toggle the visibility of the terms section
      toggleTermsVisibility = () => {
        const window = document.getElementById("terms");
        
        // Check if "hidden" class is present
        const isHidden = window.classList.contains("hidden");
        
        // Toggle the "hidden" class
        if (isHidden) {
          window.classList.remove("hidden");
        } else {
          window.classList.add("hidden");
        }
      };

      toggleTermsVisibilityTerms = (event) => {
        const window = document.getElementById("terms");
        
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
            <div id = "terms" className='hidden' onClick={this.toggleTermsVisibilityTerms}>
             <div>
                    <section className='box-shadow'>
                        <h1>Markitfly Terms of Use</h1>

                        <p><strong>Last Updated:</strong> 9/3/2023</p>

                        <p>Please read these <strong>Terms of Use</strong> ("Terms") carefully before using the Markitfly website (the "Website") operated by Markitfly Media ("we," "us," or "our"). By accessing or using the Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Website.</p>

                        <h5><b><u>1. Intellectual Property</u></b></h5>

                        <p>1.1. <strong>Logo</strong>: The logo used to represent Markitfly on this Website is the exclusive property of Markitfly. Unauthorized use of the logo is strictly prohibited.</p>

                        <p>1.2. <strong>Icons</strong>: All icons used on this Website are licensed through our Noun Project subscription and are used with proper authorization. Unauthorized use of these icons is strictly prohibited.</p>

                        <p>1.3. <strong>Stock Images</strong>: All stock images used on this Website are licensed through our Pexel and Freepik subscriptions. Pexel images are free for everyone to use. Unauthorized use of these images is strictly prohibited.</p>

                        <p>1.4. <strong>Client Images</strong>: We have obtained explicit permission from our clients to use their images on this Website. Unauthorized use of client images is strictly prohibited.</p>

                        <h5><b><u>2. Use of the Website</u></b></h5>

                        <p>2.1. <strong>Access</strong>: You are granted limited, non-exclusive, and non-transferable access to the Website for personal or business purposes.</p>

                        <p>2.2. <strong>Prohibited Actions</strong>: You agree not to:</p>
                        <ul>
                            <li>a. Use the Website for any unlawful purpose or in violation of these Terms.</li>
                            <li>b. Modify, adapt, or hack the Website or attempt to gain unauthorized access to our systems.</li>
                            <li>c. Engage in any activity that disrupts or interferes with the Website's functionality.</li>
                            <li>d. Collect, scrape, or otherwise extract information from the Website without our consent.</li>
                        </ul>

                        <h5><b><u>3. Privacy Policy</u></b></h5>

                        <p>Your use of the Website is also governed by our Privacy Policy, which can be accessed <a className='terms-link' href="[Your Privacy Policy Link]">here</a>. By using the Website, you consent to the practices described in the Privacy Policy.</p>

                        <h5><b><u>4. Disclaimer</u></b></h5>

                        <p>The information provided on this Website is for general informational purposes only. We do not warrant the accuracy, completeness, or reliability of any information on the Website.</p>

                        <h5><b><u>5. Modifications</u></b></h5>

                        <p>We reserve the right to update or modify these Terms at any time. The most current version of the Terms will be posted on the Website with the "Last Updated" date. Your continued use of the Website after any changes to these Terms constitutes your acceptance of the revised Terms.</p>

                        <h5><b><u>6. Contact Information</u></b></h5>

                        <p>If you have any questions about these Terms or need to contact us for any reason, you can reach us at <a  className='terms-link' href="mailto:contact@markitfly.com">contact@markitfly.com</a>.</p>

                        <h5><b><u>7. Governing Law</u></b></h5>

                        <p>These Terms are governed by and construed in accordance with the laws of Oklahoma. Any legal action arising out of or relating to these Terms shall be filed in the applicable state or federal court located in Oklahoma.</p>

                        <p>By using this Website, you agree to these Terms of Use. If you do not agree with these Terms, please discontinue your use of the Website immediately.</p>        
                    </section>
                    <button onClick={this.toggleTermsVisibility} className='close-section'><p>[x] Exit Window</p></button>
                </div>
            </div>
        );
    }
}
 
export default Terms;