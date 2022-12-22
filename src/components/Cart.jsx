import React from "react";
import Announce from "./Announce";
import Counter from "./Counter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

// import { Container } from './styles';

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="p-5">
        <div className="flex justify-center text-5xl">Carrinho</div>

        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#35B639] border-2 border-[#35B639] hover:bg-white">
            Continue comprando
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3">
            <p>Itens no seu carrinho : 3</p>
            <p className="ml-5">Lista de itens: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/*central div*/}
        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1 ">
            {/*Lista de produtos div */}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className="product flex self-start">
                <img
                  className="w-[8rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="imagem do produto"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className="product flex self-start">
                <img
                  className="w-[8rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://media.istockphoto.com/photos/yclist-on-bike-rides-along-the-gravel-road-raising-dust-from-the-rear-picture-id1283085470?k=20&m=1283085470&s=612x612&w=0&h=HoMuAtdnx1M3aQKUx3V61XScJ3q6GpQZlrx3eHhpOb0="
                  alt="imagem do produto"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="p-5 flex-[0.4] w-auto h-[40vh] border-2 border-cllapse[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Sumario</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>R$1400</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Frete</p>
              <p>R$100</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Disconto do frete</p>
              <p>-R$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
              <p>Total</p>
              <p>R$1460</p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
