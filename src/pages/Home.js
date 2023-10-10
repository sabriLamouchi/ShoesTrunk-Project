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
import AddCart from './AddCart'
export default function Home(){
    const ref=useRef(null)
    const inview=useInView(ref, {once:true});
    const mainAnimation=useAnimation();
    useEffect(()=>{
      if(inview){
        mainAnimation.start('visible')
      }
    },[inview])
    return(
        <>
        <Container_1/>
          <Container_2/>
        <motion.div
          ref={ref}
                  variants={{
                    hidden:{opacity:0 , y:100},
                    visible:{ opacity:1 , y:0 }
                }}
                initial="hodden"
                animate={mainAnimation}
                transition={{
                    duration:0.5, delay:0.25
                }}
        >
          <Container_3/>
        </motion.div>
        <Container_4/>
          <Container_5/>
        <Container_6/>
        <Footer/>
        </>
    )
}