// Sistem Dompet Digital untuk Pembayaran Online
// Buat sebuah sistem dompet digital yang dapat digunakan untuk transaksi pembayaran dengan
// fitur seperti top-up saldo dan pengurangan saldo. Sistem ini menggabungkan konsep inheritance,
// object composition, dan built-in class untuk memformat uang dan mencatat waktu transaksi.
// Instruksi Tugas:
// 1.	Class Dompet:
// o	Buat class Dompet dengan properti:
// 	saldo (berisi jumlah saldo awal, misal Rp 500.000).
// o	Metode:
// 	topUp(nominal) untuk menambah saldo.
// 	bayar(nominal) untuk mengurangi saldo (jika saldo mencukupi).
// 	cekSaldo() untuk menampilkan saldo saat ini dalam format Rupiah (gunakan Intl.NumberFormat).
// 2.	Class Transaksi (Composition):
// o	Buat class Transaksi dengan properti:
// 	dompet (instance dari Dompet).
// 	nominal (jumlah uang yang dibayar).
// 	jenisTransaksi (Top-up atau Pembayaran).
// 	tanggalTransaksi (gunakan class Date untuk mencatat waktu transaksi).
// o	Metode infoTransaksi() untuk menampilkan informasi transaksi.
// 3.	Inheritance:
// o	Buat class DompetPremium yang mewarisi dari Dompet dengan fitur tambahan:
// 	Setiap top-up mendapatkan bonus 5% dari nominal top-up.
// Contoh Output
// Saldo saat ini: Rp500.000,00
// Top-up Rp 100000 berhasil!
// Bonus Rp 5000 diterima!
// Saldo saat ini: Rp605.000,00
// Pembayaran Rp 200000 berhasil!
// Saldo saat ini: Rp405.000,00
// Pembayaran Rp 200000 pada Rabu, 23 Oktober 2024 pukul 03.00

// Class Dompet
class Dompet {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  topUp(nominal) {
    this.saldo += nominal;
    console.log(
      `Top-up Rp ${new Intl.NumberFormat("id-ID").format(nominal)} berhasil!`
    );
  }

  bayar(nominal) {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      console.log(
        `Pembayaran Rp ${new Intl.NumberFormat("id-ID").format(
          nominal
        )} berhasil!`
      );
    } else {
      console.log("Saldo tidak mencukupi!");
    }
  }

  cekSaldo() {
    console.log(
      `Saldo saat ini: Rp ${new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.saldo)}`
    );
  }
}

// Class Transaksi
class Transaksi {
  constructor(dompet, nominal, jenisTransaksi) {
    this.dompet = dompet;
    this.nominal = nominal;
    this.jenisTransaksi = jenisTransaksi;
    this.tanggalTransaksi = new Date();
  }

  infoTransaksi() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const tanggal = this.tanggalTransaksi.toLocaleDateString("id-ID", options);
    console.log(
      `Pembayaran Rp ${new Intl.NumberFormat("id-ID").format(
        this.nominal
      )} pada ${tanggal}`
    );
  }
}

// Class DompetPremium
class DompetPremium extends Dompet {
  topUp(nominal) {
    const bonus = nominal * 0.05;
    super.topUp(nominal + bonus);
    console.log(
      `Bonus Rp ${new Intl.NumberFormat("id-ID").format(bonus)} diterima!`
    );
  }
}

// Membuat instance DompetPremium dengan saldo awal
const dompetPremium = new DompetPremium(500000);

// Cek saldo awal
dompetPremium.cekSaldo();

// Top-up saldo
dompetPremium.topUp(100000);

// Cek saldo setelah top-up
dompetPremium.cekSaldo();

// Melakukan pembayaran
dompetPremium.bayar(200000);

// Cek saldo setelah pembayaran
dompetPremium.cekSaldo();

// Membuat dan menampilkan transaksi
const transaksi = new Transaksi(dompetPremium, 200000, "Pembayaran");
transaksi.infoTransaksi();
