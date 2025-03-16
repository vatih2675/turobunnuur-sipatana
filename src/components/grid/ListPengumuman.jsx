import { formatTanggal } from "../../constants/functions"; 

export default function ListPengumuman({item}) {
  return (
    <div className="flex flex-col px-1 py-1 hover:bg-green-200 hover:shadow transition-color duration-300 rounded-xl">
      <span className="text-[0.6rem] text-gray-600 bg-green-100 rounded-l-full rounded-r-full px-1 w-fit">
        {formatTanggal(item.tanggal)}
      </span>
      <div className="flex gap-1 justify-start items-start">
        <i className="bi-check2-circle"></i>
        <p>{item.isi}</p>
      </div>
    </div>
  );
};
