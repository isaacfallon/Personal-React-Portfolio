import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-top: 8px;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 820px) {
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        flex-flow: column;
        background-color: #2975b1;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.6s ease-in-out;
        z-index: 100;

        li {
            color: white;
        }
            li:hover {
            color: black;
        }
    }
`

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li><Link to="/" className="navLink">About</Link></li>
            <li><Link to="/Portfolio" className="navLink">Portfolio</Link></li>
            <li><Link to="/Contact" className="navLink">Contact</Link></li>
            <li><Link to="https://www.linkedin.com/in/isaacfallon/" target="_blank" className="navLink">Resume</Link></li>
        </Ul>
    )
}

export default RightNav;