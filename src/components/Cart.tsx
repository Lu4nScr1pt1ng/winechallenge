import { useCart } from "../context/CartContext";

import { HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import api from "../services/api";

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartQuantity, cartItems } = useCart();
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/products");

      setAllItems(response.data.items);
    }

    fetchData();
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="bg-white top-0 max-w-[320px] font-nav p-2 right-0 absolute">
          <div className="p-2">
            <div>
              <button onClick={closeCart}>
                <HiX size={40} />
              </button>
              <h3>
                Você tem <span className="font-bold">{cartQuantity}</span>{" "}
                {cartQuantity > 1 ? "items" : "item"} no carrinho
              </h3>
            </div>
            <div className="flex flex-col gap-8 py-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} items={allItems} {...item} />
              ))}
            </div>
            <div>
              {cartQuantity > 0 ? (
                <button className="w-full mx-auto bg-accent hover:bg-accent-hover rounded-md py-2 text-white">
                  Finalizar compra
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
