import { useState } from "react";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);
  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1); };

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);};

  const agregar = () => {
    if (stock > 0 && cantidad <= stock) {
      onAdd(cantidad);
    }};

  if (stock === 0) {
    return <p>Sin stock disponible</p>;
  }

  return (
    <div className="itemcount">
      <div>
        <button onClick={restar} disabled={cantidad <= 1}>−</button>
        <span style={{ margin: "0 10px" }}>{cantidad}</span>
        <button onClick={sumar} disabled={cantidad >= stock}>+</button>
      </div>

      <button onClick={agregar} style={{ marginTop: "8px" }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
