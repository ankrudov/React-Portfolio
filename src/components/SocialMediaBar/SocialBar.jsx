import React from 'react';
import './SocialBar.scss';

function SocialBar(){
    return(
        <div className="float-sm">
            <div className="fl-fl float-fb">
                <i className="fab fa-facebook"></i>
                <a href="" target="_blank"> Facebook</a>
            </div>
            <div className="fl-fl float-tw">
                <i className="fab fa-twitter"></i>
                <a href="" target="_blank">Twitter</a>
            </div>
            <div className="fl-fl float-gp">
                <i className="fab fa-linkedin"></i>
                <a href="" target="_blank">LinkedIn</a>
            </div>
            <div className="fl-fl float-rs">
                <i className="fab fa-github"></i>
                <a href="" target="_blank">Github</a>
            </div>
            <div className="fl-fl float-ig">
                <i className="fab fa-instagram"></i>
                <a href="" target="_blank">Follow Me</a>
            </div>
            <div className="fl-fl float-pn">
                <i className="fa fa-pinterest"></i>
                <a href="" target="_blank">Follow us!</a>
            </div>
        </div>
    );
}

export default SocialBar;