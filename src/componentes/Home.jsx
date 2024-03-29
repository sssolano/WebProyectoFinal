/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import appFirebase from '../credenciales';
import {getAuth} from 'firebase/auth';

/* import CompradorUserView from '../views/CompradorUserView';
import VendedorUserView from '../views/VendedorUserView';*/

const auth = getAuth(appFirebase)

import PaginaVendedor from './PaginaVendedor';
import CatalogoNegocios from './CatalogoNegocios';

const Home = ({usuario}) => {
  return (
    <div>

      {usuario.rol === "vendedor" ? <PaginaVendedor/> :  <CatalogoNegocios/>}
  </div>

      {usuario.rol === "vendedor" ? <NavBarVendedor /> :  <NavBar/>}
    </div>

  )
}

export default Home;