import React from 'react';
import './Cart.css'

const Cart = ({handleAddToCart,cart}) => {
    const {img, name, age, time} = cart;
    return (
        <div>
           <img src={img} alt="" />
           <div className='cart-info'>
              <h2 className='cart-name'>Ultraboost 22 Shoes{name}</h2>
              <h3>Price ${} </h3>
              <h4>Manufacturer : Addidas{}</h4>
              <p>Rating : 3 start {} </p>
              <button onClick={()=>  handleAddToCart()} className='btn-cart'>
             <p className='btn-text'>Add To Cart</p> 
             </button>
             </div>
        </div>
    );
};

export default Cart;