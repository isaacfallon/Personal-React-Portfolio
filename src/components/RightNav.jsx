import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

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

        li {
            color: white;
        }
    }
`

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li><Link to="/">About</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="https://www.linkedin.com/in/isaacfallon/" target="_blank">Resume</Link></li>
        </Ul>
    )
}

export default RightNav;