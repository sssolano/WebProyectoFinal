import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import appFirebase from '../credenciales';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase)

function PaginaVendedor () {
  
	return (
		<div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />

<div className="container">
    <div className="row">
        <div className="col-lg-3">
            <div className="sidebar">
                <div className="widget border-0">
                    <div className="search">
                        <input className="form-control" type="text" placeholder="Palabras clave"/>
                    </div>
                </div>
                <div className="widget border-0">
                    <div className="locations">
                        <input className="form-control" type="text" placeholder="Locación"/>
                    </div>
                    <button className="btn-primary" onClick={() => signOut(auth)}>Salir de la sesión</button>
                </div>

                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Tipo de Comida</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#specialism" role="button" aria-expanded="false" aria-controls="specialism"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="specialism">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism1"/>
                                <label className="custom-control-label" htmlFor="specialism1">Comida Mexicana</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism2"/>
                                <label className="custom-control-label" htmlFor="specialism2">Hamburguesas</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism3"/>
                                <label className="custom-control-label" htmlFor="specialism3">Pollo Frito</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism4"/>
                                <label className="custom-control-label" htmlFor="specialism4">Pizza</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism5"/>
                                <label className="custom-control-label" htmlFor="specialism5">Postres</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget border-0">
                    <div className="widget-add">
                        <img className="img-fluid" src="images/add-banner.png" alt=""/></div>
                </div>
            </div>
        </div>
        <div className="col-lg-9">
            <div className="job-filter mb-4 d-sm-flex align-items-center">
                <div className="job-shortby ml-sm-auto d-flex align-items-center">
                    <form className="form-inline">
                        <div className="form-group mb-0">
                            <label className="justify-content-start mr-2">Sort by :</label>
                            <div className="short-by">
                                <select className="form-control basic-select select2-hidden-accessible" data-select2-id="1"  aria-hidden="true">
                                    <option data-select2-id="3">Calificaciones</option>
                                    <option>Tiempo de Entrega</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Rafael Briggs</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Recruitment Consultancy</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Haines City, FL 33844</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1M ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Roderick Moss</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Information Technology</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Lynch Lane, Weymouth</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3M ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Ronald Bradley</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Human Resources</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Monroe Township, NJ 08831</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3D ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Nichole Haynes</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>IT Contractor</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Botchergate, Carlisle</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>6D ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Vickie Meyer</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Human Resources</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Minneapolis, MN 55406</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>2D ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Brooke Kelly</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Information Technology</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Rolling Meadows, IL 60008</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3W ago</span>
                            </div>
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