import { Link } from "react-router-dom";
import './styles.css'
import prodLibreria from "../productos";
import ThemeContext from "./ThemeContext";

function Home () {

    const { temaActual, handleTema } = useContext(ThemeContext);

    return (
        <div>
            <p className="p-primavera" onClick={hanldeTema}>Modo Primavera</p>
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