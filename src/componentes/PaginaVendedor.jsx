// Importaciones
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { db } from "../credenciales";
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

function PaginaVendedor() {
  const [marketName, setMarketName] = useState('');

  const addMarket = async () => {
    try {
      if (marketName.trim() !== '') {
        await db.collection('markets').add({ name: marketName });
        setMarketName('');
        console.log('Mercado agregado exitosamente');
      } else {
        console.log('El nombre del mercado está vacío');
      }
    } catch (error) {
      console.error('Error al agregar el mercado:', error);
    }
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
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Número de Teléfono</label>
                          <input type="text" className="form-control" />
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
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Dirección 2</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Provincias</label>
                          <select
                            className="select2 form-control select2-hidden-accessible"
                            data-select2-id="select2-data-1-gy14"
                            tabIndex="-1"
                            aria-hidden="true"
                            defaultValue={'SJ'}
                          >
                            <option data-select2-id="select2-data-3-ibs9" value=""></option>
                            <option value="SJ">San José</option>
                            <option value="BS">Limón</option>
                            <option value="KH">Guanacaste</option>
                            <option value="DK">Cartago</option>
                            <option value="TL">Heredia</option>
                            <option value="GM">Puntarenas</option>
                            <option value="GM">Alajuela</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Tipo de Negocio</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Código Postal</label>
                          <input type="text" className="form-control" />
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
                    <select className="form-select" defaultValue={'Ambos'}>
                      <option value="ParaLlevar">Para llevar</option>
                      <option value="Express">Servicio Express</option>
                      <option value="Ambos">Ambos</option>
                    </select>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Imágen</h3>
                    <input className="form-control" type="file" />
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Cantón</h3>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Distrito</h3>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Tag</h3>
                    <select className="form-select" defaultValue={'tag01'}>
                      <option value="tag01">Tag01</option>
                      <option value="tag02">Tag02</option>
                      <option value="tag03">Tag03</option>
                    </select>
                  </div>
                </div>

                <button onClick={addMarket}>Agregar Mercado</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaVendedor;
