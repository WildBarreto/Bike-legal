import React from "react";
import Announce from "../Announce";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";
import Products from "../Products";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text=[30px]">Road Bikes</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Tamanho
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>xL</option>
            </select>

            <select className="ml-3 border-2 border-silver mobile:mt-3">
              <option selected disabled>
                Cor
              </option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
             
            </select>
          </div>
          <div className="flex">
            <p>Ordenar por</p>
            <select className="ml-3 border-2  border-silver">
                <option value="">Recent (first)</option>
                <option value="">Antigo (first)</option>
                <option value="">Preço (Cresc)</option>
                <option value="">Preço (Decres)</option>
                
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
