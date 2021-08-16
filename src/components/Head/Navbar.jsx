import React, {useState} from 'react';
import './Navbar.scss';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navi = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <section className="mt-5">
            <Navbar fixed="top" expand="md" className="navba">
                <div className="container-fluid">
                    <NavbarBrand><img src="./assets/icon.png" width="30" height="30" alt="Lpaka Logo"></img></NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2 nav-toggler" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto mr-auto">
                            <NavItem>
                                <NavLink className="inactive" activeClassName="active" tag={Link} to='/'><i class="fas fa-home"></i> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="inactive" activeClassName="active" tag={Link} to='/about'><i class="fas fa-user"></i> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="inactive" activeClassName="active" tag={Link} to='/skills'><i class="fas fa-tools"></i> Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="inactive" activeClassName="active" tag={Link} to='/projects'><i class="fas fa-tasks"></i> Projects</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Andre Vasquez</NavbarText>
                    </Collapse>
                </div>
            </Navbar>
        </section>
    );
}

export default Navi;