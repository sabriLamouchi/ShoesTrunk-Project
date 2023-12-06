import React, { useEffect, useRef, useState } from 'react';
import './productPage.css'
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const ProductPage = () => {
    const data=useLoaderData()
    const pathname= window.location.pathname.split('/');
    //view display
    const viewRef=useRef(null);
    const[isActive,SetIsActive]=useState(false);

    // const hundleClick= async (e)=>{
    //     if(e.target.classList.contains('image'))
    //     {
    //         var Children=e.target.childNodes;
    //         Children.forEach(element => {
    //             if(element.classList.contains('view'))
    //                 element.classList.toggle('active');
    //         });
    //     }
    //     else{
    //         e.target.nextElementSibling.classList.toggle('active')
    //     }

        
            
    // }


    // ** another methode for toggle VIEW element :

    useEffect(()=>{
        const elsImage=document.getElementsByClassName("image");
        Array.from(elsImage).forEach((el)=>{
            el.addEventListener('click',(event)=>{
                var elementchildren=el.childNodes;
                elementchildren.forEach(child=>{
                    if(child.classList.contains('view'))
                        {child.classList.toggle('active');}
                })
                
            })
        })
    return()=>{};
    },[isActive])



    // useCart 
    const{addItem}=useCart()
    const prods=data.map((sh)=>{
        return(
            <div className='product'>
                <div  className='image'
                onClick={(e)=>{SetIsActive(!isActive)}}>
                    <img src={sh.images[0]} alt={sh.name} />
                    <div ref={viewRef} className={`view`}>
                        <Link to={'/'+sh.id.toString()}>View</Link>
                    </div>
                </div>
                <div className='discription'>
                    <h4>{sh.PopularProd && 'Popular Product'}</h4>
                    <h2>{sh.name}</h2>
                    <p>{sh.price}$</p>
                </div>
                <button onClick={()=>{addItem(sh)}} className='add-to-cart'>add to cart</button>
            </div>
        );
    })
    return (
        <React.Fragment>
            <h1 className='category_h1'>{pathname[pathname.length-1]}</h1>
            <div className='prod_container'>
                {prods}
            </div>  
        </React.Fragment>
    );
};



export const ProductTypeLoader=async({params})=>{
const {type}=params;
const res =await fetch('https://shoestrunk-products-data.onrender.com/'+type);
if(!res.ok)
    return Error(`can't load ${type} product`);
return res.json()
}

export default ProductPage;