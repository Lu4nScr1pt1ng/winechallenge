import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import api from "../services/api";
import Image from "next/image";
import Link from "next/link";

export function Store() {
  const [products, setProducts] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState("");
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/products?page=1&limit=9");

      setProducts(response.data.items);
      setTotalItems(response.data.totalItems);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-[1fr_3fr]">
        <div className="hidden md:flex flex-1">
          <div>
            <h3 className="font-black py-6 font-nav text-xl">
              Refine sua busca
            </h3>
            <p className="py-8 text-[#333333] font-bold">Por preço</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                  defaultChecked
                />
                <p className="text-[#1D1D1B]">Qualquer valor</p>
              </div>
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                />
                <p className="text-[#1D1D1B]">Até R$40</p>
              </div>
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                />
                <p className="text-[#1D1D1B]">R$40 A R$100</p>
              </div>
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                />
                <p className="text-[#1D1D1B]">R$100 A R$200</p>
              </div>
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                />
                <p className="text-[#1D1D1B]">R$200 A R$500</p>
              </div>
              <div className="flex items-center gap-x-6">
                <input
                  type="radio"
                  className="w-[15.89px] h-[16px] outline-none border-[1px] border-[#888888]"
                  name="maxminvalue"
                  id=""
                />
                <p className="text-[#1D1D1B]">Acima de R$500</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto font-body">
            <div className="text-start py-6 text-[18px]">
              <p className="text-[#888888] after:content-[''] md:after:content-none after:absolute after:border-b-[2px] after:bg-[#d5d5d5] after:w-[94%] after:top-[160px] after:left-0 after:right-0 after:mx-auto">
                <span className="font-bold text-black">{totalItems}</span>{" "}
                produtos encontrados
              </p>
            </div>
          </div>
          <div className="py-10">
            <div className="container mx-auto">
              <ul className="flex justify-around flex-wrap gap-y-6 gap-x-4 w-[100%]">
                {products.map((obj) => (
                  <li key={obj.id}>
                    <div className="bg-white rounded-[4px] shadow-md w-[156px] h-[440px] py-4 lg:w-[256px] lg:h-[333px]">
                      <Link href={`/wines/${obj.id}`}>
                        <div className="lg:w-[90px] mx-auto cursor-pointer">
                          <Image
                            src={obj.image}
                            alt="vinho"
                            width={124}
                            height={188}
                            layout="responsive"
                            priority
                          />
                        </div>
                      </Link>
                      <Link href={`/wines/${obj.id}`}>
                      <h2 className="font-bold text-center text-[16px] leading-[20px] h-[60px] pt-2 cursor-pointer">
                        {obj.name}
                      </h2>
                      </Link>

                      <div className="flex gap-2 items-center pt-4 justify-center">
                        <p className="text-xs text-[#888888] line-through">
                          R${obj.price}
                        </p>
                        <p className="bg-[#F79552] px-2 rounded-md text-white">
                          {obj.discount}% OFF
                        </p>
                      </div>
                      <div className="flex max-w-[85%] pt-3 mx-auto items-center gap-1 lg:justify-center lg:mx-auto lg:w-[100%]">
                        <p className="uppercase leading-3 justify-self-end text-[12px] text-black">
                          Sócio wine
                        </p>
                        <p className="text-[#C81A78] w-[100px] lg:w-auto  font-bold text-[13px]">
                          R${" "}
                          <span className="text-[18px]">{obj.priceMember}</span>
                        </p>
                      </div>
                      <div className="flex justify-center pt-2">
                        <p className="text-xs uppercase text-[#888888]">
                          Não sócio R$ {obj.priceNonMember}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => increaseCartQuantity(obj.id)}
                        className="text-white uppercase font-bold py-2 w-full mt-2 rounded-[4px] bg-accent hover:bg-accent-hover"
                      >
                        Adicionar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
