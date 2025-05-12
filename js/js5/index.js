const fs = require("fs");

const data = [
  { nama: "Malik", umur: 18 },
  { nama: "Rizky", umur: 20 },
];
fs.writeFileSync("data.json", JSON.stringify(data));

const readData = fs.readFileSync("data.json", "utf-8");
const parsedData = JSON.parse(readData);

parsedData.map((item) => {
  console.log(`Name: ${item.nama}, Age: ${item.umur}`);
});
