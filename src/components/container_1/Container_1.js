import React, { useEffect, useRef } from "react";
import './container_1.css'
import  Express from'./Express.svg'
import Through from './Through.svg'
import shoes from './shoes.svg'

import {motion} from "framer-motion"
export default function Container_1(){

    const elementRef=useRef();


    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

        
    
    
    return(
        <motion.div
        variants={{
            hidden:{opacity:0 , left:100},
            visible:{ opacity:1 , left:0 }
        }}
        initial="hodden"
        animate="visible"
        transition={{
            duration:0.5, delay:0.25
        }}

        className="cont container show-animate">
                <img src={Express}/>
                <img src={Through}/>
            <div className="exclusive">
                <img src={shoes}/>
                <div className="button">
                </div>
            </div>
            <div ref={elementRef} onClick={scrollTop} className="scrollUp"> </div>
        </motion.div>
    );
}