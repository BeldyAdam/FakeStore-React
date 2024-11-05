import React, { useContext } from 'react'
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

export default function Termekek() {
    const {termekLista}=useContext(ApiContext)
    return(
        <div className='row'>
            {termekLista.map((elem, index) =>{
                return(<Termek key={index} category={elem.category} image={elem.image} title={elem.title} description={elem.description} price={elem.price}/>)
        })};
        </div>
        
    )
}