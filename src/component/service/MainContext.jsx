import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';


const productContext = createContext()
export const useProduct = () =>  useContext(productContext)

const MainContext = ({children}) => {
    const  [data,setData] = useState([])

    const API = "https://api.elchocrud.pro/api/v1/a3630607857805f37e0e5e1e34b6517d/first"

    async function addProduct(newProduct) {
        axios.post(API, newProduct)
    }

    async function readProduct(){
       let {data} = await axios(API)
       setData(data)
    }

    async function DeleteProduct(id) {
        await axios.delete(`${API}/${id}`)
        readProduct()
    }
    
    let valous = {
        addProduct,
        data,
        readProduct,
        DeleteProduct,
    }

    return (
        <productContext.Provider value={valous}>{children}</productContext.Provider>
    );
};

export default MainContext;