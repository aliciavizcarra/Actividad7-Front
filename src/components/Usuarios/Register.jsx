import { useState } from "react"
import { registrar } from "../../services/usuarios.service";
import {useNavigate } from "react-router-dom";

export default function Registro(){

    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[nombre,setNombre] = useState("");
    const[apellidos,setApellidos] = useState("");
    const navigate = useNavigate();

    const usuario = {
        email:email,
        password:password,
        nombre:nombre,
        apellidos:apellidos
    }

    const doRegistro = (e) =>{
        e.preventDefault();
        registrar(usuario,navigate)
    };

    return(

        <div>
            <h1>Registro</h1>
            <form onSubmit={doRegistro}>
            <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
                }}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                setPassword(e.target.value);
                }}
            />
            <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => {
                setNombre(e.target.value);
                }}
            />
            <input
                name="apellidos"
                type="text"
                placeholder="Apellidos"
                value={apellidos}
                onChange={(e) => {
                setApellidos(e.target.value);
                }}
            />
            <button type="submit">Registro</button>
            </form>
      </div>
    )

}