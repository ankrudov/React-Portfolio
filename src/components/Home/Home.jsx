import React from 'react';
import './Home.scss';
import { Container, Row, Col, Jumbotron, Button} from 'reactstrap';

function MainHome(props){
    return(
        <div>
            <Jumbotron fluid className="mx-auto">
                <Container fluid className="ml-auto mr-auto">
                    <h1 className="display-4 mb-5">Lpaka Creations</h1>
                    <h4>Specializing in helping businesses gain an online presence.</h4>
                    <p>Increase exposure through SEO, Rank on google and gain a beautiful site. </p>
                    <Row className="mt-5">
                        <Col xs="12" md="2" lg="1" >
                            <Button className="btn btn-block service-btn">Services</Button>
                        </Col>
                        <Col xs="12" md="2" lg="3" >
                            <Button className="btn btn-block contact-btn">Contact Me</Button>
                        </Col>
                    </Row>
                 </Container>
              </Jumbotron>
        </div>
    );
}

export default MainHome;