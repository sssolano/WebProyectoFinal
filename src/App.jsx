/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
//importar modulos de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)


//importar componentes
import Login from './componentes/Login'
import Home from './componentes/Home'


import './App.css'

function App() {

  const [usuario, setUsuario]= useState(null)
  onAuthStateChanged(auth, (usuarioFireBase)=>{
    if(usuarioFireBase){//si usuario detecta que alguien se logio
      setUsuario(usuarioFireBase)//en mi variable setUsuario guarda info de usuarioaFireBase, para usar info mas adelante
    } else 
    {
      setUsuario(null)//si no detecta logeo guarda null
    }
  })
//si usuario tiene contenido entonces que use HOME o sea se auntentico de manera correcta si no siga ensenando LOGIN
  return (
    <div> 
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>} 

    </div>

  )
}

export default App
