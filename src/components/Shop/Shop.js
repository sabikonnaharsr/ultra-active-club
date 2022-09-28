import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('carts.json')
        .then(res => res())
        .then(data => console.log(data))
    }, [carts])
    return (
       <div className='shop-conatiner'>
           <div className='gym-container'>
              <h2>Select today’s exercise</h2> 
           </div>

           <div className='time-container'>
            <h1>Sabikonnahar</h1>
           </div>
       </div>   
    );
};

export default Shop;