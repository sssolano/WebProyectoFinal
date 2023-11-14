/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ImagenMoto from '../assets/deliverrah-moto.png';
import ImagenPerfil from '../assets/perfil.png';
import ImagenLogo from '../assets/deliverrah-logo.png';
import appFirebase from '../credenciales';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrarse, setRegistrarse]= useState(false)

    const fAuthentication = async (e)=> {
        e.preventDefault();
        const correo = e.target.email.value; 
        const contraseña = e.target.password.value;
        console.log(correo, contraseña);


        if (registrarse){
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)

            } catch (error) {
                alert("Contraseña menor a 8 caracteres")
                
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Correo o contraseña incorrecto")
            }
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }






  return (
    <div className='container'>
        <img src={ImagenLogo} alt=""  className='logo-estilo'/>
        <div className='row'>
            {/*columna Formulario*/}
            <div className='col-4'>
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img  src={ImagenPerfil} alt='' className='perfil-estilo'/>
                        <form onSubmit={fAuthentication}>
                            <input type='text' placeholder='Email' className='input' id='email'/>
                            <input type='password' placeholder='Contraseña' className='input' id='password'/>
                            <button className='boton'>{registrarse ? "Registrarse" : "Iniciar Sesión"}</button>
                        </form>

                        <h4 className='comentarioINICIORESGISTRO'>{registrarse ? "Si ya tienes una cuenta" : "No tienes cuenta"} <button className='botonCambiante' onClick={()=> setRegistrarse(!registrarse)}>{registrarse ? "Iniciar Sesión" : "Registrarse"}</button></h4>

                    </div>
                </div>
            </div>

        </div>
        {/*columna Imagen*/}
        <div className="col-8">
            <img src={ImagenMoto} alt="" className='tamaño-imagen'/>



        </div>

    </div>
  )
}

export default Login