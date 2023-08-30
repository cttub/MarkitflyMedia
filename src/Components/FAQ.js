import React, { Component } from 'react';
import './Style/faq.css';
import topFrame from '../Assets/Frames/White-1.png';
import downArrow from '../Assets/Icons/FAQ-Down.svg';
import Fade from 'react-reveal/Fade';
class FAQ extends Component {
    state = {
        expandedQuestions: [], // Keep track of expanded questions
    };

    toggleQuestion = (questionIndex) => {
        const { expandedQuestions } = this.state;
        const newExpandedQuestions = [...expandedQuestions];

        if (newExpandedQuestions.includes(questionIndex)) {
            newExpandedQuestions.splice(newExpandedQuestions.indexOf(questionIndex), 1);
        } else {
            newExpandedQuestions.push(questionIndex);
        }

        this.setState({ expandedQuestions: newExpandedQuestions });
    };

    render() {
        const { expandedQuestions } = this.state;

        const faqData = [
            {
                question: "Why can’t I just hire a freelancer?",
                answer: [
                    "Great question! Usually, freelancers bill for each separate service, which can quickly add up, reaching costs of $10,000+ for website design alone.",
                    "",
                    "However, with Markitfly, we offer a straightforward flat fee from the start, coupled with a monthly subscription that grants you access to unlimited requests for your brand.",
                ],
            },
            {
                question: "How fast can I receive my website designs?",
                answer: [
                    "Website design mockups typically take up to 1-3 business days, however more complex designs and requests may take longer.",
                ],
            },
            {
                question: "Can I just pay for one service and not the other?",
                answer: [
                    "We don't provide the choice to select single services for purchase, the reason being is to ensure the success of each of our clients’ online presence. In order for us to provide maximum value, we need to ensure each client is equipped with all the necessary tools to foster business growth.",
                ],
            },
            {
                question: "What if I do not like the design of my website?",
                answer: [
                    "No problem! We provide unlimited revisions of your design until you are 100% satisfied.",
                ],
            },
            {
                question: "Are there any refunds?",
                answer: [
                    "We do not offer refunds due to the high quality value of our work.",
                ],
            },
            {
                question: "Can I pause my subscription whenever I want?",
                answer: [
                    "You always have the option to temporarily pause your subscription, but it is important to note that certain services may be deactivated during this period such as: website hosting, advertisement, consultations, etc",
                ],
            },
            
        ];

        return (
            <div id='faq'>
                
                <div className='frame'><img className='flip upside' src={topFrame} alt="Top Frame" /></div>
                <div id='faq-anchor' className='anchors'></div>
                <section>
                    <h1 className='off-white text-center'>Frequently Asked Questions</h1>
                    <div className='faq-list'>
                        {faqData.map((item, index) => (
                            <div className='faq-item' key={index}>
                                <div
                                    className={`question ${expandedQuestions.includes(index) ? 'expanded' : ''}`}
                                    onClick={() => this.toggleQuestion(index)}
                                >
                                    {item.question}
                                    <span className="arrow">
                                        <img
                                            src={downArrow}
                                            alt={'Down Arrow'}
                                            className="arrow-icon"
                                        />
                                    </span>
                                </div>
                                {expandedQuestions.includes(index) && (
                                    <Fade><div className='answer'>
                                        {item.answer.map((paragraph, pIndex) => (
                                            <React.Fragment key={pIndex}>
                                                {pIndex > 0 && <br />} {/* Add a line break */}
                                                {paragraph}
                                            </React.Fragment>
                                        ))}
                                    </div></Fade>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default FAQ;
