
import React, { useEffect, useRef, useState } from 'react';

const Faq = (props) => {
    const pref=useRef();
    const hrref=useRef();
    const btnref=useRef();
    const headLineRef=useRef();
    const [clickRequest,setClickRequest]=useState(false);
    useEffect(()=>{
        if(clickRequest){
            pref.current.classList.toggle('active');
            hrref.current.classList.toggle('active');
            btnref.current.classList.toggle('active');
            setClickRequest(false);
        }

    },[clickRequest])

    return (
        <div className='answer'>
            <div className='headline' ref={headLineRef} onClick={()=>{setClickRequest(true)}}>
                <h2>{props.Headline}</h2>
                <button ref={btnref}></button>
            </div>
            <hr ref={hrref}/>
            <p ref={pref}>{props.Question}</p>
        </div>
    );
};

export default Faq;