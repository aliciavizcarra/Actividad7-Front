import { useOutletContext } from "react-router-dom";

const login =  (email, password) => {

      const[lector,setLector]= useOutletContext;

      fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        })
        .then((response) => {
          if(response.ok){
            return response.json()
          }else{
            console.log("Login incorrecto")
          }

        })
        .then(data=> {
            localStorage.setItem("token", data.token)
            setLector(data.usuario)
        }
        )     
}

const registrar = async (usuario) =>{

  e.preventDefault();

  fetch("http://localhost:8080/api/usuarios/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

};


export {login, registrar}