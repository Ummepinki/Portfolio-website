import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Project</h2>
            <div className='container portfolio__container'>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Computer parts a modern website for the parts of computer management</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/computer-parts-manufacturer-website-client-side' className='btn' target='_blank'>Client side</a>
                        <a href='https://github.com/Ummepinki/computer-parts-manufacturer-website-server-side' className='btn' target='_blank'>Server side</a>
                        <a href='https://manufacturer-website-6d06c.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt='' />
                    </div>
                    <h3>Iconic fragrances warehouse management website</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/Iconic-fragrances-warehouse-management-client-side' className='btn' target='_blank'>Client side</a>
                        <a href='https://github.com/Ummepinki/Iconic-fragrances-warehouse-management-server-side' className='btn' target='_blank'>Server side</a>
                        <a href='https://warehouse-management-5f17c.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt='' />
                    </div>
                    <h3>Fitness Lover Website</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/fitness-lover-website' className='btn' target='_blank'>GitHub</a>
                        <a href='https://independent-service-prov-30c3b.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4} alt='' />
                    </div>
                    <h3>Product Analysis Website</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/product-analysis-website' className='btn' target='_blank'>GitHub</a>
                        <a href='https://bright-malasada-8064a1.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5} alt='' />
                    </div>
                    <h3>Watch Bands Watch</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/watch-brands-website' className='btn' target='_blank'>GitHub</a>
                        <a href='https://darling-genie-1c2f20.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6} alt='' />
                    </div>
                    <h3>Insta-Shohor Website</h3>
                    <div className='portfolio_item-cta'>
                        <a href='https://github.com/Ummepinki/insta-shohor-website' className='btn' target='_blank'>GitHub</a>
                        <a href='https://flamboyant-swartz-17dfa2.netlify.app/' className='btn btn-primary btn-sm' target='_blank'>Live Demo</a>
                    </div>


                </article>
            </div >
        </section >
    );
};

export default Portfolio;