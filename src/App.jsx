import "./App.css";

import NavBaar from "./Components/NavBaar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBaar />

      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/checkout" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
