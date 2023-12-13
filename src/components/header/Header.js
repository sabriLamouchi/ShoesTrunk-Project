import React,{useCallback, useEffect,useRef, useState} from "react";
import './Header.css'
import search from '../../assets/iconsData/search.svg'
import cart from '../../assets/iconsData/cart.svg'
import heart from '../../assets/iconsData/heart.svg'
import brokeHeart from '../../assets/iconsData/Heart beat_custom_icon.json'
import brokenHeart from '../../assets/iconsData/brokenHeart.svg'
import { NavLink, Outlet, json } from "react-router-dom";
import { CartProvider,useCart } from "react-use-cart";
import Lottie from "react-lottie";
import { ReactSortable } from "react-sortablejs";

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
// count on cart 
        const clIn=setInterval(() => {
            const items=JSON.parse(window.localStorage.getItem('react-use-cart'));
            setTotal(items.totalItems);
        }, 1000);
        return ()=>{
            clearInterval(clIn);
        }
// drag and drop like section
        // const dragAndDropItems=document.getElementById(likes-container);
        // new Sortable(dragAndDropItems,{
        //     Animation:350,
        //     chosenClass:'like-prod-chosen',
        //     dragClass:'like-prod-drag'
        // })
    },[])




    const elementRef=useRef();
    useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY!==0){
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
    const obj={
        items:[]
    }
    const  [likesProd,setLikesProd]=useState(obj);
    const [list,setList]=useState([]);
    useEffect(()=>{
        const cinprodLike=setInterval(()=>{
            const prod=JSON.parse(window.localStorage.getItem('likes'));
            setLikesProd(prod);
            setList(likesProd.items);
        },2000)

        return ()=> clearInterval(cinprodLike)
    },[likesProd])

    // active Like section
    const LikeSectionRef=useRef();
    const[LikeSectionActive,setLikeSectionActive]=useState(false);
    useEffect(()=>{
         LikeSectionRef.current.classList.toggle('active')
        
    },[LikeSectionActive])

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
                <li><NavLink to={'/search'}><img src={search} alt="search"/></NavLink></li>
                <li like_attr={likesProd.items.length?likesProd.items.length:""} className="heart" onClick={()=>{setLikeSectionActive(!LikeSectionActive)}}><img src={heart} alt="Likes"/></li>
                <li carte_attr={total? total:""
                         } className="carte_attr"><NavLink style={{display:"block"}} to={"AddCart"} href=""><img src={cart} alt="carte"/></NavLink></li>
                {/* Likes section  */}
                <li ref={LikeSectionRef}  className="likes_section">
                    <h2>Products You like</h2>
                    <div  className="likes_container flex-column">
                         { 
                                     likesProd.items &&
                                     Array.isArray(likesProd.items) &&
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
                                                                    obj.items=prods.items.filter((prd)=>prd.id!==p.id);
                                                                    localStorage.setItem('likes',JSON.stringify(obj));
                                                    }}><img src={brokenHeart}/></button>
                                                </div>
                                        );
                                    })
                         }
                    </div>
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