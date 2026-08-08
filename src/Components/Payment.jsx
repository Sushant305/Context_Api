import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Payment = () => {
  const { cart ,setShowPayment } = useContext(CartContext);
  const totalAmount = cart.reduce((total, shoe) => {
    return total + shoe.price * shoe.quantity;
  }, 0);

  const [payMethod, setPayMethod] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-10 mt-20">
        
          <button className="mb-6 px-5 py-3 bg-orange-400 rounded-3xl hover:bg-orange-700 transition font-bold text-white" onClick={()=>{setShowPayment(false)}}> Back to DashBoard</button>


      <h1 className="text=4xl font-bold text-center mb-10"> Payment</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          {cart.map((shoe) => (
            <div key={shoe.id} className="flex items-center gap-4 mb-5">
              <img
                className="w-20 h-20 object-contain bg-gray-200 rounded-xl p-2"
                src={shoe.image}
                alt={shoe.name}
              />
              <div>
                <h3 className="font-semibold">{shoe.name}</h3>
                <p className="text-gray-400"> {shoe.category}</p>
                <p className="font-bold">
                  {" "}
                  ₹{shoe.price} × {shoe.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 mt-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="border p-4 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payMethod === "cod"}
              onChange={(e) => {
                setPayMethod(e.target.value);
              }}
            />
            <span className="ml-3">Cash On Delivery </span>
          </label>
          <label className="border p-4 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payMethod === "card"}
              onChange={(e) => {
                setPayMethod(e.target.value);
              }}
            />
            <span className="ml-3">Credit / Debit Card </span>
          </label>
          {payMethod === "card" && (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="border p-4 rounded-xl"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="border p-4 rounded-xl w-1/2"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  className="border p-4 rounded-xl w-1/2"
                />
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default Payment;
