import React from "react";
import Announce from "../Announce";
import Counter from "../Counter";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";

// import { Container } from './styles';

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="flex justify-center h-[40rem] mobile:flex-col mobile:mt-3 mobile:p-3">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">Bicicleta urbana topo de linha</h1>
          <p className="pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mt-7 text-3xl">
            Preço: <b>R$20.000,00</b>
          </p>

          {/*color variants */}
          <div className="flex text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option>S</option>
              <option>S/M</option>
              <option>M</option>
              <option>M/L</option>
              <option>L</option>
              <option>L/XL</option>
            </select>
          </div>
          <div className="mt-5 mb-5">
            <Counter />
          </div>
          <button className="btn mt-5 mb-5">Add to cart</button>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
