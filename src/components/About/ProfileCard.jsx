import React from 'react';
import { Col,Card } from 'reactstrap';
import './ProfileCard.scss';

function ProfileCard(){
    return(
        <Col md='4' className='mt-5'>
            <Card className='profile-card'> 
                <div className='background-block'>
                    <img src='./assets/Portfolio_Background.png' alt='techy background' className='background'/>
                </div>
                <div className='profile-thumb-block'>
                    <img src='./assets/me.jpg' alt='Me in front of some woods' className='profile'/>
                </div>
                <div className='card-content'>
                    <h2>Andre Vasquez <small> Full-Stack developer</small></h2>
                </div>
            </Card>
        </Col>
    );
}

export default ProfileCard;