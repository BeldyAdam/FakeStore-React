import { createContext, useState } from "react";

export const KosarContext=createContext("");

export const KosarProvider=({children})=>{
    const [kosarLista, setkosarLista] = useState([])
    
    function kosarba(props){
        if(!kosarLista.includes(props)){
            const slista=[...kosarLista]
            slista.push(props)
            setkosarLista([...slista])
        }
    }

    return(
        <KosarContext.Provider value={{kosarLista, kosarba}}>
            {children}
        </KosarContext.Provider>
    );
};