// Sistem Kasir untuk Toko Sederhana dengan Diskon Membership
// Buat sebuah sistem kasir untuk toko yang menghitung total harga pembelian dengan
// mempertimbangkan diskon membership. Tugas ini melibatkan pewarisan, komposisi objek,
// dan penggunaan format uang menggunakan built-in class JavaScript.
// Instruksi Tugas:
// 1.	Class Barang:
// o	Buat class Barang dengan properti:
// 	namaBarang
// 	harga
// o	Metode: getInfoBarang() untuk menampilkan informasi barang.
// 2.	Class Keranjang (Composition):
// o	Buat class Keranjang dengan properti:
// 	daftarBarang (array berisi instance Barang).
// o	Metode:
// 	tambahBarang() untuk menambah barang ke dalam keranjang.
// 	totalHarga() untuk menghitung total harga semua barang dalam keranjang.
// 3.	Class Membership:
// o	Buat class Membership dengan properti:
// 	namaMember
// 	tipeMembership (Gold, Silver, Bronze).
// o	Metode diskonMember() untuk mengembalikan diskon:
// 	Gold: 20%
// 	Silver: 10%
// 	Bronze: 5%
// 4.	Class Transaksi:
// o	Properti:
// 	keranjang (instance dari Keranjang).
// 	member (instance dari Membership).
// o	Metode:
// 	hitungTotalAkhir() untuk menghitung harga akhir dengan diskon membership.
// 	Gunakan Intl.NumberFormat untuk memformat harga dalam Rupiah.
// Contoh Output:
// Member: Budi (Gold)
// Daftar Barang:
// Sepatu: Rp 500000
// Tas: Rp 300000
// Total Akhir: Rp720.000,00

// Class Barang
class Barang {
  constructor(namaBarang, harga) {
    this.namaBarang = namaBarang;
    this.harga = harga;
  }

  getInfoBarang() {
    return `${this.namaBarang}: Rp ${new Intl.NumberFormat("id-ID").format(
      this.harga
    )}`;
  }
}

// Class Keranjang
class Keranjang {
  constructor() {
    this.daftarBarang = [];
  }

  tambahBarang(barang) {
    this.daftarBarang.push(barang);
  }

  totalHarga() {
    return this.daftarBarang.reduce((total, barang) => total + barang.harga, 0);
  }

  getInfoKeranjang() {
    return this.daftarBarang.map((barang) => barang.getInfoBarang()).join("\n");
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
        return 0.2;
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

// Class Transaksi
class Transaksi {
  constructor(keranjang, member) {
    this.keranjang = keranjang;
    this.member = member;
  }

  hitungTotalAkhir() {
    const totalSebelumDiskon = this.keranjang.totalHarga();
    const diskon = totalSebelumDiskon * this.member.diskonMember();
    const totalAkhir = totalSebelumDiskon - diskon;
    return totalAkhir;
  }

  infoTransaksi() {
    const totalAkhirFormatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(this.hitungTotalAkhir());
    return `${this.member.infoMember()} \nDaftar Barang: \n${this.keranjang.getInfoKeranjang()} \nTotal Akhir: ${totalAkhirFormatted}`;
  }
}

// Membuat objek barang
const sepatu = new Barang("Sepatu", 500000);
const tas = new Barang("Tas", 300000);

// Membuat keranjang dan menambahkan barang
const keranjang = new Keranjang();
keranjang.tambahBarang(sepatu);
keranjang.tambahBarang(tas);

// Membuat membership
const member = new Membership("Budi", "Gold");

// Membuat transaksi
const transaksi = new Transaksi(keranjang, member);

// Menampilkan informasi transaksi
console.log(transaksi.infoTransaksi());
