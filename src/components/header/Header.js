import React,{useEffect,useRef, useState} from "react";
import './Header.css'
import search from './search.svg'
import cart from './cart.svg'
import heart from './heart.svg'
import { NavLink, Outlet } from "react-router-dom";
import { CartProvider,useCart } from "react-use-cart";

 export default function Header(props){

    const elementRef=useRef();
    // ::::::::::::::::::::::
        // use cart:

        const{
            totalUniqueItems,
            totalItems,
            isEmpty
        }=useCart()
        console.log(isEmpty);
        const [total,setTotal]=useState(false);
    useEffect(()=>{
        if(totalItems!=0){
            setTotal(true)
        }
            
    
    },[totalItems])
    useEffect(()=>{

    const handleScroll=()=>{
        if(window.scrollY!=0){
        //   console.log(elementRef.current.getBoundingClientRect());
        elementRef.current.classList.add("active")
        }
        else{
        elementRef.current.classList.remove("active")
        }
      }
      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener when the component unmounts
       return () => {
         window.removeEventListener("scroll", handleScroll);
       };

    },[window.scrollY])

    return (
        <>
        <CartProvider>
        <header ref={elementRef}>
            <NavLink style={{display:"block"}} to={'/shoesTrunk-Project'}>ShoesTrunk.</NavLink>
            <ul className="list-items active">
                <li><NavLink to={"/shoesTrunk-Project"}>New&featured</NavLink ></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Men</NavLink></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Women</NavLink></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Kids</NavLink></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Sales</NavLink></li>
                <li attr='help'><NavLink to={"/Help "}>Help</NavLink></li>
            </ul>
            <ul className="interract-items">
                <li><img src={search} alt="search"/></li>
                <li><NavLink style={{display:"block"}} to={"Likes_page"}><img src={heart} alt="Likes"/></NavLink></li>
                <li carte_attr={
                    
                        total?
                         totalItems:
                         ""
                    
                } className="carte_attr"><NavLink style={{display:"block"}} to={"AddCart"} href=""><img src={cart} alt="carte"/></NavLink></li>      
            </ul>
            <div className="toggle" onClick={()=>{
                // console.log(document.querySelector('.list-items'));
                document.querySelector('.list-items').classList.toggle("active");

                // console.log(document.querySelector(".toggle::before"))
                const hamburger=document.querySelector('div.toggle');
                if(!document.querySelector('.list-items').classList.contains('active')){
                    hamburger.classList.add('active')
                }else{
                    hamburger.classList.remove("active")
                }


                
            }}
            onBlur={()=>{
                const hamburger=document.querySelector('div.toggle');
                    hamburger.addEventListener('blur',(e)=>{
                    console.log(hamburger)
                    hamburger.classList.remove("active");
                    document.querySelector('.list-items').classList.remove("active");
                    
                })
            }}
            >
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
        </header>
        </CartProvider>
        <CartProvider>
            <Outlet/>
        </CartProvider>
        

         
         </>
    );


 }