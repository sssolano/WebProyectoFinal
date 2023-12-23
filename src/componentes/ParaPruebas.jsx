
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { onFindAll } from "../config/conexiones";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

function CatalogoNegocios() {
    const [negocios, setNegocios] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [filtroSeleccionado, setFiltroSeleccionado] = useState("TipoNegocio");

    useEffect(() => {
        onGetNegocios();
    }, []);

    const onGetNegocios = async () => {
        const lstNegocios = await onFindAll("negocios");
        setNegocios(lstNegocios.docs);
    };

    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    const handleFiltroSeleccionadoChange = (event) => {
        setFiltroSeleccionado(event.target.value);
    };

    const negociosFiltrados = negocios.filter((negocio) =>
        negocio.data()[filtroSeleccionado].toLowerCase().includes(filtro.toLowerCase())
    );

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
                    <button className="btn-primary" onClick={() => signOut(auth)}>
                        Salir de la sesión
                    </button>
                    <div>
                        <select value={filtroSeleccionado} onChange={handleFiltroSeleccionadoChange}>
                            <option value="Nombre">Nombre</option>
                            <option value="Direccion">Dirección</option>
                            <option value="TipoNegocio">Tipo de Negocio</option>
                            {/* Agrega más opciones de filtrado aquí */}
                        </select>
                        <input
                            type="text"
                            value={filtro}
                            onChange={handleFiltroChange}
                            placeholder="Buscar negocio..."
                        />
                    </div>

                    {/* Aquí inicia la plantilla para el negocio */}
                    {negociosFiltrados.map((negocio) => (
                        <div
                            className="col-sm-4 col-md-3 box-product-outer"
                            key={negocio.IdNegocio}
                        >
                            {/* Resto del código del negocio */}
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
                    
export default CatalogoNegocios;
