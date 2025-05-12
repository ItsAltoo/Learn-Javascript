// tugas 2
// menghitung total gaji yang di dapat dalam 1 bulan denga input minimal:
// nama karyawan,gaji perhari,jumlah masuk kerja
function nama(nama, gaji, kerja, bulan) {
  return {
    "nama karyawan": nama,
    "gaji perhari": gaji,
    "total kerja perminggu": kerja,
    "total kerja perbulan": bulan,
    "total gaji perbulan": gaji * kerja * bulan
  };
}

let root = document.getElementById("root");
let karyawan1 = nama("budi", 10000, 6, 30);
let karyawan2 = nama("andi", 20000, 5, 30);
let karyawan3 = nama("sari", 30000, 4, 30);

for (let i = 0; i < 3; i++) {
  let karyawan = eval(`karyawan${i + 1}`);
  root.innerHTML += `
    <h1>Data Karyawan</h1>
    <p>Nama Karyawan: ${karyawan["nama karyawan"]}</p>
    <p>Gaji Perhari: ${karyawan["gaji perhari"]}</p>
    <p>Total Kerja Perminggu: ${karyawan["total kerja perminggu"]}</p>
    <p>Total Gaji Perbulan: ${karyawan["total gaji perbulan"]}</p>
  `;
}