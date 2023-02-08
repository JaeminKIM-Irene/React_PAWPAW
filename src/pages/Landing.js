import React from 'react';
import './landing.css';
import {NavLink} from 'react-router-dom';
import Footer from '../component/Footer'

const Landing = () => {
    return (
        <div >
            <div className='landingNav'>
                <NavLink to='/' style={{textDecoration:'none'}}>
                    <div className='landingLink'>Home</div></NavLink>
                <NavLink to='/about' style={{textDecoration:'none'}}>
                    <div className='landingLink'>About</div>
                </NavLink>
                <NavLink to='/notice' style={{textDecoration:'none'}}>
                    <div className='landingLink'>Notice</div>
                </NavLink>
                <NavLink to='/event' style={{textDecoration:'none'}}>
                    <div className='landingLink'>Event</div>
                </NavLink>
                <NavLink to='/contact' style={{textDecoration:'none'}}>
                    <div className='landingLink'>Contact</div>
                </NavLink>
            </div>
            
            <Footer />
        </div>
    );
};

export default Landing;