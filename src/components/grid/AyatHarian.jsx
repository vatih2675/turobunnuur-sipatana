import  { React, useState, useEffect } from "react";

export default function AyatHarian() {
  let nomorSurat = Math.ceil(Math.random() * 114);
  let [linkSuratRandom, setLinkSuratRandom] = useState(
    `https://quran-api-id.vercel.app/surah/${nomorSurat}/`,
  );
  let [suratRandom, setSuratRandom] = useState(null);
  let [ayatRandom, setAyatRandom] = useState(null);
  let [arab, setArab] = useState(null);
  let [latin, setLatin] = useState(null);
  let [terjemahan, setTerjemahan] = useState(null);

  useEffect(() => {
    if (linkSuratRandom != null) {
      fetch(linkSuratRandom, {
        method: "GET",
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((dataSuratRandom) => {
          setSuratRandom(dataSuratRandom.data);
        })
        .catch((error) => console.log(error));
    }
  }, [linkSuratRandom]);

  useEffect(() => {
    setInterval(
      () => {
        if (suratRandom != null) {
          const urlAyatRandom =
            linkSuratRandom +
            Math.ceil(Math.random() * suratRandom.numberOfVerses);
          fetch(urlAyatRandom, {
            method: "GET",
            body: JSON.stringify(),
          })
            .then((response) => response.json())
            .then((dataRandom) => {
              setAyatRandom(dataRandom.data);
              setArab(dataRandom.data.text.arab);
              setLatin(dataRandom.data.text.transliteration.en);
              setTerjemahan(dataRandom.data.translation.id);
            })
            .catch((error) => console.log(error));
        }
      },
      1 * 60 * 1000,
    );
  }, [linkSuratRandom, suratRandom, ayatRandom]);

  return (
    <>
      <div className="relative w-full h-full bg-white/80 rounded-2xl shadow-black/30 shadow-lg overflow-auto p-2 flex flex-col justify-between items-center transition-all duration-300">
        <h1 className="font-bold text-base sm:text-lg text-center p-1">
          Ayat Harian
        </h1>
        <div className="flex flex-col sm:gap-2 gap-2 sm:px-4">
          <p className="text-center text-xl sm:text-2xl">{arab}</p>
          <p className="text-center text-xs italic text-gray-600   sm:text-sm">
            {latin}
          </p>
          <p className="text-center text-xs sm:text-sm">{terjemahan}</p>
        </div>
        <p className="text-center italic text-xs"></p>
      </div>
    </>
  );
}
