import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function CartWidget () {

    const { totalItems } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
        <Link to="/cart" className="carrito">
      🛒
      {totalItems > 0 && (
        <span className="carrito-count" style={{  }}>
          {totalItems}
        </span>
      )}
    </Link>
        </>
    )
}

export default CartWidget;