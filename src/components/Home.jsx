import { Link } from "react-router-dom";
import './styles.css'
import prodLibreria from "../productos";

function Home () {
    return (
        <div>
            <section className="portada">
            <img src="/portada.png" alt="Portada de la tienda" />
            <div className="portada-content">
                <Link to="/productos">Ver Productos</Link>
            </div>
            </section>

        </div>
    )
}

export default Home;