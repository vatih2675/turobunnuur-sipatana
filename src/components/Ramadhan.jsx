import ButtonSecondary from "./button/Secondary";
import clsx from "clsx";
import { React, useEffect, useState } from "react";
import { formatTanggal } from "../constants/functions";

export default function Ramadhan({tanggal, bukapuasa}) {
  const [ramadhan, setRamadhan] = useState(false);
  let catatan = [
    "Jadwal buka puasa ini bersifat sementara",
    "Bagi yang ingin bergabung / mengundurkan diri / tukar jadwal, agar segera menghubungi Pengurus BTM Turobunnur Sipatana",
  ];

  let waktu = new Date();
  let tahun = waktu.getFullYear();

  return (
    <>
      <ButtonSecondary
        title={`Ramadhan ${tahun - 579} H / ${tahun} M`}
        icon="bi-moon-stars"
        click={() => setRamadhan((prevState) => !prevState)}
      />
      <div
        className={clsx(
          "fixed z-10 left-0 right-0 top-0 size-0 opacity-0 transition-all duration-300 bg-white overflow-auto",
          ramadhan ? "size-full opacity-100" : "pointer-events-none",
        )}
      >
        <div className="w-full bg-green-700 flex justify-between items-center shadow mb-5">
          <h1 className="text-white text-xs sm:text-xl ms-2 sm:ms-4 font-bold">
            <i className="bi-moon-stars-fill me-2"></i>Ramadhan {tahun - 579} H
            / {tahun} M
          </h1>
          <div className="flex justify-center items-center">
            <i
              className="bi-x-lg text-gray-300 flex justify-center items-center w-8 sm:w-10 h-8 sm:h-10 text-xs sm:text-base cursor-pointer hover:bg-white hover:text-red-500 transition-color duration-300"
              onClick={() => setRamadhan((prevState) => !prevState)}
            ></i>
          </div>
        </div>
        <div className="w-full sm:w-10/12 mx-auto px-2 sm:px-0">
          <h1 className="text-xs sm:text-2xl text-center font-bold text-green-800 mb-3 uppercase">
            Jadwal Pelaksana Buka Puasa
          </h1>
          <div className="w-full">
            <table className="w-full mb-2 sm:mb-5 text-[0.5rem] sm:text-base">
              <thead>
                <tr>
                  <th className="px-2 border border-gray-700 bg-green-700 text-white w-[5%] sm:w-[5%]">
                    RAMADHAN
                    <br />
                    HARI KE
                  </th>
                  {/* <th className="px-2 border border-gray-700 bg-green-700 text-white w-[25%] sm:w-[18%]">
                    TANGGAL
                  </th> */}
                  <th className="px-2 border border-gray-700 bg-green-700 text-white w-[65%] sm:w[72%]">
                    NAMA PELAKSANA
                  </th>
                </tr>
              </thead>
              <tbody>
                {bukapuasa.map((bp, index) => (
                  <tr
                    className={
                      formatTanggal(bp.masehi) == tanggal ? "bg-green-100" : ""
                    }
                    key={index}
                  >
                    <td className="p-1 sm:p-2 border border-gray-700 text-center">
                      {bp.hijriyah}
                    </td>
                    {/* <td className="p-1 sm:p-2 border border-gray-700 text-center">
                      {formatTanggal(bp.masehi)}
                    </td> */}
                    <td className="p-1 sm:p-2 border border-gray-700">
                      {bp.nama}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full mb-5">
              <p className="font-bold">Catatan :</p>
              {catatan.map((cat, index) => (
                <p key={index} className="">
                  {index + 1}. {cat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}