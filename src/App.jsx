import "./App.css";

import NavBaar from "./Components/NavBaar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { useContext } from "react";
import Payment from "./Components/Payment";
import { CartContext } from "./Context/CartContext";

function App() {
  const { showPayment } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBaar />

      {showPayment ? (
        <Payment />
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Products />
            </div>

            <div>
              <Cart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
