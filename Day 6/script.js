/* 
1. Tugas: Kalkulator Sederhana
Deskripsi: Buat aplikasi kalkulator sederhana yang dapat melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian.

Tujuan: Latihan manipulasi DOM, event handling, dan dasar logika JavaScript.
Fitur Utama:
Input untuk dua angka.
Tombol untuk memilih operasi (+, -, *, /).
Menampilkan hasil perhitungan.
Tambahan CSS: Desain tombol dan input agar terlihat menarik.
*/

const count = (operasi) => {
  const num1 = parseFloat(document.getElementById("inpt1").value);
  const num2 = parseFloat(document.getElementById("inpt2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Input yang anda taruh tidak valid !";
  } else {
    switch (operasi) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Tidak dapat membagi dengan 0!";
        break;
      default:
        result = "Operasi tidak valid!";
    }
  }
  document.getElementById("result").textContent = result;
};
