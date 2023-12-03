import React, { useEffect, useRef } from 'react';
import './productPage.css'
import { useLoaderData } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const ProductPage = () => {
    const data=useLoaderData()
    const pathname= window.location.pathname.split('/');
    console.log(pathname[pathname.length-1])
    // refrences of title:
    const refh1=useRef();

    // useCart 
    const{addItem}=useCart()

    const prods=data.map((sh)=>{
        return(
            <div className='product'>
                <div className='image'>
                    <img src={sh.images[0]} alt={sh.name}/>
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
            <h1 ref={refh1} className='category_h1'>{pathname[pathname.length-1]}</h1>
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