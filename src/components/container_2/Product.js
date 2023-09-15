import React from "react";
import'./container_2.css'
export default function Product(props){

    return(
        <div className="shoes">
            <h3>{props.name}</h3>
            <img src={props.img}/>
            <p className="price">{props.price}</p>
        </div>

    );
}


