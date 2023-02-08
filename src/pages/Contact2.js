import React from 'react';
import './contact2.css'
import {NavLink} from 'react-router-dom'

const Contact2 = () => {
    return (
        <div className='submitD'>
            <div className='submitTs'>
                <div className='submitT'>Submit !</div>
                <p className='submitT2'>문의하신 내용이 성공적으로 등록되었습니다!</p>
                <p className='submitT2'>담당자가 확인하여 최대한 빠르게 답변드리도록 하겠습니다</p>
            </div>
            
            <div className='submitDirect'>
                <NavLink to={'/landing'}>
                    <div className='submitALW' />
                    <div className='submitGW' />
                </NavLink>
            </div>
            <div className='submitDirect'>
                <NavLink to={'/event'}>
                    <div className='submitARW' />
                    <div className='submitCW' />
                </NavLink>
            </div>
        </div>
    );
};

export default Contact2;