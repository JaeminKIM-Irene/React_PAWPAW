import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'
import LogoS from '../images/logoS.png'

const Header = () => {
    return (
        <div className='headerC'>
            <NavLink end to={'/'}>
                <img src={LogoS} alt='' className="logoS"/>
            </NavLink>
                <div className='headerC2' style={{fontFamily:'Lexend'}}>
                    <div className='navlinks'>
                        <NavLink end to={'/'} activeClassName="active">
                            <div className='link'>Home</div>
                        </NavLink>
                        <NavLink to={'/about'} activeClassName="active">
                            <div className='link'>About</div>
                        </NavLink>
                        <NavLink to={'/notice'} activeClassName="active">
                            <div className='link'>Notice</div>
                        </NavLink>
                        <NavLink to={'/event'} activeClassName="active">
                            <div className='link'>Event</div>
                        </NavLink>
                        <NavLink to={'/contact'} activeClassName="active">
                            <div className='link'>Contact</div>
                        </NavLink>
                    </div>
                </div>
            
        </div>
    );
};

export default Header;