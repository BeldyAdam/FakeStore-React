import React from 'react'

export default function KosarTermek(props) {
    return(
        <div className="col-lg-5">
            <div className="card m-1">
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <p>Ár: {(props.price)*1000} Ft</p>
                </div>
            </div>
        </div>
    )
}