import React, {useEffect, useState} from 'react';
import './contact.css';
import Submit from '../images/submit.png'
import ContactArrow from '../images/contactArrow.png'
import {init, send} from 'emailjs-com'

const Contact = () => {
    const [contactInput, setContactInput] = useState({
        name: '',
        email: '',
        title: '',
        detail: '',
    })

    useEffect(()=> {
        //public key
        init('ZHP6hLoBsyIGThzBY')
    },[])

    const inputChange = (e) => {
        setContactInput((prevState) => {
            const {name, value} = e.target;
            return {...prevState, [name]: value}
        })
    }

    const submitEmail = (e) => {
        //service id & template id & form 
        send('service_b2rxhcl', 'template_33z55kj', contactInput)
        window.location.pathname='/contact/submit'
    }

    return (
        <div style={{display:'flex', paddingTop:'8.5vw'}}>
            
            <img src={ContactArrow} alt='' className='contactArrow'/>
            <div className='contactD'>
                <div className='contactT1'>Get in touch</div>
                <p className='contactT2'>파우파우에 대해 궁금하거나 혹은 피드백이 있다면</p>
                <p className='contactT2'>정확한 이메일 정보를 작성해주시면 빠른시간 안에 답변해 드리겠습니다!</p>
                <div className='contactBox'>
                    <p className='contactT3'>이름과 답변 받으실 이메일 주소를 꼭 정확하게 작성해주세요</p>
                    <input type='text' placeholder='이름' className='contactInput' onChange={inputChange} name='name'/>
                    <input type='text' placeholder='이메일 주소' className='contactInput' onChange={inputChange} name='email'/>
                    <p className='contactT3'>문의하실 내용을 입력해주세요</p>
                    <input type='text' placeholder='제목' className='contactInput' onChange={inputChange} name='title'/>
                    <textarea placeholder='내용' className='contactInput2' onChange={inputChange} name='detail'/>
                    <div className='contactCheckB'>
                        <input type='checkbox' className='contactCheck' id='agree'/>
                        <label for='agree' className='contactCL'>개인정보 및 수집이용에 동의합니다</label>
                    </div>
                    <img src={Submit} alt="" className='contactSub' onClick={submitEmail}/>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;