import React, { useEffect, useRef } from "react";
import './container_3.css'
import cameraMenSplash from './cameraMenSplash.svg'
import {motion, useAnimation, useInView} from "framer-motion"
export default function Container_3(){
    const ref=useRef(null)
    const inview=useInView(ref, {once:true});
    const mainAnimation=useAnimation();
    useEffect(()=>{
      if(inview){
        mainAnimation.start('visible')
      }
    },[inview])

    return(
        <motion.div 
            ref={ref}
            variants={{
                hidden:{opacity:0 , left:-100},
                visible:{ opacity:1 , left:0 }
            }}
            initial="hodden"
            animate={mainAnimation}
            
        className=" cont container_3">
            <div className="section_1">
                <h1 percentage='98%' tirre='__'>
                    Find the Perfect Shoes Essenials.
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur adipisci, odio voluptas itaque officia architecto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur adipisci, odio voluptas itaque officia architecto
                </p>
                <div className="buttons flex">
                    <div className="btn1 flex">
                        <button></button>
                        <p placeholder="Machine wash at 30">Care Instructions</p>
                    </div>
                    <div className="btn2 flex">
                        <button></button>
                        <p placeholder="84% cotton,16% Polyester">Fabric Material</p>
                    </div>
                </div>
            </div>
            <div className="section_2">
                <img src={cameraMenSplash}/>
            </div>

            
        </motion.div>
    );
}