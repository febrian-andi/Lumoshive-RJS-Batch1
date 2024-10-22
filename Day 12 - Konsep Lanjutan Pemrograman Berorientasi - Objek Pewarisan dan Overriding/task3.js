// Sistem Inventarisasi Toko Elektronik
// Buat sistem inventarisasi toko elektronik dengan beberapa jenis produk seperti
// Laptop, Smartphone, dan Tablet, di mana setiap produk memiliki cara berbeda dalam menentukan garansi dan harga jual:
// 1.	Laptop:
// a.	Garansi: 2 tahun.
// b.	Harga jual ditambahkan biaya pajak 10%.
// 2.	Smartphone:
// a.	Garansi: 1 tahun.
// b.	Mendapat diskon 5% jika dibeli lebih dari 1 unit.
// 3.	Tablet:
// a.	Garansi: 6 bulan.
// b.	Harga jual tetap tanpa pajak atau diskon.
// Tugas:
// •	Buat class Product sebagai class induk dengan method calculatePrice(quantity, basePrice)
// untuk menghitung harga total.
// •	Buat subclass Laptop, Smartphone, dan Tablet dengan logika berbeda untuk perhitungan harga dan garansi.
// •	Tampilkan informasi produk dan harga total untuk setiap jenis produk dalam array.

class Product {
  constructor(waranty) {
    this.waranty = waranty;
  }
  calculatePrice(quantity, basePrice) {
    return 0;
  }

  getWarranty() {
    return this.waranty;
  }
}

class Laptop extends Product {
  constructor() {
    super("2 years");
  }
  calculatePrice(quantity, basePrice) {
    return quantity * basePrice * 1.1;
  }
}

class Smartphone extends Product {
  constructor() {
    super("1 years");
  }
  calculatePrice(quantity, basePrice) {
    let totalPrice = quantity * basePrice;
    if (quantity > 1) {
      totalPrice *= 0.95;
    }
    return totalPrice;
  }
}

class Tablet extends Product {
  constructor() {
    super("6 months");
  }
  calculatePrice(quantity, basePrice) {
    return quantity * basePrice;
  }
}

const products = [
  { product: new Laptop(), quantity: 2, basePrice: 15000000 },
  { product: new Smartphone(), quantity: 3, basePrice: 7000000 },
  { product: new Tablet(), quantity: 1, basePrice: 5000000 },
];

const productPrices = products.map(({ product, quantity, basePrice }) => {
  console.log(
    `${
      product.constructor.name
    } (${product.getWarranty()} warranty) total price for ${quantity} unit(s): Rp ${product.calculatePrice(
      quantity,
      basePrice
    )}`
  );
});
