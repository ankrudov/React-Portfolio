import React from 'react';
import { Col,Card } from 'reactstrap';
import './ProfileCard.scss';

function ProfileCard(){
    return(
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <img className="card-img-top" src="./assets/Portfolio_Background.png" alt="Tech Background"/>
                <div className="card-body text-center">
                    <img className="avatar rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQESF4SJPG27IQ/profile-displayphoto-shrink_800_800/0/1628030914361?e=1634774400&v=beta&t=CzMptMb8jhY7-eVTKBFgHujDMd2tsAD--olE_BSAKZo" alt="Andre vasquez cheesin"/>
                    <h4 className="card-title">Andre Vasquez</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Full-stack developer</h6>
                    <p className="card-text">Hey there, Im andre. a "mostly" self taught developer with a passion for coding!</p>
                    <a  target="_blank" href="https://github.com/ankrudov"><i class="fab fa-github"></i></a>
                    <a  target="_blank" href="https://www.linkedin.com/in/andre-vasquez-20221/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;