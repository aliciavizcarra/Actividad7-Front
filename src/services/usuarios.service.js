import URL_SERVER from "./constantes"

const login =  (email, password, setLector,navigate) => {

      fetch(`${URL_SERVER}usuarios/login`, {
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

  fetch(`${URL_SERVER}usuarios/registro`, {
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

const getCatalogo = (numPagina,setCatalogo,filterText)=>{
  fetch(`${URL_SERVER}libros/${filterText}/${numPagina}`)
  .then((response) => {
    if(response.ok){
      return response.json()
    }else{
      console.log("No se ha podido traer el catálogo")
    }
  })
  .then((data)=>{
    setCatalogo(data);
  })
  
}


const getPrestamos = (setPrestamos)=>{

  const token = sessionStorage.getItem("token");

  if(!token){
    console.log("No estas autorizado");
    return;
  }

  fetch(`${URL_SERVER}libros`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("No se ha podido traer el catálogo");
      }
    })
    .then((data) => {
      setPrestamos(data);
    });
};

const devolver = (ejemplar,setActualizarPrestamos)=>{

  const token = sessionStorage.getItem("token");

  if(!token){
    console.log("No estas autorizado");
    return;
  }

  fetch(`${URL_SERVER}libros/${ejemplar}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      if (response.ok) {
        console.log("Libro devuelto correctamente")
        setActualizarPrestamos(true)
      } else {
        console.log("No se ha podido devolver el libro");
      }
    })

}

const prestar = (id,setActualizarCatalogo)=>{
  const token = sessionStorage.getItem("token");

  if(!token){
    console.log("No estas autorizado");
    return;
  }

  fetch(`${URL_SERVER}libros/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    if (response.ok) {
      setActualizarCatalogo(true)
      console.log("Libro prestado correctamente")
    } else {
      console.log("No se ha podido prestar el libro");
    }
  })

}

export {login, registrar,getCatalogo,getPrestamos,devolver,prestar}