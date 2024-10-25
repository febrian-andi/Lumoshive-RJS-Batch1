// Sistem Pengelolaan Reservasi Hotel
// Buat sistem reservasi hotel dengan beberapa tipe kamar,
// yaitu Standard Room, Deluxe Room, dan Suite Room, dengan aturan berikut:
// 1.	Standard Room:
// a.	Harga per malam: Rp 500.000.
// b.	Tidak ada fasilitas tambahan.
// 2.	Deluxe Room:
// a.	Harga per malam: Rp 1.000.000.
// b.	Termasuk sarapan gratis.
// 3.	Suite Room:
// a.	Harga per malam: Rp 2.000.000.
// b.	Memberikan diskon 10% jika menginap lebih dari 3 malam
// dan termasuk akses kolam renang gratis.
// Tugas:
// •	Buat class Room sebagai class induk dengan method calculateTotalPrice(nights) untuk menghitung total harga.
// •	Buat subclass StandardRoom, DeluxeRoom, dan SuiteRoom yang mewarisi class Room
// dan menerapkan logika spesifik sesuai tipe kamar.
// •	Buat array berisi beberapa contoh pemesanan kamar
// dan tampilkan total harga masing-masing untuk 2 dan 5 malam.

class Room {
  calculateTotalPrice(nights) {
    return 0;
  }
}

class StandardRoom extends Room {
  calculateTotalPrice(nights) {
    return nights * 500000;
  }
}

class DeluxeRoom extends Room {
  calculateTotalPrice(nights) {
    return nights * 1000000;
  }
}

class SuiteRoom extends Room {
  calculateTotalPrice(nights) {
    let total = nights * 2000000;
    if (nights > 3) {
      total *= 0.9;
    }
    return total;
  }
}

const rooms = [new StandardRoom(), new DeluxeRoom(), new SuiteRoom()];

const stayDurations = [2, 5];
const roomPrices = stayDurations.map((nights) =>
  rooms.map((room) => {
    console.log(
      `Total price for ${room.constructor.name} for ${nights} nights: Rp ${room.calculateTotalPrice(nights)}`
    );
  })
);
