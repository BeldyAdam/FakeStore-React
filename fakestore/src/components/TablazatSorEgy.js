import React from "react";

function TablazatSorEgy(props) {
  return (
      <tr>
        <td>{props.adat.title}</td>
        <td>{props.adat.price}</td>
        <td>{props.adat.category}</td>
        <td>{props.adat.description}</td>
        <td><img src={props.adat.image} alt="alt" /></td>
        <td>
          <button>Módosítás</button>
          <button>Törlés</button>
        </td>
      </tr>
  );
}

export default TablazatSorEgy;
