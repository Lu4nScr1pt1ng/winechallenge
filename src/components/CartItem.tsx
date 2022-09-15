import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type CartItemProps = {
  id: number;
  quantity: number;
  items?: [
    {
      price: number;
      id: number;
      name: string;
      image: string;
    }
  ];
};

export function CartItem({ id, quantity, items }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useCart();

  const item = items?.find((i) => i.id === id);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image src={item!.image} height={76} width={76} alt="vinho" />
      </div>
      <div className="text-center font-bold">{item!.name}</div>
      <div className="flex gap-x-4">
        <div>Quantidade: <span className="font-black">{quantity}</span></div>
        <div>Preço: <span className="font-bold">R${item!.price}</span></div>
      </div>
      <div>
        <div className="flex items-center gap-2 py-2">
          <button
          onClick={() => {increaseCartQuantity(item!.id)}}
           className="bg-accent hover:bg-accent-hover text-white p-1 rounded-md">Adicionar um item</button>
          <button
          onClick={() => {decreaseCartQuantity(item!.id)}}
           className="bg-removebtn hover:bg-removebtn-hover text-white p-1 rounded-md">Remover um item</button>
        </div>
        <button 
        onClick={() => {removeFromCart(item!.id)}}
        className="w-[100%] text-center bg-removebtn hover:bg-removebtn-hover text-white p-1 rounded-md">Remover do carrinho</button>
      </div>
    </div>
  );
}
