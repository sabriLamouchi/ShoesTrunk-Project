import './App.css';
import Header from './components/header/Header'
import Container_1 from './components/container_1/Container_1.js'
import Container_2 from './components/container_2/Container_2.js'
import Container_3 from './components/container_3/Container_3.js'
import Container_4 from './components/container_4/Container_4.js'
import Container_5 from './components/container_5/Container_5.js'
import Container_6 from './components/container_6/Container_6.js'
import ScrollUp from './components/scrollUp/ScrollUp';
import Footer from './components/Footer/Footer.js'
import {motion,useAnimation,useInView} from "framer-motion"
import React,{useRef,useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";
function App() {
  const ref=useRef(null)
  const inview=useInView(ref, {once:true});
  const mainAnimation=useAnimation();
  useEffect(()=>{
    if(inview){
      mainAnimation.start('visible')
    }
  },[inview])
  
  // loaing page animation:
  const [loading,sertloading]=useState(false);

  useEffect(()=>{
    sertloading(true)
    setTimeout(()=>{
      sertloading(false)
    },8000);
  },[])


  return (
    <div className="App">
       {
        loading ?
        <RingLoader
        color={"rgb(244, 111, 15)"}
        loading={loading}
        X={100}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
         :
         <>
         
         <Header/>
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
       }

    </div>
  );
}

export default App;
