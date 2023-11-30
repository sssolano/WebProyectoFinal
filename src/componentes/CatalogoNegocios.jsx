// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { onFindAll } from '../config/conexiones'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import appFirebase from '../credenciales';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase)

function CatalogoNegocios() {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    onGetNegocios();
  }, []);

  const onGetNegocios = async () =>{
    const lstNegocios = await onFindAll('negocios');
    setNegocios(lstNegocios.docs);
    //console.log(negocios);
}

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootdey">
      <div className="row justify-content-center product-grid-style">
          <div className="title">
            <span>Negocios disponibles</span>
          </div>
          <button className="btn-primary" onClick={() => signOut(auth)}>Salir de la sesión</button>

          {/* Aquí inicia la plantilla para el negocio */}
          {negocios.map((negocio) => 
          ( 
            <div className="col-sm-4 col-md-3 box-product-outer" key={ negocio.IdNegocio }>
              <div className="box-product" >
                <div className="img-wrapper">
                  <a href="detail.html">
                    <img
                      alt="Product"
                      src={ negocio.data().Imagen}
                    />
                  </a>
                  <div className="tags">
                    <span className="label-tags">
                      <span className="label label-danger">{ negocio.data().Tag01}</span>
                    </span>
                    <span className="label-tags">
                      <span className="label label-info">{ negocio.data().Tag02}</span>
                    </span>
                    <span className="label-tags">
                      <span className="label label-warning">{ negocio.data().Tag03}</span>
                    </span>
                  </div>
                  <div className="option">
                    <a
                      href="#/"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Add to Cart"
                    >
                      <i className="ace-icon fa fa-shopping-cart"></i>
                    </a>
                    <a
                      href="#/"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Compare"
                    >
                      <i className="ace-icon fa fa-align-left"></i>
                    </a>
                    <a
                      href="#/"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Wishlist"
                    >
                      <i className="ace-icon fa fa-heart"></i>
                    </a>
                  </div>
                </div>
                <h6>
                  <a href="detail.html">{ negocio.data().Nombre}</a>
                </h6>
                <h6>
                  { negocio.data().Direccion}
                </h6>
                <div className="rating">
                  <i className="ace-icon fa fa-star"></i>
                  <i className="ace-icon fa fa-star"></i>
                  <i className="ace-icon fa fa-star"></i>
                  <i className="ace-icon fa fa-star"></i>
                  <i className="ace-icon fa fa-star-half-o"></i>
                  <a href="#/">({ negocio.data().Calificaciones} calificaciones)</a>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>

  );
}
export default CatalogoNegocios;
