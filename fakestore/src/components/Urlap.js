import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'


function Urlap() {

    const {postAdat, kategoriaLista}=useContext(ApiContext)


    const [adat, setAdat]=useState({
        title:'.......',
        price:1000,
        category:'.......',
        description:'.......',
        image:'',
    })


    function adatKuld(event){
        event.preventDefault() // leszedi a beépített eseménykezelőt!
        console.log("küldés!", adat)
        postAdat("/products",adat)
    }

    function valtozasKezeles(event){
        // itt frissitem a state értékét
        const sv = {...adat};
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }
  
    return (
    <form onSubmit={adatKuld}>
  <div className="mb-3">
    <label forhtml="title" className="form-label">Termék neve</label>
    <input type="text" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title"/>
  </div>

  <div className="mb-3">
    <label forhtml="price" className="form-label">Termék ára</label>
    <input type="number" min="1000" max="100000000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price"/>
  </div>

{/*   <div className="mb-3">
    <label forhtml="category" className="form-label">Termék kategóriája</label>
    <input type="selectoption" value={adat.category} onChange={valtozasKezeles} className="form-control" id="category"/>
  </div> */}
  <div className="mb-3">
  <label htmlFor="category" className="form-label">Termék kategóriája</label>
  <select value={adat.category} onChange={valtozasKezeles} className="form-control" id="category">
    {kategoriaLista.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>

  <div className="mb-3">
    <label forhtml="description" className="form-label">Termék leírása</label>
    <input type="textarea" value={adat.description} onChange={valtozasKezeles} className="form-control" id="description"/>
  </div>

  <div className="mb-3">
    <label forhtml="image" className="form-label">Termék képe</label>
    <input type="file" value={adat.image} onChange={valtozasKezeles} className="form-control" id="image"/>
  </div>

  <button type="submit" className="btn btn-primary">Küldés</button>
</form>
  )
}

export default Urlap