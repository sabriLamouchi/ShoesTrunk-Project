import React from "react";
import './footer.css'
import copyright_icon from './copyright.svg'
export default function Footer(){

    return(
        <footer className="footer">
            <section>
                <a href="">ShoesTrunk.</a>
                <div className="contact">
                    <a href="">Support@shoestrunk.com</a>
                    <a>0000-0000-0000</a>
                </div>
            </section>

            <section>
                <ul>
                    <li><a>Home</a></li>
                    <li><a href="">New&Featured</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Kids</a></li>
                </ul>
                <ul>
                    <li><a>Company</a></li>
                    <li><a href="">About useRef</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href=""> FAQ's</a></li>
                </ul>
                <ul>
                    <li><a>Social</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">X</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
                <ul>
                    <li><a>Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms& Condition</a></li>
                    <li><a href="">Help Center</a></li>
                </ul>
            </section>

            <section>
                <img src={copyright_icon}/>
                <a>2023FootwearFinds</a>
            </section>

        </footer>


    );
}