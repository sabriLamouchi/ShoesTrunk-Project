import React from "react";
import shoesTrunkPer1 from './shoestrunkPer1.png'
import './container_4.css'
export default function Container_4(){

    return(

        <div className="cont container_4">
            <div className="section">
                <img src={shoesTrunkPer1}/>
                <p>
                Elevate Your <a>Game,</a> Elevate Your <a>Life</a>
                With Nike Product!
                </p>
                <div className="button"></div>
            </div>
        </div>
    );
}