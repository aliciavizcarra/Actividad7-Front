import { useOutletContext } from "react-router-dom";
import PrestamosUsuario from "./PrestamosUsuario";

export default function Prestamos(){

    const[lector,setLector] = useOutletContext();

    return(
        <>
            <h1>Préstamos</h1>
            {lector?<PrestamosUsuario lector={lector}/> : "Necesitas iniciar sesion para ver tus prestamos"}
        </>
    )
}