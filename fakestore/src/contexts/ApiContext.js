import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("");
export const ApiProvider = ({children})=>{
    const [termekLista,setTermekLista]=useState([]);
    /* Az Axiosszal asszinkron módon GET kérést indítunk a végpont felé */
        const getAdat = async (vegpont) => {
            try {
                const response = await myAxios.get(vegpont);
                //console.log("adat:", response.data);
                setTermekLista(response.data);
            } catch (err) {
                console.log("Hiba tortént az adat elküldésekor.");
            }finally{
                //setLoading(false);
            }
        }
        let vegpont = "/products";
        /* useEffect hook segítségével hívjuk meg az aszinkron kéréseket. Aszinkron hívás esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőség listában változás van. */
        useEffect(()=>{getAdat(vegpont)},[])

    return <ApiContext.Provider value={{termekLista}}> 
            {children}
        </ApiContext.Provider>
    };