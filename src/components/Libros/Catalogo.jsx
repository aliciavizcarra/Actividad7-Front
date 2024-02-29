import { useOutletContext } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getCatalogo } from "../../services/usuarios.service";
import { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";


export default function Catalogo(){

    const[lector,setLector] = useOutletContext();
    const[numPagina,setNumPagina]= useState(0);
    const[catalogo,setCatalogo]= useState([]);
    const[filterText,setFilterText]=useState("");

    useEffect(()=>{
        getCatalogo(numPagina,setCatalogo)
        console.log(catalogo)
    },[setCatalogo,numPagina])

    function pasarPagina(){
        setNumPagina(numPagina+1)
    }

    function volverPagina(){
        if(numPagina!==0){
            setNumPagina(numPagina-1)
        }else{
            console.log("No hay páginas detrás")
        }
    }


    return(
        <>
            <h1>Catálogo</h1>

            <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/><br></br><br></br>

            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th></th>
                        <th></th>
                        <th>Autor</th>
                        <th></th>
                        <th></th>
                        <th>Disponibles</th>
                    </tr>
                </thead>

                <tbody>
                {catalogo.map((libro)=>{
                    return(
                    <tr key={libro.id}>
                        <td>{libro.titulo}</td>
                        <td></td>
                        <td></td>
                        <td>{libro.autor}</td>
                        <td></td>
                        <td></td>
                        <td>{libro.disponibles}</td>
                    </tr>
                )
                    })}
                </tbody><br></br>

                    <button onClick={()=>{volverPagina()}}>Pagina Anterior</button>&nbsp;&nbsp;
                    <button onClick={()=>{pasarPagina()}}>Siguiente pagina</button>
                    
                
            </table>

            
            
        </>
    )
}