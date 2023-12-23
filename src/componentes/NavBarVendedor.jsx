import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { PaginaError } from "./PaginaError";
import AcercaDe from "./AcercaDe";
import appFirebase from '../credenciales';
import { getAuth, signOut } from "firebase/auth";
import { ReporteVentas } from "./ReporteVentas";
import PaginaVendedor from "./PaginaVendedor";
const auth = getAuth(appFirebase)

function NavBarVendedor() {
    return (
        <>
            <div className="container">
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/paginavendedor" active-ClassName='active'>Perfil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/reporteventas" active-ClassName='active'>Reporte de ventas</NavLink>
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
                        <Route exact path="/" Component={PaginaVendedor} />
                        <Route path="/home" Component={PaginaVendedor} />
                        <Route path="/paginavendedor" Component={PaginaVendedor} />
                        <Route path="/reporteventas" Component={ReporteVentas} />
                        <Route path="/acercade" Component={AcercaDe} />
                        <Route path="*" Component={PaginaError} />
                        
                    </Routes>
                </Router>
            </div>
        </>
    );
}
 
export default NavBarVendedor;