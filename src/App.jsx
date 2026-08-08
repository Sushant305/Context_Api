import "./App.css";

import NavBaar from "./Components/NavBaar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { useState } from "react";
import shoes from "./data/shoes.js";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
  console.log("Clicked Shoe:", shoe);

  const existingShoe = cart.find((item) => item.id === shoe.id);

  console.log("Existing Shoe:", existingShoe);

  if (existingShoe) {
    console.log("Updating Quantity");

    setCart(
      cart.map((item) =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    console.log("Adding New Shoe");

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
        item.id === shoeId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (shoeId) => {
    setCart(
      cart
        .map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  console.log(cart);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBaar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Products addToCart={addToCart} />
          </div>

          <div>
            <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
