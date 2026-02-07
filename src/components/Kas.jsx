import clsx from "clsx";
import ButtonPrimary from "./button/Primary";
import { data, saldoAwalKas } from "../constants/kas";
import { formatTanggal, angka } from "../constants/functions";
import { React, useState, useEffect } from "react";

export default function Kas() {
  const [kasTampil, setKasTampil] = useState(false);
  const saldoAwal = saldoAwalKas;
  const [masuk, setMasuk] = useState(0);
  const [keluar, setKeluar] = useState(0);
  // const [saldoAkhir, setSaldoAkhir] = useState(0);

  useEffect(() => {
    let jumlahMasuk = saldoAwal;
    let jumlahKeluar = 0;
    data.map((dk) => {
      if (dk.kas == "Masuk") {
        jumlahMasuk += dk.jumlah;
        setMasuk(jumlahMasuk);
      } else {
        jumlahKeluar += dk.jumlah;
        setKeluar(jumlahKeluar);
      }
    });
  }, [saldoAwal]);

  // console.log(masuk, keluar, data);

  return (
    <>
      <ButtonPrimary
        title="Kas Masjid"
        click={() => setKasTampil((prevState) => !prevState)}
      />
      <div
        className={clsx(
          "fixed z-10 left-0 right-0 top-0 bottom-0 size-0 opacity-0 transition-all duration-300 bg-white",
          kasTampil ? "size-full opacity-100" : "pointer-events-none",
        )}
      >
        <i
          className="bi-x-lg absolute p-4 hover:text-red-500 duration-300 cursor-pointer text-gray-300"
          onClick={() => setKasTampil((prevState) => !prevState)}
        ></i>
        {/* <iframe
          src="https://turabunnur.web.id/"
          className="w-full h-full"
        ></iframe> */}
        <div className="w-full h-full flex justify-center items-center gap-10">
          <div className="w-70 h-70 flex justify-center items-center flex-col bg-linear-to-b from-green-500 to-green-700 p-5 rounded-4xl text-white">
            <h3 className="font-bold text-xl">MASUK</h3>
            <h1 className="font-black text-3xl">Rp. {angka(masuk)}</h1>
          </div>
          <div className="w-70 h-70 flex justify-center items-center flex-col bg-linear-to-b from-red-500 to-red-700 p-5 rounded-4xl text-white">
            <h3 className="font-bold text-xl">KELUAR</h3>
            <h1 className="font-black text-3xl">Rp. {angka(keluar)}</h1>
          </div>
          <div className="w-70 h-70 flex justify-center items-center flex-col bg-linear-to-b from-gray-500  to-gray-700 p-5 rounded-4xl text-white">
            <h3 className="font-bold text-xl">SALDO</h3>
            <h1 className="font-black text-3xl">Rp. {angka(masuk - keluar)}</h1>
          </div>
        </div>
      </div>
    </>
  );
}