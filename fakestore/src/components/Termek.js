import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext';

export default function Termek(props) {
    const {kosarba} = useContext(KosarContext);
    function kosarbaHelyez(){
        kosarba(props)
    }
    return(
        <div className="col-lg-3">
        <div className="card m-1">
            <div className="card-body">
                <h5>{props.title}</h5>
                <img className="card-img-top" src={props.image} alt="" />
                <p>Leírás: {props.description}</p>
                <p>Kategória: {props.category}</p>
                <p>Ár: {(props.price)*1000} Ft</p>
                <a href="#" className="kattintott btn btn-primary" onClick={()=>{kosarbaHelyez()}}>Kosárba</a>
            </div>
        </div>
        </div>
    )
}
