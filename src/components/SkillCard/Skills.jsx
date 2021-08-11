import React from 'react';
import {Container} from 'reactstrap';
import CardCarousel from '../imageCard/Card';
import './skills.scss';

function SkillsSection(){
    return(
        <Container fluid className='skillContainer'>
            <Container className='mb-5 skillContainer'>
                <h2 className='pt-5 pb-5'>What tech do i use?</h2>
                <CardCarousel/>
            </Container>
        </Container>
    );
}

export default SkillsSection;