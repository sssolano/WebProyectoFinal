// eslint-disable-next-line no-unused-vars
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foto01 from "../assets/andres_alvarado.png";
import Foto02 from "../assets/mauro_carlucci.png";
import Foto03 from "../assets/paulo_hernandez.png";
import Foto04 from "../assets/omer_faruk.png";
import Foto05 from "../assets/sebastian_solano01.png";

function AcercaDe() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossOrigin="anonymous"
      />

      <div className="container bootdey">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">El equipo Deliverra</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Conozca los rostros detrás de nuestro sitio web.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-3 py-4">
              <img
                src={Foto01}
                className="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div className="content mt-3">
                <h4 className="title mb-0">Andrés Alvarado</h4>
                <small className="text-muted">Desarrollador</small>
                <ul className="list-unstyled mt-3 social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-3 py-4">
              <img
                src={Foto02}
                className="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div className="content mt-3">
                <h4 className="title mb-0">Mauro Carlucci</h4>
                <small className="text-muted">Desarrollador</small>
                <ul className="list-unstyled mt-3 social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-3 py-4">
              <img
                src={Foto03}
                className="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div className="content mt-3">
                <h4 className="title mb-0">Paulo Hernández</h4>
                <small className="text-muted">Desarrollador</small>
                <ul className="list-unstyled mt-3 social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-3 py-4">
              <img
                src={Foto04}
                className="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div className="content mt-3">
                <h4 className="title mb-0">Omer Faruk</h4>
                <small className="text-muted">Desarrollador</small>
                <ul className="list-unstyled mt-3 social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-3 py-4">
              <img
                src={Foto05}
                className="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div className="content mt-3">
                <h4 className="title mb-0">Sebastián Solano</h4>
                <small className="text-muted">Desarrollador</small>
                <ul className="list-unstyled mt-3 social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AcercaDe;
