import React,{useCallback, useEffect,useRef, useState} from "react";
import './Header.css'
import search from '../../iconsData/search.svg'
import cart from '../../iconsData/cart.svg'
import heart from '../../iconsData/heart.svg'
import brokeHeart from '../../iconsData/Heart beat_custom_icon.json'
import brokenHeart from '../../iconsData/brokenHeart.svg'
import { NavLink, Outlet, json } from "react-router-dom";
import { CartProvider,useCart } from "react-use-cart";
import Lottie from "react-lottie";

 export default function Header(props){
    // lottie icon:
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: brokeHeart,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
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

    // likes_section:
    const  [likesProd,setLikesProd]=useState({items:[]});
    useEffect(()=>{
        const cinprodLike=setInterval(()=>{
            const prod=JSON.parse(window.localStorage.getItem('likes'));
            setLikesProd(prod);
        },2000)

        return ()=> clearInterval(cinprodLike)
    },[likesProd])

    // active Like section
    const LikeSectionRef=useRef();
    const[LikeSectionActive,setLikeSectionActive]=useState(false);
    useEffect(()=>{
         LikeSectionRef.current.classList.toggle('active')
        
    },[!LikeSectionActive])


    return (
        <>
        <header ref={elementRef}>
            <NavLink style={{display:"block"}} to={'/shoesTrunk-Project'}>ShoesTrunk.</NavLink>
            <ul className="list-items active">
                <li><NavLink to={"/shoesTrunk-Project#container_2"}>New&featured</NavLink ></li>
                <li><NavLink to={"/products/men_shoes"}>Men</NavLink></li>
                <li><NavLink to={"/products/women_shoes"}>Women</NavLink></li>
                <li><NavLink to={"/products/kids_shoes"}>Kids</NavLink></li>
                <li><NavLink to={"/shoesTrunk-Project"}>Sales</NavLink></li>
                <li attr='help'><NavLink to={"/Help "}>Help</NavLink></li>
            </ul>
            <ul className="interract-items">
                <li><img src={search} alt="search"/></li>
                <li like_attr={likesProd.items.length?likesProd.items.length:""} className="heart" onClick={()=>{setLikeSectionActive(!LikeSectionActive)}}><img src={heart} alt="Likes"/></li>
                <li carte_attr={total? total:""
                         } className="carte_attr"><NavLink style={{display:"block"}} to={"AddCart"} href=""><img src={cart} alt="carte"/></NavLink></li>
                {/* Likes section  */}
                <li ref={LikeSectionRef}  className="likes_section">
                    <h2>Products You like</h2>
                         { 
                                    likesProd.items.map((p)=>{
                                        return(
                                                <div id={p.id} className="like_prod_container">
                                                    <img src={p.images[0]}/>
                                                    <p>{p.name}</p>
                                                    <p>{p.price}$</p>
                                                    <button onClick={()=>{
                                                                    let prods=JSON.parse(localStorage.getItem('likes'));
                                                                    let obj={items:[]}
                                                                    console.log(prods);
                                                                    obj.items=prods.items.filter((prd)=>prd.id!=p.id);
                                                                    localStorage.setItem('likes',JSON.stringify(obj));
                                                    }}><img src={brokenHeart}/></button>
                                                </div>
                                        );
                                    })
                         }
                </li>
                      
            </ul>
            {/* menu bar resposive display */}
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