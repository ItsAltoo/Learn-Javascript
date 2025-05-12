// Tugas 1:Palindrome Checker

/* function isPalindrome(text) {
  // Ubah huruf besar ke huruf kecil dan hapus semua spasi
  let changeText = text.toLowerCase().replace(/ /g, "");

  // Balikkan string
  let reversedText = changeText.split("").reverse().join("");

  // Bandingkan string asli dengan string yang dibalik
  if (changeText === reversedText) {
    return true;
  } else {
    return false;
  }
}

// contoh penggunaan
let text = prompt("Masukkan kata atau kalimat untuk dicek:");
if (isPalindrome(text)) {
  console.log(text + " adalah palindrome.");
} else {
  console.log(text + " bukan palindrome.");
} */

/* Tugas 2:Menghitung jumlah huruf dalam kalimat */

const search = (kalimat) => {
  let hurufCounter = {};
  let cleanText = kalimat.replace(/\s/g, "");

  for (let huruf of cleanText) {
    huruf = huruf.toLowerCase();
    if (hurufCounter[huruf]) {
      hurufCounter[huruf]++;
    } else {
      hurufCounter[huruf] = 1;
    }
  }
  for (let huruf in hurufCounter) {
    console.log(`${huruf}: ${hurufCounter[huruf]}`);
  }
};

let input = 'Saya suka belajar javascript';
search(input);
