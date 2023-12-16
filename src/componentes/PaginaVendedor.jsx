import '/Users/ssola/Documents/GitHub/WebProyectoFinal/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import appFirebase from '../credenciales';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase)

function PaginaVendedor () {
  
	return (
        <div className=" my-4">
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
                        <img className="img-fluid" src="images/add-banner.png" alt=""/></div>
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
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Número de Teléfono</label>
                <input type="text" className="form-control"/>
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
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección 2</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Provincias</label>
                <select className="select2 form-control select2-hidden-accessible"  data-select2-id="select2-data-1-gy14" tabIndex="-1" aria-hidden="true">
                  <option data-select2-id="select2-data-3-ibs9"></option>
                  <option value="AF">San José</option>
                  <option value="BS">Limón</option>
                  <option value="KH">Guanacaste</option>
                  <option value="DK">Cartago</option>
                  <option value="TL">Heredia</option>
                  <option value="GM">Puntarenas</option>
                  <option value="GM">Alajuela</option>
                </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-2-46y9" style={{/*width: 391px;*/}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-vp8l-container" aria-controls="select2-vp8l-container"><span className="select2-selection__rendered" id="select2-vp8l-container" role="textbox" aria-readonly="true" title="Select country"><span className="select2-selection__placeholder"></span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Tipo de Comida</label>
                <select className="select2 form-control select2-hidden-accessible"  data-select2-id="select2-data-4-680y" tabIndex="-1" aria-hidden="true">
                  <option data-select2-id="select2-data-6-cshs"></option>
                  <option value="AL">Comida Mexicana</option>
                  <option value="CA">Hamburguesas</option>
                  <option value="DE">Pollo Frito</option>
                  <option value="FL">Postres</option>
                  <option value="GA">Cafetería</option>
                  <option value="HI">Pizza</option>
                  <option value="ID">Saludable</option>
                  <option value="KS">Comida Asiática</option>
                </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-5-np4c" style={{/*width: 391px;*/}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-2fn7-container" aria-controls="select2-2fn7-container"><span className="select2-selection__rendered" id="select2-2fn7-container" role="textbox" aria-readonly="true" ><span className="select2-selection__placeholder"></span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Código Postal</label>
                <input type="text" className="form-control"/>
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
          <select className="form-select">
            <option value="draft" selected="">Para llevar</option>
            <option value="active">Servicio Express</option>
            <option value="active">Ambos</option>
          </select>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="h6">Imágen</h3>
          <input className="form-control" type="file"/>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="h6">Cantón</h3>
          <input type="text" className="form-control"/>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3 className="h6">Distrito</h3>
          <input type="text" className="form-control"/>
        </div>
      </div>

    </div>
  </div>
</div>

                    </div>
                </div>
            </div>
	);
}
export default PaginaVendedor;