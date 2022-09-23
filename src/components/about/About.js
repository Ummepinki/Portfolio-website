import React from 'react';
import './About.css';
import ME1 from '../../assets/img.jpg';
import { CgAwards } from 'react-icons/cg';
import { BsFillFolderFill } from 'react-icons/bs';
const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME1} alt='' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <CgAwards className='about__icon' />
                            <h5>Experience</h5>
                            <small>One years Working</small>

                        </article>
                        <article className='about__card'>
                            <BsFillFolderFill className='about__icon' />
                            <h5>Projects</h5>
                            <small>12+ Completed</small>
                        </article>

                    </div>
                    <p>I,m Umme Salma Pinki. I,m Full-Stack Web Developer. My expertise is in the area of responsive design. With every line
                        of code. I,m create web application using React JS, Node JS, Express JS, MongoDB and Taliwind.
                        I have a strong aptitude, problem solving and technical skills.
                    </p>
                    <a href='#contract' className='btn btn-primary'>Let,s Talk</a>
                </div>

            </div>
        </section>
    );
};

export default about;