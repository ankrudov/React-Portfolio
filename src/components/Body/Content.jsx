import React from 'react';
import { Container, Row, CardColumns, Card, CardTitle,CardBody, CardText, CardImg, CardImgOverlay,Button, CardFooter } from 'reactstrap';
import './content.scss';

function Projects(){
    return(
        <Container fluid className='mt-5 projects-container'>
            <Container>
                <h2>My Projects</h2>
                <Row>
                    <CardColumns>
                    </CardColumns>
                </Row>
            </Container>
        </Container>
    );
}

function projectCards(props){
    return(
        // front side
        <div className='card-wrapper'>
            <div id={props.key} className='card card-rotating text-center'>
                <div className='face front'>
                    <Card inverse>
                        <CardImg width='100%' src={props.image} alt={props.description}/>
                        <CardImgOverlay>
                            <CardTitle tag='h5'>{props.title}</CardTitle>
                        </CardImgOverlay>
                        <a className="rotate-btn" data-card={props.key}><i class="fas fa-redo-alt"></i> Click here to rotate</a>
                    </Card>
                    <div className='face back'>
                        <Card>
                            <CardBody>
                                <CardTitle>{props.title}</CardTitle>
                                <CardText>{props.description}</CardText>
                                <ul className='link-list'>
                                    <li><a href={props.linkOne} className="list-link-item"><i class="fas fa-laptop"></i></a></li>
                                    <li><a href={props.linkTwo} className="list-link-item"><i class="fab fa-github"></i></a></li>
                                </ul>
                                <CardFooter><a className="rotate-btn" data-card={props.key}><i class="fas fa-undo"></i> Click here to rotate back</a></CardFooter>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
