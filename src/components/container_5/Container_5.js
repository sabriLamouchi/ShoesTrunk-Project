import React, { useEffect, useRef } from "react";

import './container_5.css'
import { motion, useAnimation, useInView } from "framer-motion";

import products from '../../ProductsData/products'
import Product from "../AllProducts/Product";


export default function Container_5(props){
    const ref=useRef(null)
    const inview=useInView(ref, {once:true});
    const mainAnimation=useAnimation();
    useEffect(()=>{
        if(inview){
            mainAnimation.start('visible')}
    },[inview]);
    const shoes=props.data.map((prod)=>{
        return(
            <Product
            key={prod.id}
            name={prod.name}
            img={prod.images[0]}
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