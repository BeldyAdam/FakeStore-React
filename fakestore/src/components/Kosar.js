import React, { useContext } from 'react';
import KosarTermek from './KosarTermek';
import { KosarContext } from '../contexts/KosarContext';

export default function Kosar() {
  const { kosarLista } = useContext(KosarContext);

  return (
    <div className='row'>
      {kosarLista.map((elem, index) => (
        <KosarTermek
          key={index}
          category={elem.category}
          image={elem.image}
          title={elem.title}
          description={elem.description}
          price={elem.price}
        />
      ))}
    </div>
  );
}