import React from 'react';
import './Home.css';
import { Container, Row, Col, Jumbotron, Button} from 'reactstrap';

function MainHome(props){
    return(
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-4 mb-5">Lpaka Creations</h1>
                    <h4>Specializing in helping businesses gain an online presence.</h4>
                    <p>Increase exposure through SEO, Rank on google and gain a beautiful site. </p>
                    <Row xs="2" className="mt-5">
                        <Col xs="12" md="2" lg="1">
                            <Button className="service-button">Our Services</Button>
                        </Col>
                        <Col xs="12" md="2" lg="1">
                            <Button className="Contact-btn">Contact Us</Button>
                        </Col>
                    </Row>
                 </Container>
              </Jumbotron>
        </div>
    );
}

export default MainHome;