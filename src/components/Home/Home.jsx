import React from 'react';
import './Home.scss';
import { Container, Row, Col, Jumbotron, Button,Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function MainHome(props){
    return(
        <div>
            <Jumbotron fluid className="mx-auto">
                <Container fluid className="ml-auto mr-auto">
                    <h1 className="display-4 mb-5">Lpaka Web Creations</h1>
                    <h4>Specializing in helping small businesses gain an online presence.</h4>
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
              <Container fluid>
                  <Row>
                      <Col>
                        <h2 className="text-center">Web Design Services</h2>
                        <p className="text-center">TEST TEST TEST </p>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Card>
                            <CardImg width="100%" src="https://isteam.wsimg.com/ip/39526593-dcd0-4da7-ad9e-f0637e24de76/DSC_0031.JPG/:/rs=w:1300,h:800"/>
                            <CardImgOverlay>
                                <CardTitle className="text-center">Web design </CardTitle>
                            </CardImgOverlay>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                            <CardImg width="100%" src="https://isteam.wsimg.com/ip/39526593-dcd0-4da7-ad9e-f0637e24de76/DSC_0031.JPG/:/rs=w:1300,h:800"/>
                            <CardImgOverlay>
                                <CardTitle className="text-center">Web design</CardTitle>
                            </CardImgOverlay>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                            <CardImg width="100%" src="https://i.guim.co.uk/img/media/fa9351fbd248dbaa5c35b1459e3acfba9e31deef/399_192_3425_2055/master/3425.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6655c411da46410322763c6a2faf8c3"/>
                            <CardImgOverlay>
                                <CardTitle className="text-center">Web design</CardTitle>
                            </CardImgOverlay>
                        </Card>
                      </Col>
                  </Row>
                  <Row lg="3">
                      <Col>
                        <Button className="mx-auto">Learn more about our services</Button>
                      </Col>
                  </Row>
              </Container>
        </div>
    );
}

export default MainHome;