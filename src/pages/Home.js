import { useEffect, useRef } from 'react'
import '../App.css'
import Footer from '../components/Footer/Footer'
import Container_1 from '../components/container_1/Container_1'
import Container_2 from '../components/container_2/Container_2.js'
import Container_3 from '../components/container_3/Container_3'
import Container_4 from '../components/container_4/Container_4'
import Container_5 from '../components/container_5/Container_5'
import Container_6 from '../components/container_6/Container_6'
import { useAnimation, useInView,motion} from 'framer-motion'
import { CartProvider } from 'react-use-cart'
import AddCart from './CartPage/addcart.css'
import { useLoaderData } from 'react-router-dom'
export default function Home(){

    // Data Load:
    const data=useLoaderData()

    // ::::::::::::::::::::::::
    const ref2=useRef(null)
    const ref5=useRef(null)
    const inview2=useInView(ref2, {once:true});
    const inview5=useInView(ref5, {once:true});
    const mainAnimation2=useAnimation();
    const mainAnimation5=useAnimation();
    useEffect(()=>{
      if(inview2){
        mainAnimation2.start('visible')
      }
      if(inview5){
        mainAnimation5.start('visible')
      }

    },[inview2,inview5])

    return(
        <>
        <Container_1/>
        <motion.div
          ref={ref2}
                  variants={{
                    hidden:{opacity:0 , y:175},
                    visible:{ opacity:1 , y:0 }
                }}
                initial="hidden"
                animate={mainAnimation2}
                transition={{
                    duration:0.5, delay:0.25,ease: "linear",
                }}
        >
          <Container_2 data={data}/>
        </motion.div>

        <Container_3/>
        <Container_4/>

        <motion.div
          ref={ref5}
                  variants={{
                    hidden:{opacity:0 , y:100},
                    visible:{ opacity:1 , y:0 }
                }}
                initial="hidden"
                animate={mainAnimation5}
                transition={{
                    duration:0.5, delay:0.25,ease:'linear'
                }}
        >
          <Container_5 data={data}/>
        </motion.div>
        <Container_6/>
        <Footer/>
        </>
    )
}

 export const productsLoader=async()=>{
  const res= await fetch("https://shoestrunk-products-data.onrender.com/products");
  if(!res.ok)
    throw Error("can't fetch the data ERROR!!");
  return res.json();
}