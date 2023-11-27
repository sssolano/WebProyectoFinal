/* eslint-disable no-unused-vars */
import React from 'react'
import ImagenLogo from '../assets/deliverrah-logo.png';
import appFirebase from '../credenciales';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase)

function CompradorUserView() {
  return (
    <div>Comprador
    <div className="home-top">
      <img src={ImagenLogo} alt="Logo" className="logo-estilo-home" />
      <div>
        
        <button className="botonMenuPrincipal">Pedidos</button>
        <button className="botonMenuPrincipal">Restaurantes</button>
        <button className="botonMenuPrincipal">Comidas</button>
        <button className="btn-primary" onClick={() => signOut(auth)}>Salir de la sesión</button>
      </div>
    </div>
    </div>
  )
}

export { CompradorUserView };
