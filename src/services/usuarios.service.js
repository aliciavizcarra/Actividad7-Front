const login = async (alias, password) => {

      fetch("http://localhost:8080/api/usuarios/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alias, password }),
        })

        .then((data) => data.json())

        .then((json) => {
          //localStorage.setItem("token", json.token);
        });      
    }

export {login}