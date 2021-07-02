import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './content.scss';

function Home(){
    return(
        <Container className="home-container mx-auto">
            <Row>
                <Col>
                <h2 className="text-center">Hi, Im Andre</h2>
                <h3 className="text-center">Full-Stack Web Developer</h3>
                <p className="text-center mt-3">I design & develop gorgeous, responsive websites. Using technologies like React and Django</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="img-fluid rounded mx-auto mt-3 d-block" src="./assets/me.jpg" id="circle-img" alt="andre profile pic"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
