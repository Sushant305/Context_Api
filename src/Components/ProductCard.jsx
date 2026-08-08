import React from "react";

function ProductCard({ shoe , addToCart}) {
  return (
    <div className="bg-[#F8F4EF] rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ">
      <div className="flex justify-center items-center h-60 bg-[#EFE8DF]">
        <img
          className="w-65 rounded-2xl object-contain hover:scale-105 transition duration-300"
          src={shoe.image}
          alt={shoe.name}
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{shoe.name}</h2>

        <p className="text-gray-400">{shoe.category}</p>

        <div className="flex justify-between items-center mt-6">
          <div className="text-2xl font-bold text-orange-500">
            ₹{shoe.price}
          </div>
          <button
          onClick={()=>addToCart(shoe)}
          className="bg-black text-white px-6 py-2 rounded-2xl hover:bg-orange-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
