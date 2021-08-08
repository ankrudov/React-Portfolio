import React from 'react';
import Carousel from 'react-elastic-carousel';
import IMAGES from './images';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
import './Card.scss';

const images = IMAGES;
const breakPoints=[
    {width:1,itemsToShow:1},
    {width:500,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4}
]

function Cards(props){
    return(
        <div key={props.key}>
            <Card className='whole-card'>
                <CardImg className ='card-image' top  src={props.image} alt={props.description}/>
                <CardBody>
                    <CardTitle className='whole-card'tag='h5'>{props.name}</CardTitle>
                    <CardText className='whole-card'>{props.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function CardCarousel(props){
    return(
        <Carousel breakPoints={breakPoints}>
            {images.map(image=>{
                return <Cards
                    key={image.id}
                    image={image.image}
                    description={image.descriptions}
                    name={image.name}

                />
            })}
        </Carousel>
    );
}

export default CardCarousel;