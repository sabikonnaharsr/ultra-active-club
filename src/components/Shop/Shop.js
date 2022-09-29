import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Carts';
import Sidebar from '../Sidebar/Sidebar';
import './Shop.css'

const Shop = () => {
    const [carts, setCarts] = useState([]);
    const [times, setTimes] = useState([]);
    const [timeBreak, setTimeBreak] = useState()


    useEffect(() => {
        fetch('carts.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, []);

    const handleAddToCart = (carts) => {
        const newCart = [...times, carts]
        setTimes(newCart);
    }

    const totalSum = times.reduce(function(a, b) {
        return parseFloat(a) + parseFloat(b)
    }, 0)

    const handleTimeAdd = (second) => {
        localStorage.setItem('seconds',second)
        setTimeBreak(second)
    }

    const dataLoadLS = () => {
        let secondAdd = {};
        const getLSValue = localStorage.getItem('seconds')
        if(getLSValue){
            secondAdd = JSON.parse(getLSValue)
        }
        else{
            const setLSValue = localStorage.setItem('seconds', 0)
            secondAdd = JSON.stringify(setLSValue)
        }
        handleTimeAdd(secondAdd)
    }


    return (
       <div onLoad={dataLoadLS} className='shop-container'>
              <h2 className='select-title'>Select today’s exercise</h2>    

           <div className='mainTwoContainer'>

           <div className='carts-container'> 
           {
              carts.map(cart=> <Cart 
                key={cart.id}
                cart= {cart}
                handleAddToCart = {handleAddToCart}
                ></Cart>)
              }
           </div>

           <div className='sidebar-container'>         
            <Sidebar 
            handleTimeAdd={handleTimeAdd}
            timeBreak={timeBreak}
            totalTimes={totalSum}
            ></Sidebar>
            </div>
            
           </div>
            
       </div>   
    );
};

export default Shop;