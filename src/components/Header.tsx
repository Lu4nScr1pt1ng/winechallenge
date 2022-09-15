import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from "../context/CartContext";

import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";

export function Header() {
  const [navMobile, setNavMobile] = useState(false);
  const { cartQuantity, openCart } = useCart()

  return (
    <header className="bg-white mb-3 md:border-b-[2px] md:shadow-sm md:border-b-neutral-200">
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
            <div className="w-[26px] mt-1 md:hidden cursor-pointer">
              <button>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.042 1.7474C6.35806 1.7474 1.75033 6.35513 1.75033 12.0391C1.75033 17.723 6.35806 22.3307 12.042 22.3307C17.7259 22.3307 22.3337 17.723 22.3337 12.0391C22.3337 6.35513 17.7259 1.7474 12.042 1.7474ZM0.166992 12.0391C0.166992 5.48068 5.48361 0.164062 12.042 0.164062C18.6004 0.164062 23.917 5.48068 23.917 12.0391C23.917 15.034 22.8083 17.77 20.9789 19.8589L31.5991 30.4791C31.9082 30.7882 31.9082 31.2895 31.5991 31.5987C31.2899 31.9078 30.7887 31.9078 30.4795 31.5987L19.8592 20.9784C17.7705 22.8063 15.0356 23.9141 12.042 23.9141C5.48361 23.9141 0.166992 18.5974 0.166992 12.0391Z"
                    fill="#555555"
                  />
                </svg>
              </button>
            </div>
            <div className="w-[56px] hidden md:flex cursor-pointer">
              <button>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.042 14.7474C18.3581 14.7474 13.7503 19.3551 13.7503 25.0391C13.7503 30.723 18.3581 35.3307 24.042 35.3307C29.7259 35.3307 34.3337 30.723 34.3337 25.0391C34.3337 19.3551 29.7259 14.7474 24.042 14.7474ZM12.167 25.0391C12.167 18.4807 17.4836 13.1641 24.042 13.1641C30.6004 13.1641 35.917 18.4807 35.917 25.0391C35.917 28.034 34.8083 30.77 32.9789 32.8589L43.5991 43.4791C43.9082 43.7882 43.9082 44.2895 43.5991 44.5987C43.2899 44.9078 42.7887 44.9078 42.4795 44.5987L31.8592 33.9784C29.7705 35.8063 27.0356 36.9141 24.042 36.9141C17.4836 36.9141 12.167 31.5974 12.167 25.0391Z"
                    fill="#555555"
                  />
                  <circle
                    cx="28"
                    cy="28.9974"
                    r="27"
                    stroke="#555555"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
            <div className="w-[57px] hidden md:flex cursor-pointer">
              <button>
                <svg
                  width="56"
                  height="60"
                  viewBox="0 0 56 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.4163 46.9077C35.6468 57.6773 20.3526 57.6773 9.58301 46.9077C12.09 44.4007 16.8475 41.6216 23.2152 39.0746V33.9804C23.2152 33.9804 20.6681 33.0864 20.6681 27.6128C18.1211 27.6128 18.1211 22.5187 20.6681 22.5187C20.6681 21.7851 16.4018 15.0532 21.7659 16.151C23.0394 11.0569 35.5939 11.0569 36.8674 16.151C37.6264 19.1846 35.7263 21.9812 35.7263 22.5187C38.1944 22.5187 37.5194 27.6128 35.7467 27.6128C35.7467 33.0864 33.4034 33.9804 33.4034 33.9804V39.0746C39.771 41.6216 43.1669 43.7471 46.4163 46.9077Z"
                    stroke="#555555"
                    stroke-width="2.20833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M55 28.1137C55 43.0688 42.9092 55.1878 28 55.1878C13.0908 55.1878 1 43.0688 1 28.1137C1 13.1587 13.0908 1.03967 28 1.03967C42.9092 1.03967 55 13.1587 55 28.1137Z"
                    stroke="#555555"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
            <div className="w-[56px] relative cursor-pointer">
              <button
              onClick={() => openCart()} 
              className="bg-[#F9B950] w-[56px] h-[56px] overflow-hidden rounded-full">
                <picture className="relative -right-[9px] top-[5px]">
                  <img src="/images/header/Group.svg" alt="" />
                </picture>
                <div className="bg-white w-[24px] h-[24px] rounded-full flex items-center justify-center absolute top-[30px] right-[-3px]">
                  <p className="text-[#00B495]">{cartQuantity ? cartQuantity : '0'}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
