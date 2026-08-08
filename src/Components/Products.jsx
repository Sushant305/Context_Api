import React from "react";
import ProductCard from "./ProductCard";
import shoes from "../data/shoes";

function Products({addToCart}) {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Featured Shoes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shoes.map((shoe,index)=>(
          <ProductCard key={shoe.id} shoe={shoe} addToCart={addToCart }/>
        ))}
      </div>
    </section>
  );
}
9
export default Products;
