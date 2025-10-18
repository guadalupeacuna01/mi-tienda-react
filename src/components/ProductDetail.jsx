import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../main"
import ItemCount from "./ItemCount";
import "./styles.css";


function ProductDetail () {

    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [agregado, setAgregado] = useState(false);

    // const db = getFirestore();
  
    useEffect(() => {
      const itemRef = doc(db, "items", id); 
      getDoc(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
            setError("No se encontró el producto");}
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando producto...</p>
    if (!producto) return <p>Producto no encontrado</p>
    if (error) return <p>{error}</p>

    const handleAdd = (cantidad) => {
        setAgregado(true); };


    return (
        <div className="card-detail">
            <h2>{producto.nombre}</h2>
            <p>Color: {producto.color}</p>
            {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
            <p>{producto.descripcion}</p>
            <h3>Precio: ${producto.precio}</h3>

        {!agregado ? (
            <ItemCount stock={Number(producto.stock ?? 0)} initial={1} onAdd={(handleAdd)} />
        ) : (
        <p className="prod-agregado">Producto agregado al carrito </p>
        )}
        </div>
    );
}

export default ProductDetail;