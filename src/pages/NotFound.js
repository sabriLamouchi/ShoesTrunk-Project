import React from "react";
import Lottie from 'react-lottie';
import notFoundAnimation from '../jsonFiles/NotFound Page.json'
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
        <React.Fragment>
            <p>This Page Not Found</p>
            <Lottie options={defaultOptions}
              height={700}
              width={800}/>
        </React.Fragment>
    )
}