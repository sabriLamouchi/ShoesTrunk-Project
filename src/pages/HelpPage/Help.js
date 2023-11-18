import React from 'react';
import './help.css'

//Import banner-section images
import {Images} from './help_banner_images/Help_banner'
import { Form, redirect, useActionData } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import swipercore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import { Pagination,Navigation,Scrollbar,A11y,Autoplay } from 'swiper/modules';


//components-pages:
import Contact from './contactPage/Contact';
import Faqs from './faqsPage/Faqs';

const Help = () => {

    const actionData=useActionData();
    const images=Images.map((image)=>{
        return(
            <SwiperSlide key={image.id}>
            <img src={image.img}/>
            </SwiperSlide>
        )

    })
    return (
        <div className='help'>
            
            <div className='banner-section'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={()=>{}}
                    onSlideChange={() => console.log('slide change')}
                    centeredSlides={true}
                    autoplay={{
                        delay:2500,
                        pauseOnMouseEnter:true
                    }
                    }
                    >
                        {images}
            </Swiper>
            </div>
            {/* FAQS Compnent */}
            <Faqs/>
            {/* Contact Component */}
            <Contact/>
        </div>
    );
};


export const ContactAction=async({request})=>{

    const data=await request.formData();
    const submission={
        name:data.get('name'),
        lastname:data.get("lastname"),
        mail:data.get("mail"),
        message:data.get("message")
    }
    console.log(submission);
    //user post request
    if(submission.message.length<=10){
        return {error:"Enter your message please (message must be at least 10 characters) :)!!"}
    }

    //redirect to Home page:
    return redirect("/shoesTrunk-Project");
}



export default Help;