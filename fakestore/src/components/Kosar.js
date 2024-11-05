import React from 'react'
import KosarTermek from './KosarTermek'

export default function Kosar(props) {
  return (
    <div className='row'>
    {props.kosarLista.map((elem, index) =>{
        return(<KosarTermek key={index} category={elem.category} image={elem.image} title={elem.title} description={elem.description} price={elem.price}/>)
    })}
    </div>
  )
}
