import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";
import './styles.css'

function Layout() {
    return (
        <>
            <nav className="navbar">
                <div className="nombreTienda">Mi Tienda</div>
                <ul className="lista">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/productos'}>Productos</Link></li>
                    <li><Link to={'/Contacto'}>Contacto</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
    }
        

export default Layout;