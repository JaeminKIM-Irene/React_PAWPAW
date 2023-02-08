import React from 'react';
import './about.css';
import Fade from 'react-reveal/Fade'

import Footprint1 from '../images/footprint1.png'
import Footprint2 from '../images/footprint2.png'
import Q1 from '../images/q1.png'
import Q2 from '../images/q2.png'
import Q3 from '../images/q3.png'
import A1 from '../images/a1.png'
import A2 from '../images/a2.png'
import A3 from '../images/a3.png'

const About = () => {
    return (
        <div>
            <div className='aboutContent'>
                <img src={Footprint1} alt='' className='aboutFoot' />
                <div>
                    <div className='aboutTBox'><div className='aboutT1'>We are a community</div></div>
                    <div className='aboutTBox'><div className='aboutT2'>that consolidates and</div></div>
                    <div className='aboutTBox'><div className='aboutT3'>shares exciting events</div></div>
                    <div className='aboutTBox'><div className='aboutT4'>for all kinds of animal toys &</div></div>
                    <div className='aboutTBox'><div className='aboutT5'>equipments for animal lovers</div></div>
                    <div className='aboutTBox'><div className='aboutT6'>like you!</div></div>
                    
                </div>
                <img src={Footprint2} alt='' className='aboutFoot2' />
            </div>
            <div className='aboutContent2'>
                <Fade bottom>
                    <img src={Q1} alt='' className='aboutBubble1' />
                    <img src={A1} alt='' className='aboutBubble2' />
                    <img src={Q2} alt='' className='aboutBubble3' />
                    <img src={A2} alt='' className='aboutBubble4' />
                    <img src={Q3} alt='' className='aboutBubble5' />
                    <img src={A3} alt='' className='aboutBubble6' />
                </Fade>
                
            </div>
        </div>
    );
};

export default About;