import React from 'react';
import './Carts.css'

const Cart = ({handleAddToCart,cart}) => {
    const {img, name, age, time} = cart;
    return (
        <div className='cart'>
           <img src={img} alt="" />
           <div className='cart-info'>
                <h2 className='cart-name'>{name}</h2>
                <h4>time required: {time}</h4>
                <p>age: {age} </p>
                <button onClick={()=>  handleAddToCart()} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p> 
                </button>
           </div>
        </div>
    );
};

export default Cart;