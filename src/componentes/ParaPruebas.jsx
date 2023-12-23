import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const CatalogoProductos = () => <h1>Catalogo de Productos</h1>;
const AcercaDe = () => <h1>Acerca de</h1>;

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalogo">Catalogo de Productos</Link>
                    </li>
                    <li>
                        <Link to="/acerca">Acerca de</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/catalogo" component={CatalogoProductos} />
                <Route path="/acerca" component={AcercaDe} />
            </Routes>
        </Router>
    );
};

export default App;
