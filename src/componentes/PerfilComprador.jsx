import React from "react";
import "../PerfilComprador.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foto01 from "../assets/andres_alvarado.png";

function PerfilComprador() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <img
                    className="img-profile img-circle img-responsive center-block"
                    // src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    src={Foto01}
                    alt=""
                  />
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      Andrés Alvarado
                      <label className="label label-info">Cliente</label>
                    </li>
                    <li className="email">
                      <a href="#/"></a>
                    </li>
                    <li className="activity">
                      {/* Last logged in: Today at 2:18pm */}
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#/">
                        <span className="fa fa-user"></span> Perfil
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <span className="fa fa-cog"></span> Direcciones
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <span className="fa fa-credit-card"></span> Métodos de pago
                      </a>
                    </li>
                    {/* <li>
                      <a href="#/">
                        <span className="fa fa-envelope"></span> Messages
                      </a>
                    </li>

                    <li>
                      <a href="user-drive.html">
                        <span className="fa fa-th"></span> Drive
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <span className="fa fa-clock-o"></span> Reminders
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
                <h2 className="title">
                  Perfil
                  {/* <span className="pro-label label label-warning">PRO</span> */}
                </h2>
                <form className="form-horizontal">
                  <fieldset className="fieldset">
                    <h3 className="fieldset-title">Datos personales</h3>
                    <div className="form-group avatar">
                      <figure className="figure col-md-2 col-sm-3 col-xs-12">
                        <img
                          className="img-rounded img-responsive"
                          src={Foto01}
                          alt=""
                        />
                      </figure>
                      <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="file"
                          className="file-uploader pull-left"
                        />
                        <button
                          type="submit"
                          className="btn btn-sm btn-default-alt pull-left"
                        >
                          Cargar imagen
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                        Usuario
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value="aalvarado"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                        Nombre
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value="Andrés"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                        Apellido
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value="Alvarado"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="fieldset">
                    <h3 className="fieldset-title">Información de Contacto</h3>
                    <div className="form-group">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                        Email
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="email"
                          className="form-control"
                          value="aalvaradob020@ulacit.ed.cr"
                        />
                        <p className="help-block">Su dirección de correo electrónico </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                        Teléfono
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value="88377848"
                        />
                        <p className="help-block">Teléfono principal de contacto</p>
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                        Linkedin
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="url"
                          className="form-control"
                          value="https://www.linkedin.com/in/lorem"
                        />
                        <p className="help-block">
                          eg. https://www.linkedin.com/in/yourname
                        </p>
                      </div>
                    </div> */}
                  </fieldset>
                  <hr />
                  <div className="form-group">
                    <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Actualizar perfil"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default PerfilComprador;
