import React, {useState} from 'react';
import './Navbar.scss';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button} from 'reactstrap';

const Navi = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <section className="mt-5 mb-0 pb-5">
            <Navbar fixed="top" expand="md" className="navba">
                <div className="container-fluid">
                    <NavbarBrand><img src="./assets/icon.png" width="30" height="30" alt="Lpaka Logo"></img></NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto mr-auto">
                            <NavItem>
                                <NavLink>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Projects</NavLink>
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