import React from 'react';
import './eventD.css'
import { useLocation } from 'react-router-dom';

const EventD = () => {
    const data = useLocation().state.data
    const week = ['일', '월', '화', '수', '목', '금', '토']

    const getFull = (e) => {
        return e.getFullYear() + '.' + ('0'+(e.getMonth()+1)).slice(-2) + '.' + ('0'+e.getDate()).slice(-2) + ' (' + week[e.getDay()] + ')'
    }
    
    return (
        <div className='eventDContent'>
            <div style={{display:'flex'}}>
                <div className='eventDT'>Let us introduce</div>
                <div className='eventDLine'></div>
            </div>
            <div className='eventDName'>{data.name}</div>
            <div style={{display:'flex'}}>
                <div className='eventDContent2'>
                    <div className='eventDInfo'>
                        <div className='eventDT2'>행사명<div>{data.name}</div></div>
                        <div className='eventDT2'>홈페이지<div style={{cursor:'pointer', textDecoration:'underline'}} onClick={()=>{window.location.href=data.url}}>{data.url}</div></div>
                        <div className='eventDT2'>장소<div>{data.place}</div></div>
                        <div className='eventDT2'>기간<div>{getFull(data.duration[0])} - {getFull(data.duration[1])}</div></div>
                        <div className='eventDT2'>시간<div>{data.time}</div></div>
                        <div className='eventDT2'>규모<div>{data.size}</div></div>
                        <div className='eventDT2'>주관<div>{data.company1}</div></div>
                        <div className='eventDT2' style={{marginBottom:'1vw'}}>주최<div>{data.company2}</div></div>
                        
                    </div>
                    <div className='eventDT3'>Detail information</div>
                    <div className='eventDInfo2'>
                    {data.detail.split('\n').map((txt)=> (
                        <>
                        {txt}
                        <br />
                        </>
                    ))}
                    </div>
                </div>
                <div className='eventDPoster'>
                    <img src={process.env.PUBLIC_URL + '/' +data.poster2} alt="" className='eventDPoster2' />
                </div>
            </div>
        </div>
    );
};

export default EventD;