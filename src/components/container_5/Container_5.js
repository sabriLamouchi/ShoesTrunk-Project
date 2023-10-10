import React from "react";

import './container_5.css'


// // Mens shoes:
// import men1 from './mens shoes/air-jordan-1-mid-mens-shoes.png'
// import men2 from './mens shoes/air-jordan-3-retro-mens-shoes.png'
// import men3 from './mens shoes/air-jordan-7-retro-mens-shoes.png'

// //womens shoes:

// import women1 from './womens shoes/air-jordan-1-mid-womens-shoes-Kg.png'
// import womnen2 from './womens shoes/air-max-bella-tr-5-womens-workout-shoes.png'
// import women3 from './womens shoes/air-max-correlate-womens-shoes.png'

// //kids shoes :

// import kid1 from './kids shoes/air-force-1-lv8-big-kids-shoes.png'
// import kid2 from './kids shoes/air-max-97-big-kids-shoes.png'
// import kid3 from './kids shoes/ja-1-day-one-big-kids-basketball.png'
import products from './products'

import Product from "../container_2/Product";
export default function Container_5(){


    // const products=[
    //     {
    //         id:1,
    //         img:men1,
    //         name:'air_jordan_1_mid_mens_shoes',
    //         price:'300$'
    //     },

    //     {
    //         id:2,
    //         img:men2,
    //         name:'air_jordan_3_retro_mens_shoes',
    //         price:"350$"
    //     },

    //     {
    //         id:3,
    //         img:men3,
    //         name:'air_jordan_7_retro_mens_shoes',
    //         price:"130$"
    //     },

    //     {
    //         id:4,
    //         img:women1,
    //         name:'air_jordan_1_mid_womens_shoes_Kg',
    //         price:'350$'
    //     },

    //     {
    //         id:5,
    //         img:womnen2,
    //         name:'air_max_bella_tr_5_womens_workout_shoes',
    //         price:"200$"
    //     },
        
    //     {
    //         id:6,
    //         img:women3,
    //         name:'air_max_correlate_womens_shoes',
    //         price:'180$'
    //     },
    //     {
    //         id:7,
    //         img:kid1,
    //         name:'air_force_1_big_kids_shoes.png',
    //         price:'300$'
    //     },
    //     {
    //         id:8,
    //         img:kid2,
    //         name:'air_max_97_big_kids_shoes',
    //         price:'250$'
    //     },
    //     {
    //         id:9,
    //         img:kid3,
    //         name:'one_big_kids_basketball',
    //         price:'250$'
    //     }
    // ]

    const shoes=products.map((prod)=>{
        return(
            <Product
            key={prod.id}
            name={prod.name}
            img={prod.img}
            price={prod.price}
            item={prod}
            />
        )
    })

    return (
        <div className="cont container_5">
            <h1>Step into Style with New Arrivals!</h1>
            <div className="products">
                {shoes}
            </div>
        </div>
    );
}