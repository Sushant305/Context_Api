import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, setShowPayment } =
    useContext(CartContext);

  const totalAmount = cart.reduce((total, shoe) => {
    return total + shoe.price * shoe.quantity;
  }, 0);

  return (
    <div className="bg-white  rounded-3xl shadow-lg p-6 sticky top-36">
      <h2 className="text-3xl font-bold m-8">Shopping Cart</h2>

      {cart.map((shoe, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-4 pb-5"
        >
          <div className="flex justify-center items-center gap-3">
            <img
              className="w-20 h-20 object-contain bg-gray-300 rounded-3xl p-2"
              src={shoe.image}
              alt={shoe.name}
            />

            <div className=" flex flex-col">
              <h3 className="font-semibold">{shoe.name}</h3>
              <p className="text-gray-400">{shoe.category}</p>
              <p className="font-bold mt-1">₹{shoe.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(shoe.id)}
              className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center"
            >
              -
            </button>
            <span>{shoe.quantity}</span>
            <button
              onClick={() => increaseQuantity(shoe.id)}
              className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="mt-8">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Total </span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <button
        onClick={() => {
          setShowPayment(true);
        }}
        className="w-full bg-black text-white py-4 rounded-2xl mt-6 hover:bg-orange-500 duration-300  text-center"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
