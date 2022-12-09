import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MobileNavigation from '../mobile-components/MobileNavigation';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IsMobileContext } from '../context/IsMobileContext';
import {
    BrandContainer,
    NavContainer,
    MediaContainer,
    Navbar
} from '../styles/NavigationStyles';

function Navigation() {

    let activeStyle = {
        textDecoration: "underline",
        color: 'white'
    }

    let inactiveStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const { isMobile } = useContext(IsMobileContext);

    if (isMobile) {
        return <MobileNavigation/>;
    }
    
    return (
        <Navbar>
            <BrandContainer>
                <NavLink to="/" className="nav-link">
                    Eliott Brown
                </NavLink>
            </BrandContainer>
            <NavContainer>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
                <MediaContainer>
                    <a href="https://github.com/elilogbro">
                        <AiFillGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/eli-in-tech/">
                        <AiFillLinkedin className="icon" />
                    </a>
                    <a href="https://medium.com/@elilogbro">
                        <AiFillMediumCircle className="icon" />
                    </a>
                </MediaContainer>
            </NavContainer>
        </Navbar>
    )
}

export default Navigation;