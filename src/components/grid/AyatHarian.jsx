import  { React, useState, useEffect } from "react";

export default function AyatHarian() {
  const [ayatRandom, setAyatRandom] = useState([]);
  
  useEffect(() => {
    const urlAyatRandom = `https://quran-api-id.vercel.app/random`;
    fetch(urlAyatRandom, {
      method: "GET",
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((dataRandom) => {
        setAyatRandom(dataRandom);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setInterval(() => {
      const urlAyatRandom = `https://quran-api-id.vercel.app/random`;
      fetch(urlAyatRandom, {
        method: "GET",
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((dataRandom) => {
          setAyatRandom(dataRandom);
        })
        .catch((error) => console.log(error));
    }, 60000);
  }, []);
    
  return (
    <>
      <div className="relative w-full h-full bg-white/80 rounded-2xl shadow-black/30 shadow-lg overflow-auto p-2 flex flex-col justify-between items-center transition-all duration-300">
        <h1 className="font-bold text-base sm:text-lg text-center p-1">Ayat Harian</h1>
          <div className="flex flex-col sm:gap-2 gap-2 sm:px-4">
            <p className="text-center text-xl sm:text-2xl">{ayatRandom.arab}</p>
            <p className="text-center text-xs sm:text-sm">{ayatRandom.translation}</p>
          </div>
          <p className="text-center italic text-xs"></p>
      </div>
    </>
  );
}
