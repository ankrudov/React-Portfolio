import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const date = new Date();
const thisYear = date.getFullYear();

function FooterSection(){
    return(
        <footer className="site-footer mt-5">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className='footLink'to='/home'>Home</Link></li>
                            <li><Link className='footLink' to='/about'>About</Link></li>
                            <li><Link className='footLink' to='/skills'>Skills</Link></li>
                            <li><Link className='footLink' to='/projects'>Projects</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a  target="_blank" href="https://github.com/ankrudov"><i class="fab fa-github"></i></a>{' '}
                        <a  target="_blank" href="https://www.instagram.com/lpaka.digital.solutions"><i class="fab fa-instagram"></i></a>{' '}
                        <a  target="_blank" href="https://twitter.com/LpakaCo"><i class="fab fa-twitter"></i></a>{' '}
                        <a  target="_blank" href="https://www.linkedin.com/in/andre-vasquez-20221/"><i class="fab fa-linkedin"></i></a>{' '}
                        <a  target="_blank" href="https://docs.google.com/document/d/1D46Xk_zPvFCfbSo9g7yao6-aM4JNgLVd/edit"><i class="fas fa-file-word"></i></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Email Me</h5>
                        <a role="button" className='footLink' href="#"><i class="fas fa-envelope"></i> andre.vasquez.14@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;