import React from 'react';
import './Carts.css'

const Cart = ({handleAddToCart,cart}) => {
    const {img, name, discription, age, time} = cart;
    return (
        <div className='cart'>
           <img src={img} alt="" />
           <div className='cart-info'>
                <h2 className='cart-name'>{name}</h2>
                <p> About : {discription}</p>
                <div className='p-text'>
                    <p>time required: {time}</p>
                    <p>age: {age} </p>
                </div>
           </div>
           <button onClick={()=>  handleAddToCart()} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p> 
            </button>
        </div>
    );
};

export default Cart;