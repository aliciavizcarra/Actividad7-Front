import { useOutletContext } from "react-router-dom";

const login =  (email, password, setLector,navigate) => {

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
            sessionStorage.setItem("token", data.token)

            const usuario={
              email: data.usuario.email,
              nombre: data.usuario.nombre,
              apellidos: data.usuario.apellidos
            }

            setLector(usuario)
            navigate(`/catalogo`)
        }
        )     
}

const registrar = (usuario, navigate) =>{

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
      navigate(`/login`)
    });

};

const getCatalogo = (numPagina,setCatalogo,setActualizarCatalogo)=>{
  fetch(`http://localhost:8080/api/libros/${numPagina}`)
  .then((response) => {
    if(response.ok){
      return response.json()
    }else{
      console.log("No se ha podido traer el catálogo")
    }
  })
  .then((data)=>{
    setCatalogo(data);
    setActualizarCatalogo(true);
  })
  
}

export {login, registrar,getCatalogo}