import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget () {

    const { totalItems } = useContext(CartContext);

    return (
        <>
        <div className="carrito">🛒{totalItems}</div>
        </>
    )
}

export default CartWidget;