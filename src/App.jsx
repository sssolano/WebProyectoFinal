/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
//importar modulos de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)
import {getFirestore, doc, getDoc} from "firebase/firestore";
const firestore = getFirestore(appFirebase)
//componentes
import './App.css'
import Login from './componentes/Login';
import Home from './componentes/Home';
import CompradorView from './views/CompradorUserView';
import VendedorView from './views/VendedorUserView';
import MarketList from './componentes/ListMarket';
import {uid} from 'uid'

function App () {
  const [usuario, setUsuario]= useState(null);

  async function getRol(uid){
    const docReferenciaUsuario= doc(firestore, `usuarios/${uid}`);
    const docFiltrada= await getDoc(docReferenciaUsuario);
    const infoFinal= docFiltrada.data().rol;//filtramos el rol
    return infoFinal;
  }

  function setUsuarioRol (usuarioFirebase) {
    getRol (usuarioFirebase.uid).then((rol) => {
      const usuarioData = { //cuando se detecte el cambio de sesion se busca el uid rol, rol guardamos el estado del usuario
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol  
      };      
        setUsuario(usuarioData)//en mi variable setUsuario guarda info de usuarioaFireBase, para usar info mas adelante
      });
  }

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){//si usuario detecta que alguien se logio

      if (!usuario){//si no existe el usuario corra la funcion de UsuarioRol
        setUsuarioRol(usuarioFirebase);
      }
      

    } else {
      setUsuario(null)//si no detecta logeo guarda null
    }
  })


  return (
    <>
    
    <div> 
      {usuario ? <Home usuario = {usuario} /> : <Login/>} 

    </div>
    </>
  )
}

export default App;

