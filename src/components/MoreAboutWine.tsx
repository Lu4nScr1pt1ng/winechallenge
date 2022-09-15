import Image from "next/image";
import { useCart } from "../context/CartContext";

import arrow from "../../public/images/wines/arrow.svg";

type MoreAboutWineProsp = {
  id: number;
  items?: [
    {
      price: number;
      id: number;
      name: string;
      image: string;
      priceMember: number;
      priceNonMember: number;
      type: string;
      classification: string;
      size: string;
      country: string;
      region: string;
      flag: string;
      sommelierComment: string;
    }
  ];
};

export function MoreAboutWine({ id, items }: MoreAboutWineProsp) {
  const { increaseCartQuantity } = useCart();
  const item = items?.find((i) => i.id == id);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center py-4 gap-1 text-[16px] leading-[16px]">
          <p className="text-[#C81A78]">Vinhos</p>
          <div>
            <Image src={arrow} height={10} width={8} alt="arrow" />
          </div>
          <p className="text-[#C81A78]">{item?.country}</p>
          <div>
            <Image src={arrow} height={10} width={8} alt="arrow" />
          </div>
          <p className="text-[#888888]">{item?.region}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="font-bold text-center font-nav text-[20px]">
              {item?.name}
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-3 items-center">
            <div>
              {item?.flag && (
                <Image src={item.flag} width={15} height={15} alt="flag" />
              )}
            </div>
            <p className="text-[#333333]">{item?.country}</p>
            <p className="text-[#555555]">{item?.type}</p>
            <p className="text-[#555555]">{item?.classification}</p>
            <p className="text-[#555555]">{item?.size}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center py-4">
            {item?.image && (
              <Image src={item.image} height={182} width={120} alt="vinho" />
            )}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-[24px] py-4">Descrição</h2>
          <p className="text-[#555555] mb-[120px] text-[18px]">
            {item?.sommelierComment}
          </p>
        </div>
        <div className="bg-white flex h-[80px] fixed md:mx-auto md:right-auto md:left-auto md:relative  bottom-0 p-1 px-3 right-0 left-0 shadow-[0px_11px_30px_8px_rgba(0,0,0,0.3)]">
          <div className="flex-1">
            <p className="text-[#555555] line-through font-bold text-[12px]">
              R$ {item?.price}
            </p>
            <p className="text-[#C81A78] font-bold">
              R$ <span className="text-[20px]">{item?.priceMember}</span>
            </p>
            <p className="uppercase text-[9px] font-bold text-[#555555] ">
              preço não-sócio R$ {item?.priceNonMember}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={() => {
                increaseCartQuantity(item!.id);
              }}
              className="bg-accent hover:bg-accent-hover w-[90%] py-4 font-bold rounded-md text-white"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
