import React, { useState, useEffect } from "react";

export default function JadwalSholat({ tanggalhariini }) {
  const [dataSholat, setDataSholat] = useState([]);
  const [jam, setJam] = useState(null);
  const [menit, setMenit] = useState(null);
  const waktu = new Date();
  let tahun = waktu.getFullYear();
  let bulan = waktu.getMonth();
  let tanggal = waktu.getDate();
  let tgl = tahun + '-' + (bulan + 1  < 10 ? '0' + ( bulan + 1) : bulan + 1) + '-' + (tanggal < 10 ? '0' + tanggal : tanggal)

  useEffect(() => {
    setInterval(() => {
      setJam(
        waktu.getHours() < 10
          ? "0" + waktu.getHours()
          : waktu.getHours().toString()
      );
      setMenit(
        waktu.getMinutes() < 10
          ? "0" + waktu.getMinutes()
          : waktu.getMinutes().toString()
      );
    }, 1000);
  }, []);

  // console.log(`${jam}:${menit}`)

  const urlJadwalSholat = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/gorontalo/${tahun}/${
    bulan + 1 < 10 ? "0" + (bulan + 1) : bulan + 1
  }.json`;
  useEffect(() => {
    fetch(urlJadwalSholat, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((js) => {
        if (js.tanggal == tgl) {
          setDataSholat(js);
        }
      });
    })
    .catch((error) => console.log(error));
  }, []);
    
  return (
    <>
      <div className="relative w-full h-fit bg-white/80 rounded-2xl shadow-black/30 shadow-lg overflow-hidden transition-all duration-300">
        <div className="w-full text-center p-1">
          <h1 className="font-bold text-base sm:text-lg">Jadwal Sholat</h1>
          <span className="text-sm text-green-800">{tanggalhariini}</span>
        </div>
        <div className="px-2 text-[0.9rem]">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr>
                <th className="px-1 w-10/12 text-start bg-green-700 text-white">
                  WAKTU
                </th>
                <th className="px-1 w-2/12 text-center bg-green-700 text-white">
                  JAM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Imsyak
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.imsyak}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Subuh
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.shubuh}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Terbit Matahari
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.terbit}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Dhuha
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.dhuha}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Dzuhur
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.dzuhur}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Ashar
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.ashr}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Maghrib
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.magrib}
                </td>
              </tr>
              <tr
                className={`hover:bg-green-200 transition-color duration-300`}
              >
                <td className="border-b border-gray-300 px-1 text-start">
                  Isya
                </td>
                <td className="border-b border-gray-300 px-1 text-center">
                  {dataSholat.isya}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mb-1 text-end text-[0.6rem] italic text-gray-500 font-[100] px-2">
            *Format waktu dalam WITA
          </p>
        </div>
      </div>
    </>
  );
}
