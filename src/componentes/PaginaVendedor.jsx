// Importaciones
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

import { set, ref } from 'firebase/database'
import { uid } from 'uid';
import { useState } from 'react';
import { DB } from '../credenciales';

 const auth = getAuth(appFirebase);

function PaginaVendedor() {

  const[nombre, setNombre] = useState ('');
  const[email, setEmail] = useState ('');
  const[numtelefono, setNumTelefono] = useState ('');
  const[dirrecion1, setDirrecion1] = useState ('');
  const[dirrecion2, setDirrecion2] = useState ('');
  const[tiponegocio, setTipoNegocio] = useState ('');
  const[codigopostal, setCodigoPostal] = useState ('');

  const[servicio, setServicio] = useState ('');

  const[canton, setCanton] = useState ('');
  const[distrito, setDistrito] = useState ('');
  const[provincia, setProvincia] = useState ('');

  const[imagen, setImagen] = useState('');
  const[tag, setTag] = useState('');


  const handleTodoChange = (e) => {
    setNombre(e.target.value)
  }
  const handleTodoChange13 = (e) => {
    setEmail(e.target.value)
  }
  const handleTodoChange3 = (e) => {
    setNumTelefono(e.target.value)
  }
  const handleTodoChange4 = (e) => {
    setDirrecion1(e.target.value)
  }
  const handleTodoChange5 = (e) => {
    setDirrecion2(e.target.value)
  }
  const handleTodoChange7 = (e) => {
    setTipoNegocio(e.target.value)
  }
  const handleTodoChange8 = (e) => {
    setCodigoPostal(e.target.value)
  }
  const handleTodoChange10 = (e) => {
    setCanton(e.target.value)
  }
  const handleTodoChange11 = (e) => {
    setDistrito(e.target.value)
  }
  const handleTodoChange12 = (event) => {
    setServicio(event.target.value);
  }
  const handleTodoChange14 = (event) => {
    setImagen(event.target.value)
  }
  /* 
  const handleTodoChange15 = (event) => {
    setProvincia(event.target.value)
   }*/
  const handleTodoChange16 = (event) => {
    setTag(event.target.value)
  }
  const handleTodoChange17 = (event) => {
    setProvincia(event.target.value)
  }



  const escribirBase = () => {
    const uuid = uid()
    set(ref(DB,`/${uuid}`), {
      nombre,
      email,
      numtelefono,
      dirrecion1,
      dirrecion2,
      tiponegocio,
      codigopostal,
      servicio,
      provincia,
      canton,
      distrito,
      imagen,
      tag
    });

  setNombre("");
  setEmail("");
  setNumTelefono("");
  setDirrecion1("");
  setDirrecion2("");
  setTipoNegocio("");
  setCodigoPostal("");
  setServicio("");
  setProvincia("");
  setCanton("");
  setDistrito("");
  setImagen("");
  setTag("");
  };

  return (
    <div className="my-4">
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidebar">
                <div className="widget border-0">
                    <button className="btn-primary" onClick={() => signOut(auth)}>Salir de la sesión</button>
                </div>

                <div className="widget border-0">
                  <div className="widget-add">
                  </div>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-8">

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6 mb-4">Creación del Negocio</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Nombre</label>
                          <input type="text" className="form-control" value={nombre} onChange={handleTodoChange} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" value={email} onChange={handleTodoChange13} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Número de Teléfono</label>
                          <input type="text" className="form-control" value={numtelefono} onChange={handleTodoChange3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6 mb-4">Locación</h3>
                    <div className="mb-3">
                      <label className="form-label">Dirección 1 </label>
                      <input type="text" className="form-control" value={dirrecion1} onChange={handleTodoChange4} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Dirección 2</label>
                      <input type="text" className="form-control" value={dirrecion2} onChange={handleTodoChange5}/>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Provincias</label>
                          <select className="form-select" value={provincia} onChange={handleTodoChange17} >
                      <option  value="sanjose">San José</option>
                      <option value="puntarenas">Puntarenas</option>
                      <option value="limon">Limón</option>
                      <option value="guanacaste">Guanacaste</option>
                      <option value="alajuela">Alajuela</option>
                      <option value="heredia">Heredia</option>
                      <option value="cartago">Cartago</option>
                    </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Tipo de Negocio</label>
                          <input type="text" className="form-control" value={tiponegocio} onChange={handleTodoChange7} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Código Postal</label>
                          <input type="text" className="form-control" value={codigopostal} onChange={handleTodoChange8}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Status</h3>
                    <select className="form-select" value={servicio} onChange={handleTodoChange12} >
                      <option  value="llevar">Para llevar</option>
                      <option value="express">Servicio Express</option>
                      <option value="ambos">Ambos</option>
                    </select>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Imágen</h3>
                    <input className="form-control" type="file" value={imagen} onChange={handleTodoChange14}/>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Cantón</h3>
                    <input type="text" className="form-control" value={canton} onChange={handleTodoChange10} />
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Distrito</h3>
                    <input type="text" className="form-control" value={distrito} onChange={handleTodoChange11} />
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Tag</h3>
                    <input type="text" className="form-control" value={tag} onChange={handleTodoChange16} />
                  </div>
                </div>
                
               <button onClick={escribirBase}>Agregar Mercado</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaVendedor;