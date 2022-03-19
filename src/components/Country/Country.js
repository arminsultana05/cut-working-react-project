import React from 'react';
import './Country.css'
const Country = (props) => {
   const{name,area,population,flags}=props.county
    return (
        <div className='country'>
            <h1>Name:{name.common}</h1>
            <h5>Population:{population}</h5>
            <p>Area:{area}</p>
            <img src={flags.png }alt="" />
        </div>
    );
};

export default Country;