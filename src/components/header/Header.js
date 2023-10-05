import React,{useEffect,useRef} from "react";
import './Header.css'
import search from './search.svg'
import cart from './cart.svg'
import heart from './heart.svg'
import { NavLink, Outlet } from "react-router-dom";

 export default function Header(props){
    
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
    },[])
    return (
        <>
        <header ref={elementRef}>
            <NavLink style={{display:"block"}} to={'/shoesTrunk-Project'}>ShoesTrunk.</NavLink>
            <ul className="list-items active">
                <li><a href="">New&featured</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Sales</a></li>
            </ul>
            <ul className="interract-items">
                <li><a href=""><img src={search} alt="search"/></a></li>
                <li><NavLink style={{display:"block"}} to={"Likes_page"} href=""><img src={heart} alt="Likes"/></NavLink></li>
                <li><NavLink style={{display:"block"}} to={"Carte"} href=""><img src={cart} alt="carte"/></NavLink></li>      
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
            }}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
        </header>
         <Outlet/>
         </>
    );


 }