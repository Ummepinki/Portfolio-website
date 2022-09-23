import React from 'react';
import './Footer.css';
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Umme Salma Pinki</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contract">Contract</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://facebook.com'><FiFacebook /></a>
                <a href='https://instagram.com'><AiOutlineInstagram /></a>
                <a href='https://twitter.com'><AiOutlineTwitter /></a>

            </div>

            <div className='footer__copyright'>
                <small>&copy;Umme Salma Pinki. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;