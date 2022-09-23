import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { useState } from 'react';
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} >
                <AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}
            ><FaUserAlt /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}
            ><ImBook /></a>
            <a href="#contract" onClick={() => setActiveNav('#contract')} className={activeNav === '#contract' ? 'active' : ''}
            ><BiMessageRoundedDots /></a>
        </nav>
    );
};

export default Nav;