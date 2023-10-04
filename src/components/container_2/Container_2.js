import React from "react";

import Product from "./Product";
import products from "./Products";

import './container_2.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function container_2(){


   const shoes= products.map((prod)=>{
        return (
            <SwiperSlide style={{overflow:"visible"}} key={prod.id}>     
                  <Product 
                    img={prod.img}
                    name={prod.name}
                    price={prod.price}
                    />
            </SwiperSlide>
            // <Product 
            // key={prod.key}
            // img={prod.img}
            // name={prod.name}
            // price={prod.price}
            // />
 )
    })

    return(
        <div className=" cont container">
            <h1>popular Product</h1>
            {/* <div className="products">
                {shoes}

            </div> */}
            <div className="products">
                <Swiper 
                     pagination={{
                         dynamicBullets: true,
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