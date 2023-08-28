import React, { Component } from 'react';
import './Style/reviews.css';
import Fade from 'react-reveal/Fade';
import stars from '../Assets/Icons/stars.svg';

import brennen from '../Assets/Pfp/Brennen.jpg';
import thanh from '../Assets/Pfp/Thanh.jpg';
import paul from '../Assets/Pfp/Paul.png';

const reviewData = [
    {
        pfp: brennen,
        client: 'Brennan & Hannah Smith',
        company: 'Transformative Lawn and Landscape',
        content: (
            <div>
                "They are wonderful to work with! They provided us with <strong>multiple updates</strong> throughout the whole process and options to do different design elements/updates instantly. <strong>Would definitely recommend!</strong>"
            </div>
        ),
        duration: 1500
    },
    {
        pfp: paul,
        client: 'Hai Ying',
        company: 'HYZ Inc',
        content: (
            <div>
                "Markitfly was able to <strong>deliver results within the first four weeks</strong> of working with us! They were able to <strong>increase my revenue by 20%</strong> through their online advertisement. Not very tech savy myself, and was skeptical to change, but <strong>I am happy with the results.</strong>"
            </div>
        ),
        duration: 2000
    },
    {
        pfp: thanh,
        client: 'Thanh Dinh',
        company: 'The Rage Room | Springfield',
        content: (
            <div>
                "By far <strong>the best work I could have ever asked for</strong>. Recently, my company has been struggling with <strong>optimizing our SEO and online presence</strong> and 3 months later, we’ve met countless new great people who’ve come into our rage room thanks to their team. <strong>Could not have asked for anyone better.</strong>"
            </div>
        ),
        duration: 2500
    }
];

class Reviews extends Component {
    renderReviewCard = (review) => (
        <Fade key={review.client} duration={review.duration}>
            <div className='review card'>
                <div className='top'>
                    <img className='pfp' src={review.pfp} alt='' />
                    <h5 className='client orange'><strong>{review.client}</strong></h5>
                </div>
                <img className='stars' src={stars} alt='' />
                <h5 className='primary-purple company'><strong>{review.company}</strong></h5>
                <h5 className='black'>{review.content}</h5>
            </div>
        </Fade>
    );
    redirectToReviews = () => {
        window.open('https://www.facebook.com/markitflymedia/reviews', '_blank');
    };

    render() {
        return (
            <div id='reviews'>
                <div id='testimonials-anchor' className='anchors'></div>
                <section>
                    <h1 className='off-white text-center'>Testimonials</h1>
                    <h2 className='off-white text-center'>Don’t believe us? Hear it from others!</h2>
                    <div className='testimonial-cards'>
                        <div>
                            {reviewData.map(this.renderReviewCard)}
                        </div>
                    </div>
                </section>
                <div className='review-btn'><button onClick={this.redirectToReviews}>See more Reviews</button></div>
              
            </div>
        );
    }
}

export default Reviews;
