/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credenciales';
import {getAuth} from 'firebase/auth';
import { CompradorUserView } from './CompradorUserView';
import VendedorUserView from './VendedorUserView';
const auth = getAuth(appFirebase)

const Home = ({usuario}) => {
  return (
    <div>
      {usuario.rol === "vendedor" ? <VendedorUserView/> :  <CompradorUserView/>}
  </div>
  )
}

export default Home;