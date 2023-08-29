import React, { Component } from 'react';
import './Style/problem.css';
import judge from '../Assets/Icons/Person-Check.svg';
import thumb from '../Assets/Icons/Thumbs-Down.svg';
import bubble from '../Assets/Icons/Bubble-X.svg';
import branding from '../Assets/Icons/Moving/enhance.png';
import increase from '../Assets/Icons/Moving/increase.png';
import raise from '../Assets/Icons/Moving/Money.png';
import arrow from '../Assets/Icons/arrow.svg';
import Fade from 'react-reveal/Fade';
import { InView } from 'react-intersection-observer'; // Import InView from the package
import frame from '../Assets/Frames/Purple-1.png';

class Problem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            percentages: [
                { value: 40, max: 57, text: "of people <strong>won’t recommend</strong> a business with a <strong>poorly designed website</strong>", icon: thumb },
                { value: 55, max: 75, text: "customers will <strong>judge company’s credibility</strong> base on their website alone", icon: judge },
                { value: 66, max: 88, text: "of users will <strong>less likely return</strong> to a website due to <strong>bad user experience</strong>", icon: bubble },
            ],
            animatePercentages: false,
        };

        this.animatePercentages = this.animatePercentages.bind(this);
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    componentDidMount() {
        // Start animation if the section is initially in view
        if (this.intersectionObserver && this.intersectionObserver.current) {
            this.handleIntersection(this.intersectionObserver.current.inView);
        }
    }

    animatePercentages() {
        const interval = setInterval(() => {
            let hasPendingUpdates = false;

            const updatedPercentages = this.state.percentages.map(percentage => {
                if (percentage.value < percentage.max) {
                    hasPendingUpdates = true;
                    return { ...percentage, value: percentage.value + 1 };
                }
                return percentage;
            });

            if (hasPendingUpdates) {
                this.setState({ percentages: updatedPercentages });
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust the interval and step size as needed
    }

    handleIntersection(inView) {
        if (inView && !this.state.animatePercentages) {
            this.setState({ animatePercentages: true }, () => {
                this.animatePercentages();
            });
        }
    }

    render() {
        return (
            <div id='problem'>
                <section className='problem-statement'>
                    <div>
                        <h1 className='black'>How important is online presence?</h1>

                        <InView
                            as="div"
                            onChange={this.handleIntersection}
                            ref={this.intersectionObserver}
                        >
                            <div className='stats-container'>
                                {this.state.percentages.map((percentage, index) => (
                                    <div key={index} className='stats-box col-lg-3'>
                                        <div>
                                            <Fade up duration={900 + (500 * index)}>
                                                <h4 className='primary-purple'>{this.state.animatePercentages ? percentage.value : 0}%</h4>
                                            </Fade>
                                            <h5 dangerouslySetInnerHTML={{ __html: percentage.text }} />
                                        </div>
                                        <div className='stats-circle'>
                                            <img className='stats-img' src={percentage.icon} alt='' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </InView>

                        <p className='stat-resource text-center'>Statistics from <a href='https://www.forbes.com/advisor/business/software/website-statistics' target='_blank' className='hyperlink black'><b>Forbes</b></a> and <a href='https://www.sweor.com/firstimpressions' target='_blank' className='hyperlink black'><b>Sweor</b></a></p>
                    </div>

                    <p className='col-lg-7 margin-auto text-center d-none d-sm-block'>Challenges in website design, insufficient business analysis, and ineffective online advertisements hinder your <strong>ability to attract</strong> and <strong>engage their target audience</strong>, leading to lower <strong>customer acquisition</strong>, limited growth, and missed<strong> revenue opportunities.</strong></p>
                  
                </section>

                <section id='solution-statement'>
                    
                    <div>
                    <Fade up> <h1 className='text-center'>Our Solution</h1></Fade>

                        <section className='diagram-container'>
                            <div className='diagram-box'>
                                <div>
                                    <img src={branding} alt='Branding' />
                                    <p className='primary-purple'><strong>Enhance your Branding</strong></p>
                                    <h5 className='primary-purple'>Elevate your business with our standout design services, including graphic, logo, and web design.</h5>
                                </div>
                            </div>
                            <img className='arrow first' src={arrow} alt='Arrow' />
                            <div className='diagram-box'>
                                <div>
                                    <img src={increase} alt='Increase' />
                                    <p className='primary-purple'><strong>Increase in Online Traffic</strong></p>
                                    <h5 className='primary-purple'>Thrive your presence with our expertise in Google Analytics, and Web Development.</h5>
                                </div>
                            </div>
                            <img className='arrow second' src={arrow} alt='Arrow' />
                            <div className='diagram-box'>
                                <div>
                                    <img src={raise} alt='Raise' />
                                    <p className='primary-purple'><strong>Raise Customer Value</strong></p>
                                    <h5 className='primary-purple'>Discuss the strategies to maximize the lifetime value of your clients.</h5>
                                </div>
                            </div>
                        </section>

                       
                    </div>
                    <p className='col-lg-7 margin-auto solution-paragraph text-center d-none d-sm-block'>Our marketing website offers comprehensive solutions in <strong>website design, business analysis,</strong> and <strong>online advertisement</strong> services. Businesses can access assistance to enhance their <strong>online presence, drive website traffic</strong>, and maximize <strong>marketing potential</strong>, all on a single platform.</p>


                </section>
                <img className='bottom-frame' src={frame} />

            </div>
        );
    }
}

export default Problem;
