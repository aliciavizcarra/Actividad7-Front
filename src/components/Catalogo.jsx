import { useOutletContext } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getCatalogo } from "../services/usuarios.service";
import { useState } from "react";


export default function Catalogo(){

    const[lector,setLector] = useOutletContext();
    const[numPagina,setNumPagina]= useState(0)

    function traerCatalogo(){
        const libros = getCatalogo(numPagina)
        console.log(libros);
    }

    return(
        <>
            <h1>Catálogo</h1>
            {traerCatalogo()}
        </>
    )
}