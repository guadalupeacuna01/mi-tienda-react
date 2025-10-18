import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../main";
import Product from "./Product";
import "./styles.css";

const categories = {
    AGENDAS: "agendas-2026",
    CUADERNOS: "cuadernos",
    CARTUCHERAS: "cartucheras",
    LAPICERAS: "lapiceras",
    TODO: "todo",
};

function ProductListContainer () {
    const [productos, setProductos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories.TODO);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const db = getFirestore();
        const itemsCollection = collection(db, "items");
        
        const consulta = 
        selectedCategory === categories.TODO
        ? itemsCollection :
        query(itemsCollection, where("categoria", "==", selectedCategory));

        setLoading(true);
        getDocs(consulta)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(data);
            })
            .catch((error) => {
                setError("Error al cargar los productos");
            })
            .finally(() => setLoading(false));
            }, [selectedCategory]);

        if (loading) return <p>Cargando productos...</p>
        if (error) return <p>{error}</p>
        if (productos.length === 0) return <p>No hay productos disponibles</p>


    return (
    <section>
        <h2>Productos</h2>
        <div className="filtros">
        <button onClick={() => setSelectedCategory(categories.TODO)}>Todos</button>
        <button onClick={() => setSelectedCategory(categories.AGENDAS)}>Agendas 2026</button>
        <button onClick={() => setSelectedCategory(categories.CUADERNOS)}>Cuadernos</button>
        <button onClick={() => setSelectedCategory(categories.CARTUCHERAS)}>Cartucheras</button>
        <button onClick={() => setSelectedCategory(categories.LAPICERAS)}>Lapiceras</button>
        </div>
        
        <div className="card-container">
            {productos.map( producto => ( 
                <Product key={producto.id} {...producto} />
            ))}
        
        </div>
        </section>
    )
}

export default ProductListContainer;