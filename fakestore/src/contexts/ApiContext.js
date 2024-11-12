import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("");
export const ApiProvider = ({children})=>{
    const [termekLista,setTermekLista]=useState([]);
    const [kategoriaLista, setKatLista]=useState([]);
    /* Az Axiosszal asszinkron módon GET kérést indítunk a végpont felé */
        const getAdat = async (vegpont, callbackFv) => {
            try {
                const response = await myAxios.get(vegpont);
                //console.log("adat:", response.data);
                callbackFv(response.data);
            } catch (err) {
                console.log("Hiba tortént az adat elküldésekor.");
            }finally{
                //setLoading(false);
            }
        }

        const postAdat = async (vegpont, adat) => {
            try {
                const response = await myAxios.post(vegpont, adat);
                //console.log("adat:", response.data);
                //setTermekLista("adat:", response.data);
            } catch (err) {
                console.log("Hiba tortént az adat elküldésekor.");
            }finally{
                //setLoading(false);
            }
        }

        let vegpont = "/products";
        /* useEffect hook segítségével hívjuk meg az aszinkron kéréseket. Aszinkron hívás esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőség listában változás van. */
        useEffect(()=>{
            getAdat(vegpont,setTermekLista);
            getAdat("/products/categories",setKatLista);
           },[]);

    return <ApiContext.Provider value={{termekLista, postAdat, kategoriaLista}}> 
            {children}
        </ApiContext.Provider>
    };