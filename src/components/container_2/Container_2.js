import React from "react";

import Product from "../AllProducts/Product";
import products from "../../ProductsData/products"

import './container_2.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination,Navigation,Scrollbar,A11y,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Importer UseCart
import { Item } from "react-use-cart";


export default function container_2(props){

   const shoes= props.data.map((prod)=>{
    if(prod.PopularProd)
        return (
            <SwiperSlide style={{overflow:"visible"}} key={prod.id}>     
                <Product 
                    img={prod.images[0]}
                    name={prod.name}
                    price={prod.price}
                    item={prod}
                    />
            </SwiperSlide>
 )
    })
    return(
        <div className=" cont container">
            <h1>popular Product</h1>
            <div className="products">
                <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                loop={true}
                lazy={true}
                    autoplay={{
                        delay:2500,
                        pauseOnMouseEnter:true
                    }}
                    spaceBetween={40}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {shoes}
                </Swiper>
            </div>
        </div>
    );
}