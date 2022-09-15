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
  const { removeFromCart } = useCart();

  const item = items?.find((i) => i.id === id);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image src={item!.image} height={76} width={76} alt="vinho" />
      </div>
      <div className="text-center font-bold">{item!.name}</div>
      <div>
        <div>Quantidade: {quantity}</div>
        <div>Preço: R${item!.price}</div>
      </div>
    </div>
  );
}
