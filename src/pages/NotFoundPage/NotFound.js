import React from "react";
import Lottie from 'react-lottie';
import notFoundAnimation from '../../iconsData/NotFound Page.json'
import '../../App.css'
import { Link, NavLink } from "react-router-dom";
export default function NotFound(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: notFoundAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return(
        <React.Fragment className="notfound">
            <div className="notFound">
                <section className="flex-column">
                    <p>We couldn’t find the page you’re looking for.</p>
                    <NavLink to={"/shoesTrunk-Project"}>Back to HomePage</NavLink>
                </section>
                <Lottie options={defaultOptions}
                height={400}
                width={700}/>
            </div>

        </React.Fragment>
    )
}