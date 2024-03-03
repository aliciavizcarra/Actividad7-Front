import { useEffect, useState } from "react"
import { devolver, getPrestamos } from "../../services/usuarios.service";

export default function PrestamosUsuario({lector}){

    const[prestamos,setPrestamos]=useState([]);
    const[actualizarPrestamos,setActualizarPrestamos]= useState(false)
    
    useEffect(()=>{
        getPrestamos(setPrestamos);
    },[setPrestamos,actualizarPrestamos])

    function devolverLibro(libro){
        const ejemplar = libro.ejemplar.id
        devolver(ejemplar,setActualizarPrestamos);
    }

    return(
        <>
            <h3>Estos son tus préstamos + {lector.nombre}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th></th>
                        <th></th>
                        <th>Autor</th>
                        <th></th>
                        <th></th>
                        <th>Fecha Prestamo</th>
                    </tr>
                </thead>

                <tbody>
                {prestamos.map((libro)=>{
                    return(
                    <tr key={libro.ejemplar.libro.id}>
                        <td>{libro.ejemplar.libro.titulo}</td>
                        <td></td>
                        <td></td>
                        <td>{libro.ejemplar.libro.autor}</td>
                        <td></td>
                        <td></td>
                        <td>{libro.fechaprestamo}</td>
                        <button onClick={()=>{devolverLibro(libro)}}>Devolver</button>
                    </tr>
                )
                    })}
                </tbody><br></br>

            </table>
        </>
    )


}