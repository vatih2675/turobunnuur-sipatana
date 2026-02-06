import  { React, useState, useEffect } from "react";

export default function AyatHarian() {
  let [suratRandom, setSuratRandom] = useState(null);
  let [nomorSurat, setNomorSurat] = useState(null);
  let [namaSurat, setNamaSurat] = useState(null);
  let [jumlahAyat, setJumlahAyat] = useState(null);
  let [ayatRandom, setAyatRandom] = useState(null);
  let [nomorAyat, setNomorAyat] = useState(null);
  let [arab, setArab] = useState(null);
  let [latin, setLatin] = useState(null);
  let [terjemahan, setTerjemahan] = useState(null);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); // Ensure min is treated as an integer
    max = Math.floor(max); // Ensure max is treated as an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setInterval(
      () => {
        let noSurat = getRandomIntInclusive(1, 114);
        let linkSuratRandom = `https://quran-api-id.vercel.app/surah/${noSurat}/`;
        fetch(linkSuratRandom, {
          method: "GET",
          body: JSON.stringify(),
        })
          .then((response) => response.json())
          .then((dataSuratRandom) => {
            setSuratRandom(dataSuratRandom.data);
            setNomorSurat(dataSuratRandom.data.number);
            setJumlahAyat(dataSuratRandom.data.numberOfVerses);
            setNamaSurat(dataSuratRandom.data.name.transliteration.id);
          })
          .catch((error) => console.log(error));

        if (suratRandom != null) {
          let noAyat = getRandomIntInclusive(1, jumlahAyat);
          let linkAyatRandom = linkSuratRandom + noAyat;

          fetch(linkAyatRandom, {
            method: "GET",
            body: JSON.stringify(),
          })
            .then((response) => response.json())
            .then((dataRandom) => {
              setAyatRandom(dataRandom.data);
              setNomorAyat(noAyat);
              setArab(dataRandom.data.text.arab);
              setLatin(dataRandom.data.text.transliteration.en);
              setTerjemahan(dataRandom.data.translation.id);
            })
            .catch((error) => console.log(error));
        }
      },
      1 * 60 * 1000,
    );
  }, [suratRandom, jumlahAyat, ayatRandom]);

  // console.log(namaSurat, nomorSurat, nomorAyat);

  return (
    <>
      <div className="relative w-full h-full bg-white/80 rounded-2xl shadow-black/30 shadow-lg overflow-auto p-2 flex flex-col justify-between items-center transition-all duration-300">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-base sm:text-lg text-center p-1">
            Ayat Harian
          </h1>
          <p className="text-sm">
            {nomorAyat ? namaSurat + " " + nomorSurat + ":" + nomorAyat : ""}
          </p>
        </div>
        <div className="flex flex-col sm:gap-2 gap-2 sm:px-4">
          <p className="text-center text-xl sm:text-2xl">
            {nomorAyat ? arab : ""}
          </p>
          <p className="text-center text-xs italic text-gray-600   sm:text-sm">
            {nomorAyat ? latin : ""}
          </p>
          <p className="text-center text-xs sm:text-sm">
            {nomorAyat ? terjemahan : ""}
          </p>
        </div>
        <p className="text-center italic text-xs"></p>
      </div>
    </>
  );
}
