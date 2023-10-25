import React, { useEffect, useRef } from "react";
import'./container_2.css'
import { useCart } from "react-use-cart";
import add_icon from './add-icon.svg'

import {motion, useAnimation, useInView}from "framer-motion"
export default function Product(props){
    const{addItem}=useCart();

    return(
        <div 
        className="shoes"

        >
            <h3>{props.name}</h3>
            <img src={props.img} alt={props.name}/>
            <p className="price">{props.price}$</p>
            <button
                    onClick={()=>{
                        addItem(props.item)
                    }} 
                    className="add-to-cart">add to cart</button>
        </div>

    );
}


