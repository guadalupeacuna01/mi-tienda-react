import { useState } from "react";
import prodLibreria from "../productos";
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
    const lista = prodLibreria

    if (!lista.length) 
        return <p>No hay productos</p>
    
    const [selectedCategory, setSelectedCategory] = useState(categories.TODO);

    const filteredProducts = 
    selectedCategory === categories.TODO
    ? lista
    : lista.filter(producto => producto.categoria === selectedCategory)

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
            {filteredProducts.map( producto => ( 
                <Product key={producto.id} {...producto} />
            ))}
        
        </div>
        </section>
    )
}

export default ProductListContainer;