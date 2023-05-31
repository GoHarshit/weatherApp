import React, { useEffect, useState } from 'react';
import './style.css'

const Tempapp=()=>{
   
    const [search,setSearch]=useState("Meerut");
    const [weath,setWeath]=useState({});

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e790e182137ec05b776c81df714ddf9a`;
            const response=await fetch(url);
            const reJson=await response.json();
            
            setWeath(reJson);
        }
        fetchApi();
    },[search])
    
    return(
        <>
            
                <div className='box'>
                    <div className='inputData'>
                        <input className='inputField' 
                            type="search"
                            placeholder='location'
                            onChange={(event)=>{
                                setSearch(event.target.value)
                            }}
                        />
                    </div>
                    <br></br>
                    <br></br>
                        
                    {!weath.main?
                    (
                        <p>City not found</p>
                    ):(
                        <div className='info'>
                            <h2 className='location'>
                                <i className='fas fa-street-view'></i> {search}
                            </h2>
                            <br></br>
                            <h2 className='descrip'>{weath.weather[0].main}</h2>
                            <br></br>
                            <h1 className='temp'>{weath.main.temp}°C</h1>
                            <br/>
                            <h3 className='tempmin_max'> MIN: {weath.main.temp_min}°C | MAX: {weath.main.temp_max}°C</h3>
                            <h3 className='tempmin_max'>Humidity: {weath.main.humidity} g m-3</h3>
                            <h3 className='tempmin_max'>Pressure: {weath.main.pressure} N/m2</h3>
                        </div>
                    )}
                        
                    
                    

                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
                
        </>
    );
};

export default Tempapp;