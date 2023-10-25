import React, { useEffect, useRef } from "react";

import './container_5.css'
import { motion, useAnimation, useInView } from "framer-motion";

// // Mens shoes:
// import men1 from './mens shoes/air-jordan-1-mid-mens-shoes.png'
// import men2 from './mens shoes/air-jordan-3-retro-mens-shoes.png'
// import men3 from './mens shoes/air-jordan-7-retro-mens-shoes.png'

// //womens shoes:

// import women1 from './womens shoes/air-jordan-1-mid-womens-shoes-Kg.png'
// import womnen2 from './womens shoes/air-max-bella-tr-5-womens-workout-shoes.png'
// import women3 from './womens shoes/air-max-correlate-womens-shoes.png'

// //kids shoes :

// import kid1 from './kids shoes/air-force-1-lv8-big-kids-shoes.png'
// import kid2 from './kids shoes/air-max-97-big-kids-shoes.png'
// import kid3 from './kids shoes/ja-1-day-one-big-kids-basketball.png'
import products from './products'

import Product from "../container_2/Product";
export default function Container_5(){

    const ref=useRef(null)
    const inview=useInView(ref, {once:true});
    const mainAnimation=useAnimation();
    useEffect(()=>{
        if(inview){
            mainAnimation.start('visible')}
    },[inview]);

    const shoes=products.map((prod)=>{
        return(
            <Product
            key={prod.id}
            name={prod.name}
            img={prod.img}
            price={prod.price}
            item={prod}
            />
        )
    })

    return (
        <div className="cont container_5">
            <h1>Step into Style with New Arrivals!</h1>
            <motion.div
            variants={{
                hiden:{opacity:0, x:-100},
                visible:{opacity:1,x:0}
            }}
            initial="hodden"
            animate={mainAnimation}
            className="products">
                {shoes}
            </motion.div>
        </div>
    );
}