import { useState } from "react";
import { login } from "../services/usuarios.service";
import { useOutletContext } from "react-router-dom";

export default function Login(){

    const[lector,setLector] = useOutletContext;

    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("");

    const doLogin = (e) =>{
        e.preventDefault();
        login(email,password)
    };
    
    return(

        <div>
            <h1>Login</h1>

            <form onSubmit={doLogin}>

                <input
                    name="alias"
                    type="text"
                    placeholder="Alias"
                    value={email}
                    onChange={(e)=>{
                    setEmail(e.target.value)
                    }}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                />

                <button type="submit">Entrar</button>

            </form>

        </div>
    )

}