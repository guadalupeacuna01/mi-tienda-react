import { Link } from "react-router-dom";
import prodLibreria from "../productos";

function Product ({nombre, color, imagen, precio, id}) {
    return (
        <Link to={`/productos/${id}`} className="card">
            
            <h2>{nombre}</h2>
            <p>{color}</p>
            {imagen && <img src={imagen} alt={nombre} />}
            <h3>Precio: ${precio}</h3>
        
        </Link>
    );
}

export default Product;