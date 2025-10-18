import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const itemExistente = cart.find((prod) => prod.id === item.id);

    if (itemExistente) {
      const nuevoCarrito = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCart(nuevoCarrito);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => setCart([]);

  const totalItems = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  const totalPrecio = cart.reduce((acc, prod) => acc + Number(prod.precio || 0) * Number(prod.cantidad || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalItems, totalPrecio }} >
      
      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;