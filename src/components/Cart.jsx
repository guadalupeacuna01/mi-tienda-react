import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Cart() {
    const { cart, totalItems, totalPrecio, removeItem, clear } = useContext(CartContext);

    if (!cart.length) {
        return (
            <section>
                <h2>Carrito</h2>
                <p>Tu carrito aún está vacío.</p>
                <Link className="btn-seguir" to="/productos">← Ir a productos</Link>
            </section>
        );
    }

    return (
            <section>
              <h2>Carrito</h2>
        
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {item.imagen && ( <img src={item.imagen} alt={item.nombre}/>
                )}

                <div className="cart-item-info">
                    <div>{item.nombre}</div>
                    <div>x{item.cantidad}</div>
                </div>


                <div>${(item.precio * item.cantidad).toLocaleString()}</div>
                <button className="btn-remove" onClick={() => removeItem(item.id)}>🗑️</button>
                </div>
              ))}
        
              <hr />
              <div>
                <p>Total de productos: <strong>{totalItems}</strong></p>
                <p>Total a pagar: <strong>${totalPrecio}</strong></p>
              </div>
        
              <div>
                <button className="btn-vaciar" onClick={clear}>Vaciar carrito</button>
                <Link className="btn-seguir" to="/productos"> Seguir comprando</Link>
              </div>

            </section>
          );
        }
