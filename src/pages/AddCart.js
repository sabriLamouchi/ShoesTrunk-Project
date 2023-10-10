import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import './addcart.css'
import cart_cross from '../iconsData/cart-cross.svg';
const AddCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    }=useCart();
    console.log(totalItems)
    const cartItem=items.map((item)=>{
        return(
             <div className='item-container  flex-row'>
                <div className='item flex-row'>
                    <img src={item.img} alt={item.name}/>
                </div>
                <div className='description flex-column'>
                        <h3>{item.name}</h3>
                </div>
                <div className='quantity flex-row'>
                    <button onClick={()=>{updateItemQuantity(item.id,item.quantity-1)}}/>
                    <label>{item.quantity}</label>
                    <button onClick={()=>{updateItemQuantity(item.id,item.quantity+1)}}/>
                </div>
                <div className='price'>
                    <h3>${item.price}</h3>
                </div>

            </div>
        );
    })

    if (isEmpty) {return <div><h1>Your Cart is Empty</h1></div>}
    return (   
        <>
        <div className='cart_container '>
            <section className='header-cart flex-column'>
                <h1>Your Shoping Cart</h1>
                <button className='flex-row'
                onClick={()=>{emptyCart()}}><img src={cart_cross}
                />Empty Cart</button>
            </section>
            <div className='addToCart-section'>
                <nav>
                    <ul className='flex-row'>
                        <li>ITEM</li>
                        <li>QUANTITY</li>
                        <li>PRICE</li>
                    </ul>
                </nav>
                {cartItem}
            </div>
            <div className='checkout-banner flex-row'>
                    <div className='info flex-column'>
                        <span >Total Price <a>${cartTotal}</a></span>
                        <p>Shipment costs will be calculated at checkout.</p>
                    </div>
                    <button>checkout{">>"}</button>
                </div>
        </div>

                </> 
    );
};

export default AddCart;