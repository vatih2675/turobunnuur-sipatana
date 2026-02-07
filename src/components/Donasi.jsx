import clsx from "clsx";
import ButtonSecondary from "./button/Secondary";
import { data, saldoAwalKas } from "../constants/kas";
import { formatTanggal, angka } from "../constants/functions";
import { React, useState, useEffect } from "react";

export default function Donasi() {
  const [donasiTampil, setDonasiTampil] = useState(false);

  return (
    <>
      <ButtonSecondary
        title="Infaq / Donasi"
        icon="bi-cash-stack"
        click={() => setDonasiTampil((prevState) => !prevState)}
      />
      <div
        className={clsx(
          "fixed z-10 left-0 right-0 top-0 size-0 opacity-0 transition-all duration-300 bg-white overflow-auto",
          donasiTampil ? "size-full opacity-100" : "pointer-events-none",
        )}
      >
        <div className="w-full bg-green-700 flex justify-between items-center shadow mb-5">
          <h1 className="text-white text-xs sm:text-xl ms-2 sm:ms-4 font-bold">
            <i className="bi-cash-stack me-2"></i>Infaq & Donasi
          </h1>
          <div className="flex justify-center items-center">
            <i
              className="bi-x-lg text-gray-300 flex justify-center items-center w-8 sm:w-10 h-8 sm:h-10 text-xs sm:text-base cursor-pointer hover:bg-white hover:text-red-500 transition-color duration-300"
              onClick={() => setDonasiTampil((prevState) => !prevState)}
            ></i>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mx-auto px-2 sm:px-0">
          ...
        </div>
      </div>
    </>
  );
}