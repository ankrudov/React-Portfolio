import React from 'react';
import './Footer.scss';

const date = new Date();
const thisYear = date.getFullYear();

function FooterSection(){
    return(
        <footer>
            <div className="footer_container">
                <div className="logo"> <p>Andre Vasquez </p></div>
                <div className="social_media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <p>Andre Vasquez © {thisYear} All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default FooterSection;