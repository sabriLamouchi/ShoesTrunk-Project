import './App.css';

//components
import Header from './components/header/Header'
import Home from './pages/Home';
import Likes_Page from './pages/LikePage/Likes_Page'
import NotFound from './pages/NotFoundPage/NotFound';
import Help, { ContactAction } from './pages/HelpPage/Help';
import ProductDetails, { ProductDetailLoader } from './components/AllProducts/ProductDetails';
//BIB:
import React,{useRef,useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import AddCart from './pages/CartPage/AddCart';
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
      <Route path="/shoesTrunk-Project" element={<Home/>}>
        <Route
          path=':id'
          element={<ProductDetails/>}
          loader={null}
          />
      </Route>

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
       {/* {
        loading ?
        <RingLoader
        color={"rgb(244, 111, 15)"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
         :
        //router Provider :
        <CartProvider>
        <RouterProvider router={router}/>
        </CartProvider>
       } */}
        <CartProvider>
        <RouterProvider router={router}/>
        </CartProvider>
    </div>
  );
}

export default App;
