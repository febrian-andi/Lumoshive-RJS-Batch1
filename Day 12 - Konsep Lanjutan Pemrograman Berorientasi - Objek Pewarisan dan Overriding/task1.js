// Sistem Pengelolaan Kendaraan Transportasi Umum
// Buatlah sistem pengelolaan kendaraan transportasi umum yang mendukung beberapa jenis kendaraan
// seperti Bus, Taksi, dan Angkutan Kota (Angkot). Setiap kendaraan memiliki tarif berbeda dan
// cara perhitungan biaya yang unik:
// 1.	Bus:
// a.	Tarif per kilometer adalah Rp 2.000.
// b.	Memberikan diskon 15% jika jarak perjalanan lebih dari 50 km.
// 2.	Taksi:
// a.	Tarif dasar adalah Rp 10.000 (fixed charge).
// b.	Tarif per kilometer adalah Rp 3.500.
// c.	Biaya perjalanan dihitung dengan menambahkan tarif dasar ke total biaya perjalanan.
// 3.	Angkot:
// a.	Tarif tetap sebesar Rp 5.000 per perjalanan tanpa memperhitungkan jarak.
// Tugas:
// •	Buat class Transport sebagai class induk dengan method calculateFare(distance)
// untuk menghitung biaya perjalanan.
// •	Buat subclass Bus, Taksi, dan Angkot yang mewarisi class Transport,
// masing-masing dengan logika perhitungan biaya spesifik.
// •	Buat array berisi instance dari ketiga jenis kendaraan dan
// buat loop untuk menghitung serta menampilkan biaya perjalanan masing-masing untuk jarak 30 km dan 70 km.

class Transport {
  calculateFare(distance) {
    return 0;
  }
}

class Bus extends Transport {
  calculateFare(distance) {
    let fare = distance * 2000;
    if (distance > 50) {
      fare *= 0.85;
    }
    return fare;
  }
}

class Taxi extends Transport {
  calculateFare(distance) {
    const baseFare = 10000;
    const fare = baseFare + distance * 3500;
    return fare;
  }
}

class Angkot extends Transport {
  calculateFare() {
    return 5000;
  }
}

const vehicles = [new Bus(), new Taxi(), new Angkot()];

const distances = [30, 70];
const results = distances.map((distance) => {
  return vehicles.map((vehicle) => {
    console.log(
      `Fare for ${vehicle.constructor.name} for ${distance} km: Rp ${vehicle.calculateFare(distance)}`
    );
  });
});
