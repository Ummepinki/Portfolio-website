import React from 'react';
import './Contract.css';
import { GrMail } from 'react-icons/gr'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contract = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_10gmqib', 'template_lt62qqg', form.current, 'C7uvkfdGFdo8djNnp')
        e.target.reset();
    };

    return (
        <section id='contract'>
            <h5>Get In Know</h5>
            <h2>Contract Us</h2>
            <div className='container contract__container'>
                <div className='contract__options'>
                    <article className='contract__option'>
                        <GrMail className='contract__option-icon' />
                        <h4>Emails</h4>
                        <h5>ummepinki3836@gmail.com</h5>
                        <a href='mailto:ummepinki3836@gmail.com'>Send a massage</a>
                    </article>
                    <article className='contract__option'>
                        <AiOutlinePhone className='contract__option-icon' />
                        <h4>Phone</h4>
                        <p>+8801882850107</p>
                        <p>Contract me</p>
                    </article>
                    <article className='contract__option'>
                        <  AiOutlineLinkedin className='contract__option-icon' />
                        <br />
                        <a href='https://www.linkedin.com/in/umme-salma-pinki/'>LinkedIn</a>
                        <p>Chittagong,Bangladesh</p>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>

            </div>
        </section>
    );
};

export default Contract;