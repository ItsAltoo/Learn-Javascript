let isiBelanjaan = [];

while (true) {
  console.log("~~~~~~~~~~~Pilih Belanjaan Anda~~~~~~~~~~~~");
  console.log("1.Keyboard           5.Mouse Pad");
  console.log("2.Monitor            6.Ram");
  console.log("3.Mouse              7.Cek Belanjaan");
  console.log("4.Laptop             8.Keluar");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  let pilih = prompt("Pilih Pilihan anda 1-8 :");

  if (pilih == "1") {
    let pilih = "Keyboard";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}'`);
  } else if (pilih == "2") {
    let pilih = "Monitor";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}'`);
  } else if (pilih == "3") {
    let pilih = "Mouse";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}' `);
  } else if (pilih == "4") {
    let pilih = "Laptop";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}'`);
  } else if (pilih == "5") {
    let pilih = "Mouse Pad";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}' `);
  } else if (pilih == "6") {
    let pilih = "Ram";
    isiBelanjaan.append(pilih);
    console.log("=======================================================");
    console.log(`Anda Telah Memilih : '${pilih}' `);
  } else if (pilih == "7") {
    let loop = true;
    while (loop) {
      console.log("\n==================Daftar Belanjaan====================");
      for (let i = 0; i < isiBelanjaan.length; i++) {
        console.log(`${i + 1}. ${isiBelanjaan[i]}`);
      }

      console.log("=======================================================");

      console.log("Ketik 'y/n' untuk keluar atau tidak");
      let exit = prompt("Exit? :");

      if (exit == "y") {
        break;
      } else if (exit == "n") {
        console.log("=======================================================");
        console.log("Exit dibatalkan, ketik y/n untuk memilih exit");
      } else {
        console.log("=======================================================");
        console.log("Masukkan input yang benar");
      }
    }
  } else if (pilih == "8") {
    console.log("=================Terima Kasih Telah Mencoba=================");
    break;
  } else {
    console.log("=======================================================");
    console.log("Tolong masukkan pilihan 1-8");
  }
}
