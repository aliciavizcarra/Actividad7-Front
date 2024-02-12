import { useState } from "react";
import { login } from "../services/usuarios.service";

export default function NoLogin(){

    const[alias, setAlias]= useState("");
    const[password, setPassword] = useState("");

    const doLogin = (e) =>{
        e.preventDefault();
        login(alias,password)
    };
    
    return(

        <div>
            <h1>Login</h1>

            <form onSubmit={doLogin}>

                <input
                    name="alias"
                    type="text"
                    placeholder="Alias"
                    value={alias}
                    onChange={(e)=>{
                        setAlias(e.target.value)
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