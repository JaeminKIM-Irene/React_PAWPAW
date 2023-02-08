import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Notice from './Notice';
import Event from './Event';
import EventD from './EventD';
import Contact from './Contact';
import Contact2 from './Contact2';
import Header from '../component/Header'
import Footer from '../component/Footer'

const Frame = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='about' element={<About/>}/>
                <Route path='notice' element={<Notice/>}/>
                <Route path='event' element={<Event/>}/>
                <Route path='event/detail' element={<EventD/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='contact/submit' element={<Contact2/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Frame;