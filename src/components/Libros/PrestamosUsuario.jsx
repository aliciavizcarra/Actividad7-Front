import { useEffect, useState } from "react"
import { devolver, getCatalogo, getPrestamos } from "../../services/usuarios.service";

export default function PrestamosUsuario({lector}){

    const[prestamos,setPrestamos]=useState([]);
    const[actualizarPrestamos,setActualizarPrestamos]= useState(false);


    useEffect(()=>{
        getPrestamos(setPrestamos);
    },[actualizarPrestamos])

    console.log(prestamos)

    function devolverLibro(libro){
        const ejemplar = libro.ejemplar.id
        devolver(ejemplar,setActualizarPrestamos);
    }

    return(
        <>
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
                        <th></th>
                        <th></th>
                        <th>Fecha Devolucion</th>
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
                        <td></td>
                        <td></td>
                        <td>{libro.fechadevolucion?<td>{libro.fechadevolucion}</td>:<button onClick={()=>{devolverLibro(libro)}}>Devolver</button>}</td>
                        
                    </tr>
                )
                    })}
                </tbody><br></br>

            </table>
        </>
    )


}