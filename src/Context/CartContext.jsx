import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const addToCart = (shoe) => {
    const existingShoe = cart.find((item) => item.id === shoe.id);

    if (existingShoe) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...shoe,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (shoeId) => {
    setCart(
      cart.map((item) =>
        item.id === shoeId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (shoeId) => {
    setCart(
      cart
        .map((item) =>
          item.id === shoeId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        showPayment,
        setShowPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
