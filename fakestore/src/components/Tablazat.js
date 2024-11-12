import React, { useContext } from 'react'
import TablazatSorEgy from './TablazatSorEgy'
import { ApiContext } from '../contexts/ApiContext'

function Tablazat() {
    const {termekLista} = useContext(ApiContext);
  return (
    <div>
        <table className='Table'>
            <tr>
                <th>Név</th>
                <th>Ár</th>
                <th>Kategória</th>
                <th>Leírás</th>
                <th>Kép</th>
            </tr>
            {termekLista.map((adat) => {
                return <TablazatSorEgy key={adat} adat={adat}/>
            })}
        </table>
    </div>
  )
}

export default Tablazat
