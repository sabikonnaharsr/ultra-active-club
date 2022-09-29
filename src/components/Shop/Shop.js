import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Carts';
import Sidebar from '../Sidebar/Sidebar';
import './Shop.css'

const Shop = () => {
    const [carts, setCarts] = useState([]);
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        fetch('carts.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, []);
    const handleAddToCart = (carts) => {
        console.log(carts)
        const newCart = [...carts, carts]
        setCarts(newCart);
    }
    return (
       <div className='shop-container'>
           <div className='carts-container'>
              <h2>Select today’s exercise</h2>    
           </div>

        <div className='sidebar-container'>         
            <Sidebar sidebar={sidebar}></Sidebar>

        </div>

           <div className='carts-container'> 
           {
              carts.map(cart=> <Cart key={cart.id}
                cart= {cart}
                handleAddToCart = {handleAddToCart}
                ></Cart>)
              }
           </div>
            
       </div>   
    );
};

export default Shop;