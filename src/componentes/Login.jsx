/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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

    const email = e.target.elements.email.value; //formulario(target)/elemento/id/valor
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;


    if (isRegistrando){

        registrarUsuario(email, password, rol);

    }else{
        signInWithEmailAndPassword (auth, email, password);

    
    } 

}

  return (
    <div>

        <h1>{isRegistrando ? "Regístrate" : "Inicia Sesión"}</h1>

        <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img  src={ImagenPerfil} alt='' className='perfil-estilo'/>
                        <form onSubmit={submitHandler}>
                            <label>
                                Correo
                                <input type='email' id='email'/>
                            </label>
                            <label>
                                Contraseña
                                <input type='password' id='password'/>
                            </label>
                            <label>
                                Rol
                                <select id='rol'>
                                    <option value="vendedor">Vendedor</option>
                                    <option value="comprador">Comprador</option>
                                </select>
                            </label>

                            <button>
                                <input type='submit' value={isRegistrando ? "Registrar" : "Iniciar Sesión"}/>
                            </button>

                        </form>

                        <button onClick={() => setIsRegistrando (!isRegistrando)}>
                            {isRegistrando ? "Ya tengo una cuenta" : "Registrarme"}
                        </button>



                    </div>
        </div>


    </div>
  )
}

export default Login;