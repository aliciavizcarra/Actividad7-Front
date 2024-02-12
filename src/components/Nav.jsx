import NoLogin from "./NoLogin";
import Login from "./Login";
import { Link } from "react-router-dom";


export default function Nav(lector,setLector){


    return(
        <nav>
            <>
                {lector? <Login lector={lector} setLector={setLector}/>:<NoLogin/>}
            </>
            <div>
                <Link to="/registro">Usuario nuevo</Link>
                <Link to="/catalogo">Consultar el catalogo</Link>

            </div>
        </nav>
    )

}