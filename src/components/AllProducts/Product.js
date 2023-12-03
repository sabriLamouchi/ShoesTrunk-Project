import React, { useEffect, useRef } from "react";
import'./products.css'
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
export default function Product(props){
    const{addItem}=useCart(); 

    const imgRef=useRef()
    return( 
        <div 
        className="shoes"
        >
            
                <h3>{props.name}</h3>
                <Link  to={"/"+props.item.id.toString()}>
                    <img ref={imgRef} src={props.img} alt={props.name} loading="lazy"/>
                </Link>
                <p className="price">{props.price}$</p>
                <button
                        onClick={()=>{
                            addItem(props.item)
                        }} 
                        className="add-to-cart">add to cart</button>
        </div>
        

    );
}



