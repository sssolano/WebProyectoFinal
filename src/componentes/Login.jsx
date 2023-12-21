/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagenMoto from '../assets/deliverrah-moto.png';
import ImagenPerfil from '../assets/perfil.png';
import ImagenLogo from '../assets/deliverrah-logo.png';
import appFirebase from '../credenciales';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, setDoc} from "firebase/firestore"
const auth = getAuth(appFirebase)




function Login() {

const firestore = getFirestore(appFirebase)
const [isRegistrando, setIsRegistrando]= useState (false);

async function registrarUsuario (email, password, rol){
    const infoUsuario = await createUserWithEmailAndPassword(auth, 
        email, password). then ((usuarioFirebase) => { //genera una promesa regresa al usuario cuando ya haya recibido la info
        return usuarioFirebase;
    })

    const docReferenciaUsuario =  doc(firestore, `usuarios/${infoUsuario.user.uid}`); //creamos ref en bd
    setDoc(docReferenciaUsuario, {correo: email, rol: rol} );
}

function submitHandler(e){
    e.preventDefault(); //no actualiza

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (isRegistrando){
        const rol = e.target.elements.rol.value;
        registrarUsuario(email, password, rol)
          .then((userCredential) => {
            // Usuario registrado correctamente
          })
          .catch((error) => {
            console.error(error.message);
          });
    } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {// Usuario inició sesión correctamente
          })
          .catch((error) => {
            console.error(error.message);
          });
    } 

}

  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-12 text-center my-4">
      <img src={ImagenLogo} alt="Logo" className="logo-estilo-home" />
    </div>
  </div>
  <div className="row align-items-start" style={{ minHeight: '80vh' }}> 
    <div className="col-md-6 d-flex justify-content-center">
      <img src={ImagenMoto} alt="Moto" className="img-fluid" style={{ maxHeight: '80vh' }} /> 
    </div>
    <div className="col-md-6 d-flex justify-content-center">
      <div className="card" style={{ width: '25rem', boxShadow: '0 2rem 5rem rgba(0, 128, 0, 0.5)', marginTop: '0px', padding:'20px' }}>
      <img src={ImagenPerfil} alt="Perfil" style={{ width: '300px', marginLeft:'25px', padding:'4px'}} />
      <form onSubmit={submitHandler} className="mb-3" >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email" style={{borderColor:'green'}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" style={{borderColor:'green'}}/>
                </div>
                {isRegistrando &&(
                <div className="mb-3">
                    <label htmlFor="rol" className="form-label">Quiero registrarme como</label>
                    <select id="rol" className="form-select" style={{borderColor:'green'}}>
                        <option value="vendedor">Vendedor</option>
                        <option value="comprador">Comprador</option>
                    </select>
                </div>)}
                <input type="submit" value={isRegistrando ? "Registrar" : "Iniciar Sesión"} className="btn btn-primary w-100" style={{color:'black',backgroundColor:'lightgreen', borderColor:'green', padding:'10px', borderWidth:'5px'}}/>
                
            </form>
            <button onClick={() => setIsRegistrando(!isRegistrando)} className="btn btn-secondary w-100" style={{backgroundColor:'blue'}}>
                {isRegistrando ? "Ya tengo una cuenta" : "Registrarme"}
            </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;