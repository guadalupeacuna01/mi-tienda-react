import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Product ({nombre, color, imagen, precio, id}) {

    const { addItem } = useContext(CartContext);
    const [agregado, setAgregado] = useState(false);
    const handleAdd = (cantidad) => {
        addItem({ id, nombre, imagen, precio, stock }, cantidad);
        setAgregado(true);
    };

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