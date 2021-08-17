import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileCard from './ProfileCard';
import './AboutMe.scss'

function AboutMe(){
    return(
        <Container fluid className='about-container'>
            <Container>
                <Row className='pb-5'>
                    <Col xs='12' md='6'>
                        <h2 className='mt-5 about-title'>My story</h2>
                        <p>My name is andre Vasquez, I found my passion for programming when I wrote my first macro in excel VBA. the realization that I could create anything I set my mind to drove it home for me. After coding for a bit with VBA I decided I didn't want to be limited to just using excel to create; quickly scouring the internet for languages I could learn. This leads me to find the one language to rule them all "Python". After 6 months of learning python, I decided to round out my learning. Enrolling into "Nucamp Bootcamp" and diving into front-end development using HTML, CSS, Javascript, and finally, React.<br/>
                        </p>
                        <p>
                        From a personal perspective, I'm an avid traveler and food lover. I've been fortunate enough to visit over 20+ states and 3 countries! Tasting delicious native plates along the way. My ultimate goal in life is to visit at least 15 countries and every world wonder, 1/8 to go. When I'm not coding, I like to play/watch basketball🏀 and play online games with my favorite being Civilization 6.
                            </p>
                        <p>
                        I'm also a dog person! I care for 2 puppies; a 6-month-old bratty Alaskan Klee kai named Mishka 🐺, and a cuddly 3-month-old Miniature Australian shepherd named Potato 🥔.
                        </p>   
                    </Col>
                    <ProfileCard/>
                 </Row>
            </Container>
        </Container>
    );
}

export default AboutMe;