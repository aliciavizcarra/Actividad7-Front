import { useState } from 'react'
import Nav from "./components/Libros/Nav";
import { Outlet} from "react-router-dom";

function App() {

  const [lector,setLector] = useState(null);

  return (
    <>
      <h1>Biblioteca Hasbulla</h1>
      <Nav lector={lector} setLector={setLector} ></Nav>
      <Outlet context={[lector,setLector]}></Outlet>
    </>
  )
}

export default App