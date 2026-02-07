import AyatHarian from "./grid/AyatHarian";
import JadwalSholat from "./grid/JadwalSholat";
import Pengumuman from "./grid/Pengumuman";

export default function Grid({tanggal, bukapuasa}) {
  return (
    <div className="w-full sm:w-3/12 h-full flex flex-col gap-2 ">
      <div className="flex gap-2">
        <JadwalSholat tanggalhariini={tanggal} />
      </div>
      <Pengumuman tanggal={tanggal} bukapuasa={bukapuasa} />
      {/* <AyatHarian /> */}
    </div>
  );
}


