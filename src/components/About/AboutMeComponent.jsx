import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function AboutMe(props){
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Who Am i?</h1>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;