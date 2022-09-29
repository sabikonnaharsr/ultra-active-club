import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({totalTimes, handleTimeAdd, timeBreak}) => {
    return (
        <div>
            <h1>Sabikonnahar</h1>
            <p>Brahmanbaria, Bangladesh</p>

              <div className='person-detalis'>
               
                  <div>
                    <span className='weight'>
                        <p>Weight</p>
                    </span>
                    <span>
                        <p>50kg</p>
                    </span>
                  </div>
              
                    <div>
                        <span className='height'><p>Height</p></span>
                        <span><p>5'3kg</p></span>
                    </div>
               
                    <div>
                        <span className='age'><p>Age</p></span>
                        <span><p> 30yr</p></span>
                    </div>
                
               </div>
               <div>
                  <h3> Break Time</h3>
                  <div className='break-seconds'>
                        <p><span onClick={(e) => handleTimeAdd(e.target.innerText)}>10</span>s</p>
                        <p><span onClick={(e) => handleTimeAdd(e.target.innerText)}>40</span>s</p>
                        <p><span onClick={(e) => handleTimeAdd(e.target.innerText)}>20</span>s</p>
                        <p><span onClick={(e) => handleTimeAdd(e.target.innerText)}>56</span>s</p>
                        <p><span onClick={(e) => handleTimeAdd(e.target.innerText)}>32</span>s</p>
                  </div>
               </div>

               <div>
                   <h3>Excercise Details</h3>
               </div>
               <div className='all-time'>
               <div className='excercise-time'>
                   <h4>Excercise  Time </h4>
                   <h4>{totalTimes} <span>seconds</span> </h4>
               </div>
               <br />

                <div className='break-time'>
                     <h4>Break Time</h4>
                     <h4>{timeBreak} seconds</h4>
                </div>
               </div>
               <div >
                  <button className='btn-activity' onClick={() => {}}>Activity Completed</button>
               </div>
        </div>
    );
};

export default Sidebar;