import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me (1).jpg';
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Umme Salma Pinki</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />


                <div className='me'>
                    <img src={ME} alt='' />
                </div>
                <HeaderSocial />

                <a href="#contract" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;