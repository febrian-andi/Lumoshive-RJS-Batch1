// Sistem Rental Kendaraan dengan Membership dan Diskon Sederhana
// Buat sebuah sistem rental kendaraan sederhana yang menggabungkan inheritance, object composition,
// dan class bawaan JavaScript.
// Instruksi Tugas:
// 1.	Class Utama:
// o	Buat class Kendaraan dengan properti:
// 	merek
// 	model
// 	tahun
// o	Metode:
// 	infoKendaraan() untuk menampilkan informasi kendaraan.
// 2.	Inheritance:
// o	Buat dua class turunan dari Kendaraan:
// 	Class Mobil dengan properti tambahan kapasitasPenumpang.
// 	Class Motor dengan properti tambahan jenisMotor.
// 3.	Object Composition:
// o	Buat class Mesin dengan properti:
// 	jenis (contoh: Bensin, Diesel).
// 	tenagaKuda (contoh: 100 HP).
// o	Gunakan komposisi dengan menambahkan objek Mesin ke dalam setiap instance Mobil dan Motor.
// 4.	Class Membership:
// o	Buat class Membership dengan properti:
// 	namaMember
// 	tipeMembership (Gold, Silver, atau Bronze).
// o	Metode diskonMember() untuk mengembalikan diskon:
// 	Gold: 15%
// 	Silver: 10%
// 	Bronze: 5%
// 5.	Class Rental:
// o	Properti:
// 	kendaraan (instance dari Mobil atau Motor).
// 	member (instance dari Membership).
// 	tanggalRental (gunakan Date).
// 	lamaHari (ditentukan langsung saat rental dibuat).
// o	Metode hitungTotal():
// 	Tarif harian:
// 	Mobil: Rp 100.000/hari.
// 	Motor: Rp 50.000/hari.
// 	Hitung total harga berdasarkan hari dan diskon membership.
// 6.	Built-in Class:
// o	Gunakan Date untuk menampilkan tanggal rental.
// Contoh Output:
// Kendaraan: Toyota Avanza, Tahun: 2021
// Jenis Mesin: Bensin, Tenaga: 120 HP
// Member: Siti (Silver)
// Tanggal Rental: Kamis, 24 Oktober 2024
// Lama Rental: 3 hari
// Total Harga: Rp 270000

// Class Kendaraan
class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `Kendaraan: ${this.merek} ${this.model}, Tahun: ${this.tahun}`;
  }
}

// Class Mesin
class Mesin {
  constructor(jenis, tenagaKuda) {
    this.jenis = jenis;
    this.tenagaKuda = tenagaKuda;
  }

  infoMesin() {
    return `Jenis Mesin: ${this.jenis}, Tenaga: ${this.tenagaKuda} HP`;
  }
}

// Class Mobil
class Mobil extends Kendaraan {
  constructor(merek, model, tahun, kapasitasPenumpang, mesin) {
    super(merek, model, tahun);
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.mesin = mesin;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, Kapasitas Penumpang: ${
      this.kapasitasPenumpang
    }, ${this.mesin.infoMesin()}`;
  }
}

// Class Motor
class Motor extends Kendaraan {
  constructor(merek, model, tahun, jenisMotor, mesin) {
    super(merek, model, tahun);
    this.jenisMotor = jenisMotor;
    this.mesin = mesin;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, Jenis Motor: ${
      this.jenisMotor
    }, ${this.mesin.infoMesin()}`;
  }
}

// Class Membership
class Membership {
  constructor(namaMember, tipeMembership) {
    this.namaMember = namaMember;
    this.tipeMembership = tipeMembership;
  }

  diskonMember() {
    switch (this.tipeMembership) {
      case "Gold":
        return 0.15;
      case "Silver":
        return 0.1;
      case "Bronze":
        return 0.05;
      default:
        return 0;
    }
  }

  infoMember() {
    return `Member: ${this.namaMember} (${this.tipeMembership})`;
  }
}

// Class Rental
class Rental {
  constructor(kendaraan, member, lamaHari) {
    this.kendaraan = kendaraan;
    this.member = member;
    this.tanggalRental = new Date();
    this.lamaHari = lamaHari;
  }

  hitungTotal() {
    let tarifHarian = 0;
    if (this.kendaraan instanceof Mobil) {
      tarifHarian = 100000;
    } else if (this.kendaraan instanceof Motor) {
      tarifHarian = 50000;
    }

    const hargaSebelumDiskon = tarifHarian * this.lamaHari;
    const diskon = hargaSebelumDiskon * this.member.diskonMember();
    const totalHarga = hargaSebelumDiskon - diskon;

    return totalHarga;
  }

  infoRental() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const tanggalRental = this.tanggalRental.toLocaleDateString(
      "id-ID",
      options
    );
    return `
        ${this.kendaraan.infoKendaraan()}
        ${this.member.infoMember()}
        Tanggal Rental: ${tanggalRental}
        Lama Rental: ${this.lamaHari} hari
        Total Harga: Rp ${this.hitungTotal()}
      `;
  }
}

// Membuat objek Mesin
const mesinMobil = new Mesin("Bensin", 120);
const mesinMotor = new Mesin("Bensin", 100);

// Membuat objek Mobil dan Motor
const mobil = new Mobil("Toyota", "Avanza", 2021, 7, mesinMobil);
const motor = new Motor("Yamaha", "Nmax", 2020, "Skuter", mesinMotor);

// Membuat objek Membership
const member = new Membership("Siti", "Silver");

// Membuat objek Rental
const rentalMobil = new Rental(mobil, member, 3);
const rentalMotor = new Rental(motor, member, 2);

// Menampilkan informasi rental
console.log(rentalMobil.infoRental());
console.log(rentalMotor.infoRental());
