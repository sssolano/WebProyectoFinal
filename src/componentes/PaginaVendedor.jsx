import '/Users/ssola/Documents/GitHub/WebProyectoFinal/src/App.css';
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
                        <input className="form-control" type="text" placeholder="Search Keywords"/>
                    </div>
                </div>
                <div className="widget border-0">
                    <div className="locations">
                        <input className="form-control" type="text" placeholder="All Locations"/>
                    </div>
                    <button className="btn-primary" onClick={() => signOut(auth)}>Salir de la sesión</button>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Date Posted</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#dateposted" role="button" aria-expanded="false" aria-controls="dateposted"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="dateposted">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted1"/>
                                <label className="custom-control-label" htmlFor="dateposted1">Last hour</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted2"/>
                                <label className="custom-control-label" htmlFor="dateposted2">Last 24 hour</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted3"/>
                                <label className="custom-control-label" htmlFor="dateposted3">Last 7 days</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted4"/>
                                <label className="custom-control-label" htmlFor="dateposted4">Last 14 days</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted5"/>
                                <label className="custom-control-label" htmlFor="dateposted5">Last 30 days</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Specialism</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#specialism" role="button" aria-expanded="false" aria-controls="specialism"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="specialism">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism1"/>
                                <label className="custom-control-label" htmlFor="specialism1">IT Contractor</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism2"/>
                                <label className="custom-control-label" htmlFor="specialism2">Clinical Psychology</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism3"/>
                                <label className="custom-control-label" htmlFor="specialism3">Digital &amp; Creative</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism4"/>
                                <label className="custom-control-label" htmlFor="specialism4">Estate Agency</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism5"/>
                                <label className="custom-control-label" htmlFor="specialism5">Graduate</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Job Type</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#jobtype" role="button" aria-expanded="false" aria-controls="jobtype"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="jobtype">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox fulltime-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype1"/>
                                <label className="custom-control-label" htmlFor="jobtype1">Full Time</label>
                            </div>
                            <div className="custom-control custom-checkbox parttime-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype2"/>
                                <label className="custom-control-label" htmlFor="jobtype2">Part-Time</label>
                            </div>
                            <div className="custom-control custom-checkbox freelance-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype3"/>
                                <label className="custom-control-label" htmlFor="jobtype3">Freelance</label>
                            </div>
                            <div className="custom-control custom-checkbox temporary-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype4"/>
                                <label className="custom-control-label" htmlFor="jobtype4">Temporary</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Experience</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#experience" role="button" aria-expanded="false" aria-controls="experience"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="experience">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience1"/>
                                <label className="custom-control-label" htmlFor="experience1">fresher</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience2"/>
                                <label className="custom-control-label" htmlFor="experience2">Less than 1 year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience3"/>
                                <label className="custom-control-label" htmlFor="experience3">2 Year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience4"/>
                                <label className="custom-control-label" htmlFor="experience4">3 Year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience5"/>
                                <label className="custom-control-label" htmlFor="experience5">4 Year</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Offered Salary</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#Offeredsalary" role="button" aria-expanded="false" aria-controls="Offeredsalary"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="Offeredsalary">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary1"/>
                                <label className="custom-control-label" htmlFor="Offeredsalary1">10k - 20k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary2"/>
                                <label className="custom-control-label" htmlFor="Offeredsalary2">20k - 30k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary3"/>
                                <label className="custom-control-label" htmlFor="Offeredsalary3">30k - 40k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary4"/>
                                <label className="custom-control-label" htmlFor="Offeredsalary4">40k - 50k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary5"/>
                                <label className="custom-control-label" htmlFor="Offeredsalary5">50k - 60k</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Gender</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#gender" role="button" aria-expanded="false" aria-controls="gender"><i className="fas fa-chevron-down"></i></a>
                    </div>
                    <div className="collapse show" id="gender">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="gender1"/>
                                <label className="custom-control-label" htmlFor="gender1">Male</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="gender2"/>
                                <label className="custom-control-label" htmlFor="gender2">Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Qualification</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#qualification" role="button" aria-expanded="false" aria-controls="qualification"> <i className="fas fa-chevron-down"></i></a>
                    </div>
                    <div className="collapse show" id="qualification">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification1"/>
                                <label className="custom-control-label" htmlFor="qualification1">Matriculation</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification2"/>
                                <label className="custom-control-label" htmlFor="qualification2">Intermediate</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification3"/>
                                <label className="custom-control-label" htmlFor="qualification3">Graduate</label>
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
            <div className="row mb-4">
                <div className="col-12">
                    <h6 className="mb-0">Showing 1-10 of <span className="text-primary">28 Candidates</span></h6>
                </div>
            </div>
            <div className="job-filter mb-4 d-sm-flex align-items-center">
                <div className="job-alert-bt"> <a className="btn btn-md btn-dark" href="#/"><i className="fa fa-envelope"></i>Get job alert </a> </div>
                <div className="job-shortby ml-sm-auto d-flex align-items-center">
                    <form className="form-inline">
                        <div className="form-group mb-0">
                            <label className="justify-content-start mr-2">Sort by :</label>
                            <div className="short-by">
                                <select className="form-control basic-select select2-hidden-accessible" data-select2-id="1"  aria-hidden="true">
                                    <option data-select2-id="3">Newest</option>
                                    <option>Oldest</option>
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
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Reyna Chung</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Transport &amp; Logistics</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Glen Cove, NY 11542</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="candidate-list-favourite-time">
                                <a className="candidate-list-favourite order-2" href="#/"><i className="far fa-heart"></i></a>
                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1H ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Rafael Briggs</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Architecture</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Botchergate, Carlisle</li>
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
                <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
                    <div className="candidate-list candidate-grid">
                        <div className="candidate-list-image">
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                        </div>
                        <div className="candidate-list-details">
                            <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                    <h5><a href="candidate-detail.html">Michael Bean</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-filter pr-1"></i>Estate Agency</li>
                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Richmond Hill, NY 11418</li>
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
            </div>
            <div className="row">
                <div className="col-12 text-center mt-4 mt-sm-5">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                        <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                        <li className="page-item"><a className="page-link" href="#/">2</a></li>
                        <li className="page-item"><a className="page-link" href="#/">3</a></li>
                        <li className="page-item"><a className="page-link" href="#/">...</a></li>
                        <li className="page-item"><a className="page-link" href="#/">25</a></li>
                        <li className="page-item"> <a className="page-link" href="#/">Next</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
		</div>
	);
}
export default PaginaVendedor;