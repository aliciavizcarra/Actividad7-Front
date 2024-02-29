import { Link, useOutletContext } from "react-router-dom";

export default function Nav({lector,setLector}){

    function cerrarSesion(){
        setLector(null)
        sessionStorage.removeItem("token")
    }

    return(
        <>    
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/catalogo">Consultar el catalogo</Link></li>
                <li><Link to="/prestados">Préstamos</Link></li>
                <li><Link to="/login">LogIn</Link></li>
            </ul>
        </nav>
        {lector?<button onClick={()=>{cerrarSesion()}}>Cerrar Sesion</button>: ""}
        </>
    )

}