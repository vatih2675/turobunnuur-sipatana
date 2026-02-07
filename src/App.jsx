import {dataApp} from "./constants/index";
import { pelaksanaBukaPuasa } from "./constants/ramadhan";
import Kas from "./components/Kas";
import Ramadhan from "./components/Ramadhan";
import Grid from "./components/Grid";
import { React, useState, useEffect } from "react";
import Admin from "./components/Admin";
import Donasi from "./components/Donasi";
import { linkAksesOpen } from "./constants/functions";

export default function App() {
  const [tanggalHariIni, setTanggalHariIni] = useState(null);
  const [jamBerjalan, setJamBerjalan] = useState(null);
  const [tahun, setTahun] = useState(null);

  useEffect(() => {
    setInterval(() => {
      let waktu = new Date();
      let hr = waktu.getDay();
      const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];
      let hari = namaHari[hr];
      let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
      let bln = waktu.getMonth();
      const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      let bulan = namaBulan[bln];
      let thn = waktu.getFullYear();
      let jam =
        waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
      let menit =
        waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
      let detik =
        waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
      setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
      setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
      setTahun(waktu.getFullYear());
    }, 1);
  }, []);

  const bukaPuasa = pelaksanaBukaPuasa;

  return (
    <section
      className="w-full h-screen flex justify-center items-center fixed cursor-default"
      id="canvas"
    >
      <div className="bg-gray-50/50 w-full h-full p-2 flex sm:flex-row flex-col justify-center items-center relative">
        <div className="w-full sm:w-9/12 h-full flex flex-col justify-center items-center gap-4 relative">
          <img
            src={`images/${dataApp.settings.logo}`}
            className="w-34 sm:w-72 pointer-events-none transition-all duration-300 bg-white/70 shadow-black/30 shadow-lg p-1 rounded-full"
            // animate-[spin_100s_ease-in-out_infinite]
          />
          <div
            onClick={() => linkAksesOpen(dataApp.settings.maps)}
            className="bg-white/70 shadow-black/30 shadow-lg py-2 px-3 rounded-2xl cursor-pointer"
          >
            <h1 className="text-green-800 text-center font-black text-2xl sm:text-5xl uppercase transition-all duration-300">
              {dataApp.settings.title}
            </h1>
            <p className="text-center text-[0.9rem] sm:text-base font-bold transition-all duration-300">
              <i className="bi-geo-alt-fill me-1"></i>
              {dataApp.settings.address}
            </p>
          </div>
          <div className="mt-2 sm:mt-5 flex justify-center items-center gap-1 sm:gap-3">
            <Kas />
            {/* <Donasi /> */}
            <Ramadhan tanggal={tanggalHariIni} bukapuasa={bukaPuasa} />
            {/* <Admin /> */}

            {/* <a href="https://turabunnur.web.id/home" target="_blank" className="px-2 sm:px-8 py-1 sm:py-2 bg-white border border-green-700 rounded-l-full rounded-r-full text-green-700 hover:bg-green-100 duration-300 hover:shadow-md text-[0.8rem] sm:text-base">Dashboard Admin</a> */}
          </div>
          <div className="absolute top-0 w-full flex sm:flex-col flex-row justify-between sm:justify-start items-center sm:items-start text-green-800 font-black text-[0.8rem] sm:text-lg transition-all duration-300">
            <span className="tanggalHariIni">
              <i className="bi-calendar3 me-1"></i>
              {tanggalHariIni}
            </span>
            <span className="jamBerjalan">
              <i className="bi-clock me-1"></i>
              {jamBerjalan}
            </span>
          </div>
        </div>
        <Grid tanggal={tanggalHariIni} bukapuasa={bukaPuasa} />
      </div>
    </section>
  );
}