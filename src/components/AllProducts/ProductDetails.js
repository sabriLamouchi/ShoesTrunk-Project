import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { productDetailClicked } from './Product';

const ProductDetails = () => {
    const {id}=useParams();
    const prod=useLoaderData();
    return (
        <div>
            <h2>{prod.id}</h2>
        </div>
    );
};



export const ProductDetailLoader= async({params})=>{
    const res=await new Promise((resolve, reject) => {
        return productDetailClicked();
    })
    console.log(res);
    return res;
} 

export default ProductDetails;