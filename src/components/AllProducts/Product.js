import React, { useCallback, useEffect, useRef, useState } from "react";
import'./products.css'
import Lottie from "react-lottie";
import LoveHeart from '../../iconsData/heart.svg'

import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
export default function Product(props){
    const{addItem}=useCart(); 
    const [isSending,setSending]=useState(false);
    const likeRef=useRef(null);
    useEffect(()=>{

        return()=>{
            // likeRef.current=false;
        }
    },[]);

    const sendRequest=useCallback(async()=>{
        //don't send again while we are sending 
        if(isSending) return 
            //update state
            setSending(true);
        
        //send the actual request
        await new Promise(({resolve,reject})=>{
            console.log(props.name)
            
            let LikeProd=JSON.parse(localStorage.getItem('likes'));
            let obj={items:[]}
             obj.items=LikeProd.items.filter((el)=>el.id!=props.item.id);
            obj.items.push(props.item);
            localStorage.setItem('likes',JSON.stringify(obj));
            likeRef.current.classList.toggle('active')

        });
        
        if(likeRef.current)
            setSending(false);

    },[isSending]);
    useEffect(()=>{
        if (localStorage.getItem('likes')==null)
        {
            const obj={
                items:[],
            }
            localStorage.setItem('likes',JSON.stringify(obj));
        }
    })

    

    
    return( 
        <div 
        className="shoes"
        >
            
                <h3>{props.name}</h3>
                <img ref={likeRef} onClick={()=>{sendRequest()}} className="like" src={LoveHeart}/>
                <Link  to={"/"+props.item.id.toString()}>
                    <img  className="shoes-image"  src={props.img} alt={props.name} loading="lazy"/>
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



