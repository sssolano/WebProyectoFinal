
import  { useEffect, useState } from 'react';
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../config/conexiones';
import swal from 'sweetalert';
import Formulario from './Formulario';
import ListaContactos from './ListaNegocios';

const PaginaVendedor = () => {

  const initialValues = {
    nombre: '',
    correo: '',
    numtelefono: '',
    direccion1: '',
    direccion2: '',
    tiponegocio: '',
    codigopostal: '',
    servicio: '',
    canton: '',
    distrito: '',
    provincia: '',
    imagen: '',
    tag: '',
  };
}

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

function PaginaVendedor() {
  return (
 
    <div className="row">
    <form onSubmit={handleSubmit}>
    <h2 className='mt-2'>Creación de Negocio</h2><hr />
  <div className="col-lg-8">
    <div className="card mb-4">
      <div className="card-body">

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
        <input type="text" name="nombre" value={nombre} onChange={handleInputChange} placeholder='Nombre' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Correo</label>
        <input type="text" name="correo" value={correo} onChange={handleInputChange} placeholder='correo' className='form-control mb-1' />
            </div>
          </div>
        </div>

 <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Numero de Teléfono</label>
        <input type="text" name="numtelefono" value={numtelefono} onChange={handleInputChange} placeholder='telefono' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Dirección 1</label>
              <input type="text" name="direccion1" value={direccion1} onChange={handleInputChange} placeholder='direccion1' className='form-control mb-1'/>
            </div>
          </div>
        </div>
<div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Dirección 2</label>
             <input type="text" name="direccion2" value={direccion2} onChange={handleInputChange} placeholder='direccion2' className='form-control mb-1'/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Tipo de Negocio</label>
         <input type="text" name="tiponegocio" value={tiponegocio} onChange={handleInputChange} placeholder='tiponegocio' className='form-control mb-1' />
            </div>
          </div>
        </div>
 <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Codigo Postal</label>
     <input type="text" name="codigopostal" value={codigopostal} onChange={handleInputChange} placeholder='codigo postal' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Servicio</label>
              <input type="text" name="servicio" value={servicio} onChange={handleInputChange} placeholder='servicio' className='form-control mb-1' />
            </div>
          </div>
        </div>
<div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Cantón</label>
              <input type="text" name="canton" value={canton} onChange={handleInputChange} placeholder='canton' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Distrito</label>
              <input type="text" name="distrito" value={distrito} onChange={handleInputChange} placeholder='distrito' className='form-control mb-1' />
            </div>
          </div>
        </div>

 <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Provincia</label>
              <input type="text" name="provincia" value={provincia} onChange={handleInputChange} placeholder='provincia' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Imagen del Negocio</label>
              <input type="text" name="imagen" value={imagen} onChange={handleInputChange} placeholder='imagen' className='form-control mb-1' />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Tag</label>
               <input type="text" name="tag" value={tag} onChange={handleInputChange} placeholder='tag01' className='form-control mb-1' />
               <input type="text" name="tag" value={tag} onChange={handleInputChange} placeholder='tag02' className='form-control mb-1' />
               <input type="text" name="tag" value={tag} onChange={handleInputChange} placeholder='tag03' className='form-control mb-1' />
            </div>
          </div>
        </div>

<button className='btn btn-primary'>{currentId === '' ? 'Guardar' : 'Modificar'}</button>
<button type='button' className='btn btn-success mx-1' onClick={limpiar}>Limpiar</button>

      </div>
    </div>
    </div>
    </form> 
    </div>
  );

};

export default PaginaVendedor;