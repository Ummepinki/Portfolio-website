import React from 'react';
import './Experience.css';
import { ImHtmlFive2 } from 'react-icons/im'
import { TbBrandCss3 } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have </h5>
            <h2>My Skills </h2>
            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <ImHtmlFive2 />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <TbBrandCss3 />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <IoLogoJavascript />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiBootstrap />
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTailwindcss />
                            <div>
                                <h4>TailWind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <GrReactjs />
                            <div>
                                <h4>React JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>


                <div className="experience__backend">
                    <div className="experience__backend">
                        <h3>Backend Development</h3>
                        <div className='experience__content'>
                            <article className='experience__details'>
                                <IoLogoNodejs />
                                <div>
                                    <h4>Node JS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiMongodb />
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiExpress />
                                <div>
                                    <h4>Express JS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <FaAws />
                                <div>
                                    <h4>AWS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <TbApi />
                                <div>
                                    <h4>Rest API</h4>
                                    <small className='text-light'>Basic</small>
                                </div>
                            </article>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;