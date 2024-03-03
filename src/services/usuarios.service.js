
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

const getCatalogo = (numPagina,setCatalogo,filterText)=>{
  fetch(`http://localhost:8080/api/libros/${filterText}/${numPagina}`)
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

  fetch(`http://localhost:8080/api/libros`, {
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

  fetch(`http://localhost:8080/api/libros/${ejemplar}`, {
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

const prestar = (id)=>{
  const token = sessionStorage.getItem("token");

  if(!token){
    console.log("No estas autorizado");
    return;
  }

  fetch(`http://localhost:8080/api/libros/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    if (response.ok) {
      console.log("Libro prestado correctamente")
    } else {
      console.log("No se ha podido prestar el libro");
    }
  })

}

export {login, registrar,getCatalogo,getPrestamos,devolver,prestar}