import React from 'react';
import './SocialBar.scss';

function SocialBar(){
    return(
        <div className="float-sm">
            <div className="fl-fl float-fb">
                <i className="fab fa-facebook"></i>
                <a href="https://www.facebook.com/andre.vasquez.39948856" target="_blank"> Facebook</a>
            </div>
            <div className="fl-fl float-tw">
                <i className="fab fa-twitter"></i>
                <a href="https://twitter.com/LpakaCo" target="_blank">Twitter</a>
            </div>
            <div className="fl-fl float-gp">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/andre-vasquez-20221/" target="_blank">LinkedIn</a>
            </div>
            <div className="fl-fl float-rs">
                <i className="fab fa-github"></i>
                <a href="https://github.com/ankrudov" target="_blank">Github</a>
            </div>
            <div className="fl-fl float-ig">
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/lpaka.digital.solutions" target="_blank">Follow Me</a>
            </div>
        </div>
    );
}

export default SocialBar;