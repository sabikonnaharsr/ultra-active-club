import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Programming-Hero-Web-Course4/b6-ultra-active-club-sabikonnaharsr/main/public/carts.json?token=GHSAT0AAAAAABYYQVGT6FPA5RBCWZQL7L3IYZU3ADA')
        .then(res => res())
        .then(data => console.log(data))
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

           <div className='time-container'>
            <h1>Sabikonnahar</h1>
           </div>
       </div>   
    );
};

export default Shop;