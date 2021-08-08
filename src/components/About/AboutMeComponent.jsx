import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileCard from './ProfileCard';
import './AboutMe.scss'

function AboutMe(){
    return(
        <Container fluid className='about-container'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='mt-5 about-title'>My story</h2>
                        <p>My name is andre vasquez, I found my passion for programming when i wrote my first macro in excel VBA.
                            the realization that i could create anything i set my mind to really drove it home for me. 
                            After coding for a bit with VBA i decided i didnt want to be limited to just using excel to create, quickly scouring the internet
                            for languages i could learn. This lead me to finding the one language to rule them all "Python".
                            After 6 months of learning python, i decided to round out my learning. Enrolling into "Nucamp Bootcamp" and diving into
                            front end development using HTML,CSS,Javascript and finally React.<br/>
                            <i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i><i class="fab fa-react"></i><i class="fab fa-python"></i></p>
                        <p>
                            In a personal persepective, im an avid traveler and food lover. I've been fortunate enough to visit over 20+ states and 3 countries!
                            Tasting delicious native plates along the way. My ultimate goal in life is to visit at least 15 countries and every world wonder, 1/8 to go.
                            When im not nose deep in books and coding, i like to play,watch and talk basketball🏀 and play online games with my favorite being Battlefield 5. 
                            </p>
                        <p>
                            I.m also a dog person, I care for 2 puppies right a 6 month old bratty alakan klee kai named Mishka 🐺, and a cuddly 3 month old Miniature australian shepherd named Potato 🥔.
                        </p>   
                    </Col>
                    <ProfileCard/>
                 </Row>
            </Container>
        </Container>
    );
}

export default AboutMe;