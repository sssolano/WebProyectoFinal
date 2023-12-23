import React, { useEffect, useState } from "react";
import "../PerfilComprador.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foto01 from "../assets/perfil.png";
import appFirebase from "../credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
import swal from "sweetalert";
import { onFindById, onInsert, onUpdate } from "../config/conexiones";
// import { imageDb } from "../credenciales";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";

function PerfilComprador() {
  //Esto es para cargar las imágenes
  // const [img, setImg] = useState("");
  // const [imgUrl, setImgUrl] = useState([]);

  // const handleClick = () => {
  //   if (img !== null) {
  //     swal("Error", "Por favor seleccione una imagen.", "error");
  //   } else {
  //     const imgRef = ref(imageDb, `files/${v4()}`);
  //     uploadBytes(imgRef, img).then((value) => {
  //       console.log(value);
  //       getDownloadURL(value.ref).then((url) => {
  //         console.log("Entró a guardar la imagen");
  //         setImgUrl((data) => [...data, url]);
  //         setValues({ ...values, ["imagen"]: imgUrl });
  //       });
  //     });
  //   }
  // };
  //Aquí termina lo de las imágenes

  const [userAuth, setUserAuth] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAuth(currentUser);
    });
  }, []);

  let correo = userAuth?.email;
  let idUsuario = userAuth?.uid;

  const initialValues = {
    Nombre: "",
    Telefono: "",
    correo: correo,
    imagen: Foto01,
    rol: "comprador",
  };

  const initialValuesMetodoPago = {
    IdUsuario: idUsuario,
    Nombre: "",
    Tarjeta: "",
    Vencimiento: "",
    CVC: "",
    Direccion: "",
    Ciudad: "",
    CodigoPostal: "",
    Pais: "",
    Provincia: ""
  };

  // useEffect(() => {
  //   onCargarUsuarios();
  // }, []);

  const [values, setValues] = useState(initialValues);
  const [valuesMetodoPago, setValuesMetodoPago] = useState(initialValuesMetodoPago);
  const [currentId, setCurrentId] = useState('');
  // const [usuarios, setUsuarios] = useState([]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleInputChangeMetodoPago = ({ target }) => {
    const { name, value } = target;
    setValuesMetodoPago({ ...valuesMetodoPago, [name]: value });
    console.log(valuesMetodoPago);
  };

  // const onCargarUsuarios = async () => {
  //   const lstUsuarios = await onFindAll("usuarios");
  //   setUsuarios(lstUsuarios.docs);
  // };

  useEffect(() => {
    onCargarUsuario();
  }, [idUsuario]);

  useEffect(() => {
    onCargarMetodoPago();
  }, [idUsuario]);

  const onCargarUsuario = async () => {
    const docSeleccionado = await onFindById("usuarios", idUsuario);
    setValues({ ...docSeleccionado });
    console.log(values);
  };

  const onCargarMetodoPago = async () => {
    const docSeleccionado = await onFindById("metodospago", idUsuario);
    setValuesMetodoPago({ ...docSeleccionado });
    console.log(valuesMetodoPago);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    // Aquí se valida que los campos no estén en blanco. Si alguno falta, se muestra un error.
    if (!values.Nombre || !values.Telefono) {
      swal("Error", "Por favor complete todos los campos.", "error");
      return;
    }

    try {
      await onUpdate("usuarios", userAuth?.uid, values);
      swal("Registro ingresado correctamente.", { icon: "success" });
    } catch (error) {
      swal("Error", "Error: " + error, "error");
    }
  };

  const onSubmitMetodoPago = async ev => {
    ev.preventDefault();

    // Aquí se valida que los campos no estén en blanco. Si alguno falta, se muestra un error.
    if (!valuesMetodoPago.Nombre || !valuesMetodoPago.Tarjeta || !valuesMetodoPago.Vencimiento || !valuesMetodoPago.CVC || !valuesMetodoPago.Direccion || !valuesMetodoPago.Ciudad || !valuesMetodoPago.CodigoPostal || !valuesMetodoPago.Pais || !valuesMetodoPago.Provincia) {
        swal("Error", "Por favor complete todos los campos del método de pago.", "error");
        return;
    }

    try {
        if (currentId === '') {
            await onInsert(valuesMetodoPago);
            swal("Método de pago ingresado correctamente.", { icon: "success", });
        } else {
            await onUpdate("metodospago", userAuth?.uid, valuesMetodoPago);
            swal("Método de pago ingresado correctamente.", { icon: "success", });
        }

    } catch (error) {
        swal("Error", error, "error");
    }
}

  const [selectedMenu, setSelectedMenu] = useState("perfil");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const renderForm = () => {
    switch (selectedMenu) {
      case "perfil":
        return (
          <div>
            <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <div className="container">
              <div className="view-account">
                <h1 className="title">
                  Perfil
                  {/* <span className="pro-label label label-warning">PRO</span> */}
                </h1>
                <form className="form-horizontal">
                  <fieldset className="fieldset">
                    <h3 className="fieldset-title">Datos personales</h3>
                    <div className="form-group avatar">
                      <figure className="figure col-md-2 col-sm-3 col-xs-12">
                        {/* <input
                          type="file"
                          onChange={(e) => setImg(e.target.files[0])}
                          accept="/image/*"
                        />
                        <button
                          type="submit"
                          className="btn btn-sm btn-default-alt pull-left"
                          onClick={handleClick}
                        >
                          Cargar imagen
                        </button> */}
                        {/* <img
                          className="img-rounded img-responsive"
                          src={values.Imagen}
                          alt="Foto del usuario"
                        /> */}
                      </figure>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                         Imagen
                        </label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                         <input
                            type="text"
                            className="form-control"
                            name="Imagen"
                            value={values.Imagen}
                            onChange={handleInputChange}
                        />
                        <p className="help-block">
                          Link a la imagen que desea usar en su perfil.
                        </p>
                        </div>
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
                          name="Nombre"
                          value={values.Nombre}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="fieldset">
                    {/* <h3 className="fieldset-title">Información de Contacto</h3> */}
                    <div className="form-group">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                        Teléfono
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          name="Telefono"
                          value={values.Telefono}
                          onChange={handleInputChange}
                        />
                        {/* <p className="help-block">Teléfono principal de contacto</p> */}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                        Email
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        {/* <input
                                      type="email"
                                      className="form-control"
                                      name="correo" 
                                      value={ values.correo } 
                                      onChange={ handleInputChange }
                                    />  */}
                        <p className="help-block">{values.correo} </p>
                      </div>
                    </div>
                  </fieldset>
                  <hr />
                  
                  <div className="form-group">
                  <div className="action-wrapper text-center">
                      <div className="action-btn">
                        <button className="btn btn-success btn-lg"
                        type="submit"
                        onClick={onSubmit}>
                          Actualizar
                        </button>
                      </div>
                    </div>
                    {/* <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={onSubmit}
                      >
                        Actualizar
                      </button>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      case "direcciones":
        return (
          <form>
            <h1>Direcciones</h1>
          </form>
        );
      case "metodosPago":
        return (
          <div>
            <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <div className="container">
              <div className="view-account">
                <h2 className="title">Método de pago</h2>
                <div className="billing">
                  <div className="secure text-center margin-bottom-md">
                    <h3 className="margin-bottom-md text-success">
                      <span
                        className="fs1 icon"
                        aria-hidden="true"
                        data-icon=""
                      ></span>
                      Pago Seguro
                      <br />
                      <small>
                        Este método de pago cuenta con encriptación SSL 128-bit 
                      </small>
                    </h3>
                    
                  </div>
                  <form
                    id="billing"
                    className="form-horizontal"
                    method="post"
                    action="#"
                    role="form"
                  >
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Nombre en la tarjeta
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Su nombre"
                          name="Nombre"
                          value={valuesMetodoPago.Nombre}
                          onChange={handleInputChangeMetodoPago}
                        />
                        <p className="help-block">Como aparece en la tarjeta</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Número en la tarjeta{" "}
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="••••  ••••  ••••  ••••"
                          name="Tarjeta"
                          value={valuesMetodoPago.Tarjeta}
                          onChange={handleInputChangeMetodoPago}
                        />
                        <p className="help-block">
                          Los 16 dígitos que aparecen al frente de su tarjeta.
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Fecha de vencimiento
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="Vencimiento"
                          value={valuesMetodoPago.Vencimiento}
                          onChange={handleInputChangeMetodoPago}
                          
                          placeholder="Fecha de vencimiento"
                        />
                        <p className="help-block">
                          La fecha de vencimiento que se muestran en la parte frontal de su tarjeta.
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Código de seguridad
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="CVC"
                          value={valuesMetodoPago.CVC}
                          onChange={handleInputChangeMetodoPago}
                          style={
                            {
                              /*width: 120px;*/
                            }
                          }
                          placeholder="CVC"
                        />
                        <p className="help-block">
                          Los últimos 3 dígitos que se muestran en la parte trasera de su tarjeta.
                        </p>
                      </div>
                    </div>
                    <div className="address">
                      <div className="form-group">
                        <label className="col-sm-3 control-label">
                          Dirección
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Dirección"
                            name="Direccion"
                            value={valuesMetodoPago.Direccion}
                            onChange={handleInputChangeMetodoPago}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">
                          Ciudad
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ciudad"
                            name="Ciudad"
                            value={valuesMetodoPago.Ciudad}
                            onChange={handleInputChangeMetodoPago}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="col-sm-3 control-label">
                          Código postal
                        </label>
                        <div className="col-sm-5 col-sm-offset-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Código postal"
                            name="CodigoPostal"
                            value={valuesMetodoPago.CodigoPostal}
                            onChange={handleInputChangeMetodoPago}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">
                          País
                        </label>
                        <div className="col-sm-5 col-sm-offset-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="País"
                            name="Pais"
                            value={valuesMetodoPago.Pais}
                            onChange={handleInputChangeMetodoPago}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">
                          Provincia
                        </label>
                        <div className="col-sm-5 col-sm-offset-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Provincia"
                            name="Provincia"
                            value={valuesMetodoPago.Provincia}
                            onChange={handleInputChangeMetodoPago}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="action-wrapper text-center">
                      <div className="action-btn">
                        <button className="btn btn-success btn-lg" onClick={onSubmitMetodoPago}>
                          Actualizar
                          {/* <i className="fa fa-chevron-right"></i> */}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
                    src={values.Imagen}
                    alt=""
                  />
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      {values.Nombre}
                      <label className="label label-info">{values.rol}</label>
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
                    {/* <li className="active"> */}
                    <li>
                      <a onClick={() => handleMenuClick("perfil")}>
                        <span className="fa fa-user"></span> Perfil
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleMenuClick("direcciones")}>
                        <span className="fa fa-cog"></span> Direcciones
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleMenuClick("metodosPago")}>
                        <span className="fa fa-credit-card"></span> Método de
                        pago
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
                {/* <h3 className="fieldset-title">Información de Contacto</h3> */}
                <div>
                  {/* Rendereriza el formulario, basado en el menú */}
                  {renderForm()}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default PerfilComprador;
