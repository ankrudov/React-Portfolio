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
                    <h4 className='mb-4'>Some things that i have built. Im building more and more everyday so this list will update as i complete more. To see some of my practice projects click here: <a  target="_blank" href="https://github.com/ankrudov"><i class="fab fa-github"></i></a></h4>
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
