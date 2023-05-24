import React from 'react'
import Pic from './Picture'

function Profil({ name, Age, prof, handleName }) {
    return (
        <div>
            <h1>{name}</h1>
            <h1> {Age}</h1>
            <h4> {prof} </h4>
            <div className='but'><button onClick={() => handleName(prof)}>click to show prof </button></div>
            <Pic  >
                <img  style={ { marginLeft: "27%", width:"50%"}}  
 src='profili.jpg' />
            </Pic>
        </div>
    )
}

export default Profil