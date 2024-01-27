// =====================================================================================================
// // OBJECT LITERAL
// let mahasiswa = {
//   nama: "dhea ramdani",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama} Selamat Makan!`);
//   },
// };

// // OBJECT FUNCTION DECLARATION
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama} Selamat Makan!`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.nama} Selamat Bermain!`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Hallo ${this.nama} Selamat Tidur!`);
//   },
// };

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;
//   return mahasiswa;
// }
// let dhea = Mahasiswa("dhea", 10);

// // OBJECT CONSTRUCKTOR FUNCTION
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama} Selamat Makan!`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.nama} Selamat Bermain!`);
//   };
// }
// let dhea = new Mahasiswa("dhea", 10);

// // OBJECT.CREATE()
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama} Selamat Makan!`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.nama} Selamat Bermain!`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Hallo ${this.nama} Selamat Tidur!`);
//   },
// };

// function Mahasiswa(nama, energy) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   return mahasiswa;
// }
// let dhea = Mahasiswa("dhea", 10);

// // PROTOTYPE
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `Hallo ${this.nama} Selamat Makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Hallo ${this.nama} Selamt Bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `Hallo ${this.nama} Selamat Tidur!`;
// };

// let dhea = new Mahasiswa("dhea", 10);

// // VERSI CLASS
// class Mahasiswa {
//   constructor(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//   }
//   makan(porsi) {
//     this.energy += porsi;
//     return `Hallo ${this.nama} Selamat Makan!`;
//   }

//   main(jam) {
//     this.energy -= jam;
//     return `Hallo ${this.nama} Selamt Bermain!`;
//   }

//   tidur(jam) {
//     this.energy += jam * 2;
//     return `Hallo ${this.nama} Selamat Tidur!`;
//   }
// }

// let dhea = new Mahasiswa("dhea", 10);
// let afani = new Mahasiswa("afani", 20);
// =====================================================================================================
