import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import CatalogoNegocios from "./CatalogoNegocios";
import PerfilComprador from "./PerfilComprador";
import { PaginaError } from "./PaginaError";
import AcercaDe from "./AcercaDe";
import { DetalleProducto } from "./DetalleProducto";
import appFirebase from '../credenciales';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)

function NavBar() {
    return (
        <>
            <div className="container">
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/catalogonegocios" active-ClassName='active'>Catálogo de Negocios</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/perfilcomprador" active-ClassName='active'>Perfil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/acercade" active-ClassName='active'>Acerca de</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" active-ClassName='active' onClick={() => signOut(auth)}>Salir</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Routes>
                        <Route exact path="/" Component={CatalogoNegocios} />
                        <Route path="/home" Component={CatalogoNegocios} />
                        <Route path="/catalogonegocios" Component={CatalogoNegocios} />
                        <Route path="/perfilcomprador" Component={PerfilComprador} />
                        <Route path="/detalleproducto" Component={DetalleProducto} />
                        <Route path="/acercade" Component={AcercaDe} />
                        <Route path="*" Component={PaginaError} />
                        
                    </Routes>
                </Router>
            </div>
        </>
    );
}
 
export default NavBar;