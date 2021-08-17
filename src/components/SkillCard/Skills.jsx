import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import CardCarousel from '../imageCard/Card';
import './skills.scss';

function SkillsSection(){
    return(
        <Container fluid className='skillContainer'>
            <Container className='mb-5 skillContainer'>
                <Row className='pt-3 pb-1'>
                    <h2 className='pt-4'>What tech do i use?</h2>
                </Row>
                <Row>
                    <CardCarousel/>
                </Row>
            </Container>
        </Container>
    );
}

export default SkillsSection;