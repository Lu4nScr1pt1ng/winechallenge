import { useCart } from "../context/CartContext";

import { HiX } from "react-icons/hi";

type CartProps = {
  isOpen: boolean,
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartQuantity } = useCart();
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
            <div></div>
            <div>
              <button className="w-full mx-auto bg-[#7EBC43] rounded-md py-2 text-white">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
