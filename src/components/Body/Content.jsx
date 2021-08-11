import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import Carousel from 'react-elastic-carousel';
import './content.scss';
import CONTENTDATA from './ContentData';

const contentData = CONTENTDATA;
const breakPoints=[
    {width:1,itemsToShow:1},
    {width:500,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4}
]
function Projects(){
    return(
        <Container fluid className='mt-5 projects-container'>
            <Container className='pb-5'>
                <Row>
                    <h2 className='mt-5 mb-5'>My Projects</h2>
                    <Carousel breakPoints={breakPoints}>
                        {contentData.map(content=>{
                            return(
                                <FrontBackCard
                                    key={content.key}
                                    title={content.title}
                                    description={content.description}
                                    image={content.image}
                                    linkOne={content.linkOne}
                                    linkTwo={content.linkTwo}
                            />);
                        })}
                    </Carousel>
                </Row>
            </Container>
        </Container>
    );
}

function FrontBackCard(props){
    return(
        <div key={props.key} className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img className='image-flip-card' src={props.image} alt={props.description} />
                </div>
                <div className='flip-card-back'>
                    <h5 className='mt-3'>{props.title}</h5>
                    <p>{props.description}</p>
                    <hr/>
                    <ul className='list-inline py-2'>
                        <li className='list-inline-item'><a href={props.linkOne} target="_blank"><i className='fas fa-laptop'></i></a></li>
                        <li className='list-inline-item'><a href={props.linkTwo} target="_blank"><i className='fab fa-github'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
   



export default Projects;
