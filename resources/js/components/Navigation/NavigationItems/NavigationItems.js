import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        <Navbar className="pb-4" dark={!light} light={light} expand>
            <Container>
                <Collapse navbar>
                    <Nav className="d-flex align-items-center" navbar>
                        <NavigationItem font={font} icon="home" href="/">Home</NavigationItem>
                        <NavigationItem font={font} icon={"far", "user"} href="/about-us">About Us</NavigationItem>
                        <NavigationItem font={font} icon="graduation-cap" href="/scholar">Scholar</NavigationItem>
                        <NavigationItem font={font} icon="book" href="/academic">Academic</NavigationItem>
                        <NavigationItem font={font} icon="envelope" href="/contact">Contact</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default navigationItems;