import React from "react";


import Product from './Product'
import pop1 from './popular_product/air-force-1-07-lx-womens-shoes.png'
import pop2 from './popular_product/air-force-1-low-retro-mens.png'
import pop3 from './popular_product/air-jordan-1-mid-sneaker-school.png'

import pop4 from './popular_product/air-jordan-1-retro-high-og-mens.png'
import pop5 from './popular_product/blazer-mid-77-womens-shoes.png'

import pop6 from './popular_product/air-more-uptempo-big-kids-shoes.png'
import pop7 from './popular_product/jumpman-mvp-mens-shoes.png'
import pop8 from './popular_product/blazer-mid-77-womens-shoes.png'

import './container_2.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function container_2(){

    const products=[
        {
            id:1,
            img:pop1,
            name:'air-force-1-07-lx-womens-shoes',
            price:'300$'
        },

        {
            id:2,
            img:pop2,
            name:'air-force-1-low-retro-mens',
            price:"350$"
        },

        {
            id:3,
            img:pop3,
            name:'air-jordan-1-mid-sneaker-school',
            price:"130$"
        },

        {
            id:4,
            img:pop4,
            name:'air-jordan-1-retro-high-og-mens',
            price:'350$'
        },

        {
            id:5,
            img:pop5,
            name:'blazer-mid-77-womens-shoes',
            price:"200$"
        },
        
        {
            id:6,
            img:pop6,
            name:'air-more-uptempo-big-kids-shoes',
            price:'180$'
        },
        {
            id:7,
            img:pop7,
            name:'jumpman-mvp-mens-shoes',
            price:'300$'
        },
        {
            id:8,
            img:pop8,
            name:'blazer-mid-77-womens-shoes',
            price:'250$'
        }
    ]

   const shoes= products.map((prod)=>{
        return (
            <SwiperSlide>     
                  <Product 
                    key={prod.id}
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {shoes}
                </Swiper>
            </div>
        </div>
    );
}