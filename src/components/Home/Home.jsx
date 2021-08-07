import React,{useState,useEffect} from 'react';
import Typist from 'react-typist';
import './Home.scss';
import { Container, Row, Col, Jumbotron} from 'reactstrap';
import CardCarousel from '../imageCard/Card';


function MainHome(props){
    const [count,setCount] = useState(1);
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
      }, [count]);

    return(
        <div>
            <Jumbotron fluid className="mx-auto mt-0">
                <Container className="ml-auto mr-auto">
                    <Row xs='2'>
                        <Col xs='12'md='6'>
                            <h1 className="display-4 mb-5">Andre Vasquez</h1>
                            {count?(
                                <Typist avgTypingDelay={50} onTypingDone={()=>setCount(0)}>
                                    <span>Full Stack Developer 💻</span>
                                    <Typist.Backspace count={23} delay={900} />
                                    <span>Adventurer ⛰️</span>
                                    <Typist.Backspace count={13} delay={1000} />
                                    <span>Dog dad 🐶🐶</span>
                                    <Typist.Backspace count={11} delay={1100} />
                                </Typist>
                            ):(
                                ""
                            )}
                            <Row>
                                <Col md='4'>
                                    <h4>GIT</h4>
                                </Col>
                                <Col md='4'>
                                    <h4>GIT</h4>
                                </Col>
                                <Col md='4'>
                                    <h4>GIT</h4>
                                </Col>

                            </Row>
                        </Col>
                        <Col xs='12' md='6'>
                            <CardCarousel/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default MainHome;