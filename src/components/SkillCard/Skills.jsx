import React from 'react';
import {Container} from 'reactstrap';
import CardCarousel from '../imageCard/Card';
import './skills.scss';

function SkillsSection(){
    return(
        <Container className='mt-5'>
            <h2 className='mt-5 mb-5'>What tech do i use?</h2>
            <CardCarousel/>
        </Container>
    );
}

export default SkillsSection;