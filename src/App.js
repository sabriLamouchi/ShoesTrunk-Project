import './App.css';

//components
import Header from './components/header/Header'
// import Home, { productsLoader } from './pages/Home';
import NotFound from './pages/NotFoundPage/NotFound';
import SkeletonHelp from './components/Skeletons/SkeletonHelp';
// import  Help, { ContactAction } from './pages/HelpPage/Help';
//BIB:
import React,{useRef,useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import AddCart from './pages/CartPage/AddCart';
import { CartProvider } from 'react-use-cart';
// import ProductDetail, { prodDetail } from './pages/productDetails/ProductDetail';
import { ErrorBoundary } from 'react-error-boundary';
// Lazy

import { lazy,Suspense } from 'react';
import { ContactAction } from './pages/HelpPage/Help';
import { productsLoader } from './pages/Home';
import SkeletonHome from './components/Skeletons/SkeletonHome';
import { prodDetail } from './pages/productDetails/ProductDetail';
import  { ProductTypeLoader } from './pages/product_page/ProductPage';
import SkeletonProduct from './components/Skeletons/SkeletonProduct';
import Search from './pages/searchPage/Search';

  const Help=lazy(()=> import('./pages/HelpPage/Help')) 
  const Home =lazy(()=>import('./pages/Home'))
  const ProductDetail=lazy(()=>import('./pages/productDetails/ProductDetail'))
  const ProductPage =lazy(()=>import('./pages/product_page/ProductPage'))
 function App() {

  //navigate
  // loaing page animation:
  const [loading,setloading]=useState(true);

  // App refrences:
  const appRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },4000)
  },[loading])

  //Router Browser:
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route element= {<Header/>} >
        <Route path="/shoesTrunk-Project" element={
          <Suspense fallback={<SkeletonHome/>}>
            <Home/>
          </Suspense>
        } loader={productsLoader}/>

        <Route
            path=":id"
            element={
              <Suspense fallback={<SkeletonHome/>}>
                <ProductDetail/>
              </Suspense>
          }
            loader={prodDetail}
        />
      <Route path='AddCart' element={ <AddCart/> }></Route>

      <Route path="Help" element={
        <ErrorBoundary FallbackComponent={<NotFound/>}
       >
          <Suspense fallback={<SkeletonHelp/>}>
            <Help/>
          </Suspense>
          </ErrorBoundary>
      } action={ContactAction}></Route>

      {/* Product page */}
      <Route path='products'>
        <Route
        path=':type'
        element={
          <Suspense fallback={<SkeletonProduct/>}>
            <ProductPage/>
          </Suspense>
        
      }
        loader={ProductTypeLoader}
        />
      </Route>

      {/* search Route Element */}
      <Route path='search' element={<Search/>} loader={productsLoader} />

      {/* Not Found Page 404 Error */}
      <Route path='*' element={<NotFound/>}></Route>
      </Route>
    )
  )
  

  return (
    <>
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
          //router Provider :
          <div ref={appRef} className="App">
            <CartProvider>
              <RouterProvider router={router}/>
            </CartProvider>
          </div>
        }
          {/* <CartProvider>
          <RouterProvider router={router}/>
          </CartProvider> */}
      
    </>

  );
}

export default App;
