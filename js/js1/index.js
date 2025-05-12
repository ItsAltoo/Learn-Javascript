// tugas 1
// let saldo = prompt('masukkan saldo anda')
// alert(`total saldo anda adalah Rp${saldo}`)

// tugas 2
let date = new Date().getDay();
let jam = new Date().getHours();
let hari;

switch (date) {
  case 0:
    hari = "minggu";
    break;
  case 1:
    hari = "senin";
    break;
  case 2:
    hari = "selasa";
    break;
  case 3:
    hari = "rabu";
    break;
  case 4:
    hari = "kamis";
    break;
  case 5:
    hari = "jumat";
    break;
  case 6:
    hari = "sabtu";
    break;
}

console.log(`hari ini adalah hari ${hari}`);
console.log(`jam sekarang adalah ${jam}`);

