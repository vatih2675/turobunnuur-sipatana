import { pengumuman } from "../../constants";
import ListPengumuman from "./ListPengumuman";
import BukaPuasa from "./BukaPuasa";
import { formatTanggal } from "../../constants/functions";


export default function Pengumuman({tanggal, bukapuasa}) {
  return (
    <>
      <div className="relative w-6/12 h-full bg-white/80 rounded-2xl shadow-black/30 shadow-lg overflow-hidden transition-all duration-300">
        <h1 className="font-bold text-base sm:text-lg text-center p-1">
          Pengumuman
        </h1>
        <div className="w-full h-full px-1 pb-10 absolute overflow-auto text-xs">
          {bukapuasa.map((bp, index) => formatTanggal(bp.masehi) === tanggal ? (<BukaPuasa key={index} bp={bp} />) : null)}
          {pengumuman.length < 1 ? (<p className="text-center italic text-gray-400">Belum ada pengumuman</p>) : pengumuman.map((item, index) => <ListPengumuman key={index} item={item} />)}
        </div>
      </div>
    </>
  );
};
