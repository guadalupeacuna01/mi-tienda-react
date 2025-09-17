import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import prodLibreria, { getProductById } from "../productos";


function ProductDetail () {

    const { id } = useParams();
    const producto = prodLibreria.find(producto => producto.id === parseInt(id) );

    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then (response => setProd(response))
            .catch (error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <p>Cargando producto...</p>
    if (!prod) return <p>Producto no encontrado</p>

    return (
        <div className="card-detail">
            <h2>{producto.nombre}</h2>
            <p>Color:{producto.color}</p>
            {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
            <p>{producto.descripcion}</p>
            <h3>Precio: ${producto.precio}</h3>
        </div>
    );
}

export default ProductDetail;