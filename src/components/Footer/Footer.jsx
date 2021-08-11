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
                    <a href="https://www.facebook.com/andre.vasquez.39948856" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/LpakaCo" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/lpaka.digital.solutions" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/ankrudov" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/andre-vasquez-20221/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <p>Andre Vasquez © {thisYear} All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default FooterSection;