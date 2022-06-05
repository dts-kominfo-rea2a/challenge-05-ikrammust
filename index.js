const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrName, cbLogicSorter) => {
  // create container array
  let arrStringOutput = [];

  // loop to fill the container array
  for(counter = 0; counter < arrName.length; counter++) {
    // fill the container array with callback logic sorter.
    arrStringOutput.push(`${counter+1}. ${cbLogicSorter(arrName)[counter]}`)
  }

  // return a sorter array of string
  return arrStringOutput;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (ascName) => ascName.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (descName) => descName.sort().reverse();

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
