import React, { useEffect, useRef } from "react";
import'./products.css'
import { useCart } from "react-use-cart";
import add_icon from './add-icon.svg'
import { NavLink } from "react-router-dom";

export default function Product(props){
    const{addItem}=useCart(); 

    const imgRef=useRef()
    useEffect(()=>{
        imgRef.current.ondblclick = (event) => {
            productDetailClicked(props.item);
        };
    },[])
    return( 
        <div 
        className="shoes"
        >
            <h3>{props.name}</h3>
            <img ref={imgRef}  src={props.img} alt={props.name}/>
            <p className="price">{props.price}$</p>
            <button
                    onClick={()=>{
                        addItem(props.item)
                    }} 
                    className="add-to-cart">add to cart</button>
        </div>
        

    );
}


export const productDetailClicked=(item)=>{
    
    return item;
}


