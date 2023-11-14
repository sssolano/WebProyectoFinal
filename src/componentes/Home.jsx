/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credenciales';
import {getAuth, signOut} from 'firebase/auth';
import ImagenLogo from '../assets/deliverrah-logo.png'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    
    <div className="home-top">
      <img src={ImagenLogo} alt="Logo" className="logo-estilo-home" />
      <div>
        
        <button className="botonMenuPrincipal">Home</button>
        <button className="botonMenuPrincipal">About Us</button>
        <button className="botonMenuPrincipal">Contact</button>
        <button className="btn-primary" onClick={() => signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Home