import React, { useEffect, useRef, useState } from 'react';
import './search.css'
import video from '../../assets/videos/search_bar_video.mp4'
import search from '../../assets/iconsData/search.svg'
import { useLoaderData } from 'react-router-dom';
import Product from '../../components/AllProducts/Product';
const Search = () => {
    const data=useLoaderData()
    var [datasearch,setDatasearch]=useState(null);
    const [activeSearch,setActiveSearch]=useState(false);

    // const hundleSearch=()=>{
    //     const searchBar=document.getElementById("searchBar");
    //     console.log(searchBar.value)
    //     if(searchBar.value)
    //         setDatasearch(data.filter((prod)=> prod.name.includes(searchBar.value)))
    // }
    
    useEffect(()=>{
        const searchBar=document.getElementById("searchBar");
        if(searchBar.value)
        setDatasearch(data.filter((prod)=> prod.name.includes(searchBar.value)))

    },[activeSearch])

    return (
        <div className='search_page_container'>
            <div className='search_bar'>
                <video src={video} autoPlay muted loop/>
                <div className='search_bar_content'>
                    <p>Experess Yourself</p>
                    <p>Through Style</p>
                    <div className='search'>
                        <input  type='text' id='searchBar' name='searchBar'/>
                        <button onClick={
                            ()=>setActiveSearch(!activeSearch)
                            }><img src={search}/></button>
                    </div>
                </div>
            </div>
            <div className='search_result'>
                <h1>Search Result</h1>
                <div className='result_container'>
                    {
                        datasearch&&
                        datasearch.map((prod)=>
                            <Product
                            Key={prod.id} 
                            img={prod.images[0]}
                            name={prod.name}
                            price={prod.price}
                            item={prod}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Search;
