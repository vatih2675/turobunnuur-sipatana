import { formatTanggal } from "../../constants/functions"; 

export default function BukaPuasa({bp}) {
  return (
    <div className="flex flex-col px-1 py-1 hover:bg-green-200 hover:shadow transition-color duration-300 rounded-xl">
      <span className="text-[0.6rem] text-gray-600 bg-green-100 rounded-l-full rounded-r-full px-1 w-fit">
        {formatTanggal(bp.masehi)}
      </span>
      <div className="flex gap-1 justify-start items-start">
        <i className="bi-check2-circle"></i>
        <div className="flex flex-col justify-start items-start">
          <p>Pelaksana buka puasa hari ini</p>
          <p>{bp.hijriyah < 10 ? '0' + bp.hijriyah : bp.hijriyah} Ramadhan 1445 H</p>
          <p className="font-black">{bp.nama}</p>
        </div>
      </div>
    </div>
  );
};
