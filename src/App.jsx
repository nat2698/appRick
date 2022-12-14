import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"


const App = () => {

   

  const [nombrePersonaje, setNombrePersonaje] = useState('')

  useEffect(() => {
    if(localStorage.getItem('nombreApi')){
      setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
    }
    }, [])


  return (
    <div className='container'>
        <h1>App Rick and Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje} />
        <PintarDatos nombrePersonaje={nombrePersonaje}/>
      
    </div>
    
  )
}

export default App