import React from 'react';
import './Footer.css';
import { BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { AiOutlineLinkedin } from 'react-icons/ai'
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
                <a href='https://www.linkedin.com/in/umme-salma-pinki/' target="_blank"><AiOutlineLinkedin /></a>
                <a href='' target="_blank"><GrMail /></a>
                <a href="https://github.com/Ummepinki" target="_blank"><BsGithub /></a>

            </div>

            <div className='footer__copyright'>
                <small>&copy;Umme Salma Pinki. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;