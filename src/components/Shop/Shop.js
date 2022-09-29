import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Carts';
import './Shop.css'

const Shop = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('carts.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, [])
    return (
       <div className='shop-container'>
           <div className='carts-container'>
              <h2>Select today’s exercise</h2> 
              {
                carts.map(cart=> <Cart key={cart.id}
                cart= {cart}
                ></Cart>)
              }
           </div>

            <div className='sidebar-container'>
              <h1>Sabikonnahar</h1>
           </div>
       </div>   
    );
};

export default Shop;