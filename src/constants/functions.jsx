// Format Tanggal Indonesia
export function formatTanggal(date) {
  let waktu = new Date(date);
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

  return `${hari}, ${tgl} ${bulan} ${thn}`;
}

// UCWORD
export function ucword(text) {
  return text[0].toUpperCase() + text.substring(1);
}

// Format Angka
export function angka(number) {
  return number.toLocaleString("id-ID");
}

// Random Number
export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Open Link
export function linkAksesOpen(link) {
  window.open(link);
}