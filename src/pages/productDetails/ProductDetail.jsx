import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./productDetail.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Scrollbar,A11y,Autoplay } from 'swiper/modules';
import { useCart } from 'react-use-cart';
import ads from'./ads.json'
const ProductDetail = () => {
    
    const prod=useLoaderData();
    const[imageSelected,setImagge]=useState(prod.images[0]);
    const{addItem}=useCart();
    const shoesImages=prod.images.map((mg)=>{
        return(
            // <SwiperSlide style={{overflow:"visible"}} key={prod.id}>     
            // <img src={mg}/>
            // </SwiperSlide>
            <li>
                <img src={mg} onClick={()=>{setImagge(mg)}} alt={prod.name}/>
            </li>
        )

    })

    // ads importation
    const adsElement=ads.textAds.map((ad)=>{
        return(
            <SwiperSlide>
                <p className="ad" key={ad.id}>{ad.text}</p>
            </SwiperSlide>
        )
    })
    return (
        <>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                loop={true}
                navigation={true}
                    autoplay={{
                        delay:1500,
                        pauseOnMouseEnter:true
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {adsElement}
            </Swiper>
            <div className="prod-container">

                <div className='product'>
                
                    <nav className='image-list'>
                        <ul>
                            {shoesImages}
                        </ul>
                    </nav>
                    <div prodname={prod.name} className='image-view'>
                        {<img src={imageSelected} alt={prod.name} loading='lazy'/>}
                    </div>
                </div>
                <div className='description'>
                    <h1>{prod.name}</h1>
                    <h2>price:<a>{prod.price}$</a></h2>
                    <select name="size" className="size">
                        <option>size</option>
                        <option value="5.5">5.5</option>
                        <option value="8">8</option>
                        <option value="9.5">9.5</option>
                        <option value="11">11</option>
                    </select>
                    <button onClick={()=>{addItem(prod)}}>AddToCarT</button>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;


export const prodDetail=async({params})=>{
    const {id}=params;
    const res=await fetch("https://shoestrunk-products-data.onrender.com/products/"+id);
    if(!res.ok)
        throw Error("can't fetch product detail");
    return res.json();
}