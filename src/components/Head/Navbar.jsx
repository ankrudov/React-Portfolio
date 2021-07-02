import React, {useState} from 'react';

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
        <section className="mt-5 mb-5 pb-5">
            <Navbar fixed="top" light expand="md">
                <div className="container-fluid">
                    <NavbarBrand><img src="./assets/icon.png" width="30" height="30" alt="Lpaka Logo"></img></NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto mr-auto">
                            <NavItem>
                                <NavLink>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Contact Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Button>Get a quote!</Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </section>
    );
}

export default Navi;