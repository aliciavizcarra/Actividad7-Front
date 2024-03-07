import { useOutletContext } from "react-router-dom";
import { getCatalogo, prestar } from "../../services/usuarios.service";
import { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";


export default function Catalogo(){

    const[lector,setLector] = useOutletContext();
    const[numPagina,setNumPagina]= useState(0);
    const[catalogo,setCatalogo]= useState([]);
    const[filterText,setFilterText]=useState("");
    const[actualizarCatalogo,setActualizarCatalogo]=useState(false)

    useEffect(()=>{
        getCatalogo(numPagina,setCatalogo,filterText)
    },[numPagina,filterText,actualizarCatalogo])

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

    function prestarLibro(libro){
        console.log(libro)
        const id = libro.id
        prestar(id,setActualizarCatalogo);
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
                        {lector?<button onClick={()=>{prestarLibro(libro)}}>Prestar</button>:""}
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