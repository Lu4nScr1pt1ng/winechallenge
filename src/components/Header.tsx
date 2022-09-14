import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";

export function Header() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="bg-white md:border-b-[2px] md:border-b-neutral-200">
      <div className="container mx-auto h-[74px] md:h-[88px]">
        <div className="flex h-[100%] w-[100%] justify-between">
          <div className="flex h-[100%] items-center gap-4">
            <div
              className="cursor-pointer md:hidden"
              onClick={() => setNavMobile(!navMobile)}
            >
              {navMobile ? <HiX size={32} /> : <HiMenu size={32} />}
            </div>
            <picture>
              <img
                className="w-[78px] mt-1 md:w-[100px]"
                src="/images/header/logoreal.png"
                alt=""
              />
            </picture>
            <div className="hidden ml-4 md:flex lg:ml-14">
              <Nav />
            </div>
            <div
              className={` ${
                navMobile ? "max-h-64" : "max-h-0"
              } md:hidden absolute top-[4.2rem] w-[100%] mx-auto left-0 right-0 bg-othersgreenlow font-bold transition-all overflow-hidden`}
            >
              <NavMobile />
            </div>
          </div>
          <div className="flex items-center gap-7 md:gap-10">
            <div className="w-[24px] md:hidden cursor-pointer">
              <picture>
                <img src="/images/header/buscanoborder.svg" alt="" />
              </picture>
            </div>
            <div className="w-[56px] hidden md:flex cursor-pointer">
              <picture>
                <img src="/images/header/busca.svg" alt="" />
              </picture>
            </div>
            <div className="hidden md:flex cursor-pointer">
              <picture>
                <img src="/images/header/conta.svg" alt="" />
              </picture>
            </div>
            <div className="w-[56px] cursor-pointer">
              <picture>
                <img src="/images/header/bag.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
