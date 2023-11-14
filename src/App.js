import './App.css';

//components

import Header from './components/header/Header'
import Container_1 from './components/container_1/Container_1.js'
import Container_2 from './components/container_2/Container_2.js'
import Container_3 from './components/container_3/Container_3.js'
import Container_4 from './components/container_4/Container_4.js'
import Container_5 from './components/container_5/Container_5.js'
import Container_6 from './components/container_6/Container_6.js'
import Home from './pages/Home';
import Likes_Page from './pages/Likes_Page'
import NotFound from './pages/NotFound';
import Help, { ContactAction } from './pages/Help';
//BIB:

import Footer from './components/Footer/Footer.js'
import {motion,useAnimation,useInView} from "framer-motion"
import React,{useRef,useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import AddCart from './pages/AddCart';
import { CartProvider } from 'react-use-cart';



function App() {
  // loaing page animation:
  const [loading,setloading]=useState(false);

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },4000);
  },[])
  //Router Browser:
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Header/>} >
        <Route path="/shoesTrunk-Project" element={<Home/>}></Route>
       <Route path='AddCart' element={ <AddCart/> }></Route>
       <Route path='Likes' element={<Likes_Page/>}></Route>

       <Route path="Help" element={<Help/>} action={ContactAction}></Route>

        {/* Not Found Page 404 Error */}
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    )
  )
  

  return (
    <div className="App">
       {
        loading ?
        <RingLoader
        color={"rgb(244, 111, 15)"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
         :
        //  <>
        //  <Header/>
        //  <Container_1/>
        //  <Container_2/>
        //  <motion.div
        //    ref={ref}
        //            variants={{
        //              hidden:{opacity:0 , y:100},
        //              visible:{ opacity:1 , y:0 }
        //          }}
        //          initial="hodden"
        //          animate={mainAnimation}
        //          transition={{
        //              duration:0.5, delay:0.25
        //          }}
        //  >
        //    <Container_3/>
        //  </motion.div>
        //  <Container_4/>
        //  <Container_5/>
        //  <Container_6/>
        //  <Footer/>
        //  </>

        //router Provider :
        <CartProvider>
        <RouterProvider router={router}/>
        </CartProvider>
       }

    </div>
  );
}

export default App;
