import React,{useState} from 'react';
import "./content.css";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


const carouselItems=[
    {
        src:"https://image.shutterstock.com/image-photo/random-photos-taked-on-weekend-600w-1851612238.jpg",
        altText: 'Andre Vasquez',
        caption: 'Full-Stack Web Developer',
    },
    {
        src:"https://image.shutterstock.com/image-photo/random-photos-taked-on-weekend-600w-1851612238.jpg",
        altText: 'Andre Vasquez',
        caption: 'Full-Stack Web Developer',
    },
    {
        src:"https://image.shutterstock.com/image-photo/random-photos-taked-on-weekend-600w-1851612238.jpg",
        altText: 'Andre Vasquez',
        caption: 'Full-Stack Web Developer',
    },
    {
        src:"https://image.shutterstock.com/image-photo/random-photos-taked-on-weekend-600w-1851612238.jpg",
        altText: 'Andre Vasquez',
        caption: 'Full-Stack Web Developer',
    },
    {
        src:"https://image.shutterstock.com/image-photo/random-photos-taked-on-weekend-600w-1851612238.jpg",
        altText: 'Andre Vasquez',
        caption: 'Full-Stack Web Developer',
    }
];

const Content = (props)=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () =>{
        if(animating) return;
        const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const previous = () =>{
        if (animating) return;
        const nextIndex = activeIndex  === 0 ? carouselItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = carouselItems.map((item)=>{
        return(
            <CarouselItem  className="custom-tag"
                tag="div"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src} 
            >
                <img src={item.src} alt={item.altText} />
                 <CarouselCaption className="custom-tag fs-3 text-secondary "captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return(
        <div className="custom-tag mt-5 pt-5">
            <style>
            {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background:none;
                }`
            }
      </style>
            <Carousel className="custom-tag"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
            <CarouselIndicators  items={carouselItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Content;