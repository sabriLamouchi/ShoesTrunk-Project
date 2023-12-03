import React,{useEffect,useRef, useState} from "react";
import './Header.css'
import search from './search.svg'
import cart from './cart.svg'
import heart from './heart.svg'
import { NavLink, Outlet } from "react-router-dom";
import { CartProvider,useCart } from "react-use-cart";

 export default function Header(props){

    
    // ::::::::::::::::::::::
        // use cart:

        const{
            totalUniqueItems,
            totalItems,
            isEmpty,
            cartTotal
        }=useCart()
        const [total,setTotal]=useState(0);
    useEffect(()=>{

        const clIn=setInterval(() => {
            const items=JSON.parse(window.localStorage.getItem('react-use-cart'));
            setTotal(items.totalItems);
        }, 1000);
        return ()=>{
            clearInterval(clIn);
        }
    },[])




    const elementRef=useRef();
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
        <header ref={elementRef}>
            <NavLink style={{display:"block"}} to={'/shoesTrunk-Project'}>ShoesTrunk.</NavLink>
            <ul className="list-items active">
                <li><NavLink to={"/shoesTrunk-Project"}>New&featured</NavLink ></li>
                <li><NavLink to={"/products/men_shoes"}>Men</NavLink></li>
                <li><NavLink to={"/products/women_shoes"}>Women</NavLink></li>
                <li><NavLink to={"/products/kids_shoes"}>Kids</NavLink></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Sales</NavLink></li>
                <li attr='help'><NavLink to={"/Help "}>Help</NavLink></li>
            </ul>
            <ul className="interract-items">
                <li><img src={search} alt="search"/></li>
                <li><NavLink style={{display:"block"}} to={""}><img src={heart} alt="Likes"/></NavLink></li>
                <li carte_attr={total? total:""
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
        <CartProvider>
            <Outlet/>
        </CartProvider>
        

         
         </>
    );


 }